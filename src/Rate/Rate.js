/**
 * @file Rate component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Event from '../_vendors/Event';

class Rate extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: 0,
            items: []
        };

        this.mouseMoveHandler = ::this.mouseMoveHandler;
        this.selectHandler = ::this.selectHandler;
        this.createItems = ::this.createItems;

    }

    triggerEventHandle(el, triggerEl) {
        // console.log(el,triggerEl)
        while (el) {
            if (el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        return false;

    }

    mouseMoveHandler(e) {

        const {disabled} = this.props;
        if (disabled) {
            return;
        }
        const mouseEnterFalg = this.triggerEventHandle(e.target, require('react-dom').findDOMNode(this.refs.rate));
        let {value} = this.props;

        // console.log(mouseEnterFalg)
        if (mouseEnterFalg) {
            if (e.target.nodeName === 'I') {
                value = e.target.getAttribute('data-key');
            } else if (e.target.nodeName === 'DIV' && ((e.target.className.indexOf('half-star') !== -1) || (e.target.className.indexOf('star') !== -1))) {
                value = e.target.getAttribute('data-key');
            }
        } else {
            value = this.props.value;
        }
        // if(value!==this.props.value){
        const items = this.createItems(value);
        this.setState({
            items
        });
        // }
    }

    selectHandler(value, e) {

        e.preventDefault();

        const {disabled, allowClear} = this.props;

        if (disabled) {
            return;
        }

        if (value === this.state.value && allowClear) {
            value = 0;
        }
        this.setState({
            value
        }, () => {
            this.props.onChange && this.props.onChange(value);
        });

    }

    createItems(value) {
        const {allowHalf, count} = this.props;
        let items = [];
        if (allowHalf) {
            for (let i = 0; i < count; i++) {
                if (i <= value - 1) {
                    items.push('full');
                } else if (i < value && i > value - 1) {
                    items.push('full-zero');
                } else if (i > value) {
                    items.push('zero');
                } else {
                    items.push('zero');
                }
            }
        } else {
            for (let i = 0; i < count; i++) {
                if (i < value) {
                    items.push('full');
                } else if (i > value) {
                    items.push('zero');
                } else {
                    items.push('zero');
                }
            }
        }
        return items;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            const value = nextProps.value;
            const items = this.createItems(value);
            this.setState({
                value,
                items
            });
        }
    }

    componentDidMount() {
        const {value} = this.props;
        const items = this.createItems(value);
        this.setState({
            value,
            items
        });
        Event.addEvent(document, 'mousemove', this.mouseMoveHandler);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandler);
    }

    render() {

        const {className, style, allowHalf, disabled, count} = this.props,
            {items} = this.state,

            rateClassName = classNames('rate', {
                [className]: className
            }),

            rateStyle = {
                width: count * 30,
                ...style
            };

        return (
            <div ref="rate"
                 className={rateClassName}
                 style={rateStyle}>

                {
                    items.map((item, index) => allowHalf ?
                        <div key={index}
                             className={`half-star ${disabled ? 'disabled' : ''}`}
                             data-key={index + 1}>
                            <div className="half-star-left"
                                 data-key={index + 0.5}
                                 onTouchTap={(e) => {
                                     this.selectHandler(index + 0.5, e);
                                 }}>
                                <i className={`fas fa-star-half ${ item == 'full' || item == 'full-zero' ? 'full' : 'zero'} ${disabled ? 'disabled' : ''}`}
                                   data-key={index + 0.5}></i>
                            </div>
                            <div className="half-star-right"
                                 data-key={index + 1}
                                 onTouchTap={(e) => {
                                     this.selectHandler(index + 1, e);
                                 }}>
                                <i className={`fas fa-star-half ${ item == 'zero' || item == 'full-zero' ? 'zero' : 'full'} ${disabled ? 'disabled' : ''}`}
                                   data-key={index + 1}></i>
                            </div>
                        </div>
                        :
                        <div key={index}
                             className={`star ${disabled ? 'disabled' : ''}`}
                             data-key={index + 1}>
                            <i className={`fas fa-star ${ item == 'zero' ? 'zero' : 'full'} ${disabled ? 'disabled' : ''}`}
                               data-key={index + 1}
                               onTouchTap={(e) => {
                                   this.selectHandler(index + 1, e);
                               }}
                            ></i>
                        </div>
                    )
                }

            </div>
        );
    }
}

Rate.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The value of Rate component.
     */
    value: PropTypes.number,

    /**
     * If true,the Rate will have half star.
     */
    allowHalf: PropTypes.bool,

    /**
     * If true,the Rate component will be clear the value when double click.
     */
    allowClear: PropTypes.bool,

    /**
     * If true,the Rate component will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the rate change.
     */
    onChange: PropTypes.func

};

Rate.defaultProps = {
    allowClear: true,
    count: 5,
    defaultValue: 0,
    disabled: false
};

export default Rate;