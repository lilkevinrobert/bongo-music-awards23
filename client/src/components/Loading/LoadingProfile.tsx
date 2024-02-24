const LoadingProfile = () => {
  return (
    <div className="w-full h-96 bg-transparent px-4">
      <div className="flex flex-row items-center justify-between">
        <div className="px-16 py-3 bg-gray-300 rounded animate-pulse"></div>
        <div className="px-12 py-3 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="w-full h-fit space-y-4">

        <div className="w-auto py-3 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-auto py-3 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-auto py-56 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="w-auto space-y-4">
          <div className="w-auto py-40 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-auto py-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="w-auto space-y-4">
          <div className="w-auto py-40 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-auto py-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProfile;
