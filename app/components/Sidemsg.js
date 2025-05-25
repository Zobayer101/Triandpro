"use client";

import Image from "next/image";
import "../Design/Sidemsg.css";
import Profiles from "../Image/notuser.png";
import { TbMessageHeart } from "react-icons/tb";
import { useEffect } from "react";
import { useGlobalContext } from "../context/GobalContext";
const Sidemsg = () => {
  const { setConversation } = useGlobalContext();
  useEffect(() => {
    (async () => {
      let Token = localStorage.getItem("Token");
      if (Token) {
        let url = "http://localhost:3300/api/get/conversation/dataread/user";
        let responce = await fetch(url, {
          method: "get",
          headers: { "Content-type": "application/json", Token },
        });
        let result = await responce.json();
        console.log(result);
      }
    })();
  }, []);
  return (
    <div className="SideCon">
      <div className="ChatReq">Chat requst</div>
      <div className="ChatCostomer">
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
        <div className="Req">
          <div className="OtherPro">
            <div className="OnlineS"></div>
            <Image
              src={Profiles}
              alt="pro.png"
              placeholder="blur"
              className="proI"
            />
          </div>
          <div className="Namewithage">
            <div className="Namesx">
              <div className="nas">samina, 20</div>
              <div className="Replay">Replay</div>
            </div>
            <div className="Msgx">
              <TbMessageHeart />
              👋👋 I hope you're doing very well right now. I don't want to
              inter…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidemsg;
