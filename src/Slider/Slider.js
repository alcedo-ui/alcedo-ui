/**
 * Created by DT314 on 2017/4/12.
 */
import React, {Component, PropTypes} from 'react'

import './Slider.css'

export default class Slider extends Component{
    constructor(props) {
        super();
        this.getPosition = this :: this.getPosition;
        this.downHandle = this :: this.downHandle;
        this.getElementLeft = this :: this.getElementLeft;
        this.clickHandle = this :: this.clickHandle;
        this.state = {
            highWidth: 0,
            left: 0,
            right: 0
        };
    }

    componentDidMount() {
        this.setState({
            highWidth: this.props.width / 2,
            right: this.props.width / 2
        })
    }

    getPosition(ev) {
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        let scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
        return {x: ev.clientX+scrollLeft, y: ev.clientY+scrollTop};
    }

    getElementLeft(element) {
        let offsetLeft = element.offsetLeft;
        let current = element.offsetParent;
        while (current !== null){
            offsetLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        return offsetLeft;
    }

    downHandle(ev) {
        let sonElement = ev.srcElement ? ev.srcElement : ev.target;
        let highElement = sonElement.parentNode;
        let offsetLeft = this.getElementLeft(highElement);
        let tipElement = sonElement.childNodes[0];
        tipElement.style.display = "block";
        document.onmousemove = (ev) => {
            let oEvent = ev || event;
            let leftPosition = (this.props.width > (this.getPosition(oEvent).x - offsetLeft)) ? (this.getPosition(oEvent).x - offsetLeft) : this.props.width;
            if (sonElement.getAttribute('class').indexOf('left') > -1) {
                this.setState({
                    highWidth: Math.abs(this.state.right - this.state.left),
                    left: (leftPosition > 0) ? leftPosition : 0
                });
            } else {
                this.setState({
                    highWidth: Math.abs(this.state.right - this.state.left),
                    right: (leftPosition > 0) ? leftPosition : 0
                });
            }
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            tipElement.style.display = "none";
        };
        return false;
    }

    clickHandle(ev) {
        let oEvent = ev || event;
        let element = oEvent.srcElement ? oEvent.srcElement : oEvent.target;
        while (element.className.indexOf('slider-box') === -1) {
            element = element.parentNode;
        }
        let offsetLeft = this.getElementLeft(element);
        let clickLeft = this.getPosition(oEvent).x - offsetLeft;
        if(this.props.ruler) {
            let test = this.props.width,j=0;
            for(let i=0;i<this.props.ruler;i++) {
                let long = Math.abs(clickLeft - i * this.props.width/(this.props.ruler - 1));
                if(long < test) {
                    test = long;
                    j=i;
                }
            }
            clickLeft = j * this.props.width/(this.props.ruler - 1);
            this.setState({
                right: clickLeft,
                highWidth: Math.abs(clickLeft - this.state.left)
            });
        } else {
            if (Math.abs(this.state.left - clickLeft) > Math.abs(this.state.right - clickLeft) || this.props.leftPoint === false) {
                this.setState({
                    right: clickLeft,
                    highWidth: Math.abs(clickLeft - this.state.left)
                });
            } else {
                this.setState({
                    left: clickLeft,
                    highWidth: Math.abs(this.state.right - clickLeft)
                });
            }
        }
    }

    render() {
        const { highWidth, left, right } = this.state;
        const { leftPoint, scale, width, showScale} = this.props;
        const grayStyle = {
            width: width
        }, highStyle = {
            width: highWidth,
            left: Math.min(left,right)
        },leftStyle = {
            left: left
        },rightStyle = {
            left: right
        };
        return (
            <div className="slider" style={grayStyle}>
                <div className="slider-box" onClick={this.clickHandle}>
                    {
                        leftPoint ?
                            (<div className="slider-circle slider-circle-left" onMouseDown={this.downHandle} style={leftStyle}>
                                <div className="slider-tip">{parseInt((left / width) * (scale[scale.length - 1] - scale[0]) + scale[0])}</div>
                            </div>) :
                            ''
                    }
                    <div className="slider-circle slider-circle-right" onMouseDown={this.downHandle} style={rightStyle}>
                        <div className="slider-tip">{parseInt((right / width) * (scale[scale.length - 1] - scale[0]) + scale[0])}</div>
                    </div>
                    <div className="slider-highlight" style={highStyle}>
                    </div>
                </div>
                <div className="Slide-scale">
                    {
                        showScale ? <ul>
                            {
                                scale.map((number) => {
                                    let left = (number - scale[0]) / (scale[scale.length - 1] - scale[0]) * 100;
                                    const style = {left: left + '%'};
                                    return <li style={style}>{number}</li>
                                })
                            }
                        </ul> : ''
                    }

                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    leftPoint: PropTypes.bool,
    width: PropTypes.number,
    style: PropTypes.object,
    scale: PropTypes.array,
    showScale: PropTypes.bool,
    tip: PropTypes.bool,
    ruler: PropTypes.number
};

Slider.defaultProps = {
    leftPoint: false,
    style: {},
    width: 300,
    scale: [0, 100],
    showScale: false,
    tip: false
};

