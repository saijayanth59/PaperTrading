const companies = [
  { symbol: "RELIANCE", index: "NSE", lst: 2500.75, change: 2.5 },
  { symbol: "TCS", index: "BSE", lst: 3550.5, change: -1.2 },
  { symbol: "INFY", index: "NSE", lst: 1485.3, change: 0.9 },
  { symbol: "HDFCBANK", index: "BSE", lst: 1600.2, change: -0.75 },
];

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-center">Watchlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => {
          const pointsChange = (company.change * company.lst) / 100; // Calculate points change based on percentage
          return (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg flex flex-col justify-between border border-gray-200 relative group transition-transform hover:shadow-lg"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                  {/* Company Symbol */}
                  <div className="text-2xl font-semibold text-gray-800">
                    {company.symbol}
                  </div>
                  {/* Last Trading Price */}
                  <div className="text-xl text-gray-700">
                    {company.lst.toFixed(2)}
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  {/* Index */}
                  <div>{company.index}</div>
                  {/* Percentage Change and Points Change */}
                  <div
                    className={`${
                      company.change >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {company.change >= 0 ? "+" : ""}
                    {pointsChange.toFixed(2)} ({company.change.toFixed(2)}%)
                  </div>
                </div>
              </div>
              {/* Buy/Sell Buttons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition">
                  B
                </button>
                <button className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition ml-2">
                  S
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
