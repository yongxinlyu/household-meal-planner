export type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
  category: "Produce" | "Meat" | "Pantry" | "Dairy" | "Frozen" | "Other";
};

export type Meal = {
  id: string;
  name: string;
  defaultCook: "You" | "Partner" | "Either";
  defaultServings: number;
  tags: string[];
  ingredients: Ingredient[];
};

export const meals: Meal[] = [
  {
    id: "chicken-curry",
    name: "Chicken Curry",
    defaultCook: "Partner",
    defaultServings: 4,
    tags: ["Dinner", "Comfort food"],
    ingredients: [
      { name: "Chicken thigh", quantity: 600, unit: "g", category: "Meat" },
      { name: "Onion", quantity: 1, unit: "", category: "Produce" },
      { name: "Coconut milk", quantity: 1, unit: "can", category: "Pantry" },
      { name: "Curry paste", quantity: 2, unit: "tbsp", category: "Pantry" },
    ],
  },
  {
    id: "tuna-salad",
    name: "Tuna Salad",
    defaultCook: "You",
    defaultServings: 2,
    tags: ["Lunch", "Quick"],
    ingredients: [
      { name: "Tuna", quantity: 1, unit: "can", category: "Pantry" },
      { name: "Lettuce", quantity: 1, unit: "head", category: "Produce" },
      { name: "Cherry tomatoes", quantity: 250, unit: "g", category: "Produce" },
      { name: "Cucumber", quantity: 1, unit: "", category: "Produce" },
    ],
  },
  {
    id: "tomato-pasta",
    name: "Tomato Pasta",
    defaultCook: "Either",
    defaultServings: 3,
    tags: ["Dinner", "Vegetarian"],
    ingredients: [
      { name: "Pasta", quantity: 500, unit: "g", category: "Pantry" },
      { name: "Tomato passata", quantity: 1, unit: "jar", category: "Pantry" },
      { name: "Garlic", quantity: 3, unit: "cloves", category: "Produce" },
      { name: "Parmesan", quantity: 80, unit: "g", category: "Dairy" },
    ],
  },
];