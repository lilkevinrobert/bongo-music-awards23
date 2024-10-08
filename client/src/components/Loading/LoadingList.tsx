interface LoadingListParams {
  orientation?: "portrait" | "landscape";
}

const LoadingList = ({orientation}:LoadingListParams) => {
  return (
    <div className="my-2 animate-pulse">
    <div className={`flex ${orientation == "landscape" ? "flex-row" : "flex-col"} items-center gap-2`}>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
        <div className="w-full h-10 rounded bg-slate-200 shadow-sm"></div>
    </div>
</div>
  )
}

export default LoadingList