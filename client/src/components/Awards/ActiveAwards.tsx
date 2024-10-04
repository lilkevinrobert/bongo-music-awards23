import AwardsCard from "../Cards/AwardsCard";
import useFetch from "../../hooks/useFetch.ts";
import AddEmptyState from "../EmptyState/AddEmptyState.tsx";
import Errors from "../Errors/Errors.tsx";
import LoadingItems from "../Loading/LoadingItems.tsx";

interface AwardsData {
  data: [];
}

interface FetchResult {
  data: AwardsData | null;
  loading: boolean;
  error: Error | null;
}

const ActiveAwards = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  // GET data
  const {
    data: awardsDataList,
    loading: awardsDataLoading,
    error: awardsDataError,
  }: FetchResult = useFetch(`${BASE_URL}/awards/active`);

  return (
    <>
        {
      awardsDataLoading ? (
        <LoadingItems />
      ) : awardsDataError ? (
        <Errors errorName={awardsDataError?.name} message={awardsDataError?.message} />
      ) : awardsDataList?.data.length === 0 ? (
        <AddEmptyState itemName="award" />
      ) : (
        <div className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-4">
        {awardsDataList?.data.map((award, i) => (
          <AwardsCard key={i} content={award} />
        ))}
      </div>
      )
    } 
    </>
  )
}

export default ActiveAwards