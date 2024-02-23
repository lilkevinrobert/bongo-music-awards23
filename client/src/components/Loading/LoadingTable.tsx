const LoadingTable = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between my-2 animate-pulse">
        <div className="flex flex-row items-center gap-2">
        <div className="py-5 px-24 rounded bg-slate-200 shadow-sm"></div>
        <div className="py-5 px-14 rounded bg-slate-200 shadow-sm"></div>
        </div>
        <div className="py-5 px-14 rounded bg-slate-200 shadow-sm"></div>
      </div>
      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-slate-200 leading-normal">
              <th className="py-5 px-6 border-r border-slate-300"></th>
              <th className="py-5 px-6 border-r border-slate-300"></th>
              <th className="py-5 px-6 border-r border-slate-300"></th>
              <th className="py-5 px-6 border-r border-slate-300"></th>
              <th className="py-5 px-6 border-r border-slate-300"></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(15)].map((_, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 bg-slate-100 hover:bg-gray-100 animate-pulse"
              >
                <td className="py-3 px-6 border-r border-slate-200"></td>
                <td className="py-3 px-6 border-r border-slate-200"></td>
                <td className="py-3 px-6 border-r border-slate-200"></td>
                <td className="py-3 px-6 border-r border-slate-200"></td>
                <td className="py-3 px-6 border-r border-slate-100"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LoadingTable;
