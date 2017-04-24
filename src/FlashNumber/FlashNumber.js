import React, {Component, PropTypes} from 'react';

import './FlashNumber.css';

export default class FlashNumber extends Component {

    constructor(props) {

        super(props);

        this.flashTime = props.flashTime; // 动画时长
        this.startTime; // 每次animationFrame 开始的时间戳
        this.initValue = props.initValue; // 每次动画的起始数值
        this.animationFrameId; // animationFrame 的 request id
        this.currentValue = 0; // 当前显示的值

        this.init = this.init.bind(this);
        this.step = this.step.bind(this);

    }

    /**
     * 初始化动画
     */
    init() {

        // 如果正在动画中，结束动画
        this.animationFrameId && cancelAnimationFrame(this.animationFrameId);

        // 初始化动画的开始时间戳
        this.startTime = undefined;

        // 将当前值作为动画的起始值
        this.initValue = this.currentValue;

    }

    /**
     * 每次 animationFrame 的回调
     * @param timeStamp
     */
    step(timeStamp) {

        // console.log(timeStamp);

        // 第一次request，记录起始时间戳
        if (!this.startTime) {
            this.startTime = timeStamp;
        }

        // 非第一次
        else {

            // 计算显示的值
            let v = this.initValue + Math.round((this.props.value - this.initValue) * (timeStamp - this.startTime) / this.flashTime);

            // 校验显示的值
            if (this.props.value < this.initValue) { // 当目标值小于起始值
                this.refs.el.innerHTML = this.currentValue = v > this.props.value ? v : this.props.value;
            } else if (this.props.value > this.initValue) { // 当目标值大于起始值
                this.refs.el.innerHTML = this.currentValue = v < this.props.value ? v : this.props.value;
            }

        }

        // 如果当前值与目标值不同，请求下一次 animationFrame，不然结束
        if (this.currentValue != this.props.value) {
            this.animationFrameId = requestAnimationFrame(this.step);
        } else {
            this.animationFrameId = undefined;
        }

    }

    componentWillReceiveProps(nextProps) {

        // 当目标值和当前值不同时，开始动画
        if (nextProps.value !== this.props.value) {

            // 初始化
            this.init();

            // 开始动画
            this.animationFrameId = requestAnimationFrame(this.step);

        }

        if (nextProps.flashTime !== this.flashTime) {
            this.flashTime = nextProps.flashTime;
        }

    }

    componentDidMount() {

        // 当目标值和当前值不同时，开始动画
        if (this.props.value != this.initValue) {
            this.animationFrameId = requestAnimationFrame(this.step);
        }

    }

    render() {

        const {className, style} = this.props;
        const {currentValue} = this;

        return (
            <span ref="el"
                  className={(className ? className : '')}
                  style={style}>
				{currentValue}
			</span>
        );


    }
};

FlashNumber.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    initValue: PropTypes.number,
    value: PropTypes.number,
    flashTime: PropTypes.number

};

FlashNumber.defaultProps = {

    className: '',
    style: null,

    initValue: 0,
    value: 0,
    flashTime: 450

};