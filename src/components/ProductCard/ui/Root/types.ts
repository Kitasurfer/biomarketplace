import { Product as BaseProduct, ProductReview as BaseProductReview } from 'pages/Product/types.ts';
import { ProductImage as BaseProductImage } from '../../.././../types/ProductImage';

// Экспортируем типы для совместимости с существующим кодом
export type ProductImage = BaseProductImage;
export type ProductReview = BaseProductReview;

// Используем общий интерфейс Product из types/product.ts
export type Product = BaseProduct;

export interface ProductCardProps {
  product: Product;
  isFeatured?: boolean;
}
