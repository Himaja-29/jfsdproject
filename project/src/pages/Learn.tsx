
const Learn = () => {
  const fundTypes = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      ),
      title: "Equity Funds",
      description: "Equity funds primarily invest in stocks or shares of companies. They offer high growth potential over time but come with higher risk due to market volatility. These funds are ideal for investors looking for long-term capital appreciation.",
      number: "1"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      title: "Debt Funds",
      description: "Debt funds invest in fixed income securities such as bonds, government securities, or corporate debt. These funds offer lower risk compared to equity funds and provide steady returns through interest payments. They are suitable for conservative investors.",
      number: "2"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M3 3v18h18"></path>
          <path d="M18 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"></path>
          <path d="M12 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"></path>
          <path d="M6 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0z"></path>
        </svg>
      ),
      title: "Balanced Funds",
      description: "Balanced funds, also known as hybrid funds, invest in a mix of equity and debt instruments. This offers a balance of risk and return, making them a good choice for investors seeking moderate growth and stability.",
      number: "3"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      title: "Index Funds",
      description: "Index funds are designed to track the performance of a specific market index, such as the S&P 500. They are passively managed, meaning they aim to replicate the performance of the index rather than beat it. These funds offer diversification and low fees, making them popular among long-term investors.",
      number: "4"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M12 1v22"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      title: "Mutual Funds",
      description: "Mutual funds pool money from multiple investors to invest in a diversified portfolio of assets, such as stocks, bonds, and other securities. These funds are managed by professional fund managers, and they offer diversification and ease of investment for beginners.",
      number: "5"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Investment Fund Landscape
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the diverse world of investment funds. Each fund type offers unique strategies to help you achieve your financial goals.
          </p>
        </div>

        <div className="space-y-8">
          {fundTypes.map((fund, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-6"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 text-blue-600">
                      {fund.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {fund.title}
                    </h3>
                    <span className="text-4xl font-light text-blue-200">
                      {fund.number}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {fund.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            Note: All investments carry risk. Consult with a financial advisor before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;