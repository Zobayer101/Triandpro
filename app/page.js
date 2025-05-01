
import Navebar from "./components/Navebar";
import People from "./components/People";
import Sidemsg from "./components/Sidemsg";
import "./Design/Homepage.css";

export default function Home() {
  return (
    <div>
      <Navebar />
      
      <div className="HomeContuner">
        <div className="peopleSection">
          <People />
        </div>
        <div className="messageSection">
          <Sidemsg />
        </div>
      </div>
    </div>
  );
}
