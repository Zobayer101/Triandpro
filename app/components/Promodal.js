import Image from "next/image";
import "../Design/Promodal.css";
import ProImage from "../Image/image.jpg";
import { RxCrossCircled } from "react-icons/rx";
const Promodal = () => {
  return (
    <div className="PBox">
      <div className="PSection">
        <div className="Close">
          <RxCrossCircled />
        </div>
        <div className="Imsec">
          <Image
            src={ProImage}
            alt="profileimage.png"
            placeholder="blur"
            className="imagess"
          />
        </div>
        <div className="user">
          <div className="userName">emma e.pass </div>
          <div className="MyPro">Myprofile </div>
        </div>
      </div>
      <div className="PageSection"></div>
      <div className="PageSection"></div>
      <div className="PageSection"></div>
    </div>
  );
};
export default Promodal;
