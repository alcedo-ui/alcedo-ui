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

    getPosition(ev) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        return {x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop};
    }

    getElementLeft(element) {
        let offsetLeft = element.offsetLeft;
        let current = element.offsetParent;
        while (current !== null) {
            offsetLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        return offsetLeft;
    }

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
        Event.addEvent(this.refs.circle, 'mouseover', this.overHandle);
        Event.addEvent(this.refs.circle, 'mouseout', this.outHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.moveHandle);
        Event.removeEvent(document, 'mouseup', this.upHandle);
        Event.removeEvent(this.refs.circle, 'mouseover', this.overHandle);
        Event.removeEvent(this.refs.circle, 'mouseout', this.outHandle);
    }

    render() {
        const {leftPoint, scale, width, showScale, decimalPlaces} = this.props;
        const {left, right, shadow, tip} = this.state;

        const grayStyle = {width: width},
            highStyle = {width: Math.abs(left - right), left: Math.min(left, right)},
            leftStyle = {left: left},
            rightStyle = {left: right};
        let display = (tip || shadow) ? '' : 'hide',
            leftShadow = shadow === 'left' ? 'slider-shadow' : '',
            rightShadow = shadow === 'right' ? 'slider-shadow' : '';
        let leftTip = parseFloat((left / width) * (scale[scale.length - 1] - scale[0]) + scale[0]).toFixed(decimalPlaces),
            rightTip = parseFloat((right / width) * (scale[scale.length - 1] - scale[0]) + scale[0]).toFixed(decimalPlaces);

        return (
            <div className="slider"
                 style={grayStyle}>
                <div className="slider-box"
                     onMouseDown={this.clickHandle}
                     ref="sliderBox">
                    {
                        leftPoint
                            ? (<div className={'slider-circle slider-circle-left ' + leftShadow}
                                    onMouseDown={this.downHandle}
                                    style={leftStyle}
                                    ref="circle"></div>)
                            : null
                    }
                    <div className={'slider-circle slider-circle-right ' + rightShadow}
                         onMouseDown={this.downHandle}
                         style={rightStyle}
                         ref="circle"></div>
                    <div className="slider-highlight"
                         style={highStyle}></div>
                    {
                        shadow === 'left' || tip === 'left'
                            ? <div className={'slider-tip ' + display}
                                   style={leftStyle}>{leftTip}</div>
                            : <div className={'slider-tip ' + display}
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
     * The scale ot slider.
     */
    scale: PropTypes.array,

    /**
     * If true,the scale will have display.
     */
    showScale: PropTypes.bool,

    /**
     *
     */
    tip: PropTypes.string,

    /**
     * The granularity the slider can step through values.
     */
    ruler: PropTypes.number,

    /**
     * Number of decimal places.
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
    tip: 'left',
    decimalPlaces: 0
};

