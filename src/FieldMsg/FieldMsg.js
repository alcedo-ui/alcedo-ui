/**
 * @file FieldMsg component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Util from '../_vendors/Util';

class FieldMsg extends Component {

    static Type = {
        DEFAULT: '',
        INFO: 'info',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error'
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.MAX_WIDTH = 460;

        this.charCount = 100;
        this.charSize = {};

        this.state = {
            msg: '',
            multiLine: false,
            width: 0
        };

        this.getCharSize = ::this.getCharSize;
        this.getStringSize = ::this.getStringSize;

    }

    /**
     * 获取单个字符的宽度
     * @param char
     * @returns {number}
     */
    getCharSize(char) {

        if (char in this.charSize) {
            return this.charSize[char];
        }

        const component = this.refs.testCharWidthDiv;
        component.innerHTML = char.repeat(this.charCount);

        return this.charSize[char] = component.getBoundingClientRect().width / this.charCount;

    }

    /**
     * 获取字符串的宽度
     * @param string
     * @returns {number}
     */
    getStringSize(string) {
        let width = 0;
        if (string) {
            for (let i = 0, len = string.length; i < len; i++) {
                width += this.getCharSize(string.charAt(i));
            }
        }
        return width;
    }

    componentDidMount() {
        const width = this.getStringSize(this.props.msg);
        if (width > this.MAX_WIDTH) {
            this.setState({
                msg: this.props.msg,
                multiLine: true,
                width
            });
        } else {
            this.setState({
                msg: this.props.msg,
                multiLine: false,
                width
            });
        }
    }

    render() {

        const {type, children, className, style, isHtmlMsg} = this.props,
            {msg, multiLine, width} = this.state,
            {MAX_WIDTH} = this,

            lineCount = Math.ceil(width / MAX_WIDTH),
            msgHeight = multiLine ? (lineCount * 24 + 6) : 'auto',

            wrapperClassName = classNames('field-msg', {
                [`theme-${type}`]: type,
                [className]: className
            }),

            msgWrapClassName = classNames('msg-wrap', {
                'multi-line': multiLine
            }),
            msgWrapStyle = {
                width: multiLine ? MAX_WIDTH : 'auto',
                height: isHtmlMsg ? 'auto' : msgHeight,
                top: type == 'info' ? (multiLine ? 30 - msgHeight : 0) : 6
            },

            msgStyle = {
                width: multiLine ? MAX_WIDTH : 'auto',
                height: isHtmlMsg ? 'auto' : msgHeight
            };

        return (
            <div className={wrapperClassName}
                 style={style}>

                <div className="triangle"></div>

                <div className={msgWrapClassName}
                     style={msgWrapStyle}>

                    <div className="msg"
                         style={msgStyle}>
                        {
                            isHtmlMsg ?
                                <div dangerouslySetInnerHTML={{__html: msg}}></div>
                                :
                                msg
                        }
                    </div>

                    {children}

                </div>

                <div ref="testCharWidthDiv"
                     className="test-char-width-div"></div>

            </div>
        );

    }

};

FieldMsg.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    type: PropTypes.oneOf(Util.enumerateValue(FieldMsg.Type)),
    msg: PropTypes.any,
    isHtmlMsg: PropTypes.bool

};

FieldMsg.defaultProps = {

    className: '',
    style: null,

    type: FieldMsg.Type.DEFAULT,
    msg: '',
    isHtmlMsg: false

};

export default FieldMsg;