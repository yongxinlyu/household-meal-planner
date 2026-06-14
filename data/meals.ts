export type IngredientCategory =
  | "Produce"
  | "Meat"
  | "Pantry"
  | "Dairy"
  | "Frozen"
  | "Other";

export type Cook = "Yongxin" | "Sa";

export type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
  category: IngredientCategory;
};

export type Meal = {
  id: string;
  name: string;
  defaultCook: Cook;
  style: string;
  defaultServings: number;
  tags: string[];
  ingredients: Ingredient[];
};