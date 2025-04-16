import Stripe from 'stripe';
import { ProductCard } from './product-card';

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, key) => {
          return (
            <li key={key}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
