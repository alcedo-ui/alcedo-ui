/**
 * Created by DT314 on 2017/4/12.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

import './Slider.css';

export default class Slider extends Component {
    constructor(props) {
        super();

        this.state = {
            left: 0,
            right: 0,
            shadow: '',
            tip: ''
        };

        this.getPosition = this :: this.getPosition;
        this.downHandle = this :: this.downHandle;
        this.getElementLeft = this :: this.getElementLeft;
        this.clickHandle = this :: this.clickHandle;
        this.getNearest = this :: this.getNearest;
        this.overHandle = this :: this.overHandle;
        this.outHandle = this :: this.outHandle;
        this.moveHandle = this :: this.moveHandle;
        this.upHandle = this :: this.upHandle;
        this.changeHandle = this :: this.changeHandle;

    }

    /**
     * 获取当前指针的位置
     */
    getPosition(ev) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        return {x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop};
    }

    /**
     * 获取当前元素的左偏移量
     */
    getElementLeft(element) {
        let offsetLeft = element.offsetLeft;
        let current = element.offsetParent;
        while (current !== null) {
            offsetLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        return offsetLeft;
    }

    /**
     * 判断当前点击对象是否是小圆点，修改shadow
     */
    downHandle(ev) {
        let element = ev.srcElement ? ev.srcElement : ev.target;
        if (element.getAttribute('class').indexOf('left') > -1) {
            this.setState({
                shadow: 'left'
            });
        } else {
            this.setState({
                shadow: 'right'
            });
        }
        return false;
    }

    /**
     * 当点击对象为小圆点时，移动指针则改变slider的值
     */
    moveHandle(ev) {
        if (this.state.shadow) {
            let oEvent = ev || event;
            let offsetLeft = this.getElementLeft(this.refs.sliderBox);
            let leftPosition = (this.props.width > (this.getPosition(oEvent).x - offsetLeft)) ? (this.getPosition(oEvent).x - offsetLeft) : this.props.width;
            leftPosition = (leftPosition > 0) ? leftPosition : 0;
            if (this.props.ruler) {
                leftPosition = this.getNearest(leftPosition);
            }
            if (this.state.shadow === 'left') {
                this.setState({
                    left: leftPosition
                }, () => {
                    this.changeHandle();
                });
            } else {
                this.setState({
                    right: leftPosition
                }, () => {
                    this.changeHandle();
                });
            }
        }
    }

    /**
     * 修改tip位置
     */
    changeHandle() {
        const {scale, decimalPlaces, width} = this.props;
        const {left, right} = this.state;

        let leftTip = parseFloat((left / width) * (scale[scale.length - 1] - scale[0]) + scale[0]).toFixed(decimalPlaces),
            rightTip = parseFloat((right / width) * (scale[scale.length - 1] - scale[0]) + scale[0]).toFixed(decimalPlaces);
        this.props.onChange && this.props.onChange(leftTip, rightTip);
    }

    upHandle() {
        this.setState({
            shadow: ''
        });
    }

    /**
     * 当mouseOver至小圆点，则显示tip
     */
    overHandle(ev) {
        let element = ev.srcElement ? ev.srcElement : ev.target;
        if (element.getAttribute('class').indexOf('left') > -1) {
            this.setState({
                tip: 'left'
            });
        } else {
            this.setState({
                tip: 'right'
            });
        }
    }

    outHandle() {
        this.setState({
            tip: ''
        });
    }

    /**
     * 点击slider时，改变slider的值
     */
    clickHandle(ev) {
        let oEvent = ev || event;
        let offsetLeft = this.getElementLeft(this.refs.sliderBox);
        let clickLeft = this.getPosition(oEvent).x - offsetLeft;
        if (this.props.ruler) {
            clickLeft = this.getNearest(clickLeft);
        }
        if (Math.abs(this.state.left - clickLeft) > Math.abs(this.state.right - clickLeft) || this.props.leftPoint === false) {
            this.setState({
                right: clickLeft
            }, () => {
                this.changeHandle();
            });
        } else {
            this.setState({
                left: clickLeft
            }, () => {
                this.changeHandle();
            });
        }
    }

    /**
     * 当slider设置了ruler参数时，移动或点击操作时，自动匹配到最近的刻度点。
     */
    getNearest(clickLeft) {
        const {width, ruler} = this.props;
        let nearest = width;
        let j = 0;
        for (let i = 0; i < ruler; i++) {
            let long = Math.abs(clickLeft - i * width / (ruler - 1));
            if (long < nearest) {
                nearest = long;
                j = i;
            }
        }
        return j * width / (ruler - 1);
    }

    componentDidMount() {
        this.setState({
            right: this.props.width / 2
        });
        Event.addEvent(document, 'mousemove', this.moveHandle);
        Event.addEvent(document, 'mouseup', this.upHandle);
        Event.addEvent(this.refs.circleRight, 'mouseover', this.overHandle);
        Event.addEvent(this.refs.circleRight, 'mouseout', this.outHandle);
        if (this.refs.circleLeft) {
            Event.addEvent(this.refs.circleLeft, 'mouseover', this.overHandle);
            Event.addEvent(this.refs.circleLeft, 'mouseout', this.outHandle);
        }
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.moveHandle);
        Event.removeEvent(document, 'mouseup', this.upHandle);
        Event.removeEvent(this.refs.circleRight, 'mouseover', this.overHandle);
        Event.removeEvent(this.refs.circleRight, 'mouseout', this.outHandle);
        if (this.refs.circleLeft) {
            Event.removeEvent(this.refs.circleLeft, 'mouseover', this.overHandle);
            Event.removeEvent(this.refs.circleLeft, 'mouseout', this.outHandle);
        }
    }

    render() {
        const {leftPoint, scale, width, showScale, decimalPlaces, className, style, tipShow} = this.props;
        const {left, right, shadow, tip} = this.state;
        const grayStyle = {
                ...style,
                width
            },
            highStyle = {width: Math.abs(left - right), left: Math.min(left, right)},
            leftStyle = {left: left},
            rightStyle = {left: right};
        let display = (tip || shadow) ? '' : 'hide',
            leftShadow = shadow === 'left' ? 'slider-shadow' : '',
            rightShadow = shadow === 'right' ? 'slider-shadow' : '';
        let leftTip = parseFloat((left / width) * (scale[scale.length - 1] - scale[0]) + scale[0]).toFixed(decimalPlaces),
            rightTip = parseFloat((right / width) * (scale[scale.length - 1] - scale[0]) + scale[0]).toFixed(decimalPlaces);

        return (
            <div className={`slider ${className}`}
                 style={grayStyle}>
                <div className="slider-box"
                     onMouseDown={this.clickHandle}
                     ref="sliderBox">
                    {
                        leftPoint
                            ? (<div className={`slider-circle slider-circle-left ${leftShadow}`}
                                    onMouseDown={this.downHandle}
                                    style={leftStyle}
                                    ref="circleLeft"></div>)
                            : null
                    }
                    <div className={`slider-circle slider-circle-right ${rightShadow}`}
                         onMouseDown={this.downHandle}
                         style={rightStyle}
                         ref="circleRight"></div>
                    <div className="slider-highlight"
                         style={highStyle}></div>
                    {

                        shadow === 'left' || tip === 'left'
                            ? <div className={`slider-tip ${display}`}
                                   style={leftStyle}>{leftTip}</div>
                            : <div className={`slider-tip ${display}`}
                                   style={rightStyle}>{rightTip}</div>

                    }

                </div>
                <div className="Slide-scale">
                    {
                        showScale
                            ? <ul>
                            {
                                scale.map((number, index) => {
                                    let left = (number - scale[0]) / (scale[scale.length - 1] - scale[0]) * 100;
                                    const style = {left: left + '%'};
                                    return <li style={style}
                                               key={index}>{number}</li>;
                                })
                            }
                        </ul>
                            : null
                    }

                </div>
            </div>
        );
    }
};

Slider.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true,the slider will have leftPoint.
     */
    leftPoint: PropTypes.bool,

    /**
     * The width of the slider.
     */
    width: PropTypes.number,

    /**
     * The size displayed on slider.
     */
    scale: PropTypes.array,

    /**
     * If true,the scale will have display.
     */
    showScale: PropTypes.bool,

    /**
     * If true,the tip will display.
     */
    tipShow: PropTypes.bool,

    /**
     * The granularity the slider can step through values.
     */
    ruler: PropTypes.number,

    /**
     * Decimal digits of tip.
     */
    decimalPlaces: PropTypes.number,

    /**
     * Callback function fired when the slider change.
     */
    onChange: PropTypes.func

};

Slider.defaultProps = {
    className: '',
    style: {},

    leftPoint: false,
    width: 300,
    scale: [0, 100],
    showScale: false,
    tipShow: true,
    decimalPlaces: 0
};

