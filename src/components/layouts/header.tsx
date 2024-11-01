/**
 * Header component in Layout
 * @author Jiners Enoheart
 * @published 2024/07/23
 * @modified  2024/07/25
 */

"use client"
import Image from "next/image"
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { visibleHeader, hiddenHeader } from '@/store/header'
import { useDispatch } from "react-redux"
import { AppDispatch } from '@/store'

interface Props {
  uri: string
}

const Header: React.FC<Props> = ({ uri }) => {
  const dispatch = useDispatch<AppDispatch>() //Define dispatch
  const headerVisibility = useSelector((state: RootState) => state.header.visible)

  const onVisibleHeader = () => {  //Function to alternative visible of sub-header true/false
    headerVisibility ? dispatch(hiddenHeader()) : dispatch(visibleHeader())
  }

  return <>
    <header className="">
      <div className="label">IWDL</div> {/** IWDL - Company name */}

      <div className="tab-alternative xs:block sm:hidden" onClick={onVisibleHeader}>&#9776;</div>

      <div className="tabs xs3:hidden xs2:hidden xs:hidden sm:flex">
        <a className={uri === 'home' ? 'selected' : ''} href="/home">HOME</a>
        <a className={uri === 'service' ? 'selected' : ''} href="/service">SERVICE</a>
        <a className={uri === 'portfolio' ? 'selected' : ''} href="/portfolio">PORTFOLIO</a>
        <a className={uri === 'blog' ? 'selected' : ''} href="/blog">BLOG</a>
        <a className={uri === 'about' ? 'selected' : ''} href="/about">ABOUT</a>
        <a className={uri === 'contact' ? 'button selected' : 'button'} href="/contact">CONTACT</a>
      </div>

      <div className="logo">
        <Image className='no-radius'
          src={require(`@/assets/imgs/logo-01.png`)}
          alt="..." width={256} height={190}
        /> {/** Logo */}
      </div>
    </header>

    <div className={`${headerVisibility ? 'xs3:flex xs2:flex xs:flex' : 'xs3:hidden xs2:hidden xs:hidden'} 
                      sm:hidden tabs-small small-header`}>
      <a className={uri === 'home' ? 'selected' : ''} href="/home">HOME</a>
      <a className={uri === 'service' ? 'selected' : ''} href="/service">SERVICE</a>
      <a className={uri === 'portfolio' ? 'selected' : ''} href="/portfolio">PORTFOLIO</a>
      <a className={uri === 'blog' ? 'selected' : ''} href="/blog">BLOG</a>
      <a className={uri === 'about' ? 'selected' : ''} href="/about">ABOUT</a>
      <a className={uri === 'contact' ? 'selected' : ''} href="/contact">CONTACT</a>
    </div>
  </>
}

export default Header