import AwardsCard from "../Cards/AwardsCard";

const AllAwards = () => {
  const allAwards = [
    {
      id: "jsia3ua3z",
      date: "Sunday, 30 June",
      time: "08:00 pm",
      title: "Bongo Music Awards 2024",
      location: "Dar es Salaam, TZ",
      isActive: true,
    },
    {
      id: "jsia3ua3z",
      date: "Saturday, 16 September",
      time: "08:00 pm",
      title: "Bongo Music Awards 2023",
      location: "Dar es Salaam, TZ",
      isActive: false,
    },
  ];
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-4">
      {allAwards.map((award, i) => (
        <AwardsCard key={i} content={award} />
      ))}
    </div>
  );
};

export default AllAwards;
