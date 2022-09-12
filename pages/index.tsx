import Contents from "../components/contents/contents"
import Header from "../components/contents/head"
import Head from'next/head'

const CvBuilder=()=>{
 return(
    <>
      <Head>
        <title>Resume Builder</title>
        <div className="w-full h-screen bg-gradient-to-b from-cyan-700 to-teal-600">
          <Header/>
          <Contents/>
        </div>
      </Head>
    </>
 ) 
}
export default CvBuilder