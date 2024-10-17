const PositionsPage = () => {
  const totalPortfolio = 10000; // Example value
  const positionsPL = 1500; // Example value, can be positive or negative
  const availableMargin = 2000; // Example value
  const investedMargin = 8000; // Example value

  const companies = [
    {
      symbol: "AAPL",
      currentProfit: 200,
      quantity: 100,
      profitPercentage: 2.5,
      avgPrice: 150,
      ltp: 153,
    },
    {
      symbol: "GOOGL",
      currentProfit: -50,
      quantity: 50,
      profitPercentage: -1.5,
      avgPrice: 2800,
      ltp: 2750,
    },
    {
      symbol: "GOOGL",
      currentProfit: -50,
      quantity: 50,
      profitPercentage: -1.5,
      avgPrice: 2800,
      ltp: 2750,
    },
    {
      symbol: "GOOGL",
      currentProfit: -50,
      quantity: 50,
      profitPercentage: -1.5,
      avgPrice: 2800,
      ltp: 2750,
    },
    // Add more companies as needed
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-center text-6xl m-3 mb-5">Positions</h1>
      {/* Main Card for All Groups */}
      <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
        {/* Group 1: Total Portfolio and P&L */}
        <div className="flex justify-between">
          {/* Total Portfolio */}
          <div className="text-xl font-semibold">
          ₹{totalPortfolio.toFixed(2)}
          </div>
          {/* Positions P&L */}
          <div
            className={`text-xl font-semibold ${
              positionsPL >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            ₹{positionsPL.toFixed(2)}
          </div>
        </div>
        <div className="flex justify-between text-gray-500 text-sm mb-2">
          <div>Total Portfolio</div>
          <div>Positions P&L</div>
        </div>

        {/* Group 2: Available Margin and Invested Margin */}
        <div className="bg-gray-200 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center text-gray-600 text-md">
            <div className="flex-1 text-center">Available Margin</div>
            <div className="flex-1 text-center">
              ₹{availableMargin.toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between text-gray-600 text-md">
            <div className="flex-1 text-center">Invested Margin</div>
            <div className="flex-1 text-center">
              ₹{investedMargin.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Group 3: Current Orders */}
        <div>
          {companies.map((company, index) => (
            <div key={index}>
              <div>
                <div className="flex justify-between mb-2">
                  {/* Top Left: Company Symbol */}
                  <div className="text-xl font-semibold">{company.symbol}</div>
                  {/* Top Right: Current Profit */}
                  <div
                    className={`${
                      company.currentProfit >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {company.currentProfit >= 0 ? "+" : ""}
                    {company.currentProfit.toFixed(2)}
                  </div>
                </div>
                <div className="flex justify-between text-gray-600 mb-2">
                  {/* Left: Quantity */}
                  <div>
                    {company.quantity} Qty ({company.quantity > 0 ? "B" : "S"})
                  </div>
                  {/* Right: Profit Percentage */}
                  <div
                    className={`${
                      company.profitPercentage >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    ({company.profitPercentage >= 0 ? "+" : ""}
                    {company.profitPercentage.toFixed(2)}%)
                  </div>
                </div>
                <div className="flex justify-between text-gray-600">
                  {/* Left: Avg Price */}
                  <div>Avg: {company.avgPrice.toFixed(2)}</div>
                  {/* Right: LTP */}
                  <div>LTP: {company.ltp.toFixed(2)}</div>
                </div>
              </div>
              {index < companies.length - 1 && (
                <hr className="my-4 border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositionsPage;
