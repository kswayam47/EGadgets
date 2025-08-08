import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Premium Android phone with S Pen and AI features',
      price: '$1299',
      rating: 4.8,
      reviews: 892,
      image: '/samsung-galaxy-s24-ultra.png'
    },
    {
      id: 2,
      name: 'Google Pixel 8 Pro',
      description: 'Pure Android experience with advanced AI photography',
      price: '$999',
      rating: 4.7,
      reviews: 654,
      image: '/google-pixel-8-pro.png'
    },
    {
      id: 3,
      name: 'OnePlus 12',
      description: 'Fast charging flagship with premium performance',
      price: '$799',
      rating: 4.6,
      reviews: 432,
      image: '/oneplus-12-smartphone.png'
    },
    {
      id: 4,
      name: 'iPhone 15 Pro Max',
      description: 'Latest iPhone with titanium design and advanced camera system',
      price: '$1199',
      rating: 4.9,
      reviews: 1247,
      image: '/iphone-15-pro-max.png'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Badge className="mb-4 bg-white text-blue-600">Now Brief</Badge>
            <h1 className="text-4xl font-bold mb-4">Galaxy S25 Ultra</h1>
            <p className="text-xl mb-2">Your true AI companion has arrived</p>
            <p className="mb-6">Get benefits worth ₹21000*</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Pre-order now
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/samsung-galaxy-s25-ultra-promo.png"
              alt="Galaxy S25 Ultra"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our best-selling gadgets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <img 
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
