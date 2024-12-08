import { useState } from 'react';
import FundCard from '../components/Fund/FundCard';
import { MutualFund } from '../types';

const Funds = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState('all');

  // Sample data - in a real app, this would come from an API
  const funds: MutualFund[] = [
    {
      id: '1',
      name: 'Growth Fund Direct',
      category: 'Equity',
      riskLevel: 'High',
      nav: 45.67,
      aum: 1500,
      returns: {
        oneYear: 15.4,
        threeYear: 12.8,
        fiveYear: 11.2
      },
      description: 'A high-growth equity fund focusing on large-cap companies'
    },
    {
      id: '2',
      name: 'Balanced Advantage',
      category: 'Hybrid',
      riskLevel: 'Moderate',
      nav: 32.45,
      aum: 2500,
      returns: {
        oneYear: 10.2,
        threeYear: 9.5,
        fiveYear: 8.7
      },
      description: 'A balanced fund with mix of equity and debt instruments'
    },
    {
      id: '3',
      name: 'Debt Stability Fund',
      category: 'Debt',
      riskLevel: 'Low',
      nav: 25.45,
      aum: 1000,
      returns: {
        oneYear: 5.6,
        threeYear: 6.2,
        fiveYear: 5.8
      },
      description: 'A debt fund with low risk and steady returns from bonds and fixed income assets'
    },
    {
      id: '4',
      name: 'Tech Equity Growth Fund',
      category: 'Equity',
      riskLevel: 'High',
      nav: 75.32,
      aum: 3000,
      returns: {
        oneYear: 20.5,
        threeYear: 18.0,
        fiveYear: 16.5
      },
      description: 'An equity fund that focuses on high-growth technology companies'
    },
    {
      id: '5',
      name: 'Global Hybrid Fund',
      category: 'Hybrid',
      riskLevel: 'Moderate',
      nav: 40.89,
      aum: 1800,
      returns: {
        oneYear: 9.0,
        threeYear: 8.5,
        fiveYear: 7.3
      },
      description: 'A global hybrid fund with a diversified portfolio of both equity and debt securities'
    },
    {
      id: '6',
      name: 'Blue Chip Bond Fund',
      category: 'Debt',
      riskLevel: 'Low',
      nav: 30.00,
      aum: 5000,
      returns: {
        oneYear: 4.2,
        threeYear: 4.7,
        fiveYear: 5.0
      },
      description: 'A low-risk debt fund focusing on blue-chip bonds with stable returns'
    }
  ];

  // Filter funds based on selected category and risk level
  const filteredFunds = funds.filter((fund) => {
    const matchesCategory =
      selectedCategory === 'all' || fund.category.toLowerCase() === selectedCategory;
    const matchesRisk =
      selectedRisk === 'all' || fund.riskLevel.toLowerCase() === selectedRisk;

    return matchesCategory && matchesRisk;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Explore Mutual Funds</h1>

      {/* Filters Section */}
      <div className="mb-6 flex flex-wrap gap-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-md px-4 py-2 bg-white shadow-sm focus:ring focus:ring-indigo-500 text-black"
        >
          <option value="all">All Categories</option>
          <option value="equity">Equity</option>
          <option value="debt">Debt</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <select
          value={selectedRisk}
          onChange={(e) => setSelectedRisk(e.target.value)}
          className="border rounded-md px-4 py-2 bg-white shadow-sm focus:ring focus:ring-indigo-500 text-black"
        >
          <option value="all">All Risk Levels</option>
          <option value="low">Low Risk</option>
          <option value="moderate">Moderate Risk</option>
          <option value="high">High Risk</option>
        </select>
      </div>

      {/* Fund Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFunds.length > 0 ? (
          filteredFunds.map((fund) => <FundCard key={fund.id} fund={fund} />)
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No funds match the selected filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Funds;
