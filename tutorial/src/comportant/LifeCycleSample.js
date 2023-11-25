import React ,{Component} from "react";

class LifeCycleSample extends Component{
    state ={
        number:0,
        color:null,
    }; 

    myRef = null;
    
    constructor(props){
        super(props);
        console.log("constructor success");

    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps success");
        if(nextProps.color !== prevState.color){
            return{color:nextProps.color};
        }
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount success");

    }

//defualtがtrue
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate success",nextProps, nextState);
        console.log(nextState.number%10);
        return nextState.number % 10 !==4;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate success");
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }
    //컴포넌트 업데이트 직후에 호출되는 메소드
    componentDidUpdate(prevProps, prevState,snapshot){
        console.log("componentDidUpdate success");
        if(snapshot){
        console.log("Before update color:", snapshot);

        }
        prevState
    }
    render(){
        console.log("render");
        const style={
            color:this.props.color
        };
        return(
        <div>
            <h1 style={style} ref={(ref)=>(this.myRef=ref)}>
                {this.state.number}</h1>
            <p>color:{this.state.coolor}</p>
            <button onClick={this.handleClick}>PLUS</button>
        </div>
        );    

    };
    handleClick=()=>{
        this.setState({
            number:this.state.number + 1,
        });
    };

}

export default LifeCycleSample;