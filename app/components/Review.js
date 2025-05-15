"use client";
import Image from "next/image";
import "../Design/signup.css";
import PersonOne from "../Image/person2.jpg";
import PersonTow from "../Image/person3.jpg";
import PersonTheree from "../Image/person5.jpg";
import { useState } from "react";
const Review = () => {
  const [border, setBorder] = useState("");
  return (
    <div className="Review">
      <div className="ReviewHad">
        <Image
          src={PersonTow}
          alt="person.png"
          className={border == "One" ? "myavatarIcon Border" : "myavatarIcon "}
          onClick={() => setBorder("One")}
        />
        <Image
          src={PersonOne}
          alt="person.png"
          className={border == "Tow" ? "myavatarIcon Border" : "myavatarIcon "}
          onClick={() => setBorder("Tow")}
        />
        <Image
          src={PersonTheree}
          alt="person.png"
          className={
            border == "Three" ? "myavatarIcon Border" : "myavatarIcon "
          }
          onClick={() => setBorder("Three")}
        />
      </div>
      {border == "One" ? (
        <div className="Bodyreview">
          <div className="BoldText">Good Girls</div>
          <div className="smalltext">
            &#34;emotion plane what is my life is hard this is also fiting good
            thisg so for havate how much folower&#34;
          </div>
        </div>
      ) : border == "Tow" ? (
        <div className="Bodyreview">
          <div className="BoldText">Good Boy</div>
          <div className="smalltext">
            &#34;emotion 99 % amercan man this is also fiting good thisg so for
            havate how much folower&#34;
          </div>
        </div>
      ) : border == "Three" ? (
        <div className="Bodyreview">
          <div className="BoldText">Good Girls2</div>
          <div className="smalltext">
            &#34;emotion man amercan man this is also fiting good thisg so for
            havate how thure folower&#34;
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Review;
