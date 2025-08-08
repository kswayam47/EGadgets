import { ProductFilters } from '@/components/product-filters'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

export default function MobilePage() {
  const products = [
    {
      id: 1,
      name: 'Google Pixel 8 Pro',
      description: 'Pure Android experience with advanced AI photography',
      price: '$999',
      rating: 4.8,
      reviews: 654,
      image: '/google-pixel-8-pro.png'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      description: 'Latest iPhone with titanium design and advanced camera system',
      price: '$1199',
      rating: 4.9,
      reviews: 1247,
      image: '/iphone-15-pro-max.png'
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
      name: 'Motorola Edge 60 Fusion',
      description: 'Pure Android experience with advanced AI photography',
      price: '$999',
      rating: 4.7,
      reviews: 654,
      image: '/motorola-edge.png'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mobile Phones</h1>
        <p className="text-gray-600">Discover the latest smartphones with cutting-edge technology</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilters />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <p className="text-sm text-gray-600">Showing {products.length} of {products.length} products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
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
        </div>
      </div>
    </div>
  )
}
