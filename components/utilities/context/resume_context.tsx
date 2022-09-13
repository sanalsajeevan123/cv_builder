import React,{createContext,Component, ReactNode} from "react";

export const ResumeContext = createContext<any>(null)

type MyProps = {
    children: ReactNode,
}

type MyState={
    current_position:string
}

class ResumeProvider extends Component<MyProps,MyState>{
    constructor(props:MyProps){
        super(props);
        this.state = {
            current_position:'home'
        }
    }

    handleCurrenrPosition=(position:string)=>{
        this.setState({
            current_position:position
        })
    }

    render(){
        return(
            <ResumeContext.Provider value={{
                ...this.state,
                handleCurrenrPosition:this.handleCurrenrPosition
            }}>
                {this.props.children}
            </ResumeContext.Provider>
        )
    }
}

const ResumeConsumer = ResumeContext.Consumer;

export default ResumeProvider

export {ResumeConsumer}