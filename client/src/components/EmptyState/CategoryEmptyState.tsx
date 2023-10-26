import { Typography } from "@material-tailwind/react"
import { MdCategory } from "react-icons/md"

const CategoryEmptyState = () => {
  return (
    <div className="w-full h-full border border-slate-300 py-20 flex items-center justify-center gap-2">
        <MdCategory className="w-20 h-20 text-slate-300" />
        <Typography variant="h3" className="text-slate-300 font-LatoLight">Start by adding a category</Typography>
    </div>
  )
}

export default CategoryEmptyState