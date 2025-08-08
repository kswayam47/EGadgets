import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Egadgets
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/mobile" className="hover:text-blue-600">Mobile</Link>
            <Link href="/tv" className="hover:text-blue-600">TV</Link>
            <Link href="/accessories" className="hover:text-blue-600">Accessories</Link>
            <Link href="/laptops" className="hover:text-blue-600">Laptops</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 w-64"
              />
            </div>
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
