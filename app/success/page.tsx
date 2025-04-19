'use client';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';
import Link from 'next/link';
import { useEffect } from 'react';

function SuccessPage() {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-2xl font-bold">Success payment</h1>
      <p className="text-lg mb-4">Thank you for your purchase.</p>
      <Button asChild>
        <Link href="/products">Continue Shopping</Link>
      </Button>
    </div>
  );
}

export default SuccessPage;
