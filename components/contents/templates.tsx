import { setRevalidateHeaders } from "next/dist/server/send-payload"
import React, { useContext, useState } from "react"
import { ResumeContext } from "../utilities/context/resume_context"

const Templates=()=>{
    const context = useContext(ResumeContext)
    return(
        <div className="w-full py-3 px-5">
            <div className="w-full grid grid-cols-5 gap-5">
                {[...Array(10)].map((item:any,key:any)=>{
                    return(
                        <div className="h-72 w-56 rounded-md bg-gradient-to-br from-fuchsia-600 to-indigo-500 p-1" key={key}>
                            <div className="h-full w-full rounded-md bg-white">

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Templates