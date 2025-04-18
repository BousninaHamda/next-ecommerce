import Link from 'next/link';
import Stripe from 'stripe';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
        {product.images?.[0] && (
          <div className="relative h-60 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-md"
            />
          </div>
        )}
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-bold text-gray-800">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4 flex-grow flex flex-col justify-between gap-2">
          {product.description && (
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {product.description}
            </p>
          )}
          {price?.unit_amount && (
            <p className="text-lg font-semibold text-black">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className="bg-black text-white">View Details</Button>
        </CardContent>
      </Card>
    </Link>
  );
};
