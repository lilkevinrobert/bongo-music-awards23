import { Typography } from "@material-tailwind/react"
import { MdCategory } from "react-icons/md"

type AddEmptyStateProps = {
  itemName: string;
}

const AddEmptyState = ({ itemName }: AddEmptyStateProps) => {
  return (
    <div className="w-full h-full border border-slate-300 rounded-lg py-20 flex items-center justify-center gap-2">
        <MdCategory className="w-20 h-20 text-slate-300" />
        <Typography variant="h3" className="text-slate-300 font-LatoLight">Start by adding a {itemName}</Typography>
    </div>
  )
}

export default AddEmptyState