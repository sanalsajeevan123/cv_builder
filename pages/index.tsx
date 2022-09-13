import React from "react"
import Header from "../components/contents/head"
import Head from'next/head'
import Contents from "../components/contents/contents"

const CvBuilder=()=>{
 return(
    <>
      <Head>
        <title>Resume Builder</title>
      </Head>
      <div className="w-full h-screen bg-gradient-to-b from-cyan-700 to-teal-600">
        <Header/>
        <Contents/>
      </div>
    </>
 ) 
}
export default CvBuilder