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
import "../Design/Myprofile.css";
import { useState } from "react";
const Myprofile = () => {
  const [image, setImage] = useState(null);
  const [preview, setPriview] = useState(null);
  const [pro, setPro] = useState(null);
  const [video, setVideo] = useState(null);
  const [publics, setPublic] = useState(null);
  const [pri, setPrivate] = useState(null);
  const [about, setAbout] = useState(false);
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
    Biking: false,
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

  return (
    <div>
      <Navebar />
      {modal ? (
        <div className="OuterModal">
          <div className="modalBox">
            {about ? (
              <>
                <div className="AboutHade">Some interesting about you</div>
                <div className="TextArea">
                  <textarea
                    maxLength={700}
                    placeholder="Few interesting words about you ..."
                    className="textareaDesign"
                  ></textarea>
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
                      className={item.Biking ? "footbal newDes" : "footbal"}
                      onClick={() => setItem({ ...item, Biking: !item.Biking })}
                    >
                      Biking
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
                      src={pro || Profiles}
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
                {" "}
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
                <div className="Icon"> </div>
                <div className="Icon"> </div>
                <div className="Icon"> </div>
                <div className="Icon"> </div>
                <div className="Icon"> </div>
                <div className="Icon"> </div>
                <div className="Icon"> </div>
                <div className="Icon"> </div>
                <div className="Icon"> </div>
                <div className="Icon"> </div>
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
                <div className="infoin">
                  Live in :{" "}
                  <span className="Boldtexts">California City, USA</span>{" "}
                </div>
                <div className="infoin">
                  Live in :{" "}
                  <span className="Boldtexts">California City, USA</span>{" "}
                </div>
                <div className="infoin">
                  Work as :{" "}
                  <span className="Boldtexts">
                    International business student
                  </span>{" "}
                </div>
                <div className="infoin">
                  Know :{" "}
                  <span className="Boldtexts">
                    English, Spanish, Portuguese
                  </span>{" "}
                </div>
                <div className="infoin">
                  Relationship: : <span className="Boldtexts">Single</span>{" "}
                </div>
                <div className="infoin">
                  Have kids : <span className="Boldtexts">No</span>{" "}
                </div>
                <div className="infoin">
                  Smoke : <span className="Boldtexts">Never</span>{" "}
                </div>
                <div className="infoin">
                  Drink : <span className="Boldtexts">Occasionally</span>{" "}
                </div>
                <div className="infoin">
                  Height : <span className="Boldtexts">5'6"</span>{" "}
                </div>
                <div className="infoin">
                  Body type : <span className="Boldtexts">Full figured</span>{" "}
                </div>
                <div className="infoin">
                  Eyes : <span className="Boldtexts">Brown</span>{" "}
                </div>
                <div className="infoin">
                  Hair : <span className="Boldtexts">Brown</span>{" "}
                </div>
              </div>
            </div>
            <div className="lokingFor">
              {" "}
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
              <div className="Iwantto">Man, 18 years and older</div>
              <div className="Lokingfordiscription">
                My perspective on life is very complex. From my father I learned
                by heart that each day must be taken advantage of because the
                world was brought to live and experience. I love to travel and
                live wonderful experiences. I live in the city of angels and I
                am a woman full of blessings. I live with my sister and work on
                my own digital business from home while I finish studying
                international business. I love to go out and live life to the
                fullest on the weekends leaving Los Angeles with the idea of
                ​​traveling, experiencing and getting to know the world around
                me. I am 23 years old and I am a super mature and realistic
                woman, a super intelligent woman based on my life experiences
                with my feet on the ground, I speak 3 languages, I have had 3
                spiritual retreats in my life on my travels around the world
                getting to know wonderful cultures. I hope that God continues to
                give me abundance, life and health to continue getting to know
                the world with my life partner when I find him...
              </div>
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
