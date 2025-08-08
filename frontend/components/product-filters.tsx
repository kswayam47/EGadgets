import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'

interface FilterProps {
  title: string
  children: React.ReactNode
}

function FilterSection({ title, children }: FilterProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm uppercase tracking-wide">{title}</h3>
      {children}
    </div>
  )
}

export function ProductFilters() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <FilterSection title="Screen Size">
          <div className="space-y-2">
            {['Up to 23"', '24"-31"', '32"-39"', '40"-47"', '48"-54"', '55" & Above'].map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox id={size} />
                <Label htmlFor={size} className="text-sm">{size}</Label>
              </div>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Brands">
          <div className="space-y-2">
            <Input placeholder="Search Brand" className="text-sm" />
            {['Samsung', 'Sony', 'LG', 'Hisense', 'TOSHIBA', 'boAt', 'OnePlus', 'realme'].map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox id={brand} />
                <Label htmlFor={brand} className="text-sm">{brand}</Label>
              </div>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Price">
          <div className="space-y-4">
            <Slider defaultValue={[500]} max={5000} step={100} />
            <div className="space-y-2">
              {['Up to ₹500', '₹500-₹1,000', '₹1,000-₹2,500', '₹2,500-₹3,000', 'Over ₹3,000'].map((range) => (
                <div key={range} className="flex items-center space-x-2">
                  <Checkbox id={range} />
                  <Label htmlFor={range} className="text-sm">{range}</Label>
                </div>
              ))}
            </div>
          </div>
        </FilterSection>

        <FilterSection title="Customer Review">
          <div className="space-y-2">
            {['4★ & Up', '3★ & Up', '2★ & Up', '1★ & Up'].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={rating} />
                <Label htmlFor={rating} className="text-sm">{rating}</Label>
              </div>
            ))}
          </div>
        </FilterSection>
      </CardContent>
    </Card>
  )
}
