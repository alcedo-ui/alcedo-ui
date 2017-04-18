/**
 * Created by DT314 on 2017/4/18.
 */
import React,{ Component, PropTypes } from 'react';

import TextField from '../TextField/TextField';
import Event from '../_vendors/Event';

import './EditableField.css';

export default class EditableField extends Component{
    constructor (props){
        super();

        this.state = {
            hide: 'hide',
            text: props.value
        };

        this.onBlur = this :: this.onBlur;
        this.showInput = this :: this.showInput;
        this.downHandle = this :: this.downHandle;
        this.getPosition = this :: this.getPosition;
        this.getElementLeft = this :: this.getElementLeft;
    }

    getPosition(ev) {
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        let scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
        return {x: ev.clientX+scrollLeft, y: ev.clientY+scrollTop};
    }

    getElementLeft(element, offset) {
        let offsetX = element[offset];
        let current = element.offsetParent;
        while (current !== null){
            offsetX += current[offset];
            current = current.offsetParent;
        }
        return offsetX;
    }

    onBlur(text) {
        this.setState({
            text: text
        });
    }

    showInput() {
        this.setState({
            hide: ''
        }, () => {
            this.refs.textField.refs.input.focus();
        });
    }

    downHandle(ev) {
        let oEvent = ev || event;
        let mouseX = this.getPosition(oEvent).x,
            mouseY = this.getPosition(oEvent).y,
            inputX = this.getElementLeft(this.refs.editableField, 'offsetLeft'),
            inputY = this.getElementLeft(this.refs.editableField, 'offsetTop'),
            inputWidth = this.refs.editableField.offsetWidth,
            inputHeight = this.refs.editableField.offsetHeight;
        if (mouseX < inputX || mouseX > (inputX + inputWidth) || mouseY < inputY || mouseY > (inputY + inputHeight)) {
            setTimeout(() => {
                this.setState({
                    hide: 'hide'
                });
            }, 0);
        }
    }

    componentDidMount() {
        Event.addEvent(document, 'mousedown', this.downHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.downHandle);
    }

    render() {
        const { style } = this.props;

        return (
            <div className="nameInput"
                 title="Click to edit"
                 style={style}
                 ref="editableField">

                {
                    this.state.hide==="hide"
                        ? <span className="nameText"
                                onClick={this.showInput}>{this.state.text}<i className="fa fa-pencil" aria-hidden="true"></i></span>
                        : <TextField ref="textField"
                                     value={this.state.text}
                                     className={'hideInput'}
                                     onBlur={this.onBlur}/>
                }

            </div>
        );
    }
}

EditableField.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,

    value: PropTypes.string
};

EditableField.defaultProps = {
    className: '',
    style: {},

    value: 'text'
};