import Image from "next/image";
import "../Design/Loding.css";
import Icons from "../Image/Tirandpro.png";
const Loding = () => {
  return (
    <div className="LodingCover">
      <Image
        src={Icons}
        alt="Tirandpro.png"
        width={100}
        height={100}
        className="Triendpro"
      />
    </div>
  );
};
export default Loding;
