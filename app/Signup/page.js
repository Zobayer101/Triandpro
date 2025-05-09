import Image from "next/image";
import "../Design/signup.css";

import { PiSealCheckBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaGlobeAmericas } from "react-icons/fa";
import userOne from "../Image/pexels-tuấn-kiệt-jr-1386604.jpg";
import userTow from "../Image/pexels-anna-nekrashevich-6475978.jpg";
import userThree from "../Image/pexels-ali-pazani-2921424.jpg";
import Link from "next/link";
import Sign from "../components/Sign";
const Signup = () => {
  return (
    <div className="OuterCon">
      <div className="ConOne">
        <div className="inSection">
         
          <Sign />
        </div>
      </div>
      <div className="ConTow">
        <div className="headerText">Latest profils</div>

        <div className="firstSection">
          <div className="proCicrelx">
            <div className="imgBar">
              <Image
                src={userOne}
                alt="user1"
                width={185}
                height={185}
                className="userOne"
              />
            </div>
            <div className="textsus">karina...,25</div>
          </div>
          <div className="proCicrelx">
            <div className="imgBar">
              <Image
                src={userTow}
                alt="user1"
                width={185}
                height={185}
                className="userOne"
              />
            </div>
            <div className="textsus">karina...,25</div>
          </div>

          <div className="proCicrelx">
            <div className="imgBar">
              <Image
                src={userThree}
                alt="user1"
                width={185}
                height={185}
                className="userOne"
              />
            </div>
            <div className="textsus">karina...,25</div>
          </div>
          <div className="proCicrelx">
            <div className="imgBar">
              <Image
                src={userOne}
                alt="user1"
                width={185}
                height={185}
                className="userOne"
              />
            </div>
            <div className="textsus">karina...,25</div>
          </div>

          <div className="proCicrelx">
            <div className="imgBar">
              <Image
                src={userThree}
                alt="user1"
                width={185}
                height={185}
                className="userOne"
              />
            </div>
            <div className="textsus">karina...,25</div>
          </div>
          <div className="proCicrelx">
            <div className="imgBar">
              <Image
                src={userOne}
                alt="user1"
                width={185}
                height={185}
                className="userOne"
              />
            </div>
            <div className="textsus">karina kapurs...,25</div>
          </div>
        </div>
      </div>
      <div className="InfoSection">
        <div className="Info">
          <div className="IconSection">
            <PiSealCheckBold />
          </div>
          <div className="smallTextsection">
            <div className="headtext">Verification</div>
            <div className="normaltext">
              Members with verification signs have provided their Government
              issued ID for verification purposes.
            </div>
          </div>
        </div>
        <div className="Info">
          <div className="IconSection">
            <FaGlobeAmericas />
          </div>
          <div className="smallTextsection">
            <div className="headtext">Attention</div>
            <div className="normaltext">
              Receive lots of attention from attractive members online.
            </div>
          </div>
        </div>

        <div className="Info">
          <div className="IconSection">
            <TiMessages />
          </div>
          <div className="smallTextsection">
            <div className="headtext">Communication</div>
            <div className="normaltext">
              Chat, send letters, share photos and videos.
            </div>
          </div>
        </div>
        <div className="Info">
          <div className="IconSection">
            <FaUsers />
          </div>
          <div className="smallTextsection">
            <div className="headtext">Community</div>
            <div className="normaltext">
              Our community consists of paying users, free users, and
              compensated entertainers.
            </div>
          </div>
        </div>
      </div>
      
      <div className="Review"></div>
      <div className="Fotter">
        <div className="Copyright">
          Copyright Tirandpro.com 2025. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Signup;
