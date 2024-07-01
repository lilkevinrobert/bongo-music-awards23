const MiniFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-gray-800 text-xs font-LatoRegular w-full text-center py-2">
      &copy;Copyright {currentYear}. All rights reserved.
    </footer>
  );
};

export default MiniFooter;
