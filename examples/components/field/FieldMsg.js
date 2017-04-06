import React, {Component, PropTypes} from 'react';

import CharSize from 'vendors/CharSize';

import 'sass/components/field/FieldMsg.scss';

export default class FieldMsg extends Component {

    constructor(props) {

        super(props);

        this.MAX_WIDTH = 460;

        this.charCount = null;
        this.charSize = {};

        this.state = {
            msg: '',
            multiLine: false,
            width: 0
        };

        this.getCharSize = this.getCharSize.bind(this);
        this.getStringSize = this.getStringSize.bind(this);

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
        if (!this.charCount) {
            this.charCount = CharSize.computerCharCount();
        }
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

        const {type, children, className, style, isHtmlMsg} = this.props;
        const {msg, multiLine, width} = this.state;
        const {MAX_WIDTH} = this;

        const lineCount = Math.ceil(width / MAX_WIDTH),
            msgHeight = multiLine ? (lineCount * 24 + 6) : 'auto';

        const msgWrapStyle = {
            width: multiLine ? MAX_WIDTH : 'auto',
            height: isHtmlMsg ? 'auto' : msgHeight,
            top: type == 'info' ? (multiLine ? 30 - msgHeight : 0) : 6
        };

        const msgStyle = {
            width: multiLine ? MAX_WIDTH : 'auto',
            height: isHtmlMsg ? 'auto' : msgHeight
        };

        return (
            <div className={`field-msg ${type ? type : ''} ${className}`}
                 style={style}>

                <div className="triangle"></div>

                <div className={`msg-wrap ${multiLine ? 'multiLine' : ''}`}
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

    type: PropTypes.string,
    msg: PropTypes.any,
    isHtmlMsg: PropTypes.bool

};

FieldMsg.defaultProps = {

    className: '',
    style: null,

    type: '',
    msg: '',
    isHtmlMsg: false

};