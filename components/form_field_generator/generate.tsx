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
                    <div className="w-11/12 border">
                        <label htmlFor=""></label>
                        <input type="text" name={props.fieldName} id={props.fieldName} />
                    </div>
                </div>
            )
            
        case "textarea" :
            return(
                <div className="w-full flex items-center justify-center space-y-0.5">
                    <div className="w-11/12 border">
                        textarea
                    </div>
                </div>
            )
        case "number" :
            return(
                <div className="w-full flex items-center justify-center space-y-0.5">
                    <div className="w-11/12 border">
                        number
                    </div>
                </div>
            )
        case "email" :
            return(
                <div className="w-full flex items-center justify-center space-y-0.5">
                    <div className="w-11/12 border">
                        email
                    </div>
                </div>
            )

        default : 
            return(
                <div className="w-full flex items-center justify-center py-2 bg-green-200">

                </div>
            )
    }
}
export default Generate