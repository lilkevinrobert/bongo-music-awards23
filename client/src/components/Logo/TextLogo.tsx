import { Typography } from "@material-tailwind/react"

interface TextSize {
  textSize: string;
}

const TextLogo = ({ textSize }: TextSize ) => {
    return(
        <>
        <Typography className={`${textSize} text-center text-slate-900`}>
          Bongo <span className="text-yellow-400"> Music Awards</span>
        </Typography>
      </>
    )
};

export default TextLogo;