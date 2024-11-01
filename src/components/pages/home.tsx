/**
 * Page - Home page-component
 * @author Denys Ostroverkh
 * @published 2024/07/25
 * @modified  2024/08/04
 */

"use client";
import Image from "next/image";
import {
  projectCompleted,
  clientSaitsfied,
  monthlyEarning,
  proudRenderCnt,
  proudRenderSnd,
} from "@/libs/const";
import { useEffect, useState } from "react";

export default function Main() {
  /** Render up-counting number boad */
  const [intervals, setIntervals] = useState<number[]>([0, 0, 0, 0]);
  useEffect(() => {
    if (intervals[0] >= projectCompleted) {
      setTimeout(() => {
        setIntervals([0, 0, 0, 0]);
      }, 5000);
      return;
    }

    const timer = setTimeout(() => {
      const nextIndex = intervals[3] + 1;
      setIntervals([
        Math.max(Math.floor((projectCompleted / proudRenderCnt) * nextIndex)),
        Math.max(Math.floor((clientSaitsfied / proudRenderCnt) * nextIndex)),
        Math.max(Math.floor((monthlyEarning / proudRenderCnt) * nextIndex)),
        nextIndex,
      ]);
    }, (proudRenderSnd * 1000) / proudRenderCnt);
  }, [intervals]);

  return (
    <div className="page home">
      <div className="mb-2em">
        <Image
          src={require(`@/assets/imgs/corner-room-02.png`)}
          alt="..."
          width={2133}
          height={933}
        />

        <Image
          src={require(`@/assets/imgs/corner-room-03.png`)}
          alt="..."
          width={2133}
          height={933}
        />

        <Image
          src={require(`@/assets/imgs/corner-room-04.png`)}
          alt="..."
          width={2133}
          height={933}
        />

        <Image
          src={require(`@/assets/imgs/corner-room-05.png`)}
          alt="..."
          width={2133}
          height={933}
        />
      </div>

      <div className="pad">
        <div className="item">
          <h1>
            PROJECT<br></br>COMPLETED
          </h1>
          <p>{`${intervals[0]}`}</p>
        </div>

        <div className="item">
          <h1>
            CLIENTS<br></br>SATISFIED
          </h1>
          <p>{`${intervals[1]}`}</p>
        </div>

        <div className="item">
          <h1>Monthly earnings</h1>
          <p>${`${intervals[2]}`}K</p>
        </div>
      </div>

      <div className="description xs3:flex-col xs2:flex-col xs:flex-col sm:flex-col md:flex-row top-border">
        <h1 className="text">
          <b>
            <i>
              <u>IWDL</u>
            </i>
          </b>{" "}
          is a software solution focused on inspiring everyone who loves living
          in current digital age to improve their lives. We are striving day to
          day to become one of the top 100 software companies. Based in{" "}
          <b>Houghton, Michigan, USA,</b> we welcome everyday talented
          individuals with creative ideas, software and business skills, as well
          as investors, to help us make our society better through digital
          technologies.
        </h1>

        <Image
          src={require(`@/assets/imgs/logo-02.png`)}
          alt="..."
          width={256}
          height={256}
        />
      </div>

      <div className="solutions xs3:flex-col xs2:flex-col xs:flex-col sm:flex-row">
        <div>
          <Image
            src={require(`@/assets/imgs/corner-room-01.jpg`)}
            alt="..."
            width={700}
            height={700}
          />
        </div>

        <div>
          <Image
            src={require(`@/assets/imgs/dev range.png`)}
            alt="..."
            width={600}
            height={450}
          />

          <h1>
            <b>
              <i>
                <u>IWDL</u>
              </i>
            </b>{" "}
            specializes in:
          </h1>
          <h2>Integrating AI functionalities into diverse apps</h2>
          <h2>Building full-stack web services</h2>
          <h2>Creating 2D/3D games for education</h2>
          <h2>Launching smart contracts / blockchain solutions</h2>
          <h2>Developing a variety of mobile apps</h2>
          <h2>Releasing various desktop apps</h2>
          <h1>and more</h1>
        </div>
      </div>

      <div className="tagline">
        <Image
          src={require(`@/assets/imgs/tagline.png`)}
          alt="..."
          width={256}
          height={256}
        />

        <div className="text-right">
          <div className="title">Our taglines are</div>
          <h1>The better our customer feel, the sooner we succeed</h1>
          <h1>The more our customers earn, the bigger we get</h1>
        </div>
      </div>

      <Image
        src={require(`@/assets/imgs/location-01.png`)}
        alt="..."
        width={1280}
        height={550}
      />

      <h1 className="text mt-1em top-border">
        Our satellite offices are now in <b>New York</b>, <b>Paris</b>,{" "}
        <b>Warsaw</b>, and <b>Tokyo</b>. However, we are open 24 / 7 to
        international customers, talents, and investors from around the world,
        and we are working to expand our offices to every country.
      </h1>

      <Image
        className="mt-1em"
        src={require(`@/assets/imgs/satellite.png`)}
        alt="..."
        width={1280}
        height={300}
      />
    </div>
  );
}
