/**
 * Header component in Layout
 * @author Denys Ostroverkh
 * @published 2024/07/24
 * @modified  2024/08/02
 */

"use client"
import { useSelector } from 'react-redux'
import HOME from "@/components/pages/home"
import CONTACT from "@/components/pages/contact"
import SERVICE from "@/components/pages/service"
import PORTFOLIO from "@/components/pages/portfolio"
import BLOG from "@/components/pages/blog"
import ABOUT from "@/components/pages/about"
import { RootState } from '@/store'


interface Props {
  uri: string
}

const Main: React.FC<Props> = ({ uri }) => {
  const headerVisibility = useSelector((state: RootState) => state.header.visible)
  const visibleMask = useSelector((state: RootState) => state.mask.visible)

  return <main className={`sm:mt-3em
  ${headerVisibility ? 'xs3:mt-11em xs2:mt-11em xs:mt-11em' :
      'xs3:mt-3em xs2:mt-3em xs:mt-3em'}`}>
    <div className="celetrate"> {/** ANNOTATION OF COMPANY NAME */}
      Welcome to I<b>nspiration</b> W<b>ith</b> D<b>igital</b> L<b>iving</b>
    </div>

    <div className="type">SOFTWARE SOLUTION</div> {/** COMPANY TYPE */}

    {uri === 'home' ? <HOME /> :  /* Page routing*/
      uri === 'contact' ? <CONTACT /> :
        uri === 'about' ? <ABOUT /> :
          uri === 'service' ? <SERVICE /> :
            uri === 'portfolio' ? <PORTFOLIO /> :
              uri === 'blog' ? <BLOG /> :
                <div className="page not-found">NOT FOUND</div>}

    <div className={`mask ${visibleMask ? 'flex' : 'hidden'}`}>
      <span>&#9203;</span>
    </div>
  </main>
}

export default Main