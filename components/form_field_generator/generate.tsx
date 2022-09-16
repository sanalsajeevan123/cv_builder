import React from "react";

type MyProps = {
    fieldName:string
    field:{[x:string]:any}
}

const Generate=(props:MyProps)=>{
    switch(props.field.type){
        case "text" :
            return(
                <div className="w-full flex items-center justify-center space-y-0.5">
                    <div className="w-11/12 relative">
                        <input type="text" className="w-full bg-transparent focus:outline-none p-2 border focus:border-2 focus:border-sky-400 focus:shadow-md rounded-md peer" name={props.fieldName} id={props.fieldName} autoComplete="off"/>
                        <label htmlFor={props.fieldName} className={`absolute left-2 top-2 cursor-text peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-sky-400 peer-focus:text-white peer-focus:px-2 peer-focus:rounded-md transform duration-300`}>{props.field.label}</label>
                        {/* <p className={`${props.fieldName}_error`}>{'error'}</p> */}
                        <p className="text-xs text-white">{props.field.description}</p>
                    </div>
                </div>
            )
            
        case "textarea" :
            return(
                <div className="w-full flex items-center justify-center space-y-0.5">
                    <div className="w-11/12 relative">
                        <input type="text" className="w-full bg-transparent focus:outline-none p-2 border focus:border-2 focus:border-sky-400 focus:shadow-md rounded-md peer" name={props.fieldName} id={props.fieldName} autoComplete="off"/>
                        <label htmlFor={props.fieldName} className={`absolute left-2 top-2 cursor-text peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-sky-400 peer-focus:text-white peer-focus:px-2 peer-focus:rounded-md transform duration-300`}>{props.field.label}</label>
                        {/* <p className={`${props.fieldName}_error`}>{'error'}</p> */}
                        <p className="text-xs text-white">{props.field.description}</p>
                    </div>
                </div>
            )
        case "number" :
            return(
                <div className="w-full flex items-center justify-center space-y-0.5">
                    <div className="w-11/12 relative">
                        <input type="number" className="w-full bg-transparent focus:outline-none p-2 border focus:border-2 focus:border-sky-400 focus:shadow-md rounded-md peer" name={props.fieldName} id={props.fieldName} autoComplete="off"/>
                        <label htmlFor={props.fieldName} className={`absolute left-2 top-2 cursor-text peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-sky-400 peer-focus:text-white peer-focus:px-2 peer-focus:rounded-md transform duration-300`}>{props.field.label}</label>
                    </div>
                </div>
            )
        case "email" :
            return(
                <div className="w-full flex items-center justify-center space-y-0.5">
                    <div className="w-11/12 relative">
                        <input type="email" className="w-full bg-transparent focus:outline-none p-2 border focus:border-2 focus:border-sky-400 focus:shadow-md rounded-md peer" name={props.fieldName} id={props.fieldName} autoComplete="off"/>
                        <label htmlFor={props.fieldName} className={`absolute left-2 top-2 cursor-text peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-sky-400 peer-focus:text-white peer-focus:px-2 peer-focus:rounded-md transform duration-300`}>{props.field.label}</label>
                        {/* <p className={`${props.fieldName}_error`}>{'error'}</p> */}
                        <p className="text-xs text-white">{props.field.description}</p>
                    </div>
                </div>
            )

        default : 
            return(
                <div className="w-full flex items-center justify-center space-y-0.5">
                    <div className="w-11/12 relative">
                        <input type="text" className="w-full bg-transparent focus:outline-none p-2 border focus:border-2 focus:border-sky-400 focus:shadow-md rounded-md peer" name={props.fieldName} id={props.fieldName} autoComplete="off"/>
                        <label htmlFor={props.fieldName} className={`absolute left-2 top-2 cursor-text peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-sky-400 peer-focus:text-white peer-focus:px-2 peer-focus:rounded-md transform duration-300`}>{props.field.label}</label>
                        {/* <p className={`${props.fieldName}_error`}>{'error'}</p> */}
                        <p className="text-xs text-white">{props.field.description}</p>
                    </div>
                </div>
            )
    }
}
export default Generate