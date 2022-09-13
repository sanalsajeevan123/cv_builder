import { useContext } from "react"
import { ResumeContext } from "../utilities/context/resume_context"

const Header=()=>{
    const context = useContext(ResumeContext)
    return(
        <div className="w-full pb-0.5 bg-gradient-to-r from-yellow-400 to-orange-600">
            <div className="w-full flex items-center justify-between bg-cyan-700">
                <div className="w-30 h-20 w-44 flex items-center justify-center font-semibold text-white">
                    <button onClick={()=>context.handleCurrenrPosition('home')}>svg logo</button>
                </div>
                <div className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                    Resume Builder
                </div>
                <div className="flex items-center justify-center pr-16 font-semibold text-white">
                    <button onClick={()=>context.handleCurrenrPosition('home')}>Home</button>
                </div>
            </div>
        </div>
    )
}
export default Header