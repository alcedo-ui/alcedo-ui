import React, {Component, PropTypes} from 'react';

import _ from 'lodash';

import TimeItems from '../_TimeItems/_TimeItems';

export default class _TimeList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hour: this.props.hour,
            minute: this.props.minute,
            second: this.props.second,
            hoursData:[],
            minutesData:[],
            secondData:[]
        };

        this.hourChangeHandle = this::this.hourChangeHandle;
        this.minuteChangeHandle = this::this.minuteChangeHandle;
        this.secondChangeHandle = this::this.secondChangeHandle;

    }

    rangeData(range,minValue,maxValue) {
        const {isRequired}=this.props;
        let arr = [];
        for (let i = 0; i < range; i++) {
            if (i < 10) {
                i = '0' + i
            }
            let obj;
            if(isRequired){
                (+i > +maxValue) || (+i <+minValue) ?
                    obj = {text: i, value: false}
                    :
                    obj = {text: i, value: true}
            }else{
                obj = {text: i, value: true}
            }
            arr.push(obj)
        }
        return arr;
    }


    hourChangeHandle(value) {
        let state = _.cloneDeep(this.state);
        const {minValue,maxValue} = this.props;
        let minHour,minMinute,minSecond,maxHour,maxMinute,maxSecond;
        if(minValue){
            minHour = minValue.split(':')[0];
            minMinute = minValue.split(':')[1];
            minSecond = minValue.split(':')[2];
        }
        if(maxValue){
            maxHour = maxValue.split(':')[0];
            maxMinute = maxValue.split(':')[1];
            maxSecond = maxValue.split(':')[2];
        }
        state.hour = value ;
        if(minHour == value || maxHour == value){
            state.minutesData = this.rangeData(60,minMinute,maxMinute);
            state.secondsData = this.rangeData(60,minSecond,maxSecond);
        }else{
            state.minutesData = this.rangeData(60);
            state.secondsData = this.rangeData(60);
        }
        this.setState(state, ()=> {
            this.props.onChange && this.props.onChange({hour: value, minute: state.minute, second: state.second})
        })
    }

    minuteChangeHandle(value) {
        let state = _.cloneDeep(this.state);
        const {minValue,maxValue} = this.props;
        let minHour,minMinute,minSecond,maxHour,maxMinute,maxSecond;
        if(minValue){
            minHour = minValue.split(':')[0];
            minMinute = minValue.split(':')[1];
            minSecond = minValue.split(':')[2];
        }
        if(maxValue){
            maxHour = maxValue.split(':')[0];
            maxMinute = maxValue.split(':')[1];
            maxSecond = maxValue.split(':')[2];
        }
        state.minute = value ;
        if(minHour == state.hour && minMinute == value || maxHour == state.hour && maxMinute == value){
            state.secondsData = this.rangeData(60,minSecond,maxSecond);
        }else{
            state.secondsData = this.rangeData(60);
        }

        this.setState(state, ()=> {
            this.props.onChange && this.props.onChange({hour: state.hour, minute: value, second: state.second})
        })

    }

    secondChangeHandle(value) {
        let {hour, minute}=this.state;
        this.setState({
            second: value
        }, ()=> {
            this.props.onChange && this.props.onChange({hour: hour, minute: minute, second: value})
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.hour !== this.props.hour || nextProps.minute !== this.props.minute || nextProps.second !== this.props.second) {
            this.setState({
                hour: nextProps.hour,
                minute: nextProps.minute,
                second: nextProps.second
            });
        }
    }
    componentDidMount() {
        const {minValue,maxValue} = this.props;
        let state = _.cloneDeep(this.state);

        let minHour,minMinute,minSecond,maxHour,maxMinute,maxSecond;
        if(minValue){
            minHour = minValue.split(':')[0];
            minMinute = minValue.split(':')[1];
            minSecond = minValue.split(':')[2];
        }
        if(maxValue){
            maxHour = maxValue.split(':')[0];
            maxMinute = maxValue.split(':')[1];
            maxSecond = maxValue.split(':')[2];
        }

        state.hoursData = this.rangeData(24,minHour,maxHour);

        if(minHour == state.hour || maxHour == state.hour){
            state.minutesData = this.rangeData(60,minMinute,maxMinute);
        }else{
            state.minutesData = this.rangeData(60);
        }

        if(minHour == state.hour && minMinute == state.minute || maxHour == state.hour && maxMinute == state.minute){
            state.secondsData = this.rangeData(60,minSecond,maxSecond);
        }else{
            state.secondsData = this.rangeData(60);
        }

        this.setState(state)

    }

    render() {
        const {className, popupVisible} = this.props;
        const {hour, minute, second, hoursData, minutesData, secondsData} = this.state;

        return (
            <div className={`calendar ${className}`}>
                <TimeItems className="hours"
                           data={hoursData}
                           value={hour}
                           popupVisible={popupVisible}
                           onChange={this.hourChangeHandle}
                />
                <TimeItems className="minutes"
                           data={minutesData}
                           value={minute}
                           popupVisible={popupVisible}
                           onChange={this.minuteChangeHandle}
                />
                <TimeItems className="seconds"
                           data={secondsData}
                           value={second}
                           popupVisible={popupVisible}
                           onChange={this.secondChangeHandle}
                />
            </div>
        );
    }
};

_TimeList.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    popupVisible: PropTypes.bool,
    hour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minute: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    second: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isRequired:PropTypes.bool,
    maxValue:PropTypes.string,//'11:20:39'
    minValue:PropTypes.string
};
