import React from 'react';
import { TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { MutualFund } from '../../types';

interface Props {
  fund: MutualFund;
}

const FundCard: React.FC<Props> = ({ fund }) => {
  // Function to get the color based on the risk level
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600';
      case 'Moderate': return 'text-yellow-600';
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  // Function to handle email sending
  const handleSendEmail = () => {
    const emailParams = {
      user_email: 'aswinijarugula@gmail.com', // Replace with the recipient's email
      fund_name: fund.name,
      fund_nav: fund.nav,
      fund_risk: fund.riskLevel,
    };

    emailjs
      .send('service_5bqndq8', 'template_xr7njaa', emailParams, 'cog_oJYOfEI4-bcIM') // Replace with your EmailJS details
      .then(
        (_response) => {
          alert(`Email sent successfully for ${fund.name}!`);
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{fund.name}</h3>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-5 w-5 mr-2" />
          <span>NAV: ₹{fund.nav}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <TrendingUp className="h-5 w-5 mr-2" />
          <span>1Y Returns: {fund.returns.oneYear}%</span>
        </div>

        <div className="flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <span className={getRiskColor(fund.riskLevel)}>
            Risk Level: {fund.riskLevel}
          </span>
        </div>
      </div>

      {/* Button with email sending functionality */}
      <button
        onClick={handleSendEmail} // Trigger email sending
        className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Invest Now
      </button>
    </div>
  );
};

export default FundCard;
