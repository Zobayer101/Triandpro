"use client";
import Image from "next/image";
import "../Design/Navbar.css";
import Logo from "../Image/Tirandpro.png";
import { useState, useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCopyright } from "react-icons/fa6";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FaFacebookMessenger } from "react-icons/fa6";
import { RiImageAiLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import "../Design/Promodal.css";
import ProImage from "../Image/notuser.png";
import Getmodal from "./Getmodal";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
// import { RxCrossCircled } from "react-icons/rx";

// import Promodal from "./Promodal";
const Navebar = () => {
  const [modal, setModal] = useState(false);
  const [pricing, setPricing] = useState(false);
  const [pfile, setPfile] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    let Token = localStorage.getItem("Token");
    if (Token) {
      (async () => {
        let res = await fetch("http://localhost:3300/api/profile/data/user", {
          method: "post",

          headers: { "Content-type": "application/json", Token },
        });
        let result = await res.json();

        result && setData({ profile: result.Profile, Name: result.Name });
      })();
    }
  }, []);
  const Signout = () => {
    localStorage.clear();
    signOut();
    redirect("/");
  };
  return (
    <div className="Navsection">
      <Link href={"/"}>
        <div className="Logos">
          <Image src={Logo} alt="logo.png" width={60} />
        </div>
      </Link>
      <div className="navCon">
        <Link href={"/"} className="Profils">
          <div className="textp"> Home</div>
          <div className="Iconp">
            <IoHomeOutline />
          </div>
        </Link>
        <div className="searchs" onClick={() => setModal(true)}>
          <div className="textp"> Search</div>
          <div className="Iconp">
            <IoSearch />
          </div>
        </div>

        <Link href={"/Inbox"} className="inboxs">
          <span className="SignalNotice"></span>
          <div className="textp"> Inbox</div>
          <div className="Iconp">
            <HiOutlineMail />
          </div>
        </Link>
        <div className="UpgreadAccount Bar" onClick={() => setPricing(true)}>
          <div className="saveMoney">Save 60% </div>
          <div className="upgrad">upgrade </div>
        </div>
        <div className="ThereeBar" onClick={() => setPfile(true)}>
          <FaBars />
        </div>
        {/* <div className="Accounts">Account</div> */}
      </div>
      {/* ----------------------------------------- */}
      {modal ? (
        <div className="Modal">
          <div className="modalCon">
            <div className="Header">
              <div className="Stext">Search for your Matches</div>
              <div className="Dtext">
                <div className="Deft">set to default</div>
                <div className="IconClose" onClick={() => setModal(false)}>
                  <RxCrossCircled />
                </div>
              </div>
            </div>
            <div className="Drop"></div>
            <div className="Drop"></div>
            <div className="Drop"></div>
            <div className="Drop"></div>
          </div>
        </div>
      ) : (
        ""
      )}
      {pricing ? (
        <div className="PriceCon">
          <div className="priceSection">
            <div className="pHade">
              <div className="Htext">
                Subscribe to a Monthly Credit Pack for a Remarkable Dating
                Experience!
              </div>
              <div className="HIcon" onClick={() => setPricing(false)}>
                <RxCrossCircled />
              </div>
            </div>
            <div className="Cbox">
              <div className="Cradit">
                <div className="HNum">1. Choose Monthly Credit Pack Size:</div>
                <div className="Item">
                  <div className="Items">
                    <div className="CraditIn"> 150 Credits/month</div>
                    <div className="month"> 20$ USD</div>
                  </div>
                  <div className="Items">
                    <div className="CraditIn"> 600 Credits/month</div>
                    <div className="month"> 150$ USD</div>
                  </div>
                  <div className="Items">
                    <div className="CraditIn"> 1500 Credits/month</div>
                    <div className="month"> 150$ USD</div>
                  </div>
                </div>
              </div>
              <div className="Bonuse">
                <div className="HNum">2. Get Bonuses:</div>
                <div className="Item">
                  <div className="ItemsSimp">
                    <div className="SimpImg">
                      <FaRegCopyright />
                    </div>
                    <div className="Simptext">
                      <span className="Boldtext">Get Credits Each Month</span>
                      to spend on gifts and communication
                    </div>
                  </div>
                  <div className="ItemsSimp">
                    <div className="SimpImg">
                      <TiMicrophoneOutline />
                    </div>
                    <div className="Simptext">
                      <span className="Boldtext">Get Credits Each Month</span>
                      to spend on gifts and communication
                    </div>
                  </div>
                  <div className="ItemsSimp">
                    <div className="SimpImg">
                      <FaFacebookMessenger />
                    </div>
                    <div className="Simptext">
                      <span className="Boldtext">Get Credits Each Month</span>
                      to spend on gifts and communication
                    </div>
                  </div>
                  <div className="ItemsSimp">
                    <div className="SimpImg">
                      <RiImageAiLine />
                    </div>
                    <div className="Simptext">
                      <span className="Boldtext">Get Credits Each Month</span>
                      to spend on gifts and communication
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footertx">
              Click here to see the cost of services. *1st month discounted;
              starting from the 2nd month you will be charged the full price.
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {pfile ? (
        <div className="OutPfile">
          {/* <Promodal /> */}
          <div className="PBox">
            <div className="PSection">
              <div className="Close" onClick={() => setPfile(false)}>
                <RxCrossCircled />
              </div>
              <Link href={"/Myprofile"} onClick={() => setPfile(false)}>
                <div className="Imsec">
                  <Image
                    src={
                      data.profile
                        ? `http://localhost:3300/public/img/profile/${data.profile}`
                        : ProImage
                    }
                    alt="profileimage.png"
                    width={100}
                    height={100}
                    className="imagess"
                  />
                </div>
                <div className="user">
                  <div className="userName">{data.Name} </div>
                  <div className="MyPro">Myprofile </div>
                </div>
              </Link>
            </div>
            <div className="PageSectionupdate">
              <div
                className="UpgreadAccount"
                onClick={() => {
                  setPricing(true), setPfile(false);
                }}
              >
                <div className="saveMoney">Save 60% </div>
                <div className="upgrad">upgrade </div>
              </div>
            </div>
            <div className="PageSection">privacy policy</div>
            <div className="PageSection" onClick={Signout}>
              {" "}
              sinout <PiSignOutBold />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Getmodal />
    </div>
  );
};

export default Navebar;
