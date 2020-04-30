/**
 * @file Rate component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';
import Event from '../_vendors/Event';
import RC from '../_vendors/RateCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class Rate extends Component {

    static getDerivedStateFromProps(props, state) {

        const value = ComponentUtil.getDerivedState(props, state, 'value');

        return {
            prevProps: props,
            value,
            items: RC.createItems(value, props.allowHalf, props.count)
        };

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = createRef();
        this.wrapperEl = null;

        this.state = {
            value: 0,
            items: []
        };

    }

    componentDidMount() {

        this.wrapperEl = this.wrapper && this.wrapper.current;

        const {value} = this.props,
            items = this.createItems(value);

        this.setState({
            value,
            items
        });

        Event.addEvent(document, 'mousemove', this.handleMouseMove);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.handleMouseMove);
    }

    createItems = value => {
        const {allowHalf, count} = this.props;
        return RC.createItems(value, allowHalf, count);
    };

    handleTriggerEvent = (el, triggerEl) => {
        // console.log(el,triggerEl)
        while (el) {
            if (el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        return false;

    };

    handleMouseMove = e => {

        const {disabled} = this.props;
        if (disabled) {
            return;
        }
        const mouseEnterFalg = this.handleTriggerEvent(e.target, this.wrapperEl);
        let {value} = this.props;

        // console.log(mouseEnterFalg)
        if (mouseEnterFalg) {
            if (e.target.nodeName === 'I') {
                value = e.target.getAttribute('data-key');
            } else if (e.target.nodeName === 'DIV'
                && ((e.target.className.indexOf('half-star') !== -1)
                    || (e.target.className.indexOf('star') !== -1))) {
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
    };

    handleSelect = (value, e) => {

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

    };

    render() {

        const {className, style, allowHalf, disabled, count} = this.props,
            {items} = this.state;

        return (
            <div ref={this.wrapper}
                 className={classNames('rate', {
                     [className]: className
                 })}
                 style={{
                     width: count * 30,
                     ...style
                 }}>

                {
                    items && items.map((item, index) => allowHalf ?
                        <div key={index}
                             className={`half-star ${disabled ? 'disabled' : ''}`}
                             data-key={index + 1}>
                            <div className="half-star-left"
                                 data-key={index + 0.5}
                                 onClick={(e) => {
                                     this.handleSelect(index + 0.5, e);
                                 }}>
                                <i className={`fas fa-star-half ${item == 'full' || item == 'full-zero' ? 'full' : 'zero'} ${disabled ? 'disabled' : ''}`}
                                   data-key={index + 0.5}></i>
                            </div>
                            <div className="half-star-right"
                                 data-key={index + 1}
                                 onClick={(e) => {
                                     this.handleSelect(index + 1, e);
                                 }}>
                                <i className={`fas fa-star-half ${item == 'zero' || item == 'full-zero' ? 'zero' : 'full'} ${disabled ? 'disabled' : ''}`}
                                   data-key={index + 1}></i>
                            </div>
                        </div>
                        :
                        <div key={index}
                             className={`star ${disabled ? 'disabled' : ''}`}
                             data-key={index + 1}>
                            <i className={`fas fa-star ${item == 'zero' ? 'zero' : 'full'} ${disabled ? 'disabled' : ''}`}
                               data-key={index + 1}
                               onClick={(e) => {
                                   this.handleSelect(index + 1, e);
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

    count: PropTypes.number,

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
