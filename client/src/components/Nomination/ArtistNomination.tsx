import { Card, Typography } from "@material-tailwind/react";
import NominationCount from "./NominationCount";

interface ArtistNominationProps {
    title: string;
}

const currentNominations = [
    {
        category: "best male artist",
        votes: 234,
        year: 2023
    },
    {
        category: "artist of the year",
        votes: 456,
        year: 2023
    },
    {
        category: "song of the year",
        votes: 26,
        year: 2023
    },
    {
        category: "some category",
        votes: 2242,
        year: 2023
    },
]

const ArtistNomination = ({ title }: ArtistNominationProps) => {
    const nominationCountSrc = title === "current" ? "current" : "previous";
    return (
        <Card className="rounded-md p-4">
            <Typography className="capitalize text-base text-gray-900 font-LatoBold mb-2">{title}</Typography>
            <div className="justify-start">
                {
                    currentNominations.length < 1 ? (<p className="font-LatoBold">No Nominations Yet!</p>) : 
                    (<div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 py-2">
                        {
                    currentNominations.map((nomination, i) => (<NominationCount key={i} source={nominationCountSrc} category={nomination.category} votes={nomination.votes} year={nomination.year} />))
                        }
                    </div>)
                }
            </div>
        </Card>
    )
}

export default ArtistNomination;