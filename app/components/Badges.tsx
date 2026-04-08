import { 
  Wifi, 
  Users, 
  Coffee, 
  Bike, 
  ShieldCheck, 
  Layout, 
  Wind, 
  HelpCircle, 
  MailCheck,
  LayoutDashboard,
  Dumbbell,
  ConciergeBell,
  CircleParking,
  PhoneCall,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  "High-speed WiFi": Wifi,
  "Meeting rooms": Users,
  "Kitchen": Coffee,
  "Bike storage": Bike,
  "Reception": ShieldCheck,
  "Event space": Layout,
  "Showers": Wind,
  "Café": Coffee,
  "Mail handling": MailCheck,
  "Boardroom": LayoutDashboard,
  "Gym access": Dumbbell,
  "Concierge": ConciergeBell,
  "Parking": CircleParking,
  "Phone booths": PhoneCall,
  "Default": HelpCircle
};

export default function Badges({items}: {items: string[]}) {
    return(
        <div className="flex flex-wrap gap-3">
            {items.map((item: string) => (
                <Badge key={item} name={item} />
            ))}
        </div>
    );
}

export function Badge({ name }: { name: string }) {
  const IconComponent = iconMap[name] || iconMap["Default"];

  return (
    <span className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-xl text-sm font-medium shadow-sm group hover:border-indigo-500 transition-colors">
      <IconComponent className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
      {name}
    </span>
  );
}