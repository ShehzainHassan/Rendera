export interface Product {
  title: string;
  description: string;
  price: string;
  rating: string;
  imgUrl: string;
  cardType?: "medium" | "large";
}
export interface Products {
  [key: string]: Product;
}
export interface Review {
  name: string;
  review: string;
  imgSrc: string;
  cardType?: "medium" | "large";
}

export interface ReviewsData {
  [key: string]: Review;
}
export interface NewsItem {
  date: string;
  title: string;
  description: string;
  imgSrc: string;
}

export interface NewsData {
  [key: string]: NewsItem;
}

export interface CollectionItem {
  imgSrc: string;
  name: string;
}

export interface CollectionsData {
  [key: string]: CollectionItem;
}
