import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Form */}
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-600">Egadgets</CardTitle>
            <h2 className="text-xl font-semibold">Sign up</h2>
            <p className="text-sm text-gray-600">
              If you already have an account register{' '}
              <Link href="/auth/signin" className="text-blue-600 hover:underline">
                You can Login here!
              </Link>
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your User name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your Password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm your Password" />
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Sign Up to EGadgets
            </Button>
            
            <Button variant="outline" className="w-full">
              Register
            </Button>
            
            <div className="text-center text-sm text-gray-600">
              +94 0116 789 754
            </div>
          </CardContent>
        </Card>

        {/* Right side - Illustration */}
        <div className="hidden lg:flex items-center justify-center">
          <img 
            src="/desk-setup-illustration.png"
            alt="Sign up illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
