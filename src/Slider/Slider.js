/**
 * @file Slider component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash/throttle';

import Event from '../_vendors/Event';

class Slider extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.sliderBox = createRef();
        this.sliderBoxEl = null;
        this.circleLeft = createRef();
        this.circleRight = createRef();

        this.state = {
            left: props.left || 0,
            right: props.right || 0,
            shadow: '',
            tip: ''
        };

    }

    /**
     * 获取当前指针的位置
     */
    getPosition = ev => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        return {x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop};
    };

    /**
     * 获取当前元素的左偏移量
     */
    getElementLeft = element => {

        if (!element) {
            return 0;
        }

        let offsetLeft = element.offsetLeft;
        let current = element.offsetParent;
        while (current !== null) {
            offsetLeft += current.offsetLeft;
            current = current.offsetParent;
        }

        return offsetLeft;

    };

    /**
     * 判断当前点击对象是否是小圆点，修改shadow
     */
    handleDown = ev => {
        if (this.props.disabled) {
            return;
        }
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
    };

    throttleMove = throttle((e) => {
        this.handleMove(e);
    }, 16);

    /**
     * 当点击对象为小圆点时，移动指针则改变slider的值
     */
    handleMove = ev => {
        if (this.state.shadow) {
            let oEvent = ev || event;
            let offsetLeft = this.getElementLeft(this.sliderBoxEl);
            let leftPosition = (this.props.width > (this.getPosition(oEvent).x - offsetLeft)) ? (this.getPosition(oEvent).x - offsetLeft) : this.props.width;
            leftPosition = (leftPosition > 0) ? leftPosition : 0;
            if (this.props.ruler) {
                leftPosition = this.getNearest(leftPosition);
            }
            let value = this.getValueFromPosition(leftPosition).toFixed(this.props.decimalPlaces);
            if (this.state.shadow === 'left') {
                this.setState({
                    left: value
                }, () => {
                    this.handleChange(value, this.state.right);
                });
            } else {
                this.setState({
                    right: value
                }, () => {
                    this.handleChange(this.state.left, value);
                });
            }
        }
    };

    /**
     * 修改tip位置
     */
    handleChange = (left, right) => {
        this.props.onChange && this.props.onChange(left, right);
    };

    handleUp = () => {
        this.setState({
            shadow: ''
        });
    };

    /**
     * 当mouseOver至小圆点，则显示tip
     */
    handleOver = ev => {
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
    };

    handleOut = () => {
        this.setState({
            tip: ''
        });
    };

    /**
     * 点击slider时，改变slider的值
     */
    handleClick = ev => {
        if (this.props.disabled) {
            return;
        }
        let oEvent = ev || event;
        let offsetLeft = this.getElementLeft(this.sliderBoxEl);
        let clickLeft = this.getPosition(oEvent).x - offsetLeft;
        const {leftPosition, rightPosition} = this.getPositionFromValue(this.state.left, this.state.right);
        if (this.props.ruler) {
            clickLeft = this.getNearest(clickLeft);
        }
        if (Math.abs(leftPosition - clickLeft) > Math.abs(rightPosition - clickLeft) || this.props.leftPoint === false) {
            let value = this.getValueFromPosition(clickLeft).toFixed(this.props.decimalPlaces);
            this.setState({
                right: value
            }, () => {
                this.handleChange(this.state.left, value);
            });
        } else {
            let value = this.getValueFromPosition(clickLeft).toFixed(this.props.decimalPlaces);
            this.setState({
                left: value
            }, () => {
                this.handleChange(value, this.state.right);
            });
        }
    };

    /**
     * 当slider设置了ruler参数时，移动或点击操作时，自动匹配到最近的刻度点。
     */
    getNearest = clickLeft => {
        const {width, ruler, scale} = this.props, min = scale[0], max = scale[scale.length - 1];
        let nearest = Math.round(clickLeft * (max - min) / (width * ruler)) * ruler / (max - min) * width;

        return nearest > width ? width : nearest;
    };

    getScaleValueAndLabel = (scale) => {
        let scaleValue = [], scaleLabel = [];
        if (scale.length > 0) {
            scale.forEach(item => {
                scaleValue.push(typeof item === 'object' ? item.value : item);
                scaleLabel.push(typeof item === 'object' ? item.label : item);
            });
        }
        return [scaleValue, scaleLabel];
    };

    getValueFromPosition = (position) => {
        const {scale, width} = this.props;
        const [scaleValue] = this.getScaleValueAndLabel(scale);

        return (position / width) * (scaleValue[scaleValue.length - 1] - scaleValue[0]) + scaleValue[0];
    };

    getPositionFromValue = (left, right) => {
        const {scale, width} = this.props;
        const [scaleValue] = this.getScaleValueAndLabel(scale);
        let leftValue = parseFloat(left || scaleValue[0]);
        let rightValue = parseFloat(right || scaleValue[0]);
        let leftPosition = (leftValue - scaleValue[0]) / (scaleValue[scaleValue.length - 1] - scaleValue[0]) * width,
            rightPosition = (rightValue - scaleValue[0]) / (scaleValue[scaleValue.length - 1] - scaleValue[0]) * width;
        return {
            leftPosition,
            rightPosition
        };
    };

    componentDidMount() {
        const {scale, initialScale, width} = this.props;
        let [scaleValue] = this.getScaleValueAndLabel(scale);
        let right = typeof initialScale === 'number' ?
            (initialScale - scaleValue[0]) / (scaleValue[scaleValue.length - 1] - scaleValue[0]) * width
            :
            width / 2;
        this.sliderBoxEl = this.sliderBox && this.sliderBox.current;

        this.setState({
            right: right > width || right < 0 ? 0 : right
        });

        Event.addEvent(document, 'mousemove', this.throttleMove);
        Event.addEvent(document, 'mouseup', this.handleUp);

        if (this.circleRight && this.circleRight.current) {
            Event.addEvent(this.circleRight.current, 'mouseover', this.handleOver);
            Event.addEvent(this.circleRight.current, 'mouseout', this.handleOut);
        }

        if (this.circleLeft && this.circleLeft.current) {
            Event.addEvent(this.circleLeft.current, 'mouseover', this.handleOver);
            Event.addEvent(this.circleLeft.current, 'mouseout', this.handleOut);
        }

    }

    componentWillUnmount() {

        Event.removeEvent(document, 'mousemove', this.throttleMove);
        Event.removeEvent(document, 'mouseup', this.handleUp);

        if (this.circleRight && this.circleRight.current) {
            Event.removeEvent(this.circleRight.current, 'mouseover', this.handleOver);
            Event.removeEvent(this.circleRight.current, 'mouseout', this.handleOut);
        }

        if (this.circleLeft && this.circleLeft.current) {
            Event.removeEvent(this.circleLeft.current, 'mouseover', this.handleOver);
            Event.removeEvent(this.circleLeft.current, 'mouseout', this.handleOut);
        }

    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            left: props.left || state.left,
            right: props.right || state.right
        };
    }

    render() {

        const {leftPoint, showScalePoint, scale, width, showScale, decimalPlaces, className, style, disabled} = this.props,
            {left, right, shadow, tip} = this.state,
            display = (tip || shadow) ? '' : 'hide';
        let [scaleValue, scaleLabel] = this.getScaleValueAndLabel(scale);
        let {leftPosition, rightPosition} = this.getPositionFromValue(left, right);

        return (
            <div className={classNames('slider', {
                [className]: className
            })}
                 style={{
                     ...style,
                     width
                 }}>

                <div ref={this.sliderBox}
                     className={`slider-box ${disabled ? 'disabled' : ''}`}
                     onMouseDown={this.handleClick}>

                    {
                        showScalePoint ?
                            scaleValue.map(item => {
                                let pointLeft = (item - scaleValue[0]) / (scaleValue[scaleValue.length - 1] - scaleValue[0]) * width,
                                    min = Math.min(leftPosition, rightPosition),
                                    max = Math.max(leftPosition, rightPosition);
                                return <div
                                    className={`slider-circle fixed-circle ${pointLeft < min || pointLeft > max ? 'disable-circle' : ''}`}
                                    style={{
                                        left: pointLeft
                                    }}
                                    onMouseDown={this.handleDown}></div>;
                            })
                            :
                            null
                    }


                    {
                        leftPoint ?
                            <div ref={this.circleLeft}
                                 className={`slider-circle slider-circle-left ${shadow === 'left' ? 'slider-shadow' : ''} ${disabled ? 'disabled' : ''}`}
                                 style={{left: leftPosition}}
                                 onMouseDown={this.handleDown}></div>
                            :
                            null
                    }

                    <div ref={this.circleRight}
                         className={`slider-circle slider-circle-right ${shadow === 'right' ? 'slider-shadow' : ''} ${disabled ? 'disabled' : ''}`}
                         style={{left: rightPosition}}
                         onMouseDown={this.handleDown}></div>
                    <div className={`slider-highlight ${disabled ? 'disabled' : ''}`}
                         style={{
                             width: Math.abs(leftPosition - rightPosition),
                             left: Math.min(leftPosition, rightPosition)
                         }}></div>

                    {

                        shadow === 'left' || tip === 'left' ?
                            <div className={`slider-tip ${display}`}
                                 style={{left: leftPosition}}>
                                {parseFloat((leftPosition / width) * (scaleValue[scaleValue.length - 1] - scaleValue[0]) + scaleValue[0]).toFixed(decimalPlaces)}
                            </div>
                            :
                            <div className={`slider-tip ${display}`}
                                 style={{left: rightPosition}}>
                                {parseFloat((rightPosition / width) * (scaleValue[scaleValue.length - 1] - scaleValue[0]) + scaleValue[0]).toFixed(decimalPlaces)}
                            </div>

                    }

                </div>

                <div className="Slide-scale">
                    {
                        showScale ?
                            <ul>
                                {
                                    scaleLabel && scaleLabel.map((number, index) =>
                                        <li key={index}
                                            style={{
                                                left: (scaleValue[index] - scaleValue[0]) / (scaleValue[scaleValue.length - 1] - scaleValue[0]) * 100 + '%'
                                            }}>
                                            {number}
                                        </li>
                                    )
                                }
                            </ul>
                            :
                            null
                    }
                </div>

            </div>
        );
    }
}

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
     * If true,the slider will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the slider will have leftPoint.
     */
    leftPoint: PropTypes.bool,

    /**
     * The right point's position.
     */
    initialScale: PropTypes.number,

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
     * If true,the scale point will have display.
     */
    showScalePoint: PropTypes.bool,

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
    leftPoint: false,
    showScalePoint: false,
    initialScale: null,
    width: 300,
    scale: [0, 100],
    showScale: false,
    decimalPlaces: 0
};

export default Slider;
