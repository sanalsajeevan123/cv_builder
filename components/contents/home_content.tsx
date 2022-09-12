import Link from "next/link"

const HomeContents=()=>{
    return(
        <div className="w-full flex flex-col items-center justify-center">
           <div className="w-80 bg-transparent text-white text-center py-32">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cupiditate cumque consequuntur aut maxime, doloribus voluptates? Itaque possimus illum nemo cupiditate ipsum ratione quidem amet animi aperiam? Iste, dolore distinctio.</p>
           </div>
           <button className="py-2 px-4 rounded-md hover:bg-gradient-to-tl bg-gradient-to-br from-yellow-400 to-orange-600 text-white">Get Started</button>
        </div>
    )
}
export default HomeContents