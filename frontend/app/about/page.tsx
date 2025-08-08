import { Card, CardContent } from '@/components/ui/card'
import { Heart, Key, Zap, Shield } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Everything we do is centered around providing the best customer experience possible.'
    },
    {
      icon: Key,
      title: 'Quality Products',
      description: 'We only stock products from trusted brands that meet our high quality standards.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to bring you the latest and greatest gadgets.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and transactions are protected with enterprise-grade security.'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6">
              Founded in 2025 by a team of technology enthusiasts, Egadgets started with a simple 
              mission: to make cutting-edge technology accessible to everyone. We noticed a gap in the 
              market for a platform that not only offered the latest gadgets but also provided 
              exceptional customer service and expert guidance.
            </p>
            <p className="text-gray-600 mb-6">
              What began as a small startup has grown into a trusted e-commerce platform serving 
              thousands of customers worldwide. We've built partnerships with leading technology 
              brands and maintained our commitment to quality, innovation, and customer satisfaction.
            </p>
            <p className="text-gray-600">
              Today, Egadgets continues to evolve, always staying ahead of technology trends to bring you 
              the products that will enhance your digital life. We're passionate about helping you find the 
              perfect gadget to suit your needs.
            </p>
          </div>
          <div>
            <img 
              src="/modern-office-collaboration.png"
              alt="Our team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
