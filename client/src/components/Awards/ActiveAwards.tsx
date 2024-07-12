import AwardsCard from "../Cards/AwardsCard";

const ActiveAwards = () => {
  const activeAwards = [
    {
      id: "jsia3ua3z",
      date: "Sunday, 30 June",
      time: "08:00 pm",
      title: "Bongo Music Awards 2024",
      location: "Dar es Salaam, TZ",
      isActive: true,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense gap-4">
      {activeAwards.map((award, i) => (
        <AwardsCard key={i} content={award} />
      ))}
    </div>
  )
}

export default ActiveAwards