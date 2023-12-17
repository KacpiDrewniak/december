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

type Content = {
  headerImage: string;
  id: string;
  text6: string;
  text5: string;
  text4: string;
  text3: string;
  text2: string;
  text1: string;
  stage: string;
  sobota: string;
  publishedAt: string;
  poniedzialekPiatek: string;
  niedziela: string;
  mapLink: string;
};

export type Response = {
  sections: Section[];
  contents: Content[];
};
