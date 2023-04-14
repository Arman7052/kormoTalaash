import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';

const Statistics = () => {
    const data = [
        {
            Assignment: 1,
            mark: 57,
        },
        {
            Assignment: 2,
            mark: 59,
        },
        {
            Assignment: 3,
            mark: 50,
        },
        {
            Assignment: 4,
            mark: 52,
        },
        {
            Assignment: 5,
            mark: 29,
        },
        {
            Assignment: 6,
            mark: 50,
        },
        {
            Assignment: 7,
            mark: 60,
        },
        {
            Assignment: 8,
            mark: 60,
        }
    ];

  
    const customAxisTick = ({ payload, x, y, textAnchor, stroke }) => (
        <g transform={`translate(${x},${y})`}>
            <text
               
                x={0}
                y={0}
                dy={16}
                textAnchor={textAnchor}
                fill="#666"
                fontSize={30}
            >
                {payload.value}
            </text>
        </g>
    );

    const averageMark = data.reduce((total, item) => total + item.mark, 0) / data.length;

    return (
        <div className=' text-center bg-indigo-50'>
              <h1 className=' font-bold text-3xl py-10 text-indigo-300'>Statistics</h1>
        <div className='py-10 pb-20 text-center bg-indigo-50'>
            
            <div>
                <h1 className=' py-5 text-2xl lg:text-4xl font-bold'>This page shows marks gained in Assignments</h1>
            </div>
            <div>
                <p className=' text-xl lg:text-3xl  text-indigo-300'>Average Mark: <span className=' font-bold  text-gray-400'>{averageMark.toFixed(2)}</span></p>
            </div>

            <ResponsiveContainer width="100%" aspect={2.5}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid radialLines={true} />
                    <PolarAngleAxis
                        dataKey="Assignment"
                        tick={customAxisTick}
                        axisLine={{ stroke: "#666", strokeWidth: 1.5 }}
                        tickLine={true}
                    />
                    <PolarRadiusAxis
                        stroke="#666"
                        strokeWidth={1.5}
                        domain={[0, 60]}
                        angle={30}
                        tickCount={4}
                        tickFormatter={(tick) => tick}
                        tick={{ fill: "#666", fontSize: 10 }}
                        axisLine={{ stroke: "#666", strokeWidth: 1.5 }}
                    />
                    <Radar
                        name="Mark"
                        dataKey="mark"
                        stroke="#ca3e47"
                        fill="#ca3e47"
                        fillOpacity={0.2}
                    />

                    <Tooltip label="mark" ></Tooltip>
                </RadarChart>
            </ResponsiveContainer>
           
        </div>
        </div>
      
    );
};

export default Statistics;

 
