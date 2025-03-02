/**
 * Page - Home component
 * @author Soft Voyager
 * @published 2024/07/25
 * @modified  2024/07/25
 */

"use client"
import Image from "next/image"
import { PHONE_NUMBER, EMAIL, ADDRESS } from "@/libs/const"

export default function Footer() {
  return (<footer className="xs3:flex-col xs2:flex-col xs:flex-row">
    <div className="social">
      <div>
        <div> {/** Linkedin icon*/}
          <a href="https://www.linkedin.com/in/taylor-fuller-85b166170/" target="_blank">
            <Image className="no-radius"
              src={require(`@/assets/imgs/linkedin.png`)} alt="..." width={64} height={64} />
          </a>
        </div>

        <div> {/** Skype icon*/}
          <a href="skype:?live:apollo21century?chat" target="_blank">
            <Image className="no-radius"
              src={require(`@/assets/imgs/skype.png`)}
              alt="..." width={64} height={64} />
          </a>
        </div>

        <div> {/** Telegram icon*/}
          <a href="https://t.me/Apollo21century" target="_blank">
            <Image className="no-radius"
              src={require(`@/assets/imgs/telegram.png`)}
              alt="..." width={64} height={64} />
          </a>
        </div>
      </div>

      <p><b><i><u>IWDL</u></i></b> © 2024 All rights reserved</p>
    </div>

    <div className="contact">
      <div><b>&#9742; </b>{PHONE_NUMBER}</div>  {/** Phone number */}
      <div><b>&#9993; </b>{EMAIL}</div> {/** Email address*/}
      <div><b>&#127987; </b>{ADDRESS}</div> {/** Address*/}
    </div>

    <Image className="no-radius"
      src={require(`@/assets/imgs/logo-03.png`)}
      alt="..." width={256} height={256}
    />  {/** Logo*/}
  </footer>)
}