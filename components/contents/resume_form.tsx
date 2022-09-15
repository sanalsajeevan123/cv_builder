import axios, { AxiosResponse } from "axios"
import React, { useContext, useEffect, useState } from "react"
import Generate from "../form_field_generator/generate"
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
           <div className="w-full">
                <div className="w-full text-center text-2xl text-white py-3 font-bold">
                    <h1>Rsume Form</h1>
                </div>
                <div className="w-full">
                {Object.values(formStructure).length > 0 && Object.entries(formStructure).map((section:any,key:any)=>{
                    return(
                        <div className="border w-full flex px-3" key={key}>
                            <div className="w-4/12 space-y-1 border-r py-4">
                                <h1 className="text-lg font-bold">{section[1].section_name}</h1>
                                <p className="text-xs text-slate-200">{section[1].description}</p>
                            </div>
                            <div className="w-8/12 space-y-2 py-4">
                                {Object.entries(section[1].fields).map((field:any,fieldKey:any)=>{
                                    return(
                                        <Generate
                                            fieldName={field[0]}
                                            field={field[1]}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                </div>
           </div>
           <div className="w-full flex items-center justify-center space-x-5 pt-10">
                <button onClick={()=>context.handleCurrenrPosition('resume-templates')} className="py-2 px-6 rounded-md hover:bg-gradient-to-tl bg-gradient-to-br from-yellow-400 to-orange-600 text-white">Back</button>
                <button onClick={()=>context.handleCurrenrPosition('resume-preview')} className="py-2 px-4 rounded-md hover:bg-gradient-to-tl bg-gradient-to-br from-green-400 to-teal-600 text-white">Preview</button>
           </div>
        </div>
    )
}
export default Resume_form