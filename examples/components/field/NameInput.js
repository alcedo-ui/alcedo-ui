/**
 * Created by DT314 on 2017/3/31.
 */
import React,{ Component, PropTypes } from 'react';
import TextField from './TextField';
import 'sass/components/field/NameInput.scss';

export default class NameInput extends Component{
    constructor (){
        super();
        this.state = {
            hide: 'hide',
            text: 'text'
        };
        this.onBlur = ::this.onBlur;
        this.showInput = ::this.showInput;
    }
    onBlur(text) {
        text===''?this.setState({
            hide: 'hide',
            text: 'none'
        }): this.setState({
            hide: 'hide',
            text: text
        });
    }
    showInput() {
        this.setState({
            hide: ''
        });
        setTimeout(() => {
            this.refs.textField.refs.input.focus();
        },0);
    }
    render() {
        return <div className="nameInput" title="Click to edit">{this.state.hide==="hide"?
            <span className="nameText" onClick={this.showInput}>{this.state.text}<i className="fa fa-pencil" aria-hidden="true"></i></span>:
            <TextField ref="textField" value={this.state.text} className={'hideInput'} onBlur={this.onBlur}/>}</div>
        {/*return <div className="nameInput"><span className="nameText" onClick={this.showInput}>{this.state.text}<i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>*/}
            {/*<TextField ref="textField" value={this.state.text} className={'hideInput '+ this.state.hide} onBlur={this.onBlur}/></div>*/}
    }
}