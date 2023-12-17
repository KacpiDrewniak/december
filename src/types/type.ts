export type ProductCard = {
  id: string;
  title: string;
  price: string;
};

export type Product = {
  isPromoted: boolean;
  id: string;
  title: string;
  image: {
    id: string;
    url: string;
  };
  productCard: ProductCard[];
};

export type Section = {
  id: string;
  title: string;
  product: Product[];
};

export type Response = {
  sections: Section[];
};
