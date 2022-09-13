import React, { useContext } from "react"
import { ResumeContext } from "../utilities/context/resume_context"

const Templates=()=>{
    const context = useContext(ResumeContext)
    return(
        <div className="w-full flex flex-col items-center justify-center">
           Templates
        </div>
    )
}
export default Templates