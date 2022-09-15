import axios, { AxiosResponse } from "axios"
import React, { useContext, useEffect, useState } from "react"
import { ResumeContext } from "../utilities/context/resume_context"

const Resume_form=()=>{
    const context = useContext(ResumeContext)
    const [formStructure,setFormStructure] = useState({})
    const [formData,setFormData] = useState({})

    useEffect(()=>{
        axios.get(`/api/templates?id=${context.selected_template}`).then((res:AxiosResponse)=>{
            if(res.statusText == 'OK'){
                setFormStructure(res.data.formStructure)
            }
        })
    },[])

    return(
        <div className="w-full flex flex-col items-center justify-center">
           Resume_form
           {/* {formStructure.length > 0 && Object.entries(formStructure[0]).map((form:any,key:any)=>{
            return(
                <h1 key={key}>{form[1]}</h1>
            )
           })} */}
           <div className="w-full flex items-center justify-center space-x-5 pt-10">
                <button onClick={()=>context.handleCurrenrPosition('resume-templates')} className="py-2 px-6 rounded-md hover:bg-gradient-to-tl bg-gradient-to-br from-yellow-400 to-orange-600 text-white">Back</button>
                <button onClick={()=>context.handleCurrenrPosition('resume-preview')} className="py-2 px-4 rounded-md hover:bg-gradient-to-tl bg-gradient-to-br from-green-400 to-teal-600 text-white">Preview</button>
           </div>
        </div>
    )
}
export default Resume_form