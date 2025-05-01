import Navebar from "../components/Navebar";
import Gprofile from "../components/Profile";
import Sidemsg from "../components/Sidemsg";
import "../Design/Profile.css";
const Profile = () => {
  return (
    <div>
      <Navebar />
      <div className="ProfileCon">
        <Gprofile />
        <div className="msgSecTion">
          <Sidemsg />
        </div>
      </div>
    </div>
  );
};
export default Profile;
