import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Trash2, Heart } from 'lucide-react'

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: 'GOBOUlt Z40 with Zen ENC Mic, 60H Battery Life, Lo...',
      variant: 'Blue, In the Ear',
      price: 2999,
      image: '/placeholder.svg?height=100&width=100',
      inStock: true
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 FE 5G (Blue, 128 GB)',
      variant: '8 GB RAM',
      price: 54999,
      image: '/placeholder.svg?height=100&width=100',
      inStock: true
    },
    {
      id: 3,
      name: 'Oneplus 13s 12GB 256GB (Black)',
      variant: 'Size: 11,Black,11',
      price: 69999,
      image: '/placeholder.svg?height=100&width=100',
      inStock: false
    },
    {
      id: 4,
      name: 'Apple Iphone 13 Charcoal Black (16GB,256GB)',
      variant: '',
      price: 79999,
      image: '/placeholder.svg?height=100&width=100',
      inStock: false
    }
  ]

  const priceDetails = {
    price: 84482,
    discount: 36161,
    buyMoreSave: 100,
    coupons: 106,
    protectFee: 29,
    total: 48144,
    savings: 36338
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="mb-4">
            <Input placeholder="Enter Delivery Pincode" className="max-w-xs" />
          </div>

          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img 
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    {item.variant && (
                      <p className="text-sm text-gray-600 mb-2">{item.variant}</p>
                    )}
                    {!item.inStock && (
                      <Badge variant="destructive" className="mb-2">Out Of Stock</Badge>
                    )}
                    <p className="text-sm text-gray-600 mb-3">
                      Enter pincode to see if the product is in stock
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4 mr-1" />
                        SAVE FOR LATER
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 mr-1" />
                        REMOVE
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">₹{item.price.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            PLACE ORDER
          </Button>
        </div>

        {/* Price Details */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>PRICE DETAILS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Price (4 items)</span>
                <span>₹{priceDetails.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span>-₹{priceDetails.discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Buy more & save more</span>
                <span>-₹{priceDetails.buyMoreSave}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Coupons for you</span>
                <span>-₹{priceDetails.coupons}</span>
              </div>
              <div className="flex justify-between">
                <span>Protect Promise Fee</span>
                <span>₹{priceDetails.protectFee}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>₹{priceDetails.total.toLocaleString()}</span>
              </div>
              <p className="text-green-600 text-sm">
                You will save ₹{priceDetails.savings.toLocaleString()} on this order
              </p>
              
              <div className="mt-6 space-y-2">
                <p className="text-sm text-gray-600">
                  Safe and Secure Payments. Easy returns. 100% Authentic products.
                </p>
                <div className="flex gap-2">
                  {/* <img src="/placeholder.svg?height=20&width=30" alt="VISA" />
                  <img src="/placeholder.svg?height=20&width=30" alt="RuPay" />
                  <img src="/placeholder.svg?height=20&width=30" alt="Diners Club" /> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Promotion */}
          <Card className="mt-6">
            <CardContent className="p-4 text-center">
              <img 
                src="/placeholder.svg?height=100&width=100"
                alt="AI Assistant"
                className="mx-auto mb-2"
              />
              <p className="text-sm font-semibold">Introducing our All New AI</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
