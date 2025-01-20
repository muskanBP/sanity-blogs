type Blog = {
    Title: string;
    Paragraph: string;
    image: any;
    slug: string;
    block:string
}
interface Product {
    name: string;
    description: string;
    price: number;
    discountPercentage: number;
    priceWithoutDiscount: number;
    rating: number;
    ratingCount: number;
    tags: string[];
    sizes: string[];
    imageUrl: string;
    slug: string;
  }