/**
 * Page - Contact page-component
 * @author Jiners Enoheart
 * @published 2024/08/02
 * @modified  2024/08/02
 */

"use client"
import { db } from "@/libs/firebase"
import { useEffect, useState } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"

interface Blog {
  id: number,
  Title: string,
  Date: string,
  Description: string,
  Expand: boolean,
  Note: [],
}

export default function Main() {
  const [data, setData] = useState<Blog[]>([])
  const [visibleMask, setVisibleMask] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => { //Get data from Firestore as a MongoDB
      setVisibleMask(true)

      let id = 0
      try {
        const querySnapshot = await getDocs(query(
          collection(db, "Blogs"),
          orderBy('Date', 'desc')
        ))  //Get data from Firestore

        const docsData = querySnapshot.docs.map(doc => ({
          Expand: false, id: id++, ...doc.data()
        } as Blog)) //Make array from data received from DB

        setData(docsData.length > 0 ? docsData : [])
      } catch (err) {
        //console.log(err)
      }

      setVisibleMask(false)
    }
    fetchData()
  }, [])

  /** Function to show each blog entirely or  partially*/
  const expand = (id: number, type: boolean) => {
    data[id].Expand = type
    setData([...data])
  }

  let key = 0
  return (<>
    <div className="page blog flex flex-col items-center gap-0.5em">
      {data.length > 0 ?
        data.map(item => <div key={`${item.id}`} className="item w-full">
          <div className="title">{item.Title}</div>
          <div className="date">{item.Date}</div>
          <div className={`description ${item.Expand ? 'h-auto' : 'h-3em'}`}>
            {item.Description.split('<br>').map(content => !content ?
              <br key={`br-${key++}`}></br> :
              <h1 key={`h1-${key++}`}>{content}</h1>)}
          </div>
          <div className="bottom flex justify-end">
            <span onClick={() => expand(item.id, !item.Expand)}>
              {item.Expand ? "less" : "more"}
            </span>
          </div>
        </div>)
        : visibleMask ? "Loading..."
          : "No blog yet"}
    </div>

    <div className={`mask ${visibleMask ? 'flex' : 'hidden'}`}>
      <label>...</label>
    </div>
  </>)
}