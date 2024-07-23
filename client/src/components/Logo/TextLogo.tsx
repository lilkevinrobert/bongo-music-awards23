import { Typography } from "@material-tailwind/react"

interface TextSize {
  textSize: string;
}

const TextLogo = ({ textSize }: TextSize ) => {
    return(
        <>
        <Typography className={`${textSize} text-center text-slate-900 font-LatoBold`}>
          Bongo <span className="text-amber-500"> Music Awards</span>
        </Typography>
      </>
    )
};

export default TextLogo;