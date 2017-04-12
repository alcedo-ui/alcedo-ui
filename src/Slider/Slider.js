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
        this.state = {
            width: 0,
            left: 0,
            right: 0
        };
    }

    componentDidMount() {
        this.setState({
            width: this.props.width / 2,
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

        document.onmousemove = (ev) => {
            let oEvent = ev || event;
            if( sonElement.getAttribute('class').indexOf('left') > -1 ){
                this.setState({
                    width: Math.abs(this.state.right - this.state.left),
                    left: (this.props.width > (this.getPosition(oEvent).x - offsetLeft)) ? (this.getPosition(oEvent).x - offsetLeft) : this.props.width
                });
            } else {
                this.setState({
                    width: Math.abs(this.state.right - this.state.left),
                    right: (this.props.width > (this.getPosition(oEvent).x - offsetLeft)) ? (this.getPosition(oEvent).x - offsetLeft): this.props.width
                });
            }
        };
        document.onmouseup = () => {
            document.onmousemove = null;
        };
        return false;
    }


    render() {
        const highStyle = {
            width: this.state.width,
            left: Math.min(this.state.left,this.state.right)
        },leftStyle = {
            left: this.state.left
        },rightStyle = {
            left: this.state.right
        };
        return (
            <div className="slider-box">
                <div className="slider-circle slider-circle-left" onMouseDown={this.downHandle} style={leftStyle}>
                </div>
                <div className="slider-circle slider-circle-right" onMouseDown={this.downHandle} style={rightStyle}>
                </div>
                <div className="slider-highlight" style={highStyle}>
                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    leftPoint: PropTypes.bool,
    width: PropTypes.number,
    style: PropTypes.object
};

Slider.defaultProps = {
    leftPoint: false,
    style: {},
    width: 300
};

