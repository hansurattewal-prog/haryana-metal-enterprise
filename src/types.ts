export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  imageUrl: string;
}

export interface Brand {
  name: string;
  logoText: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  productType: string;
  specifications: string;
  estimatedQuantity: string;
  deliveryAddress: string;
}
