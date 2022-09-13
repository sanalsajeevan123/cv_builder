import { useContext } from "react"
import { ResumeContext } from "../utilities/context/resume_context"
import HomeContents from "./home_content"
import Resume_form from "./resume_form"
import Resume_preview from "./resume_preview"
import Templates from "./templates"

const Contents=()=>{
    const context = useContext(ResumeContext)
    return(
        <div className="w-full">
            {context.current_position == "home" && <HomeContents/>}
            {context.current_position == "resume-templates" && <Templates/>}
            {context.current_position == "resume-form" && <Resume_form/>}
            {context.current_position == "resume-preview" && <Resume_preview/>}
        </div>
    )
}
export default Contents