import React, { Component } from 'react';

class LifeCycleComponent extends Component {

    state = {
        number: 0,
        color: null
    }

    onClickToIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    colorRef = null;

    constructor(props) {
        super(props)
        console.log("🚀 ~ LifeCycleComponent ~ constructor ~ props:", props)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color }
        }
        console.log("!!!")
        return null;
    }

    componentDidMount() {
        console.log("랜더링 이후 componentDidMount 실행")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("🚀~ shouldComponentUpdate ~ nextProps, nextState:", nextProps, nextState)
        return nextState.number % 5 !== 0;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("🚀~ getSnapshotBeforeUpdate ~ prevProps, prevState:", prevProps, prevState)
        if (prevProps.color !== this.props.color) {
            return this.colorRef.style.backgroundColor;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState) {
            console.log("🚀 ~ componentDidUpdate ~ prevState:", prevState)
        }
        if (snapshot) {
            console.log("🚀 ~ componentDidUpdate ~ snapshot:", snapshot)
        }


    }

    render() {
        return (
            <div>
                <div style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: this.state.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff"
                }}>
                    <h1>{this.state.number}</h1>
                </div>
                <button onClick={this.onClickToIncrease}>더하기 버튼</button>
            </div>
        );
    }
}

export default LifeCycleComponent;