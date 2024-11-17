import { Progress } from "@/components/ui/progress";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: string;
  valueNumber: number;
  iconBgcolor?: string;
}

export function StatCard({
  icon,
  label,
  value,
  valueNumber,
  color,
  iconBgcolor,
}: StatCardProps) {
  return (
    <div className="p-3 space-y-3 flex flex-col justify-between bg-white border rounded-lg shadow-sm min-w-md min-h-[160px]">
      <div className="flex items-center w-full gap-5">
        <div className={`${iconBgcolor} p-1 rounded-lg`}>{icon}</div>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
      <div>
        <p className="text-2xl font-semibold md:text-3xl lg:text-4xl">{value}</p>
      </div>
        <Progress progressColor={color} className={`h-2 ${iconBgcolor}`} value={Number(valueNumber)} />
    </div>
  );
}
