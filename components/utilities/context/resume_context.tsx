import React,{createContext,Component, ReactNode} from "react";

export const ResumeContext = createContext<any>(null)

type MyProps = {
    children: ReactNode,
}

type MyState={
    current_position:string
    selected_template:number | undefined
}

class ResumeProvider extends Component<MyProps,MyState>{
    constructor(props:MyProps){
        super(props);
        this.state = {
            current_position:'home',
            selected_template:undefined
        }
    }

    handleCurrenrPosition=(position:string)=>{
        this.setState({
            current_position:position
        })
    }

    handleTemplateSelection=(id:number)=>{
        this.setState({
            selected_template:id
        })
    }

    render(){
        return(
            <ResumeContext.Provider value={{
                ...this.state,
                handleCurrenrPosition:this.handleCurrenrPosition,
                handleTemplateSelection:this.handleTemplateSelection
            }}>
                {this.props.children}
            </ResumeContext.Provider>
        )
    }
}

const ResumeConsumer = ResumeContext.Consumer;

export default ResumeProvider

export {ResumeConsumer}