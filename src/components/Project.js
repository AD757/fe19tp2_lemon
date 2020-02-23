import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>My Home</Tab>
          <Tab>Messages</Tab>
          <Tab>Profile</Tab>
          <Tab>Settings</Tab>
        </Tabs>
      </div>
    );
  }
}

export default Project;
