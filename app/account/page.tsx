import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User, Package, Heart, CreditCard, Settings, UserCircle } from 'lucide-react'

export default function AccountPage() {
  const menuItems = [
    { icon: UserCircle, label: 'Profile', active: true },
    { icon: Package, label: 'Orders', active: false },
    { icon: Heart, label: 'Wishlist', active: false },
    { icon: CreditCard, label: 'Payment', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle>Swayam Kewlani</CardTitle>
              <p className="text-sm text-gray-600">Swayam@email.com</p>
            </CardHeader>
            <CardContent className="space-y-2">
              {menuItems.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    item.active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>My Account</CardTitle>
              <p className="text-gray-600">Manage your profile and preferences</p>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Swayam" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Kewlani" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="Swayam@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Main St, City, State 12345" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Member Since</Label>
                  <p className="text-lg">January 2024</p>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                Edit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
