"use client";
import { useEffect, useState } from "react";
import "../Design/Getmodal.css";
import selectImg from "../Image/notuser.png";
import Image from "next/image";

const Getmodal = () => {
  const [modal, setModal] = useState(true);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [partner, setPartner] = useState({ mypartner: "", aboutI: "" });
  const [aboutme, setAboutme] = useState({
    Name: "",
    DateOfBarth: "",
    Location: "",
  });
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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Info"));
    if (!data) {
      redirect("/Signup");
    } else if (data.accountstatus == 0) {
      setModal(false);
    }
  }, []);
  const handelchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const aboutHandel = (propaty, value) => {
    setAboutme((pre) => ({ ...pre, [propaty]: value }));
  };
  const partnerHandler = (propaty, value) => {
    setPartner((pre) => ({ ...pre, [propaty]: value }));
  };
  const AlldataUpload = async () => {
    if (image) {
      const data = JSON.stringify({ aboutme, item, partner });

      let url = ` http://localhost:3300/api/moredata/comeuser`;
      let responce = await fetch(url, {
        method: "post",
        body: data,
        headers: {
          "Content-type": "application/json",
        },
      });
      let result = await responce.json();
      if (result) {
        setModal(true);
        alert("data upload successfully");
      }
    }
  };
  const ProfileUpload = async () => {
    if (image) {
      const fromData = new FormData();
      fromData.append("image", image);
      let url = ` http://localhost:3300/api/data/profile/uploder`;
      const responce = await fetch(url, {
        method: "post",
        body: fromData,
        headers: {
          "Content-type": "application/json",
        },
      });
        const result = await responce.json();
        if (result) {
            setPage("partner");
        }
    } else {
      alert("select your profilepicture!");
    }
  };
  const AboutChecker = () => {
    if (aboutme.Name && aboutme.DateOfBarth && aboutme.Location) {
      setPage("intarest");
    } else {
      alert("all data are required !");
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
                    <input
                      type="text"
                      className="inputNames"
                      value={aboutme.Name}
                      onChange={(e) => aboutHandel("Name", e.target.value)}
                    />
                  </div>
                </div>
                <div className="BirthdayBox">
                  <div className="barthdaytx">Birthday:</div>
                  <div className="barthdayselect">
                    <input
                      type="date"
                      max={"2008-12-31"}
                      className="selectDAte"
                      value={aboutme.DateOfBarth}
                      onChange={(e) =>
                        aboutHandel("DateOfBarth", e.target.value)
                      }
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
                      value={aboutme.Location}
                      onChange={(e) => aboutHandel("Location", e.target.value)}
                    />
                  </div>
                </div>
                <div className="NextsubBox">
                  <div className="nextbtn" onClick={() => AboutChecker()}>
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
                  <div className="nextbtn" onClick={() => ProfileUpload()}>
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
                    value={partner.mypartner}
                    onChange={(e) =>
                      partnerHandler("mypartner", e.target.value)
                    }
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
                    value={partner.aboutI}
                    onChange={(e) => partnerHandler("aboutI", e.target.value)}
                  ></textarea>
                </div>
                <div className="nextBtns intarest">
                  <div className="scipebtn" onClick={() => AlldataUpload()}>
                    skip
                  </div>
                  <div className="nextbtn" onClick={() => AlldataUpload()}>
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
