import { Card, Typography } from "@material-tailwind/react";

interface NominationCountProps {
    category: string;
    votes: number;
    year: number;
    source: "current" | "previous";
}

const NominationCount = ({ category, votes, year, source }: NominationCountProps) => {
    function checkSource(source: string){
        if(source == "current"){
            return "yellow-400";
        }else{
            return "gray-500"
        }
    }
    return (
        <Card className="bg-transparent shadow-none flex flex-col items-center">
            <div className={`w-20 h-20 md:w-16 md:h-16 border-2 border-${checkSource(source)} rounded-full mb-2 flex items-center justify-center`}>
            <Typography className="text-xl font-LatoBold">{votes}</Typography>
            </div>
            <Typography className="capitalize text-sm font-LatoRegular text-center">{category}</Typography>
            <Typography className="capitalize text-sm font-LatoRegular text-center text-gray-500">{year}</Typography>
        </Card>
    )
}

export default NominationCount;