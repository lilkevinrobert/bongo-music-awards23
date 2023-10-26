import { Spinner, Typography } from '@material-tailwind/react'

const FetchingItems = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center gap-4">
    <Spinner color="yellow" className="h-12 w-12" />
    <Typography className="text-slate-600 font-LatoRegular">
      Fetching your Items ...
    </Typography>
  </div>
  )
}

export default FetchingItems