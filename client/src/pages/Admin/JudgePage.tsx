import React from "react";
import Layout from "../../components/Layout/Layout";
import { Button, Card, Typography } from "@material-tailwind/react";
import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Errors from "../../components/Errors/Errors";
import AddEmptyState from "../../components/EmptyState/AddEmptyState";
import LoadingProfile from "../../components/Loading/LoadingProfile";

type Data = {
  id: number;
  profile_image_url: string;
  organization: string;
  position: string;
  expertise: string;
  phone_number: string;
  role: string;
  bio: string;
  user_id: number;
  event_id: number;
  created_at: string;
  updated_at: string;
}

interface JudgeData {
  data: [];
}
interface FetchResult {
  data: JudgeData | null;
  loading: boolean;
  error: Error | null;
}

const JudgePage: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const {judgeId} = useParams();

    // Get data
    const {
      data: judgeData,
      loading: judgeDataLoading,
      error: judgeDataError,
    }: FetchResult = useFetch(`${BASE_URL}/judges/${judgeId}`);
  return (
    <Layout>
      <BreadcrumbLevel2 previousPage="judges" currentPage="judge" />
      {
        judgeDataLoading ? (
          <p className="text-lg text-slate-900">Loading profile...</p>
        ) : judgeDataError ? (
          <Errors errorName={judgeDataError?.name} />
        ) : judgeData?.data.length === 0 ? (
          <AddEmptyState itemName="judge" />
        ) : (
          <LoadingProfile />

      // <div className="text-slate-900 px-4 h-auto">
      //   <Typography variant="h5" className="capitalize">
      //     edit judge details
      //   </Typography>
      //   table here
      // </div>
        )
      }
    </Layout>
  );
};

export default JudgePage;
