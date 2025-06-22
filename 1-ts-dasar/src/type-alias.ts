export type ID = string | number; // Type Alias untuk Union Type

export type Category = {
  id: ID;
  name: string;
  description?: string; // optional properties
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; // optional properties
};
