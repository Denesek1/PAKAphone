export type PhoneCategory = 'flagship' | 'midrange' | 'budget' | 'gaming';

export type PhoneStatus = 'new' | 'actual' | 'old' | 'out';

export interface Phone {
  id: string;
  name: string;
  description: string;
  price: number;
  releaseDate: string;
  category: PhoneCategory;
  brand: string;
  inStock: boolean;
  emoji: string;
}