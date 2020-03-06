import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import isEqual from 'lodash/isEqual';
import keyBy from 'lodash/keyBy';
import 'chartjs-plugin-datalabels';


const NODE_ENV = (typeof process !== 'undefined') && process.env && process.env.NODE_ENV;

class ChartComponent extends React.Component {
  constructor() {
    super();
    this.chartInstance = undefined;
  }

  static getLabelAsKey = d => d.label;

  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func
    ]).isRequired,
    getDatasetAtEvent: PropTypes.func,
    getElementAtEvent: PropTypes.func,
    getElementsAtEvent: PropTypes.func,
    height: PropTypes.number,
    legend: PropTypes.object,
    onElementsClick: PropTypes.func,
    options: PropTypes.object, 
    plugins: PropTypes.arrayOf(PropTypes.object), 
    redraw: PropTypes.bool,
    type: function(props, propName, componentName) {
      if(!Chart.controllers[props[propName]]) {
        return new Error(
          'Invalid chart type `' + props[propName] + '` supplied to' +
          ' `' + componentName + '`.'
        );
      }
    },
    width: PropTypes.number,
    datasetKeyProvider: PropTypes.func
  }

  static defaultProps = {
    legend: {
      display: true,
      position: 'bottom'
    },
    type: 'doughnut',
    height: 150,
    width: 300,
    redraw: false,
    options: {},
    datasetKeyProvider: ChartComponent.getLabelAsKey
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    if (this.props.redraw) {
      this.destroyChart();
      this.renderChart();
      return;
    }

    this.updateChart();
  }

  shouldComponentUpdate(nextProps) {
    const {
      type,
      options,
      plugins,
      legend,
      height,
      width
    } = this.props;

    if (nextProps.redraw === true) {
      return true;
    }

    if (height !== nextProps.height || width !== nextProps.width) {
      return true;
    }

    if (type !== nextProps.type) {
      return true;
    }

    if (!isEqual(legend, nextProps.legend)) {
      return true;
    }

    if (!isEqual(options, nextProps.options)) {
      return true;
    }

    const nextData = this.transformDataProp(nextProps);

    if( !isEqual(this.shadowDataProp, nextData)) {
      return true;
    }

    return !isEqual(plugins, nextProps.plugins);

  }

  componentWillUnmount() {
    this.destroyChart();
  }

  transformDataProp(props) {
    const { data } = props;
    if (typeof(data) == 'function') {
      const node = this.element;
      return data(node);
    } else {
      return data;
    }
  }

  // Chart.js directly mutates the data.dataset objects by adding _meta proprerty
  // this makes impossible to compare the current and next data changes
  // therefore we memoize the data prop while sending a fake to Chart.js for mutation.
  // see https://github.com/chartjs/Chart.js/blob/master/src/core/core.controller.js#L615-L617
  memoizeDataProps() {
    if (!this.props.data) {
      return;
    }

    const data = this.transformDataProp(this.props);

    this.shadowDataProp = {
      ...data,
      datasets: data.datasets && data.datasets.map(set => {
        return {
            ...set
        };
      })
    };

    this.saveCurrentDatasets(); // to remove the dataset metadata from this chart when the chart is destroyed

    return data;
  }

  checkDatasets(datasets) {
    const isDev = NODE_ENV !== 'production' && NODE_ENV !== 'prod';
    const usingCustomKeyProvider = this.props.datasetKeyProvider !== ChartComponent.getLabelAsKey;
    const multipleDatasets = datasets.length > 1;

    if (isDev && multipleDatasets && !usingCustomKeyProvider) {
      let shouldWarn = false;
      datasets.forEach((dataset) => {
        if (!dataset.label) {
          shouldWarn = true;
        }
      });

      if (shouldWarn) {
        console.error('[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.');
      }
    }
  }

  getCurrentDatasets() {
    return (this.chartInstance && this.chartInstance.config.data && this.chartInstance.config.data.datasets) || [];
  }

  saveCurrentDatasets() {
    this.datasets = this.datasets || {};
    var currentDatasets = this.getCurrentDatasets();
    currentDatasets.forEach(d => {
      this.datasets[this.props.datasetKeyProvider(d)] = d;
    });
  }

  updateChart() {
    const {options} = this.props;

    const data = this.memoizeDataProps(this.props);

    if (!this.chartInstance) return;

    if (options) {
      this.chartInstance.options = Chart.helpers.configMerge(this.chartInstance.options, options);
    }

    // Pipe datasets to chart instance datasets enabling
    // seamless transitions
    let currentDatasets = this.getCurrentDatasets();
    const nextDatasets = data.datasets || [];
    this.checkDatasets(currentDatasets);

    const currentDatasetsIndexed = keyBy(
      currentDatasets,
      this.props.datasetKeyProvider
    );



    const { datasets, ...rest } = data;

    this.chartInstance.config.data = {
      ...this.chartInstance.config.data,
      ...rest
    };

    this.chartInstance.update();
  }

  renderChart() {
    const {options, legend, type, plugins} = this.props;
    const node = this.element;
    const data = this.memoizeDataProps();

    if(typeof legend !== 'undefined' && !isEqual(ChartComponent.defaultProps.legend, legend)) {
      options.legend = legend;
    }

    this.chartInstance = new Chart(node, {
      type,
      data,
      options,
      plugins
    });
  }



  handleOnClick = (event) => {
    const instance = this.chartInstance;

    const {
      getDatasetAtEvent,
      getElementAtEvent,
      getElementsAtEvent,
      onElementsClick
    } = this.props;

    getDatasetAtEvent && getDatasetAtEvent(instance.getDatasetAtEvent(event), event);
    getElementAtEvent && getElementAtEvent(instance.getElementAtEvent(event), event);
    getElementsAtEvent && getElementsAtEvent(instance.getElementsAtEvent(event), event);
    onElementsClick && onElementsClick(instance.getElementsAtEvent(event), event); // Backward compatibility
  }

  ref = (element) => {
    this.element = element;
  }

  render() {
    const {height, width, id} = this.props;

    return (
      <canvas
        ref={this.ref}
        height={height}
        width={width}
        id={id}
        onClick={this.handleOnClick}
      />
    );
  }
}

export default ChartComponent;

export class Doughnut extends React.Component {
  render() {
    return (
      <ChartComponent
        {...this.props}
        ref={ref => this.chartInstance = ref && ref.chartInstance}
        type='doughnut'
      />
    );
  }
}

export const defaults = Chart.defaults;
export {Chart};
