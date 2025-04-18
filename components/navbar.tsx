'use client';
import { useCartStore } from '@/store/cart-store';
import { Menu, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  const [openToggle, setOpenToggle] = useState<boolean>(false);
  const { items } = useCartStore();
  const countCart = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenToggle(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="hover:text-blue-500 transition-colors">
          Ecommerce
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-blue-500 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/checkout"
            className="hover:text-blue-500 transition-colors"
          >
            Checkout
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/checkout" className="relative">
            <ShoppingCart />
            {countCart > 0 && (
              <div className="absolute -top-3 -right-2.5 size-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                {countCart}
              </div>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpenToggle(!openToggle)}
          >
            {openToggle ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {openToggle && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-blue-500 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                className="hover:text-blue-500 transition-colors"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
