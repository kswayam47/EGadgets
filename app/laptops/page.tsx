import { ProductFilters } from '@/components/product-filters'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

export default function LaptopsPage() {
  const products = [
    {
      id: 1,
      name: 'GEMIBOOK X PRO',
      description: 'High-performance laptop with premium features',
      price: '$899',
      rating: 4.5,
      reviews: 234,
      image: '/placeholder.svg?height=250&width=250'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Book4',
      description: '13th Gen Intel Series laptop',
      price: '$1199',
      rating: 4.7,
      reviews: 456,
      image: '/placeholder.svg?height=250&width=250'
    },
    {
      id: 3,
      name: 'ASUS VIVOBOOK',
      description: 'Versatile laptop for work and entertainment',
      price: '$799',
      rating: 4.4,
      reviews: 321,
      image: '/placeholder.svg?height=250&width=250'
    },
    {
      id: 4,
      name: 'Acer ASPIRE LITE',
      description: 'Affordable laptop with solid performance',
      price: '$599',
      rating: 4.2,
      reviews: 189,
      image: '/placeholder.svg?height=250&width=250'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Laptops</h1>
        <p className="text-gray-600">Essential gadgets and accessories to enhance your tech experience</p>
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
