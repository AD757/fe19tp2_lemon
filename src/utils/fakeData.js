const milk = [
    {
      "food_description": "Per 100g - Calories: 60kcal | Fat: 3.25g | Carbs: 4.52g | Protein: 3.22g",
      "food_id": "794",
      "food_name": "Whole Milk",
      "food_type": "Generic",
      "food_url": "https://www.fatsecret.com/calories-nutrition/generic/milk-cows-fluid-whole"
    },
    {
      "food_description": "Per 100g - Calories: 50kcal | Fat: 1.97g | Carbs: 4.68g | Protein: 3.30g",
      "food_id": "800",
      "food_name": "2% Fat Milk",
      "food_type": "Generic",
      "food_url": "https://www.fatsecret.com/calories-nutrition/generic/milk-cows-fluid-2%25-fat"
    },
    {
      "food_description": "Per 100g - Calories: 42kcal | Fat: 0.97g | Carbs: 4.99g | Protein: 3.37g",
      "food_id": "803",
      "food_name": "1% Fat Milk",
      "food_type": "Generic",
      "food_url": "https://www.fatsecret.com/calories-nutrition/generic/milk-cows-fluid-1%25-fat"
    },
    {
      "food_description": "Per 100g - Calories: 34kcal | Fat: 0.08g | Carbs: 4.96g | Protein: 3.37g",
      "food_id": "804",
      "food_name": "Skim or Nonfat Milk (0.5% or Less Butterfat)",
      "food_type": "Generic",
      "food_url": "https://www.fatsecret.com/calories-nutrition/generic/milk-cows-fluid-skim-or-nonfat-05%25-or-less-butterfat"
    },
    {
      "food_description": "Per 100g - Calories: 50kcal | Fat: 2.00g | Carbs: 4.71g | Protein: 3.29g",
      "food_id": "793",
      "food_name": "Milk",
      "food_type": "Generic",
      "food_url": "https://www.fatsecret.com/calories-nutrition/generic/milk"
    },
    {
      "food_description": "Per 100g - Calories: 35kcal | Fat: 0.18g | Carbs: 4.85g | Protein: 3.41g",
      "food_id": "33820",
      "food_name": "Milk (Nonfat)",
      "food_type": "Generic",
      "food_url": "https://www.fatsecret.com/calories-nutrition/usda/milk-(nonfat)"
    },
    {
      "brand_name": "Kroger",
      "food_description": "Per 8 fl oz - Calories: 150kcal | Fat: 8.00g | Carbs: 12.00g | Protein: 8.00g",
      "food_id": "42046",
      "food_name": "Vitamin D Whole Milk",
      "food_type": "Brand",
      "food_url": "https://www.fatsecret.com/calories-nutrition/kroger/vitamin-d-whole-milk"
    },
    {
      "brand_name": "Oak Farms",
      "food_description": "Per 1 cup - Calories: 150kcal | Fat: 8.00g | Carbs: 12.00g | Protein: 8.00g",
      "food_id": "64111",
      "food_name": "Vitamin D Milk",
      "food_type": "Brand",
      "food_url": "https://www.fatsecret.com/calories-nutrition/oak-farms/vitamin-d-milk"
    },
    {
      "brand_name": "Fastco",
      "food_description": "Per 1 cup - Calories: 100kcal | Fat: 2.50g | Carbs: 12.00g | Protein: 9.00g",
      "food_id": "81796",
      "food_name": "1% Lowfat Milk",
      "food_type": "Brand",
      "food_url": "https://www.fatsecret.com/calories-nutrition/fastco/1%25-lowfat-milk"
    },
    {
      "brand_name": "Southern Home",
      "food_description": "Per 1 cup - Calories: 130kcal | Fat: 5.00g | Carbs: 12.00g | Protein: 8.00g",
      "food_id": "86784",
      "food_name": "2% Reduced Fat Milk",
      "food_type": "Brand",
      "food_url": "https://www.fatsecret.com/calories-nutrition/southern-home/2%25-reduced-fat-milk"
    }
  ];

  export const buildObject = () => {
      
      const results = milk.map(item => {
        const protein = item.food_description.substring(item.food_description.length-5, item.food_description.length-1)
          return ( {[item.food_name]: protein} );
      })
      return Object.assign({}, ...results);

  }
//console.log(buildObject());
// {"2% Reduced Fat Milk": 8.00, "1% Lowfat Milk": 9.00, "Vitamin D Milk": 8.50}
