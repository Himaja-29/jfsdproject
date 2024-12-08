import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MutualFund } from '../../types';

interface Props {
  fund: MutualFund;
}

const FundPerformance: React.FC<Props> = ({ fund }) => {
  const data = [
    { name: '1Y', returns: fund.returns.oneYear },
    { name: '3Y', returns: fund.returns.threeYear },
    { name: '5Y', returns: fund.returns.fiveYear },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Performance Analysis</h3>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="returns" stroke="#4f46e5" />
      </LineChart>
    </div>
  );
};

export default FundPerformance;