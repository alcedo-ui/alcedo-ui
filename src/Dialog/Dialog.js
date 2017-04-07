/**
 * Created by DT314 on 2017/4/6.
 */
import React, {Component, PropTypes} from 'react'



import './dialog.css'

export default class Dialog extends Component{
    constructor(props){
        super();
        this.state = {
            hide: 'show'
        };
        this.shadowClickHandle = this::this.shadowClickHandle;
    }

    shadowClickHandle() {
        this.setState({
            hide: 'hide'
        });
    }

    render() {
        return (
            <div className={"dialog-cover "+ this.props.className}>
                <div className="dialog-shadow" onClick={this.props.onHide}>
                </div>
                <div className="dialog-box">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.desc}</p>
                    <div className="dialog-button-group">
                        <button className={"button "+(this.props.buttonBool[0]?"":"disappear")} onClick={this.props.onHide}>cancel</button>
                        <button className={"button "+(this.props.buttonBool[1]?"":"disappear")} onClick={this.props.onSure}>commit</button>
                    </div>
                </div>
            </div>
        )
    }

}

Dialog.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    buttonBool: PropTypes.array,
    className: PropTypes.string,
    onHide: PropTypes.func,
    onSure: PropTypes.func
};

Dialog.defaultProps = {
    title: "Dialog",
    desc: "here is a desc",
    buttonBool: [true,true],
    className: "hide"
};