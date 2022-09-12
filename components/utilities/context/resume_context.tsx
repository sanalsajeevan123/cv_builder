import React,{createContext,Component, ReactNode} from "react";

export const ResumeContext = createContext<any>(null)

type MyProps = {
    children: ReactNode,
}

type MyState={
    
}

class ResumeProvider extends Component<MyProps,MyState>{
    constructor(props:MyProps){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <ResumeContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </ResumeContext.Provider>
        )
    }
}

const ResumeConsumer = ResumeContext.Consumer;

export default ResumeProvider

export {ResumeConsumer}