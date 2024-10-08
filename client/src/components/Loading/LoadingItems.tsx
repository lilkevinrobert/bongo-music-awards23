interface ILoaderProps {
  orientation?: "landscape" | "portrait";
}
const LoadingItems = ({orientation}:ILoaderProps) => {
  return (
    <div className={`flex flex-row ${orientation == "portrait" ? "items-start justify-normal" : "items-center justify-between"} my-2 animate-pulse`}>
        <div className={`flex ${orientation == "portrait" ? "flex-col" : "flex-row"}  items-center gap-2`}>
            <div className="py-5 px-24 rounded-full bg-slate-200 shadow-sm"></div>
            <div className="py-5 px-14 rounded-full bg-slate-200 shadow-sm"></div>
            <div className="py-5 px-16 rounded-full bg-slate-200 shadow-sm"></div>
            <div className="py-5 px-14 rounded-full bg-slate-200 shadow-sm"></div>
            <div className="py-5 px-20 rounded-full bg-slate-200 shadow-sm"></div>
        </div>
    </div>
  )
}

export default LoadingItems