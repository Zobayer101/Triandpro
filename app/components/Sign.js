"use client";

import Logo from "../Image/Tirandpro.png";
import Image from "next/image";
import { SlUserFemale } from "react-icons/sl";
import { GrUserManager } from "react-icons/gr";
import "../Design/BgFrom.css";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Login from "./Login";

const Sign = () => {
  const [status, setStatus] = useState("");
  const [signup, setSignup] = useState({
    email: "",
    pass: "",
    Igender: "",
    wgender: "",
    firstR: "",
    lastR: "",
  });
  const [err, setErr] = useState(false);
  const [ldata, setLdata] = useState({ email: "", pass: "" });

  useEffect(() => {
    let Token = localStorage.getItem("Token");
    let Info = localStorage.getItem("Info");
    if (Token && Info) {
      redirect("/");
    }
  }, []);
  const inputControll = (propaty, value) => {
    setSignup((pre) => ({
      ...pre,
      [propaty]: value,
    }));
  };
  const LoginInputControll = (propaty, value) => {
    setLdata((pre) => ({
      ...pre,
      [propaty]: value,
    }));
  };
  const signupSubmit = async () => {
    if (
      signup.email &&
      signup.pass.length >= 5 &&
      signup.Igender &&
      signup.wgender
    ) {
      let url = "  http://localhost:3300/api/insart/signup";
      let response = await fetch(url, {
        method: "post",
        body: JSON.stringify(signup),
        headers: {
          "Content-type": "application/json",
        },
      });
      let result = await response.json();

      setErr(false);
      if (result) {
        localStorage.setItem("Info", JSON.stringify(result.info));
        localStorage.setItem("Token", JSON.stringify(result.Token));

        redirect("/");
      }
    } else {
      setErr(true);
    }
  };
  const LoginSubmit = async () => {
    try {
      let url = `http://localhost:3300/api/data/login`;
      let responce = await fetch(url, {
        method: "post",
        body: JSON.stringify(ldata),
        headers: {
          "Content-type": "application/json",
        },
      });
      let result = await responce.json();
      if (result) {
        localStorage.setItem("Info", JSON.stringify(result.info));
        localStorage.setItem("Token", JSON.stringify(result.Token));

        redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {status == "login" ? (
        <div className="BgFrom">
          <div className="Imgs">
            <Image src={Logo} alt="Tirandpro" width={80} />
          </div>
          <div className="Boldtext">Introducing Tirandpro</div>
          <div className="littelText">
            Connecting singles to their ideal partner
          </div>
          <div className="EmailSection">
            <input
              type="email"
              placeholder="Enter your email"
              className="emailIn"
              value={ldata.email}
              onChange={(e) => {
                LoginInputControll("email", e.target.value);
              }}
            />
            {/* <p className="errmsg">* something want wrong !</p> */}
          </div>
          <div className="PassSection">
            <input
              type="password"
              placeholder="Enter your password"
              className="emailIn"
              value={ldata.pass}
              onChange={(e) => {
                LoginInputControll("pass", e.target.value);
              }}
            />
            {/* <p className="errmsg">* wrong password !</p> */}
          </div>

          <div className="Chat">
            <div className="LgButton " onClick={() => setStatus("")}>
              cancil{" "}
            </div>
            <div
              className="Sgbutton Login"
              onClick={(() => setStatus("signup"), LoginSubmit)}
            >
              Login
            </div>
          </div>

          <div className="title">
            <div className="tX">
              By clicking “Chat now” or “Sign in via Google” you agree with the
              Terms & Conditions, Privacy Policy, and Content Policy.
            </div>
          </div>
        </div>
      ) : status == "signup" ? (
        <div className="BgFrom Mheignt">
          <div className="Imgs">
            <Image src={Logo} alt="Tirandpro" width={80} />
          </div>

          <div className="EmailSection">
            <input
              type="email"
              placeholder="Enter your email"
              className="emailIn"
              value={signup.email}
              onChange={(e) => inputControll("email", e.target.value)}
            />
          </div>
          <div className="PassSection">
            <input
              type="password"
              placeholder="Enter your password"
              className="emailIn "
              value={signup.pass}
              onChange={(e) => inputControll("pass", e.target.value)}
            />
          </div>
          <div className="Iama">
            <span className="TextBold">I am a:</span>{" "}
            {signup.Igender == "male" ? (
              <span
                className="male yescolor"
                onClick={() => inputControll("Igender", "female")}
              >
                <GrUserManager />
              </span>
            ) : (
              <span
                className="male"
                onClick={() => inputControll("Igender", "male")}
              >
                <GrUserManager />
              </span>
            )}
            {signup.Igender == "female" ? (
              <span
                className="female yescolor"
                onClick={() => inputControll("Igender", "male")}
              >
                <SlUserFemale />
              </span>
            ) : (
              <span
                className="female"
                onClick={() => inputControll("Igender", "female")}
              >
                <SlUserFemale />
              </span>
            )}
            <span className="Gap"></span>
            <span className="TextBold">Seeking a:</span>
            {signup.wgender == "female" ? (
              <span
                className="female yescolor"
                onClick={() => inputControll("wgender", "male")}
              >
                <SlUserFemale />
              </span>
            ) : (
              <span
                className="female"
                onClick={() => inputControll("wgender", "female")}
              >
                <SlUserFemale />
              </span>
            )}
            {signup.wgender == "male" ? (
              <span
                className="male yescolor"
                onClick={() => inputControll("wgender", "female")}
              >
                <GrUserManager />
              </span>
            ) : (
              <span
                className="male"
                onClick={() => inputControll("wgender", "male")}
              >
                <GrUserManager />
              </span>
            )}
          </div>
          <div className="Age">
            <span className="TextBold">Between ages:</span>
            <select
              value={signup.firstR}
              className="optionSelect"
              onChange={(e) => inputControll("firstR", e.target.value)}
            >
              <option value={"18"}>18</option>
              <option value={"20"}>20</option>
              <option value={"25"}>25</option>
              <option value={"30"}>30</option>
              <option value={"35"}>35</option>
              <option value={"40"}>40</option>
              <option value={"45"}>45</option>
              <option value={"50"}>50</option>
              <option value={"55"}>55</option>
              <option value={"60"}>60</option>
              <option value={"65"}>65</option>
              <option value={"70"}>70</option>
              <option value={"75"}>75</option>
            </select>{" "}
            <span className="TextBold">and</span>
            <select
              value={signup.lastR}
              className="optionSelect"
              onChange={(e) => inputControll("lastR", e.target.value)}
            >
              <option value={"80"}>80</option>
              <option value={"75"}>75</option>
              <option value={"70"}>70</option>
              <option value={"65"}>65</option>
              <option value={"60"}>60</option>
              <option value={"55"}>55</option>
              <option value={"50"}>50</option>
              <option value={"45"}>45</option>
              <option value={"40"}>40</option>
              <option value={"35"}>35</option>
              <option value={"30"}>30</option>

              <option value={"25"}>25</option>
              <option value={"20"}>20 </option>
            </select>
          </div>
          {err && <p className="requiredmsg">* all info required !</p>}
          <div className="Chat">
            <div className="LgButton" onClick={() => setStatus("")}>
              cancil{" "}
            </div>
            <div
              className="Sgbutton Login"
              onClick={(() => setStatus("signup"), signupSubmit)}
            >
              signup
            </div>
          </div>

          <div className="title">
            <div className="tX">
              By clicking “Chat now” or “Sign in via Google” you agree with the
              Terms & Conditions, Privacy Policy, and Content Policy.
            </div>
          </div>
        </div>
      ) : (
        <div className="BgFrom">
          <div className="Imgs">
            <Image src={Logo} alt="Tirandpro" width={80} />
          </div>
          <div className="Boldtext">Introducing Tirandpro</div>
          <div className="littelText">
            Connecting singles to their ideal partner
          </div>
          <div className="Iama">
            <span className="TextBold">I am a:</span>{" "}
            {signup.Igender == "male" ? (
              <span
                className="male yescolor"
                onClick={() => inputControll("Igender", "female")}
              >
                <GrUserManager />
              </span>
            ) : (
              <span
                className="male"
                onClick={() => inputControll("Igender", "male")}
              >
                <GrUserManager />
              </span>
            )}
            {signup.Igender == "female" ? (
              <span
                className="female yescolor"
                onClick={() => inputControll("Igender", "male")}
              >
                <SlUserFemale />
              </span>
            ) : (
              <span
                className="female"
                onClick={() => inputControll("Igender", "female")}
              >
                <SlUserFemale />
              </span>
            )}
            <span className="Gap"></span>
            <span className="TextBold">Seeking a:</span>
            {signup.wgender == "female" ? (
              <span
                className="female yescolor"
                onClick={() => inputControll("wgender", "male")}
              >
                <SlUserFemale />
              </span>
            ) : (
              <span
                className="female"
                onClick={() => inputControll("wgender", "female")}
              >
                <SlUserFemale />
              </span>
            )}
            {signup.wgender == "male" ? (
              <span
                className="male yescolor"
                onClick={() => inputControll("wgender", "female")}
              >
                <GrUserManager />
              </span>
            ) : (
              <span
                className="male"
                onClick={() => inputControll("wgender", "male")}
              >
                <GrUserManager />
              </span>
            )}
          </div>
          <div className="Age">
            <span className="TextBold">Between ages:</span>
            <select
              value={signup.firstR}
              className="optionSelect"
              onChange={(e) => inputControll("firstR", e.target.value)}
            >
              <option value={"18"}>18</option>
              <option value={"20"}>20</option>
              <option value={"25"}>25</option>
              <option value={"30"}>30</option>
              <option value={"35"}>35</option>
              <option value={"40"}>40</option>
              <option value={"45"}>45</option>
              <option value={"50"}>50</option>
              <option value={"55"}>55</option>
              <option value={"60"}>60</option>
              <option value={"65"}>65</option>
              <option value={"70"}>70</option>
              <option value={"75"}>75</option>
            </select>{" "}
            <span className="TextBold">and</span>
            <select
              value={signup.lastR}
              className="optionSelect"
              onChange={(e) => inputControll("lastR", e.target.value)}
            >
              <option value={"80"}>80</option>
              <option value={"75"}>75</option>
              <option value={"70"}>70</option>
              <option value={"65"}>65</option>
              <option value={"60"}>60</option>
              <option value={"55"}>55</option>
              <option value={"50"}>50</option>
              <option value={"45"}>45</option>
              <option value={"40"}>40</option>
              <option value={"35"}>35</option>
              <option value={"30"}>30</option>

              <option value={"25"}>25</option>
              <option value={"20"}>20 </option>
            </select>
          </div>
          <div className="Google">
            <SessionProvider>
              <Login data={signup} />
            </SessionProvider>
            {/* <div className="gButton">google</div> */}
          </div>
          <div className="Chat">
            <div className="LgButton mybtn" onClick={() => setStatus("login")}>
              Login{" "}
            </div>
            <div className="Sgbutton mybtn" onClick={() => setStatus("signup")}>
              Signin
            </div>
          </div>

          <div className="title">
            <div className="tX">
              By clicking “Chat now” or “Sign in via Google” you agree with the
              Terms & Conditions, Privacy Policy, and Content Policy.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Sign;
