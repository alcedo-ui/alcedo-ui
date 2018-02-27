/**
 * @file TimeItems component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

class TimeItems extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.clickHandle = ::this.clickHandle;
        this.mousemoveHandle = ::this.mousemoveHandle;
        this.mouseoutHandle = ::this.mouseoutHandle;

    }

    clickHandle(value) {
        if (this.refs.timeItems) {
            this.scrollTo(this.refs.timeItems, (+value) * 30, 200);
        }
        this.props.onChange && this.props.onChange(value);
    }


    mousemoveHandle() {
        this.refs.timeItems.style.overflowY = 'auto';
    }

    scrollTo(element, to, duration) {
        // jump to target if duration zero
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        let difference = to - element.scrollTop;
        let perTick = difference / duration * 10;
        setTimeout(() => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            this.scrollTo(element, to, duration - 10);
        }, 10);
    };

    mouseoutHandle() {
        this.refs.timeItems.style.overflowY = 'hidden';
    }

    componentDidMount() {
        const {value} = this.props;
        if (this.refs.timeItems) {
            const el = this.refs.timeItems;
            this.scrollTo(this.refs.timeItems, (+value) * 30, 0);
        }
        Event.addEvent(this.refs.timeItems, 'mouseover', this.mousemoveHandle);
        Event.addEvent(this.refs.timeItems, 'mouseout', this.mouseoutHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(this.refs.timeItems, 'mouseover', this.mousemoveHandle);
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
            <div className={`time-items ${className ? className : ''}`}
                 style={style}
                 ref="timeItems">
                <ul className="time-list">
                    {
                        data && data.length ?
                            data.map((item, key) => {
                                return (
                                    <li className={`time-item ${item.value ? '' : 'disabled'} ${item.text == value ? 'active' : ''}`}
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

TimeItems.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.array
};

export default TimeItems;