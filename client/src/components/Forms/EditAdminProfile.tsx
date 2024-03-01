import { Card, Typography } from "@material-tailwind/react";

const EditAdminProfile = () => {
    return(
        <Card className="rounded-lg px-4 py-4">
            <Typography className="text-slate-700 pb-3">Edit Profile Details</Typography>
            <div className="grid grid-cols-3 gap-4">
            <div>
                <Typography className="text-md text-slate-600 font-LatoBold capitalize">Firstname</Typography>
                <input type="text" className="border border-gray-300 h-8 w-full rounded-md" />
            </div>
            <div>
                <Typography className="text-md text-slate-600 font-LatoBold capitalize">middle name</Typography>
                <input type="text" className="border border-gray-300 h-8 w-full rounded-md" />
            </div>
            <div>
                <Typography className="text-md text-slate-600 font-LatoBold capitalize">lastname</Typography>
                <input type="text" className="border border-gray-300 h-8 w-full rounded-md" />
            </div>
            <div>
                <Typography className="text-md text-slate-600 font-LatoBold capitalize">Firstname</Typography>
                <input type="text" className="border border-gray-300 h-8 w-full rounded-md" />
            </div>
            <div>
                <Typography className="text-md text-slate-600 font-LatoBold capitalize">middle name</Typography>
                <input type="text" className="border border-gray-300 h-8 w-full rounded-md" />
            </div>
            <div>
                <Typography className="text-md text-slate-600 font-LatoBold capitalize">lastname</Typography>
                <input type="text" className="border border-gray-300 h-8 w-full rounded-md" />
            </div>
        </div>
        </Card>
    )
}

export default EditAdminProfile;