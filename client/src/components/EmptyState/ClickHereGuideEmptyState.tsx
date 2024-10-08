import { FaArrowRightLong } from "react-icons/fa6";

const ClickHereGuideEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h6 className="text-base lg:text-lg text-center font-LatoRegular text-gray-800">Start by adding</h6>
      <FaArrowRightLong className="text-4xl lg:4xl text-amber-500" />
    </div>
  )
}

export default ClickHereGuideEmptyState
