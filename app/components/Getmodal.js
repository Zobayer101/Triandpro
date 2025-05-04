"use client";
import { useState } from "react";
import "../Design/Getmodal.css";
import selectImg from "../Image/notuser.png";
import Image from "next/image";

const Getmodal = () => {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [page, setPage] = useState("info");
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
  const handelchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <>
      {!modal ? (
        <div className="Outermodal">
          <div className="modalBox">
            {page == "info" ? (
              <>
                {" "}
                <div className="AboutText">About you</div>
                <div className="NameBox">
                  <div className="textSections">Name or nickname :</div>
                  <div className="insections">
                    <input type="text" className="inputNames" />
                  </div>
                </div>
                <div className="BirthdayBox">
                  <div className="barthdaytx">Birthday:</div>
                  <div className="barthdayselect">
                    <input
                      type="date"
                      max={"2008-12-31"}
                      className="selectDAte"
                    />
                  </div>
                </div>
                <div className="NameBox">
                  <div className="textSections">Hometown:</div>
                  <div className="insections">
                    <input
                      type="text"
                      className="inputNames"
                      placeholder="country,city"
                    />
                  </div>
                </div>
                <div className="NextsubBox">
                  <div className="nextbtn" onClick={() => setPage("intarest")}>
                    next
                  </div>
                </div>
              </>
            ) : page == "intarest" ? (
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
                  <div className="scipebtn" onClick={() => setPage("profile")}>
                    skip
                  </div>
                  <div className="nextbtn" onClick={() => setPage("profile")}>
                    next
                  </div>
                </div>
              </>
            ) : page == "profile" ? (
              <>
                <div className="ProHead">Add Photo. Get noticed.</div>
                <div className="ProBody">
                  <div className="mainproimg">
                    <input
                      type="file"
                      accept="image/*"
                      className="selectaImages"
                      onChange={handelchange}
                    />
                    <div className="ImgBoxe">
                      <Image
                        src={preview || selectImg}
                        alt="myimage.png"
                        className="omgImage"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="imgTexs">Upload profile</div>
                  </div>
                </div>
                <div className="nextBtns ">
                  <div className="nextbtn" onClick={() => setPage("partner")}>
                    next
                  </div>
                </div>
              </>
            ) : page == "partner" ? (
              <>
                <div className="idalP">About your ideal partner</div>
                <div className="TextArea">
                  <textarea
                    maxLength={700}
                    placeholder="Few words about your ideal partner.."
                    className="textareaDesign"
                  ></textarea>
                </div>
                <div className="nextBtns intarest">
                  <div className="scipebtn" onClick={() => setPage("about")}>
                    skip
                  </div>
                  <div className="nextbtn" onClick={() => setPage("about")}>
                    next
                  </div>
                </div>
              </>
            ) : page == "about" ? (
              <>
                <div className="AboutHade">Some interesting about you</div>

                <div className="TextArea">
                  <textarea
                    maxLength={700}
                    placeholder="Few words about your ideal partner.."
                    className="textareaDesign"
                  ></textarea>
                </div>
                <div className="nextBtns intarest">
                  <div className="scipebtn" onClick={() => setPage("about")}>
                    skip
                  </div>
                  <div className="nextbtn" onClick={() => setPage("info")}>
                    next
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
    </>
  );
};
export default Getmodal;
