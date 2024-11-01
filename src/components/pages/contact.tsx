/**
 * Page - Contact page-component
 * @author Denys Ostroverkh
 * @published 2024/07/25
 * @modified  2024/08/01
 */

"use client"
import { useState, useRef } from 'react'
import { ERROR, WARNING, SUCCESS, Status } from '@/libs/types'
import { PHONE_NUMBER, ADDRESS, EMAIL } from '@/libs/const'
import { visibleMask, hiddenMask } from '@/store/mask'
import { useDispatch } from "react-redux"
import { AppDispatch } from '@/store'
import { errorHandler } from '@/libs/methods'
import Image from "next/image"

export default function Main() {
  const dispatch = useDispatch<AppDispatch>() //Define dispatch

  /** Ref values */
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const nationalityRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  /** State values */
  const [status, setStatus] = useState<Status>()  //state - Status
  const [name, setName] = useState<string>("")  //state - Name
  const [email, setEmail] = useState<string>("")  //state - Email
  const [nationality, setNationality] = useState<string>("")  //state - Nationality
  const [type, setType] = useState<string>("order")  //state - Type
  const [message, setMessage] = useState<string>("")  //state - Message

  /** Handle functions */
  const handleName = (evt: React.ChangeEvent<HTMLInputElement>) => setName(evt.target.value)
  const handleEmail = (evt: React.ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)
  const handleNationality = (evt: React.ChangeEvent<HTMLInputElement>) => setNationality(evt.target.value)
  const handleType = (evt: React.ChangeEvent<HTMLSelectElement>) => setType(evt.target.value)
  const handleMessage = (evt: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(evt.target.value)

  /** Event functions */
  //Function for clicking submit button
  const submit = async () => {
    if (!name) {  //If no name
      nameRef.current?.focus()
      setStatus({ type: WARNING, description: "Please input your name" })
      return
    }

    if (!email) {  //If no email
      emailRef.current?.focus()
      setStatus({ type: WARNING, description: "Please input your email address" })
      return
    }

    if (!nationality) {  //if no nationality
      nationalityRef.current?.focus()
      setStatus({ type: WARNING, description: "Please input your nationality" })
      return
    }

    if (!message) { //if no message
      messageRef.current?.focus()
      setStatus({ type: WARNING, description: "Please input message to IWDL" })
      return
    }

    const formData = {  //Set data of email to send
      to: EMAIL,
      subject: `From ${name} / ${type} at Company website`,
      text: `I'm ${nationality}.
      My email is ${email}.
      
      ${message}`
    }

    dispatch(visibleMask()) //Visible mask before processing

    try { //Send email to server
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      dispatch(hiddenMask())  //Hidden mask after processing

      if (res.status && res.status === 200) {
        setStatus({ type: SUCCESS, description: "Email sent" })
        return
      } else
        setStatus({ type: ERROR, description: errorHandler(res.status) })
    } catch (err) {
      dispatch(hiddenMask())  //Hidden mask after processing
      setStatus({ type: ERROR, description: "Failed to send email. Please try again." })
      return
    }
  }

  return (<div className="page contact">
    <div className="group">
      <div className="welcome">Feel free to contact <b><i><u>IWDL</u></i></b> at any time</div>

      <div className="inputs">
        <input type="text" placeholder="Name" className="input" onChange={handleName} ref={nameRef} />
        <input type="text" placeholder="Email" className="input" onChange={handleEmail} ref={emailRef} />
        <input type="text" placeholder="Nationality" className="input" onChange={handleNationality}
          ref={nationalityRef} />
        <select className="input" onChange={handleType}>
          <option value="order">ORDER</option>
          <option value="application">APPLICATION</option>
          <option value="review">REVIEW</option>
          <option value="other">Other</option>
        </select>
        <textarea placeholder="How can I help you?" className="input" onChange={handleMessage}
          ref={messageRef}></textarea>
      </div>

      <div className={`status ${status?.type}`}>{status?.description}</div>

      <div className="buttons">
        <button onClick={submit}>SUBMIT</button>
      </div>
    </div>

    <div className='group'>
      <div className='contact'>
        <h1><b>&#9742; </b>{PHONE_NUMBER}</h1>
        <h1><b>&#9993; </b>{EMAIL}</h1>
        <h1><b>&#127987; </b>{ADDRESS}</h1>
      </div>

      <Image
        src={require(`@/assets/imgs/location-01.png`)}
        alt="..." width={1197} height={535}
      />
    </div>
  </div>)
}