/**
 * @file MaterialTextArea component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';

import TextArea from '../TextArea';
import MaterialFieldSeparator from '../_MaterialFieldSeparator';

import Util from '../_vendors/Util';

export default class MaterialTextArea extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: '',
            isFocus: false,
            isHover: false
        };

        this.triggerFocusHandler = ::this.triggerFocusHandler;
        this.triggerBlurHandler = ::this.triggerBlurHandler;
        this.triggerChangeHandler = ::this.triggerChangeHandler;
        this.triggerMouseOverHandler = ::this.triggerMouseOverHandler;
        this.triggerMouseOutHandler = ::this.triggerMouseOutHandler;

    }

    triggerFocusHandler(...args) {
        this.setState({
            isFocus: true
        }, () => {
            const {onFocus} = this.props;
            onFocus && onFocus(...args);
        });
    }

    triggerBlurHandler(...args) {
        this.setState({
            isFocus: false
        }, () => {
            const {onBlur} = this.props;
            onBlur && onBlur(...args);
        });
    }

    triggerChangeHandler(value) {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });
    }

    triggerMouseOverHandler(...args) {
        this.setState({
            isHover: true
        }, () => {
            const {onMouseOver} = this.props;
            onMouseOver && onMouseOver(...args);
        });
    }

    triggerMouseOutHandler(...args) {
        this.setState({
            isHover: false
        }, () => {
            const {onMouseOut} = this.props;
            onMouseOut && onMouseOut(...args);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    render() {

        const {
                className, style, theme, label, isLabelAnimate,
                ...restProps
            } = this.props,
            {isFocus, isHover, value} = this.state,

            wrapperClassName = (isLabelAnimate ? ' animated' : '') + (label ? ' has-label' : '')
                + (isFocus ? ' focused' : '') + (value ? ' has-value' : '') + (className ? ' ' + className : '');

        return (
            <div className={'material-text-area' + wrapperClassName}
                 style={style}>

                {
                    label ?
                        <div className="material-text-area-label">
                            {label}
                        </div>
                        :
                        null
                }

                <TextArea {...restProps}
                          theme={theme}
                          value={value}
                          onFocus={this.triggerFocusHandler}
                          onBlur={this.triggerBlurHandler}
                          onMouseOver={this.triggerMouseOverHandler}
                          onMouseOut={this.triggerMouseOutHandler}
                          onChange={this.triggerChangeHandler}/>

                <MaterialFieldSeparator theme={theme}
                                        isHover={isHover}
                                        isFocus={isFocus}/>

            </div>
        );

    }
};

MaterialTextArea.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of text area.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The name of the text area.
     */
    name: PropTypes.string,

    /**
     * The label of the text area.
     */
    label: PropTypes.string,

    /**
     * The animate of the text area.
     */
    isLabelAnimate: PropTypes.bool,

    /**
     * The number of cols.
     */
    cols: PropTypes.number,

    /**
     * The number of rows.
     */
    rows: PropTypes.number,

    /**
     * The initial height of textArea.
     */
    initialHeight: PropTypes.number,

    /**
     * The initial height of textArea.
     */
    initialWidth: PropTypes.number,

    /**
     * The value of textArea.
     */
    value: PropTypes.string,

    /**
     * The max height of textArea.
     */
    maxHeight: PropTypes.number,

    /**
     * The max width of textArea.
     */
    maxWidth: PropTypes.number,

    /**
     * If true, the textArea will change its size by words.
     */
    autoSize: PropTypes.bool,

    /**
     * If true,the textField will autoFocus.
     */
    autoFocus: PropTypes.bool,

    /**
     * The placeholder of textArea.
     */
    placeholder: PropTypes.string,

    /**
     * When the value of textArea change, it will execute.
     */
    onChange: PropTypes.func,

    /**
     * When the textArea onBlur, it will execute.
     */
    onBlur: PropTypes.func,

    /**
     * When the textArea onFocus, it will execute.
     */
    onFocus: PropTypes.func

};

MaterialTextArea.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    name: '',
    label: '',
    isLabelAnimate: true,
    value: '',
    cols: 50,
    rows: 3,
    initialHeight: 30,
    initialWidth: 200,
    maxHeight: 100,
    maxWidth: 500,
    autoSize: true,
    autoFocus: false,
    placeholder: 'Please input something.'

};