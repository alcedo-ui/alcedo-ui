/**
 * @file TimeItems component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Event from '../_vendors/Event';

class TimeItems extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapperEl = null;
        this.wrapper = createRef();

    }

    handleClick = value => {

        if (!value) {
            return;
        }

        this.scrollTo(this.wrapperEl, (+value) * 30, 200);

        const {onChange} = this.props;
        onChange && onChange(value);

    };

    handleMouseMove = () => {
        this.wrapperEl && (this.wrapperEl.style.overflowY = 'auto');
    };

    scrollTo = (element, to, duration) => {

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

    handleMouseOut = () => {
        this.wrapperEl && (this.wrapperEl.style.overflowY = 'hidden');
    };

    componentDidMount() {

        const {value} = this.props;
        this.wrapperEl = this.wrapper && this.wrapper.current;

        this.scrollTo(this.wrapperEl, (+value) * 30, 0);
        Event.addEvent(this.wrapperEl, 'mouseover', this.handleMouseMove);
        Event.addEvent(this.wrapperEl, 'mouseout', this.handleMouseOut);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.value !== this.props.value) {
            this.scrollTo(this.wrapperEl, +(this.props.value) * 30, 200);
        }
    }

    componentWillUnmount() {
        Event.removeEvent(this.wrapperEl, 'mouseover', this.handleMouseMove);
        Event.removeEvent(this.wrapperEl, 'mouseout', this.handleMouseOut);
    }

    render() {

        const {className, style, data, value} = this.props,
            {width} = style,
            liStyle = {};

        if (width == '100%') {
            liStyle.paddingLeft = '140px';
        } else if (width == '50%') {
            liStyle.paddingLeft = '60px';
        } else {
            liStyle.paddingLeft = '36px';
        }

        return (
            <div ref={this.wrapper}
                 className={classNames('time-items', {
                     [className]: className
                 })}
                 style={style}>

                <ul className="time-list">
                    {
                        data && data.length ?
                            data.map((item, key) =>
                                <li className={classNames('time-item', {
                                    disabled: !item.value,
                                    active: item.text == value
                                })}
                                    key={key}
                                    style={liStyle}
                                    onClick={() => this.handleClick(item.text)}>
                                    {item.text}
                                </li>
                            )
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

    data: PropTypes.array,
    value: PropTypes.any,

    onChange: PropTypes.func

};

export default TimeItems;
