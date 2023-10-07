import ProfilePic from "../../assets/react.svg";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <section className="flex flex-row items-center justify-between p-6 md:p-16">
    <div className="flex flex-row items-center gap-4">
      <img
        src={ProfilePic}
        alt="Profile_pic"
        className="w-20 h-20 rounded-full bg-yellow-200"
      />
      <div className="flex flex-col text-slate-900">
        <h2 className="font-LatoBold">Bakari Mwamnyeto</h2>
        <h3 className="text-slate-400">Administrator</h3>
      </div>
    </div>
    <CgProfile className="text-yellow-200 w-6 h-6" />
  </section>
  )
}

export default Profile