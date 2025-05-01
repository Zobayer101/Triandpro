import Image from "next/image";
import Profiles from "../Image/image.jpg";
import cover from "../Image/Comfortzone.png";
import { FaRegStar } from "react-icons/fa";
import varified from "../Image/varified.png";
import { PiGift } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa6";

const Gprofile = () => {
  return (
    <div className="ProCon">
      <div className="MAhad">
        <div className="CoverSection">
          <div className="Nextlayer">
            <div className="bfhead">
              <div className="BackBtn">Back</div>
              <div className="FollowBtn">
                <FaRegStar />
              </div>
            </div>
            <div className="mainProphoto">
              <div className="ProImgsf">
                <Image
                  src={Profiles}
                  alt="profile"
                  placeholder="blur"
                  loading="lazy"
                  
                  className="proImagst"
                />
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
            src={cover}
            alt="cover"
            placeholder="blur"
            loading="lazy"
            
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
          <div className="myIntarastTex"> My Interests</div>
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
          <div className="TheXhad">About Me</div>
          <div className="texeBodys">
            <div className="infoin">
              Live in : <span className="Boldtexts">California City, USA</span>{" "}
            </div>
            <div className="infoin">
              Live in : <span className="Boldtexts">California City, USA</span>{" "}
            </div>
            <div className="infoin">
              Work as :{" "}
              <span className="Boldtexts">International business student</span>{" "}
            </div>
            <div className="infoin">
              Know :{" "}
              <span className="Boldtexts">English, Spanish, Portuguese</span>{" "}
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
          <div className="TheXhad">I'm Looking for</div>
          <div className="Iwantto">Man, 18 years and older</div>
          <div className="Lokingfordiscription">
            My perspective on life is very complex. From my father I learned by
            heart that each day must be taken advantage of because the world was
            brought to live and experience. I love to travel and live wonderful
            experiences. I live in the city of angels and I am a woman full of
            blessings. I live with my sister and work on my own digital business
            from home while I finish studying international business. I love to
            go out and live life to the fullest on the weekends leaving Los
            Angeles with the idea of ​​traveling, experiencing and getting to
            know the world around me. I am 23 years old and I am a super mature
            and realistic woman, a super intelligent woman based on my life
            experiences with my feet on the ground, I speak 3 languages, I have
            had 3 spiritual retreats in my life on my travels around the world
            getting to know wonderful cultures. I hope that God continues to
            give me abundance, life and health to continue getting to know the
            world with my life partner when I find him...
          </div>
        </div>
      </div>
      <div className="bl"></div>
    </div>
  );
};
export default Gprofile;
