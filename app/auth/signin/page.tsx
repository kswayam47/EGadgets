import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Form */}
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-600">Egadgets</CardTitle>
            <h2 className="text-xl font-semibold">Sign in</h2>
            <p className="text-sm text-gray-600">
              If you don't have an account register{' '}
              <Link href="/auth/signup" className="text-blue-600 hover:underline">
                You can Register here!
              </Link>
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your Password" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm">Remember me</Label>
            </div>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
            
            <div className="text-center text-sm">or continue with</div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <span className="mr-2">f</span> Facebook
              </Button>
              <Button variant="outline" className="w-full">
                <span className="mr-2">G</span> Google
              </Button>
            </div>
            
            <div className="text-center">
              <Link href="/forgot-password" className="text-blue-600 hover:underline text-sm">
                Forgot Password?
              </Link>
            </div>
            
            <div className="text-center text-sm text-gray-600">
              +94 0116 789 754
            </div>
          </CardContent>
        </Card>

        {/* Right side - Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center">
          <img 
            src="/person-desk-computer-signin.png"
            alt="Sign in illustration"
            className="max-w-full h-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Sign in to EGadgets</h3>
        </div>
      </div>
    </div>
  )
}
