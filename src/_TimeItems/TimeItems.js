/**
 * Created by Administrator on 2017/4/6.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

export default class TimeItems extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.clickHandle = ::this.clickHandle;
        this.mousemoveHandle = ::this.mousemoveHandle;
        this.mouseoutHandle = ::this.mouseoutHandle;

    }

    clickHandle(value) {
        if (this.refs.timeItems) {
            this.refs.timeItems.scrollTop = (+value) * 30;
        }
        this.props.onChange && this.props.onChange(value);
    }

    mousemoveHandle() {
        this.refs.timeItems.style.overflowY = 'scroll';
    }

    mouseoutHandle() {
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

        const {className, style, data, value} = this.props,
            {width} = style;

        let liStyle = {};
        if (width == '100%') {
            liStyle.paddingLeft = '140px';
        } else if (width == '50%') {
            liStyle.paddingLeft = '60px';
        } else {
            liStyle.paddingLeft = '36px';
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

TimeItems.PropTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    data: PropTypes.array

};