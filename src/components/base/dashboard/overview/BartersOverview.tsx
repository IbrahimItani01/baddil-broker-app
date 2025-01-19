import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PieChartProps {
	cx: number;
	cy: number;
	midAngle: number;
	innerRadius: number;
	outerRadius: number;
	percent: number;
	index: number;
}
const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },    
];

const COLORS = ["#e60000", "#c26363"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}: PieChartProps) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill='white'
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline='central'
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const BartersOverview = () => {
  return (
    <div className='text-2xl font-semibold ml-5 flex border-2 w-fit mt-20 rounded-medium p-5'>
                <h1>Barters</h1>
                <ResponsiveContainer
                    width={300}
                    height={300}
                >
                    <PieChart>
                        <Pie
                            data={data}
                            cx='50%'
                            cy='50%'
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey='value'
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
  )
}

export default BartersOverview
