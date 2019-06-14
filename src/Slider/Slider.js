/**
 * @file Slider component
 * @author chao(chao.zhang@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Event from '../_vendors/Event';

class Slider extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.sliderBox = createRef();
        this.sliderBoxEl = null;
        this.circleLeft = createRef();
        this.circleRight = createRef();

        this.state = {
            left: 0,
            right: 0,
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
            if (this.state.shadow === 'left') {
                this.setState({
                    left: leftPosition
                }, () => {
                    this.handleChange();
                });
            } else {
                this.setState({
                    right: leftPosition
                }, () => {
                    this.handleChange();
                });
            }
        }
    };

    /**
     * 修改tip位置
     */
    handleChange = () => {
        const {scale, decimalPlaces, width} = this.props;
        const {left, right} = this.state;
        const [scaleValue] = this.getScaleValueAndLabel(scale);

        let leftTip = parseFloat((left / width) * (scaleValue[scaleValue.length - 1] - scaleValue[0]) + scaleValue[0]).toFixed(decimalPlaces),
            rightTip = parseFloat((right / width) * (scaleValue[scaleValue.length - 1] - scaleValue[0]) + scaleValue[0]).toFixed(decimalPlaces);
        this.props.onChange && this.props.onChange(leftTip, rightTip);
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
        let oEvent = ev || event;
        let offsetLeft = this.getElementLeft(this.sliderBoxEl);
        let clickLeft = this.getPosition(oEvent).x - offsetLeft;
        if (this.props.ruler) {
            clickLeft = this.getNearest(clickLeft);
        }
        if (Math.abs(this.state.left - clickLeft) > Math.abs(this.state.right - clickLeft) || this.props.leftPoint === false) {
            this.setState({
                right: clickLeft
            }, () => {
                this.handleChange();
            });
        } else {
            this.setState({
                left: clickLeft
            }, () => {
                this.handleChange();
            });
        }
    };

    /**
     * 当slider设置了ruler参数时，移动或点击操作时，自动匹配到最近的刻度点。
     */
    getNearest = clickLeft => {
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

    componentDidMount() {

        this.sliderBoxEl = this.sliderBox && this.sliderBox.current;

        this.setState({
            right: this.props.width / 2
        });

        Event.addEvent(document, 'mousemove', this.handleMove);
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

        Event.removeEvent(document, 'mousemove', this.handleMove);
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

    render() {

        const {leftPoint, showScalePoint, scale, width, showScale, decimalPlaces, className, style} = this.props,
            {left, right, shadow, tip} = this.state,
            display = (tip || shadow) ? '' : 'hide';
        let [scaleValue, scaleLabel] = this.getScaleValueAndLabel(scale);

        return (
            <div className={classNames('slider', {
                [className]: className
            })}
                 style={{
                     ...style,
                     width
                 }}>

                <div ref={this.sliderBox}
                     className="slider-box"
                     onMouseDown={this.handleClick}>

                    {
                        showScalePoint ?
                            scaleValue.map(item => {
                                let pointLeft = (item - scaleValue[0]) / (scaleValue[scaleValue.length - 1] - scaleValue[0]) * width;
                                return <div
                                    className={`slider-circle fixed-circle ${pointLeft > right || pointLeft < left ? 'disable-circle' : ''}`}
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
                                 className={`slider-circle slider-circle-left ${shadow === 'left' ? 'slider-shadow' : ''}`}
                                 style={{left}}
                                 onMouseDown={this.handleDown}></div>
                            :
                            null
                    }

                    <div ref={this.circleRight}
                         className={`slider-circle slider-circle-right ${shadow === 'right' ? 'slider-shadow' : ''}`}
                         style={{left: right}}
                         onMouseDown={this.handleDown}></div>
                    <div className="slider-highlight"
                         style={{
                             width: Math.abs(left - right),
                             left: Math.min(left, right)
                         }}></div>

                    {

                        shadow === 'left' || tip === 'left' ?
                            <div className={`slider-tip ${display}`}
                                 style={{left}}>
                                {parseFloat((left / width) * (scaleValue[scaleValue.length - 1] - scaleValue[0]) + scaleValue[0]).toFixed(decimalPlaces)}
                            </div>
                            :
                            <div className={`slider-tip ${display}`}
                                 style={{left: right}}>
                                {parseFloat((right / width) * (scaleValue[scaleValue.length - 1] - scaleValue[0]) + scaleValue[0]).toFixed(decimalPlaces)}
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
    width: 300,
    scale: [0, 100],
    showScale: false,
    decimalPlaces: 0
};

export default Slider;
