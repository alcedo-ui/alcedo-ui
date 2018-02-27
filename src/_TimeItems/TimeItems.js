/**
 * @file TimeItems component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Event from '../_vendors/Event';

class TimeItems extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.clickHandle = ::this.clickHandle;
        this.mousemoveHandle = ::this.mousemoveHandle;
        this.mouseoutHandle = ::this.mouseoutHandle;

    }

    clickHandle(value) {

        if (!value) {
            return;
        }

        if (this.timeItemsEl) {
            this.scrollTo(this.timeItemsEl, (+value) * 30, 200);
        }

        this.props.onChange && this.props.onChange(value);

    }

    mousemoveHandle() {
        this.timeItemsEl.style.overflowY = 'auto';
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
        this.timeItemsEl.style.overflowY = 'hidden';
    }

    componentDidMount() {

        const {value} = this.props;
        this.timeItemsEl = this.refs.timeItems;

        this.scrollTo(this.timeItemsEl, (+value) * 30, 0);

        Event.addEvent(this.timeItemsEl, 'mouseover', this.mousemoveHandle);
        Event.addEvent(this.timeItemsEl, 'mouseout', this.mouseoutHandle);

    }

    componentWillUnmount() {
        Event.removeEvent(this.timeItemsEl, 'mouseover', this.mousemoveHandle);
        Event.removeEvent(this.timeItemsEl, 'mouseout', this.mouseoutHandle);
    }

    render() {

        const {className, style, data, value} = this.props,
            {width} = style,

            wrapperClassName = classNames('timeItems', {
                [className]: className
            });

        let liStyle = {};
        if (width == '100%') {
            liStyle.paddingLeft = '140px';
        } else if (width == '50%') {
            liStyle.paddingLeft = '60px';
        } else {
            liStyle.paddingLeft = '36px';
        }

        return (
            <div ref="timeItems"
                 className={wrapperClassName}
                 style={style}>

                <ul className="timeList">
                    {
                        data && data.map((item, key) => {

                            const className = classNames('timeItem', {
                                disabled: !item.value,
                                active: item.text == value,
                                [className]: className
                            });

                            return (
                                <li className={className}
                                    key={key}
                                    style={liStyle}
                                    onClick={() => {
                                        this.clickHandle(item.text);
                                    }}>
                                    {item.text}
                                </li>
                            );

                        })
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