/**
 * Created by Administrator on 2017/4/6.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Event from '../_vendors/Event';

export default class _TimeItems extends Component {
    constructor(props) {

        super(props);

        this.clickHandle = this::this.clickHandle;
        this.mousemoveHandle = this::this.mousemoveHandle;
        this.mouseoutHandle = this::this.mouseoutHandle;

    }

    clickHandle(value) {
        if (this.refs.timeItems) {
            this.refs.timeItems.scrollTop = (+value) * 30;
        }
        this.props.onChange && this.props.onChange(value);
    }

    mousemoveHandle(e) {
        this.refs.timeItems.style.overflowY = 'scroll';
    }

    mouseoutHandle(e) {
        this.refs.timeItems.style.overflowY = 'hidden';
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.popupVisible !== this.props.popupVisible) {
            if (nextProps.popupVisible) {
                if (this.refs.timeItems) {
                    this.refs.timeItems.scrollTop = (nextProps.value) * 30;
                }
            }
        }
    }

    componentDidMount() {
        const {value} = this.props;
        if (this.refs.timeItems) {
            this.refs.timeItems.scrollTop = (value) * 30;
        }
        Event.addEvent(this.refs.timeItems, 'mousemove', this.mousemoveHandle);
        Event.addEvent(this.refs.timeItems, 'mouseout', this.mouseoutHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(this.refs.timeItems, 'mousemove', this.mousemoveHandle);
        Event.removeEvent(this.refs.timeItems, 'mouseout', this.mouseoutHandle);
    }

    render() {
        const {className, style, data, value}=this.props;
        const width = style.width;
        let liStyle={
            paddingLeft: width=='50%' ? '60px':'36px'
        }
        return (
            <div className={`timeItems ${className ? className : ''}`}
                 style={style}
                 ref="timeItems">
                <ul className="timeList"
                    ref="timeList">
                    {
                        data && data.length ?
                            data.map((item, key) => {
                                return (
                                    <li className={`timeItem ${item.value ? '' : 'disabled'} ${item.text == value ? 'active' : ''}`}
                                        key={key}
                                        style={liStyle}
                                        onClick={() => {
                                            if (item.value) {
                                                this.clickHandle(item.text);
                                            }
                                        }}>
                                        {item.text}
                                    </li>
                                );
                            })
                            :
                            null
                    }
                </ul>
            </div>
        );

    }
}
_TimeItems.PropTypes = {

    className: PropTypes.string,
    data: PropTypes.array
};