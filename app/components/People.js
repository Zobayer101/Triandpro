"use client";

import Image from "next/image";
import "../Design/People.css";
import { IoCameraOutline } from "react-icons/io5";
import varified from "../Image/varified.png";
import Novarified from "../Image/Novarified.png";

import { PiVideo } from "react-icons/pi";
// import { HiOutlineCheckBadge } from "react-icons/hi2";
import Imgsx from "../Image/notuser.png";
import { redirect, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loding from "./Loding";

const People = () => {
  const router = useRouter();
  const [page, SetPage] = useState(1);
  const [data, setData] = useState([]);
  const [hasMore, setHaseMore] = useState(true);
  const FetchingData = async () => {
    let Token = localStorage.getItem("Token");

    let url = `http://localhost:3300/api/user/infinitidata/retrive?page=${page}&limit=5`;
    let responce = await fetch(url, {
      method: "get",
      headers: { "Content-type": "application/json", Token },
    });
    let result = await responce.json();
    console.log(result);
    if (result.length == 0) {
      setHaseMore(false);
    }
    setData((pre) => [...pre, ...result]);
    SetPage((pre) => pre + 1);
  };
  useEffect(() => {
    let Token = localStorage.getItem("Token");
    if (JSON.parse(Token)) {
      FetchingData();
    } else {
      redirect("/Signup");
    }
  }, []);
  return (
    <div className="PeopleCon">
      <InfiniteScroll
        dataLength={data.length}
        hasMore={hasMore}
        next={FetchingData}
        loader={<Loding />}
        className="scrolling"
      >
        {data.map((value, index) => {
          return (
            <span key={index} className="cardx">
              {console.log(value)}
              <div className="CardPeople">
                <div className="VariviedIcon">
                  <Image
                    src={value.Varified ? varified : Novarified}
                    alt="varified.png"
                    className="Vfid"
                    title={
                      value.Varified ? "verified user" : "not verified user"
                    }
                  />
                </div>
                <div className="InfoSectioncard">
                  <div className="withCbtn">
                    <div className="NameAge">
                      {value.Name || "empty "} {value.Age || "no Data"}
                      {value.Online && <span className="actbtn"></span>}
                    </div>
                    <div className="photovideo">
                      <div className="Iphoto">
                        <IoCameraOutline className="cameraIconsD" />{" "}
                        <span className="picNumber"> {value.media_count}</span>
                      </div>
                      {/* <div className="Ivideo">
                        <PiVideo />
                        <span className="picNumber">9</span>
                      </div> */}
                    </div>
                    <div className="ChatBtn">
                      <div className="Cbtn">
                        <span
                          onClick={() => {
                            //  e.stopPropagation();
                            router.push(`/Inbox?id=${value.user_id}`);
                          }}
                          className="InboxLink"
                        >
                          chat now{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="withoutDtils"></div>
                </div>
                <Image
                  onClick={() => {
                    //  e.stopPropagation();
                    router.push(`/Profile?id=${value.user_id}`);
                  }}
                  src={
                    value.Profile
                      ? `http://localhost:3300/public/img/profile/${value.Profile}`
                      : Imgsx
                  }
                  alt="card.png"
                  width={99}
                  height={98}
                  className="imgsx"
                />
              </div>
            </span>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default People;
