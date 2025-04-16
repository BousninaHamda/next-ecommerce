import Link from 'next/link';

const Navbar = () => {
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
        <div className="flex items-center gap-4"></div>
      </div>
    </nav>
  );
};

export default Navbar;
