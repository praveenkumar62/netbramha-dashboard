import { Cell, Pie, PieChart } from 'recharts';

const RADIAN = Math.PI / 180;

const chartData = [
  { name: 'A', value: 90, color: '#E15825' },
  { name: 'B', value: 22.5, color: '#F18200' },
  { name: 'C', value: 22.5, color: '#FCD800' },
  { name: 'D', value: 22.5, color: '#A9D161' },
  { name: 'E', value: 22.5, color: '#009900' },
];

const needle = ({ value, data, cx, cy, iR, oR, color }) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 4;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 6;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="needle-path"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export default function CustomPieChart() {
  const cx = 190;
  const cy = 150;
  const iR = 105;
  const oR = 120;
  const value = 108;

  return (
    <PieChart width={400} height={165}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={chartData}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
        paddingAngle={1}
      >
        {chartData.map((entry) => (
          <Cell key={`cell-${entry.name}`} fill={entry.color} />
        ))}
      </Pie>
      {needle({ value, data: chartData, cx, cy, iR, oR, color: '#262626' })}
    </PieChart>
  );
}
