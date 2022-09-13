import React, { useContext } from "react"
import { ResumeContext } from "../utilities/context/resume_context"

const Resume_form=()=>{
    const context = useContext(ResumeContext)
    return(
        <div className="w-full flex flex-col items-center justify-center">
           Resume_form
        </div>
    )
}
export default Resume_form