import {
  Car,
  CircleDot,
  Cog,
  Droplets,
  Gauge,
  Settings2,
  Truck,
  Wrench,
} from 'lucide-react'
import type { SERVICES } from '../data/site'

type IconName = (typeof SERVICES)[number]['icon']

const icons: Record<IconName, typeof Wrench> = {
  general: Wrench,
  engine: Cog,
  brakes: CircleDot,
  oil: Droplets,
  tires: Car,
  suspension: Settings2,
  transmission: Gauge,
  towing: Truck,
}

export function ServiceIcon({ name }: { name: IconName }) {
  const Icon = icons[name]
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-steel/10 text-steel">
      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
    </div>
  )
}
