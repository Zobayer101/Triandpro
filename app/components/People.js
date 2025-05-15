"use client";

import Image from "next/image";
import "../Design/People.css";
import { IoCameraOutline } from "react-icons/io5";
import varified from "../Image/varified.png";
import { PiVideo } from "react-icons/pi";
// import { HiOutlineCheckBadge } from "react-icons/hi2";
import Imgsx from "../Image/pexels-ali-pazani-2921424.jpg";
import { redirect, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";
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
        loader={<h2>Loding...</h2>}
        className="scrolling"
      >
        {data.map((value, index) => {
          return (
            <span key={index} className="cardx">
              <div className="CardPeople">
                <div className="VariviedIcon">
                  <Image src={varified} alt="varified.png" className="Vfid" />
                </div>
                <div className="InfoSectioncard">
                  <div className="withCbtn">
                    <div className="NameAge">
                      Agatha,{""}58 <span className="actbtn"></span>
                    </div>
                    <div className="photovideo">
                      <div className="Iphoto">
                        <IoCameraOutline />{" "}
                        <span className="picNumber"> 39</span>
                      </div>
                      <div className="Ivideo">
                        <PiVideo />
                        <span className="picNumber">9</span>
                      </div>
                    </div>
                    <div className="ChatBtn">
                      <div className="Cbtn">
                        <span
                          onClick={() => {
                            //  e.stopPropagation();
                            router.push("/Inbox");
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
                    router.push("/Profile");
                  }}
                  src={Imgsx}
                  alt="card"
                  className="imgsx"
                  placeholder="blur"
                  loading="lazy"
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
