import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import Rise from '../assets/rise.svg';
import Fall from '../assets/fall.svg';
import Neutral from '../assets/neutral.svg';

const data = [
  { month: 'JAN', value: 300 },
  { month: 'FEB', value: 300 },
  { month: 'MAR', value: 300 },
  { month: 'APR', value: 520, label: 'growing', showTag: true, tagColor: '#00a6ca' },
  { month: 'MAY', value: 580, label: 'growing', showTag: true, tagColor: '#00a6ca' },
  { month: 'JUN', value: 493, label: 'growing', showTag: true, tagColor: '#00a6ca' },
  { month: 'JUL', value: 300 },
  { month: 'AUG', value: 510, label: 'completed', showTag: true, tagColor: '#fddc00' },
  { month: 'SEP', value: 300 },
  { month: 'OCT', value: 300 },
  { month: 'NOV', value: 300 },
  { month: 'DEC', value: 300 },
];
const yAxisProps = [300, 400, 500, 600, 700, 800, 900]

function CustomDot(props) {
  const { cx, cy, payload } = props;
  const showTag = payload?.showTag;
  const tagColor = payload?.tagColor || '#FCD800';

  return (
    <g>
      <circle cx={cx} cy={cy} r={4} stroke="#004364" strokeWidth={3} fill="#FCD800" />
      {showTag && (
        <g transform={`translate(${cx - 18}, ${cy - 32})`}>
          <rect rx="6" ry="6" width="46" height="20" fill={tagColor} />
          <text x="18" y="13" textAnchor="middle" fontSize="11" fill={payload.label === 'completed' ? "#000" : "#fff"} fontWeight="600">
            {payload.value}
          </text>
          {payload.label === 'growing' && (
            <g transform={`translate(32, 13)`}>
              <text fill="#ffffff">+</text>
            </g>
          )}
          {payload.label === 'completed' && (
            <g transform={`translate(32, 13)`}>
              <text fill="#000">&gt;</text>
            </g>
          )}
        </g>
      )}
    </g>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const p = payload[0].payload;
    return (
      <div className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 shadow-sm">
        <div className="font-medium">{p.month}</div>
        <div>Score: {p.value}</div>
      </div>
    );
  }
  return null;
}

export default function ScoreChart() {
  return (
    <div className="rounded-md bg-[#F7F9FA]">
      <h3 className="text-primary-black text-base pt-4 pl-6">
        Trended view of the changes in your NB Score with every refresh.
      </h3>
      <div className="flex gap-5 px-7">
        <div className="w-[80%]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 24, right: 15, left: -20, bottom: 16 }}>
              <CartesianGrid stroke="#BFBFBF" strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickMargin={10}
                axisLine={{ stroke: '#BFBFBF' }}
                tickLine={false}
                tick={({ x, y, payload, index }) => {
                  const first = index === 0;
                  const last = index === data.length - 1;
                  return (
                    <text
                      x={x}
                      y={y + 10}
                      textAnchor="middle"
                      fontSize="12px"
                      fill={first || last ? "#595959" : "#BFBFBF"}
                      fontWeight={600}
                    >
                      {payload.value}
                    </text>
                  );
                }}
              />
              <YAxis
                domain={[300, 900]}
                ticks={yAxisProps}
                tick={({ x, y, payload, index }) => {
                  const first = index === 0;
                  const last = index === yAxisProps.length - 1;
                  return (
                    <text
                      x={x - 10}
                      y={y + 5}
                      textAnchor="middle"
                      fontSize="12px"
                      fill={first || last ? "#595959" : "#BFBFBF"}
                      fontWeight={700}
                    >
                      {payload.value}
                    </text>
                  );
                }}
                tickMargin={6}
                axisLine={{ stroke: '#BFBFBF', strokeDasharray: '3 3' }}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#CFE3EA', strokeDasharray: '4 4' }} />
              <Line
                dataKey="value"
                dot={<CustomDot />}
                stroke="#004364"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="w-[20%] bg-white h-[250px] overflow-auto rounded-lg py-3 px-4 mt-5">
          <h4 className="border-b border-primary-black pb-2 text-base font-bold">
            August 2022
          </h4>
          <ul>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <img src={Rise} alt="increase" width={10} height={10} className="mr-4" />
              <span className="text-primary-black font-bold text-base mr-5">493</span>
              <span className="text-primary-black text-sm">18/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <img src={Fall} alt="increase" width={10} height={10} className="mr-4" />
              <span className="text-primary-black font-bold text-base mr-5">490</span>
              <span className="text-primary-black text-sm">16/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <img src={Fall} alt="increase" width={10} height={10} className="mr-4" />
              <span className="text-primary-black font-bold text-base mr-5">510</span>
              <span className="text-primary-black text-sm">14/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <img src={Neutral} alt="increase" width={10} height={10} className="mr-4" />
              <span className="text-primary-black font-bold text-base mr-5">509</span>
              <span className="text-primary-black text-sm">12/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <div className="mr-4 w-3 h-3 " />
              <span className="text-[#BFBFBF] font-bold text-base mr-5">N/H</span>
              <span className="text-primary-black text-sm">12/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <img src={Rise} alt="increase" width={10} height={10} className="mr-4" />
              <span className="text-primary-black font-bold text-base mr-5">493</span>
              <span className="text-primary-black text-sm">18/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <img src={Fall} alt="increase" width={10} height={10} className="mr-4" />
              <span className="text-primary-black font-bold text-base mr-5">490</span>
              <span className="text-primary-black text-sm">16/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <img src={Fall} alt="increase" width={10} height={10} className="mr-4" />
              <span className="text-primary-black font-bold text-base mr-5">510</span>
              <span className="text-primary-black text-sm">14/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <img src={Neutral} alt="increase" width={10} height={10} className="mr-4" />
              <span className="text-primary-black font-bold text-base mr-5">509</span>
              <span className="text-primary-black text-sm">12/08/2022</span>
            </li>
            <li className="flex items-center h-10 border-b border-custom-grey">
              <div className="mr-4 w-3 h-3 " />
              <span className="text-[#BFBFBF] font-bold text-base mr-5">N/H</span>
              <span className="text-primary-black text-sm">12/08/2022</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}