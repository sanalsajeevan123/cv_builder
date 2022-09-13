import React, { useContext, useEffect, useState } from "react"
import { ResumeContext } from "../utilities/context/resume_context"
import axios, { AxiosResponse } from 'axios'
import Image from "next/image"

const Templates=()=>{
    const context = useContext(ResumeContext)
    const [templates,setTemplates] = useState([])

    useEffect(()=>{
        axios.get(`/api/templates`).then((res:AxiosResponse)=>{
            if(res.statusText == "OK"){
                setTemplates(res.data)
            }
        })
    },[])

    return(
        <div className="w-full px-5">
            <div className="w-full flex items-center justify-center py-8">
                <div className="w-1/3 text-center text-white font-semibold">
                    <h1>Create a professional resume with our free resume templates. Create your new resume in less than 5 minutes with our Resume Builder.<p className={`font-bold ${context.selected_template !== undefined ? `text-cyan-700` : `text-yellow-400 `}`}>choose one to continue</p></h1>
                </div>
            </div>
            <div className="w-full grid grid-cols-5 gap-20">
                {templates.map((item:any,key:any)=>{
                    return(
                        <div onClick={()=>context.handleTemplateSelection(item.id)} className={`h-72 w-56 rounded-md bg-gradient-to-br hover:shadow-md ${context.selected_template === item.id ? `from-yellow-400 to-orange-600` : `from-fuchsia-600 to-indigo-500`} p-1 cursor-pointer`} key={item.id}>
                            <div className="h-full w-full rounded-md bg-slate-200 relative">
                                <Image
                                    src={`/${item.image}`}
                                    alt="resume"
                                    layout="fill"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full flex items-center justify-center pt-10">
                {context.selected_template !== undefined && <button onClick={()=>context.handleCurrenrPosition('resume-form')} className="py-2 px-4 rounded-md hover:bg-gradient-to-tl bg-gradient-to-br from-yellow-400 to-orange-600 text-white">Continue</button>}
            </div>
        </div>
    )
}
export default Templates