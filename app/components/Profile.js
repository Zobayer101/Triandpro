"use client";
import Image from "next/image";
import Profiles from "../Image/notuser.png";
import { MdOutlineEdit } from "react-icons/md";
import { IoCameraReverseOutline } from "react-icons/io5";
import varified from "../Image/varified.png";
import { MdAddAPhoto } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import Sidemsg from "../components/Sidemsg";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiCycling } from "react-icons/gi";
import { GiBookmarklet } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { MdOutlineSportsFootball } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { GiCampingTent } from "react-icons/gi";
import { MdOutlineSailing } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { PiChefHatBold } from "react-icons/pi";
import { GiDiscobolus } from "react-icons/gi";
import { CiRollingSuitcase } from "react-icons/ci";
import { GiFishingPole } from "react-icons/gi";
import { GiTv } from "react-icons/gi";
import { FaPersonDressBurst } from "react-icons/fa6";
import { MdOutlineScubaDiving } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaHockeyPuck } from "react-icons/fa";
import { GiBlockHouse } from "react-icons/gi";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import { GiPartyPopper } from "react-icons/gi";
import { TbMovie } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
// import varified from "../Image/varified.png";
import { PiGift } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSearchParams, redirect } from "next/navigation";

const Gprofile = () => {
  const [item, setItem] = useState({
    Lying: false,
    Comping: false,
    Dancing: false,
    Fishing: false,
    Hockey: false,
    music: false,
    Sailing: false,
    Travelling: false,
    Cycling: false,
    Cars: false,
    Diving: false,
    Games: false,
    Movies: false,
    Nature: false,
    Shopping: false,
    WatchingTV: false,
    Reading: false,
    Cooking: false,
    Fashion: false,
    Hobbies: false,
    Museums: false,
    Party: false,
    Sports: false,
    Meditation: false,
  });

  const [userData, setUserData] = useState({});
  const [aboutfrom, setAboutFrom] = useState({
    LiveIn: "",
    Workas: "",
    Language: "",
    Education: "",
    Relationship: "",
    Kid: "",
    Smoke: "",
    Drink: "",
    Height: "",
    BodyType: "",
    Eyes: "",
    Hair: "",
  });
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  useEffect(() => {
    let Token = localStorage.getItem("Token");

    if (Token) {
      (async () => {
        let res = await fetch("http://localhost:3300/api/profile/data/user", {
          method: "post",
          body: JSON.stringify({ id }),
          headers: { "Content-type": "application/json", Token },
        });
        let result = await res.json();
        result.Intarast && setItem(JSON.parse(result.Intarast));

        setUserData({
          Name: result.Name,
          Age: result.Age,
          Pertener: result.AboutPartner,
          Coverphoto: result.Coverphoto,
          profile: result.Profile,
        });
        result.AboutMe != "" && setAboutFrom(JSON.parse(result.AboutMe));
      })();
    }
  }, [id]);

  return (
    <div className="ProCon">
      <div className="MAhad">
        <div className="CoverSection">
          <div className="Nextlayer">
            <div className="bfhead">
              <div className="BackBtn" onClick={() => redirect("/")}>
                Back
              </div>
              <div className="FollowBtn">
                <FaRegStar />
              </div>
            </div>
            <div className="mainProphoto">
              <div className="ProImgsf">
                <Image
                  src={
                    userData.profile
                      ? `http://localhost:3300/public/img/profile/${userData.profile}`
                      : Profiles
                  }
                  alt="profile"
                  width={100}
                  height={100}
                  className="proImagst"
                />
              </div>
              <div className="Infos">
                <div className="NameAgePhoto">
                  <div className="varysemble">
                    <Image src={varified} alt="varified" className="vary" />
                  </div>
                  <div className="NameAges2">
                    {userData.Name || "empty"} , {userData.Age || "empty"}
                  </div>
                </div>
                <div className="Online">
                  <div className="symbleOn"></div>
                  <div className="onlinetext">Online</div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={
              userData.Coverphoto
                ? `http://localhost:3300/public/coverphoto/${userData.Coverphoto}`
                : Profiles
            }
            alt="cover"
            width={100}
            height={100}
            className="coverImages"
          />

          <div className=""></div>
        </div>
        <div className="SomeTime">
          I travel a lot. Do you think you and I could go to the moon? 💖 Would
          you be up for that? ... Actually… Continue Reading
        </div>
        <div className="sendMsg">
          <div className="Chatmsg">
            <input type="text" placeholder="text msg..." className="Inputs" />
            <div className="chatNow">
              <FaRegCommentDots /> chat now
            </div>
          </div>

          <div className="sendGift">
            <PiGift />
          </div>
        </div>
      </div>
      <div className="ImgPSection">
        <div className="myvideo">
          <div className="myvideoBox">
            <div className="myVide">My Video</div>
            <div className="myVideIcon">Icon, 3</div>
          </div>
          <Image
            src={Profiles}
            alt="pro"
            placeholder="blur"
            className="myphotoss"
          />
        </div>
        <div className="myphoto">
          <div className="myvideoBox">
            <div className="myVide">My Photos</div>
            <div className="myVideIcon">Icon, 10</div>
          </div>
          <Image
            src={Profiles}
            alt="pro"
            placeholder="blur"
            className="myphotoss"
          />
        </div>
        <div className="myPriphoto">
          <div className="OurBgImage"></div>

          <div className="myvideoBox">
            <div className="myVide">My Privet Photos</div>
            <div className="myVideIcon">Icon, 16</div>
          </div>

          {/* <Image
            src={Profiles}
            alt="pro"
            placeholder="blur"
            className="myphotossPriver"
          /> */}
        </div>
      </div>

      <div className="myIntarast">
        <div className="myIntarastCore">
          <div className="myIntarastTex">
            <div className="Itext">My Interests</div>
          </div>
          <div className="myIntarastIcon">
            {item.Lying && (
              <div className="Icon">
                <FaUmbrellaBeach className="Imgot one" />
                <p className="potname">Lying on the beach</p>
              </div>
            )}
            {item.Cycling && (
              <div className="Icon">
                <GiCycling className="Imgot tow" />
                <p className="potname">Cycling</p>
              </div>
            )}
            {item.Reading && (
              <div className="Icon ">
                <GiBookmarklet className="Imgot four" />
                <p className="potname">Reading books</p>
              </div>
            )}
            {item.Comping && (
              <div className="Icon">
                <GiCampingTent className="Imgot five" />
                <p className="potname">Comping</p>
              </div>
            )}
            {item.Cars && (
              <div className="Icon">
                <FaCarAlt className="Imgot six" />
                <p className="potname">Cars</p>
              </div>
            )}
            {item.Cooking && (
              <div className="Icon">
                <PiChefHatBold className="Imgot seven" />
                <p className="potname">Cooking</p>
              </div>
            )}
            {item.Dancing && (
              <div className="Icon">
                <GiDiscobolus className="Imgot eight" />
                <p className="potname">Dancing</p>
              </div>
            )}
            {item.Diving && (
              <div className="Icon">
                <MdOutlineScubaDiving className="Imgot nine" />
                <p className="potname">Diving</p>
              </div>
            )}
            {item.Fashion && (
              <div className="Icon">
                <FaPersonDressBurst className="Imgot ten" />
                <p className="potname">Fashion</p>
              </div>
            )}
            {item.Fishing && (
              <div className="Icon">
                <GiFishingPole className="Imgot ellavan" />
                <p className="potname">Fishing & Hunting</p>
              </div>
            )}
            {item.Games && (
              <div className="Icon">
                <IoGameControllerOutline className="Imgot towelve" />
                <p className="potname">Games</p>
              </div>
            )}
            {item.Hobbies && (
              <div className="Icon">
                <IoColorPaletteOutline className="Imgot thirtin" />
                <p className="potname">Hobbies & Crafts</p>
              </div>
            )}
            {item.Hockey && (
              <div className="Icon">
                <FaHockeyPuck className="Imgot fourten" />
                <p className="potname">Hockey</p>
              </div>
            )}
            {item.Movies && (
              <div className="Icon">
                <TbMovie className="Imgot fivten" />
                <p className="potname">Movies</p>
              </div>
            )}
            {item.Museums && (
              <div className="Icon">
                <GiBlockHouse className="Imgot sixten" />
                <p className="potname">Museums & Art</p>
              </div>
            )}
            {item.music && (
              <div className="Icon">
                <CiMusicNote1 className="Imgot seventen" />
                <p className="potname">music & Concerts</p>
              </div>
            )}
            {item.Nature && (
              <div className="Icon">
                <FaCanadianMapleLeaf className="Imgot ninten" />
                <p className="potname">Nature</p>
              </div>
            )}
            {item.Party && (
              <div className="Icon">
                <GiPartyPopper className="Imgot towenty" />
                <p className="potname">Party & Night Clubs</p>
              </div>
            )}
            {item.Sailing && (
              <div className="Icon">
                <MdOutlineSailing className="Imgot towentyone" />
                <p className="potname">Sailing</p>
              </div>
            )}
            {item.Shopping && (
              <div className="Icon">
                <CiShoppingCart className="Imgot towentytow" />
                <p className="potname">Shopping</p>
              </div>
            )}
            {item.Sports && (
              <div className="Icon">
                <MdOutlineSportsFootball className="Imgot towentythree" />
                <p className="potname">Sports</p>
              </div>
            )}
            {item.Travelling && (
              <div className="Icon">
                <CiRollingSuitcase className="Imgot towentyfour" />
                <p className="potname">Travelling</p>
              </div>
            )}
            {item.WatchingTV && (
              <div className="Icon">
                <GiTv className="Imgot towentyfive" />
                <p className="potname">Watching TV</p>
              </div>
            )}
            {item.Meditation && (
              <div className="Icon">
                <GrYoga className="Imgot towentysix" />
                <p className="potname">Meditation & Yoga</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="AboutAll">
        <div className="aboutmE">
          <div className="TheXhad">About Me</div>
          <div className="texeBodys">
            {/* <div className="infoin">
                  Live in :
                  <span className="Boldtexts">California City, USA</span>
                </div> */}
            <div className="infoin">
              Live in :
              <span className="Boldtexts">{aboutfrom.LiveIn || "empty"}</span>
            </div>
            <div className="infoin">
              Work as :
              <span className="Boldtexts">{aboutfrom.Workas || "empty"}</span>
            </div>
            <div className="infoin">
              Know :
              <span className="Boldtexts">{aboutfrom.Language || "empty"}</span>
            </div>
            <div className="infoin">
              Relationship: :{" "}
              <span className="Boldtexts">
                {aboutfrom.Relationship || "empty"}
              </span>
            </div>
            <div className="infoin">
              Have kids :{" "}
              <span className="Boldtexts">{aboutfrom.Kid || "empty"}</span>
            </div>
            <div className="infoin">
              Smoke :{" "}
              <span className="Boldtexts">{aboutfrom.Smoke || "empty"}</span>
            </div>
            <div className="infoin">
              Drink :{" "}
              <span className="Boldtexts">{aboutfrom.Drink || "empty"}</span>
            </div>
            <div className="infoin">
              Height :{" "}
              <span className="Boldtexts">{aboutfrom.Height || "empty"}</span>
            </div>
            <div className="infoin">
              Body type :{" "}
              <span className="Boldtexts">{aboutfrom.BodyType || "empty"}</span>
            </div>
            <div className="infoin">
              Eyes :{" "}
              <span className="Boldtexts">{aboutfrom.Eyes || "empty"}</span>
            </div>
            <div className="infoin">
              Hair :{" "}
              <span className="Boldtexts">{aboutfrom.Hair || "empty"}</span>
            </div>
          </div>
        </div>
        <div className="lokingFor">
          {" "}
          <div className="TheXhad">I&#39;m Looking for</div>
          {/* <div className="Iwantto">Man, 18 years and older</div> */}
          <div className="Lokingfordiscription">{userData.Pertener || ""}</div>
        </div>
      </div>
      <div className="bl"></div>
    </div>
  );
};
export default Gprofile;
