/**
 * Created by DT314 on 2017/4/18.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextField from '../TextField/TextField';
import Event from '../_vendors/Event';

import './EditableField.css';

export default class EditableField extends Component {
    constructor(props) {
        super();

        this.state = {
            hide: 'hide',
            text: props.value
        };

        this.onChange = this :: this.onChange;
        this.showInput = this :: this.showInput;
        this.downHandle = this :: this.downHandle;
        this.getPosition = this :: this.getPosition;
        this.getElementLeft = this :: this.getElementLeft;
    }

    getPosition(ev) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        return {x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop};
    }

    getElementLeft(element, offset) {
        let offsetX = element[offset];
        let current = element.offsetParent;
        while (current !== null) {
            offsetX += current[offset];
            current = current.offsetParent;
        }
        return offsetX;
    }

    onChange(text) {
        this.setState({
            text: text
        }, () => {
            this.props.onChange && this.props.onChange(this.state.text);
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
            this.setState({
                hide: 'hide'
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.text) {
            this.setState({
                text: nextProps.value
            });
        }
    }

    componentDidMount() {
        Event.addEvent(document, 'mousedown', this.downHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.downHandle);
    }

    render() {
        const {style, name} = this.props;

        return (
            <div className="nameInput"
                 title="Click to edit"
                 style={style}
                 ref="editableField">

                {
                    this.state.hide === 'hide'
                        ? <span className="nameText"
                                onClick={this.showInput}>{this.state.text}<i className="fa fa-pencil"
                                                                             aria-hidden="true"></i></span>
                        : <TextField ref="textField"
                                     value={this.state.text}
                                     className={'hideInput'}
                                     onChange={this.onChange}/>
                }

                <input type="hidden" value={this.state.text} readOnly name={name}/>

            </div>
        );
    }
};

EditableField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The value of the editableField.
     */
    value: PropTypes.string,

    /**
     * The name of the editableField.
     */
    name: PropTypes.string,

    /**
     * Callback function fired when the editableField change.
     */
    onChange: PropTypes.func
};

EditableField.defaultProps = {
    className: '',
    style: {},

    value: 'text',
    name: ''
};