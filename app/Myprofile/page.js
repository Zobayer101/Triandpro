"use client";
import Navebar from "../components/Navebar";
import Image from "next/image";
import Profiles from "../Image/image.jpg";
import cover from "../Image/Comfortzone.png";
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
import "../Design/Myprofile.css";
import { useEffect, useState } from "react";

const Myprofile = () => {
  const [image, setImage] = useState(null);
  const [preview, setPriview] = useState(null);
  const [pro, setPro] = useState(null);
  const [video, setVideo] = useState(null);
  const [publics, setPublic] = useState(null);
  const [pri, setPrivate] = useState(null);
  const [about, setAbout] = useState(false);
  const [mypro, setMypro] = useState("");
  const [mypertener, setMypertener] = useState("");
  const [looking, setLooking] = useState(false);
  const [interest, setInterest] = useState(false);
  const [modal, setModal] = useState(false);
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
  useEffect(() => {
    let Token = localStorage.getItem("Token");
    if (Token) {
      (async () => {
        let res = await fetch("http://localhost:3300/api/profile/data/user", {
          method: "get",
          headers: { "Content-type": "application/json", Token },
        });
        let result = await res.json();
        setItem(JSON.parse(result.Intarast));
        setMypro(result.Profile);
        setMypertener(result.AboutPartner);
        console.log(result);
      })();
    }
  }, []);
  const HandelChange = (e, FildName) => {
    const file = e.target.files[0];
    if (FildName == "bg") {
      if (file) {
        setImage(file);
        setPriview(URL.createObjectURL(file));
      }
    } else if (FildName == "pro") {
      if (file) {
        setImage(file);
        setPro(URL.createObjectURL(file));
      }
    } else if (FildName == "video") {
      if (file) {
        setImage(file);
        setVideo(URL.createObjectURL(file));
      }
    } else if (FildName == "public") {
      if (file) {
        setImage(file);
        setPublic(URL.createObjectURL(file));
      }
    } else if (FildName == "private") {
      if (file) {
        setImage(file);
        setPrivate(URL.createObjectURL(file));
      }
    }
  };
  const handelChange = (propaty, value) => {
    setAboutFrom((pre) => ({
      ...pre,
      [propaty]: value,
    }));
  };
  return (
    <div>
      <Navebar />
      {modal ? (
        <div className="OuterModal">
          <div className="modalBox">
            {about ? (
              <>
                <div className="outerFrom">
                  <div className="ItemSectionBlnk"></div>
                  <div className="ItemSection">
                    <div className="FromText">Where do you live? :</div>
                    <input
                      type="text"
                      className="InD"
                      placeholder="country , city.."
                      value={aboutfrom.LiveIn}
                      onChange={(e) => handelChange("LiveIn", e.target.value)}
                    />
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">What is your occupation? :</div>
                    <input
                      type="text"
                      className="InD"
                      placeholder="work as.."
                      value={aboutfrom.Workas}
                      onChange={(e) => handelChange("Workas", e.target.value)}
                    />
                  </div>
                  {/* <div className="ItemSection">
                    <div className="FromText">
                      What is your educational level? :
                    </div>
                    <select
                      className="InD"
                      value={aboutfrom.Education}
                      onChange={(e) =>
                        handelChange("Education", e.target.value)
                      }
                    >
                      <option value={""}>{""}</option>
                      <option value={"Associate degree"}>
                        Associate degree
                      </option>
                      <option>Bachelor degree</option>
                      <option>College</option>
                      <option>Graduate degree</option>
                      <option>PHD</option>
                      <option>High School</option>
                    </select>
                  </div> */}
                  <div className="ItemSection">
                    <div className="FromText">What languages do you know?:</div>
                    <input
                      type="text"
                      className="InD"
                      value={aboutfrom.Language}
                      onChange={(e) => handelChange("Language", e.target.value)}
                    />
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">
                      What is your relationship status?:
                    </div>

                    <select
                      className="InD"
                      value={aboutfrom.Relationship}
                      onChange={(e) =>
                        handelChange("Relationship", e.target.value)
                      }
                    >
                      <option value={""}>{""}</option>
                      <option value={"Single"}>Single</option>
                      <option value={"Divorced"}>Divorced</option>
                      <option value={"Widowed"}>Widowed</option>
                    </select>
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">Do you have kids? :</div>
                    <select
                      className="InD"
                      value={aboutfrom.Kid}
                      onChange={(e) => handelChange("Kid", e.target.value)}
                    >
                      <option value={""}>{""}</option>
                      <option value={"No"}>No</option>
                      <option value={"Yes"}>Yes</option>
                    </select>
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">Do you smoke?:</div>
                    <select
                      className="InD"
                      value={aboutfrom.Smoke}
                      onChange={(e) => handelChange("Smoke", e.target.value)}
                    >
                      <option value={""}>{""}</option>
                      <option value={"Never"}>Never</option>
                      <option value={"Occasionally"}>Occasionally</option>
                      <option value={"Regularly"}> Regularly</option>
                    </select>
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">Do you drink? :</div>
                    <select
                      className="InD"
                      value={aboutfrom.Drink}
                      onChange={(e) => handelChange("Drink", e.target.value)}
                    >
                      <option value={""}>{""}</option>
                      <option value={"Never"}>Never</option>
                      <option value={"Occasionally"}>Occasionally</option>
                      <option value={"Regularly"}>Regularly</option>
                    </select>
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">How tall are you? :</div>
                    <select
                      className="InD"
                      value={aboutfrom.Height}
                      onChange={(e) => handelChange("Height", e.target.value)}
                    >
                      <option value={""}>{""}</option>
                      <option value={"4'"}>4&#39;</option>
                      <option value={`4'1"`}>4&#39;1&#34;</option>
                      <option value={`4'2"`}>4&#39;2&#34;</option>
                      <option value={`4'3"`}>4&#39;3&#34;</option>
                      <option value={`4'4"`}>4&#39;4&#34;</option>
                      <option value={`4'5"`}>4&#39;5&#34;</option>
                      <option value={`4'6"`}>4&#39;6&#34;</option>
                      <option value={`4'7"`}>4&#39;7&#34;</option>
                      <option value={`4'8"`}>4&#39;8&#34;</option>
                      <option value={`4'9"`}>4&#39;9&#34;</option>
                      <option value={`5`}>5&#39;;</option>
                      <option value={`5'1"`}>5&#39;1&#34;</option>
                      <option value={`5'2"`}>5&#39;2&#34;</option>
                      <option value={`5'3"`}>5&#39;3&#34;</option>
                      <option value={`5'4"`}>5&#39;4&#34;</option>
                      <option value={`5'5"`}>5&#39;5&#34;</option>
                      <option value={`5'6"`}>5&#39;6&#34;</option>
                      <option value={`5'7"`}>5&#39;7&#34;</option>
                      <option value={`5'8"`}>5&#39;8&#34;</option>
                      <option value={`5'9"`}>5&#39;9&#34;</option>
                      <option value={`6`}>6&#39;</option>
                      <option value={`6'1"`}>6&#39;1&#34;</option>
                      <option value={`6'2"`}>6&#39;2&#34;</option>
                      <option value={`6'3"`}>6&#39;3&#34;</option>
                      <option value={`6'4"`}>6&#39;4&#34;</option>
                      <option value={`6'5"`}>6&#39;5&#34;</option>
                      <option value={`6'6"`}>6&#39;6&#34;</option>
                      <option value={`6'7"`}>6&#39;7&#34;</option>
                      <option value={`6'8"`}>6&#39;8&#34;</option>
                      <option value={`6'9"`}>6&#39;9&#34;</option>
                      <option value={`7'`}>7&#39;</option>
                      <option value={`7'1"`}>7&#39;1&#34;</option>
                      <option value={`7'2"`}>7&#39;2&#34;</option>
                    </select>
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">What is your body type? :</div>
                    <select
                      className="InD"
                      value={aboutfrom.BodyType}
                      onChange={(e) => handelChange("BodyType", e.target.value)}
                    >
                      <option value={""}>{""}</option>
                      <option value={"Athletic"}>Athletic</option>
                      <option value={"Average"}>Average</option>
                      <option value={"Full Figured"}>Full Figured</option>
                      <option value={"Toned"}>Toned</option>
                      <option value={"Slim"}>Slim</option>
                    </select>
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">What is your eye color? :</div>
                    <select
                      className="InD"
                      value={aboutfrom.Eyes}
                      onChange={(e) => handelChange("Eyes", e.target.value)}
                    >
                      <option value={""}>{""}</option>
                      <option value={"Bald"}>Bald</option>
                      <option value={"Black"}>Black</option>
                      <option value={"Bloned"}>Bloned</option>
                      <option value={"Brown"}>Brown</option>
                      <option value={"Chestnut"}>Chestnut</option>
                      <option value={"Fair"}>Fair</option>
                      <option value={"Red"}>Red</option>
                    </select>
                  </div>
                  <div className="ItemSection">
                    <div className="FromText">What is your eye Hair? :</div>
                    <select
                      className="InD"
                      value={aboutfrom.Hair}
                      onChange={(e) => handelChange("Hair", e.target.value)}
                    >
                      <option value={""}>{""}</option>
                      <option value={"Bald"}>Bald</option>
                      <option value={"Black"}>Black</option>
                      <option value={"Bloned"}>Bloned</option>
                      <option value={"Brown"}>Brown</option>
                      <option value={"Chestnut"}>Chestnut</option>
                      <option value={"Fair"}>Fair</option>
                      <option value={"Red"}>Red</option>
                    </select>
                  </div>
                </div>
                <div className="nextBtns intarest">
                  <div
                    className="scipebtn"
                    onClick={() => {
                      setModal(false), setAbout(false);
                    }}
                  >
                    cancile
                  </div>
                  <div className="nextbtn" onClick={() => ""}>
                    update
                  </div>
                </div>
              </>
            ) : looking ? (
              <>
                <div className="AboutHade">I am Looking for</div>
                <div className="TextArea">
                  <textarea
                    maxLength={700}
                    placeholder="About your ideal partner..."
                    className="textareaDesign"
                    value={mypertener}
                    onChange={(e) => setMypertener(e.target.value)}
                  ></textarea>
                </div>
                <div className="nextBtns intarest">
                  <div
                    className="scipebtn"
                    onClick={() => {
                      setModal(false), setLooking(false);
                    }}
                  >
                    cancile
                  </div>
                  <div className="nextbtn" onClick={() => ""}>
                    update
                  </div>
                </div>
              </>
            ) : interest ? (
              <>
                <div className="IntarestHade">Your interests</div>
                <div className="interestcon">
                  <div className="allItems">
                    <div
                      className={item.Lying ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Lying: !item.Lying })}
                    >
                      Lying on the beach
                    </div>
                    <div
                      className={item.Comping ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Comping: !item.Comping })
                      }
                    >
                      Comping
                    </div>
                    <div
                      className={item.Dancing ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Dancing: !item.Dancing })
                      }
                    >
                      Dancing
                    </div>
                    <div
                      className={item.Fishing ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Fishing: !item.Fishing })
                      }
                    >
                      Fishing & Hunting
                    </div>
                    <div
                      className={item.Hockey ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Hockey: !item.Hockey })}
                    >
                      Hockey
                    </div>
                    <div
                      className={item.music ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, music: !item.music })}
                    >
                      music & Concerts
                    </div>
                    <div
                      className={item.Sailing ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Sailing: !item.Sailing })
                      }
                    >
                      Sailing
                    </div>
                    <div
                      className={item.Travelling ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Travelling: !item.Travelling })
                      }
                    >
                      Travelling
                    </div>
                    <div
                      className={item.Cycling ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Cycling: !item.Cycling })
                      }
                    >
                      Cycling
                    </div>
                    <div
                      className={item.Cars ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Cars: !item.Cars })}
                    >
                      Cars
                    </div>
                    <div
                      className={item.Diving ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Diving: !item.Diving })}
                    >
                      Diving
                    </div>
                    <div
                      className={item.Games ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Games: !item.Games })}
                    >
                      Games
                    </div>
                    <div
                      className={item.Movies ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Movies: !item.Movies })}
                    >
                      Movies
                    </div>
                    <div
                      className={item.Nature ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Nature: !item.Nature })}
                    >
                      Nature
                    </div>
                    <div
                      className={item.Shopping ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Shopping: !item.Shopping })
                      }
                    >
                      Shopping
                    </div>
                    <div
                      className={item.WatchingTV ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, WatchingTV: !item.WatchingTV })
                      }
                    >
                      Watching TV
                    </div>
                    <div
                      className={item.Reading ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Reading: !item.Reading })
                      }
                    >
                      Reading books
                    </div>
                    <div
                      className={item.Cooking ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Cooking: !item.Cooking })
                      }
                    >
                      Cooking
                    </div>
                    <div
                      className={item.Fashion ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Fashion: !item.Fashion })
                      }
                    >
                      Fashion
                    </div>
                    <div
                      className={item.Hobbies ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Hobbies: !item.Hobbies })
                      }
                    >
                      Hobbies & Crafts
                    </div>
                    <div
                      className={item.Museums ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Museums: !item.Museums })
                      }
                    >
                      Museums & Art
                    </div>
                    <div
                      className={item.Party ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Party: !item.Party })}
                    >
                      Party & Night Clubs
                    </div>
                    <div
                      className={item.Sports ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Sports: !item.Sports })}
                    >
                      Sports
                    </div>
                    <div
                      className={item.Meditation ? "footbal newDes" : "footbal"}
                      onClick={() =>
                        setItem({ ...item, Meditation: !item.Meditation })
                      }
                    >
                      Meditation & Yoga
                    </div>
                  </div>
                </div>

                <div className="nextBtns intarest">
                  <div
                    className="scipebtn"
                    onClick={() => {
                      setModal(false), setInterest(false);
                    }}
                  >
                    cancile
                  </div>
                  <div className="nextbtn" onClick={() => ""}>
                    update
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="ProfileCon">
        <div className="ProCon">
          <div className="MAhad">
            <div className="CoverSection">
              <div className="Nextlayer">
                <div className="bfhead">
                  <div className="FollowBtn">
                    <BiSolidEdit />
                    <input
                      type="file"
                      accept="image/*"
                      className="Intypef"
                      onChange={(e) => HandelChange(e, "bg")}
                    />
                  </div>
                </div>
                <div className="mainProphoto">
                  <div className="ProImgsf">
                    <Image
                      src={
                        pro || Profiles
                        //`http://localhost:3300/public/img/profile/${mypro}`
                      }
                      alt="profile"
                      // placeholder="blur"
                      // loading="lazy"
                      width={100}
                      height={100}
                      className="proImagst"
                    />
                    <div className="uploadPro">
                      <IoCameraReverseOutline />
                      <input
                        type="file"
                        accept="image/*"
                        className="Intypef"
                        onChange={(e) => HandelChange(e, "pro")}
                      />
                    </div>
                  </div>
                  <div className="Infos">
                    <div className="NameAgePhoto">
                      <div className="varysemble">
                        <Image src={varified} alt="varified" className="vary" />
                      </div>
                      <div className="NameAges2">Jhone Dow , 22</div>
                    </div>
                    <div className="Online">
                      <div className="symbleOn"></div>
                      <div className="onlinetext">Online</div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={preview || cover}
                alt="cover"
                // placeholder="blur"
                // loading="lazy"
                className="coverImages"
                width={100}
                height={100}
              />
            </div>
            <div className="SomeTime">
              I travel a lot. Do you think you and I could go to the moon? 💖
              Would you be up for that? ... Actually… Continue Reading
            </div>
          </div>
          <div className="ImgPSection">
            <div className="myvideo">
              <div className="editorBox">
                <MdAddAPhoto className="Addphoto" />
                <input
                  type="file"
                  accept="image/*"
                  className="Intypef"
                  onChange={(e) => HandelChange(e, "video")}
                />
              </div>
              <div className="myvideoBox">
                <div className="myVide">My Video</div>
                <div className="myVideIcon">Icon, 3</div>
              </div>
              <Image
                src={video || Profiles}
                width={100}
                height={100}
                alt="pro"
                // placeholder="blur"
                className="myphotoss"
              />
            </div>
            <div className="myphoto">
              <div className="editorBox">
                <MdAddAPhoto className="Addphoto" />
                <input
                  type="file"
                  accept="image/*"
                  className="Intypef"
                  onChange={(e) => HandelChange(e, "public")}
                />
              </div>
              <div className="myvideoBox">
                <div className="myVide">My Photos</div>
                <div className="myVideIcon">Icon, 6</div>
              </div>
              <Image
                src={publics || Profiles}
                width={100}
                height={100}
                alt="pro"
                // placeholder="blur"
                className="myphotoss"
              />
            </div>
            <div className="myphoto">
              <div className="editorBox">
                <MdAddAPhoto className="Addphoto" />
                <input
                  type="file"
                  accept="image/*"
                  className="Intypef"
                  onChange={(e) => HandelChange(e, "private")}
                />
              </div>
              <div className="myvideoBox">
                <div className="myVide">My Private</div>
                <div className="myVideIcon">Icon, 10</div>
              </div>
              <Image
                src={pri || Profiles}
                width={100}
                height={100}
                alt="pro"
                // placeholder="blur"
                className="myphotoss"
              />
            </div>
          </div>

          <div className="myIntarast">
            <div className="myIntarastCore">
              <div className="myIntarastTex">
                <div className="Itext">My Interests</div>
                <div className="Editable">
                  <MdOutlineEdit
                    className="PEdits"
                    onClick={() => {
                      setModal(true), setInterest(true);
                    }}
                  />
                </div>
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
              <div className="TheXhad">
                <div className="Itext">About Me</div>
                <div className="Editable">
                  <MdOutlineEdit
                    className="PEdits"
                    onClick={() => {
                      setModal(true), setAbout(true);
                    }}
                  />
                </div>
              </div>
              <div className="texeBodys">
                {/* <div className="infoin">
                  Live in :
                  <span className="Boldtexts">California City, USA</span>
                </div> */}
                <div className="infoin">
                  Live in :<span className="Boldtexts">{aboutfrom.LiveIn}</span>
                </div>
                <div className="infoin">
                  Work as :<span className="Boldtexts">{aboutfrom.Workas}</span>
                </div>
                <div className="infoin">
                  Know :<span className="Boldtexts">{aboutfrom.Language}</span>
                </div>
                <div className="infoin">
                  Relationship: :{" "}
                  <span className="Boldtexts">{aboutfrom.Relationship}</span>
                </div>
                <div className="infoin">
                  Have kids : <span className="Boldtexts">{aboutfrom.Kid}</span>
                </div>
                <div className="infoin">
                  Smoke : <span className="Boldtexts">{aboutfrom.Smoke}</span>
                </div>
                <div className="infoin">
                  Drink : <span className="Boldtexts">{aboutfrom.Drink}</span>
                </div>
                <div className="infoin">
                  Height : <span className="Boldtexts">{aboutfrom.Height}</span>
                </div>
                <div className="infoin">
                  Body type :{" "}
                  <span className="Boldtexts">{aboutfrom.BodyType}</span>
                </div>
                <div className="infoin">
                  Eyes : <span className="Boldtexts">{aboutfrom.Eyes}</span>
                </div>
                <div className="infoin">
                  Hair : <span className="Boldtexts">{aboutfrom.Hair}</span>
                </div>
              </div>
            </div>
            <div className="lokingFor">
              <div className="TheXhad">
                <div className="Itext">I am Looking for</div>
                <div className="Editable">
                  <MdOutlineEdit
                    className="PEdits"
                    onClick={() => {
                      setModal(true), setLooking(true);
                    }}
                  />
                </div>
              </div>
              <div className="Lokingfordiscription">{mypertener}</div>
            </div>
          </div>
          <div className="bl"></div>
        </div>
        <div className="msgSecTion">
          <Sidemsg />
        </div>
      </div>
    </div>
  );
};
export default Myprofile;
