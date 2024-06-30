import AwardsCard from "../Cards/AwardsCard";

const AllAwards = () => {
  const allAwards = [
    {
      date: "Sunday, 30 June",
      time: "08:00 pm",
      title: "Bongo Music Awards 2024",
      location: "Dar es Salaam, TZ",
    },
    {
      date: "Saturday, 16 September",
      time: "08:00 pm",
      title: "Bongo Music Awards 2023",
      location: "Dar es Salaam, TZ",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense gap-4">
      {allAwards.map((award, i) => (
        <AwardsCard key={i} content={award} />
      ))}
    </div>
  );
};

export default AllAwards;
