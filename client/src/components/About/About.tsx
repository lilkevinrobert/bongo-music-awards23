import { Typography } from "@material-tailwind/react";

const About = () => {
  const awardSiteName = "Bongo Music Awards";
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-4 lg:gap-8 py-10 lg:px-40 bg-slate-50 text-slate-900">
      <section className="w-full px-8 lg:px-28 flex flex-col items-center justify-center gap-4">
        <Typography variant="h6" className="underline underline-offset-4 text-lg">About Us</Typography>
        <Typography>
          Welcome to the <span className="bg-yellow-400 p-1 text-white"> {awardSiteName} </span> official web page, your ultimate
          destination for celebrating and recognizing the exceptional talents
          that shape the world of music. We are a passionate team of music
          enthusiasts, artists, and industry professionals who believe in the
          power of music to inspire, unite, and transform lives.
        </Typography>
      </section>
      <section className="w-full px-8 lg:px-28 flex flex-col items-center justify-center gap-4">
        <Typography variant="h6" className="underline underline-offset-4 text-lg" >Our Mission</Typography>
        <Typography>
          Our Mission At {awardSiteName} is simple: to
          honor and celebrate the artists, musicians, and creative visionaries
          who bring the magic of music to life. We aim to provide a platform
          that not only recognizes the outstanding contributions of these
          individuals but also connects music lovers from all walks of life.
        </Typography>
      </section>
      <section className="w-full px-8 lg:px-28 flex flex-col items-center justify-center gap-4">
        <Typography variant="h6" className="underline underline-offset-4 text-lg" >What we Do</Typography>
        <div className="gap-4 flex flex-col items-center justify-center">
          <li> <span className="font-semibold">Awards Ceremony:</span> Each year, we host a prestigious music
          awards ceremony that showcases the best in the industry. We recognize
          excellence across various genres, from pop to classical, hip-hop to
          rock, and everything in between.</li>
          <li><span className="font-semibold">Supporting Emerging Talent:</span> We are
          dedicated to nurturing and promoting emerging talent. Through our
          platform, we offer opportunities for new artists to showcase their
          skills and gain valuable exposure. </li>
          <li><span className="font-semibold">Celebrating Diversity:</span> Music
          transcends borders, languages, and cultures. We celebrate the
          diversity of music and artists worldwide, acknowledging the unique
          voices and perspectives that enrich our global musical landscape.</li>
          <li><span className="font-semibold">Community Engagement:</span> We believe in the power of music to foster unity
          and creativity. We engage with our community through various events,
          workshops, and initiatives that promote music education, appreciation,
          and collaboration.</li>
        </div>
      </section>
      <section className="w-full px-8 lg:px-28 flex flex-col items-center justify-center gap-4">
        <Typography variant="h6" className="underline underline-offset-4 text-lg">Our Team</Typography>
        <Typography>
          Our Team is composed of music industry experts, event
          organizers, tech-savvy professionals, and dedicated music enthusiasts.
          Together, we work tirelessly to ensure that <span className="underline underline-offset-4 bg-yellow-400 p-1 text-white">{awardSiteName} </span> is a platform that reflects the ever-evolving and vibrant world
          of music.
        </Typography>
      </section>
    </div>
  );
};

export default About;
