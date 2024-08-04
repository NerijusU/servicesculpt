import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export function Overview({
  data,
  title,
  subtitle,
}: {
  data: { name: string; total: number }[];
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="user-card">
      <p className="h4-bold text-left w-full">{title}</p>
      {/* IDEA: Add range picker */}

      {subtitle && (
        <p className="small-regular text-light-3 text-left ">{subtitle}</p>
      )}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={value => `€${value}`}
          />
          <Bar dataKey="total" fill="var(--primary)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
