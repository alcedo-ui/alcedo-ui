/**
 * @file TimeItems component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import PureRender from '../_vendors/PureRender';
import Event from '../_vendors/Event';

@PureRender
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

        this.scrollTo(this.itemsEl, (+value) * 30, 200);

        const {onChange} = this.props;
        onChange && onChange(value);

    }


    mousemoveHandle() {
        this.itemsEl && (this.itemsEl.style.overflowY = 'auto');
    }

    scrollTo(element, to, duration) {

        if (!element) {
            return;
        }

        // jump to target if duration zero
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }

        const difference = to - element.scrollTop,
            perTick = difference / duration * 10;

        setTimeout(() => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            this.scrollTo(element, to, duration - 10);
        }, 10);

    };

    mouseoutHandle() {
        this.itemsEl && (this.itemsEl.style.overflowY = 'hidden');
    }

    componentDidMount() {

        const {value} = this.props;
        this.itemsEl = this.refs.timeItems;

        this.scrollTo(this.itemsEl, (+value) * 30, 0);
        Event.addEvent(this.itemsEl, 'mouseover', this.mousemoveHandle);
        Event.addEvent(this.itemsEl, 'mouseout', this.mouseoutHandle);

    }

    componentWillUnmount() {
        Event.removeEvent(this.itemsEl, 'mouseover', this.mousemoveHandle);
        Event.removeEvent(this.itemsEl, 'mouseout', this.mouseoutHandle);
    }

    render() {

        const {className, style, data, value} = this.props,
            {width} = style,

            itemsClassName = classNames('time-items', {
                [className]: className
            }),

            liStyle = {};

        if (width == '100%') {
            liStyle.paddingLeft = '140px';
        } else if (width == '50%') {
            liStyle.paddingLeft = '60px';
        } else {
            liStyle.paddingLeft = '36px';
        }

        return (
            <div ref="timeItems"
                 className={itemsClassName}
                 style={style}>

                <ul className="time-list">
                    {
                        data && data.length ?
                            data.map((item, key) => {

                                const className = classNames('time-item', {
                                    disabled: !item.value,
                                    active: item.text == value
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
                            :
                            null
                    }
                </ul>

            </div>
        );

    }
}

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    TimeItems.propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        data: PropTypes.array
    };

}

export default TimeItems;