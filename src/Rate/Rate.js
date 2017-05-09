import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

import './Rate.css';

export default class Rate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            items: []
        };

        this.mouseMoveHandle = this::this.mouseMoveHandle;
        this.selectHandle = this::this.selectHandle;
        this.createItems = this::this.createItems;
    }

    triggerEventHandle(el, triggerEl) {
        while (el) {
            if (el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        return false;

    }

    mouseMoveHandle(e) {
        const {disabled} = this.props;
        if (disabled) {
            return;
        }
        const mouseEnterFalg = this.triggerEventHandle(e.target, require('react-dom').findDOMNode(this.refs.rate));
        let {value}= this.props;
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
        })
        // }
    }

    selectHandle(value) {
        const {disabled} = this.props;
        if (disabled) {
            return;
        }
        this.setState({
            value
        }, ()=> {
            this.props.onChange && this.props.onChange(value)
        })
    }

    createItems(value) {
        const {allowHalf, count} =this.props;
        let items = [];
        if (allowHalf) {
            for (let i = 0; i < count; i++) {
                if (i <= value - 1) {
                    items.push('full')
                } else if (i < value && i > value - 1) {
                    items.push('full-zero')
                } else if (i > value) {
                    items.push('zero')
                } else {
                    items.push('zero')
                }
            }
        } else {
            for (let i = 0; i < count; i++) {
                if (i < value) {
                    items.push('full')
                } else if (i > value) {
                    items.push('zero')
                } else {
                    items.push('zero')
                }
            }
        }
        return items
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
        const {value} =this.props;
        const items = this.createItems(value);
        this.setState({
            value,
            items
        })
        Event.addEvent(document, 'mousemove', this.mouseMoveHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousemove', this.mouseMoveHandle);
    }

    render() {
        const {className, style, allowHalf, disabled, count} = this.props;
        const {items} = this.state;
        const warpStyle = {
            width:count * 30
        }
        return (
            <div className={`rate ${className ? className : ''}`}
                 style={{...warpStyle , ...style}}
                 ref="rate">
                {
                    items.map((item, index)=> {
                        if (allowHalf) {
                            return (
                                <div key={index}
                                    className={`half-star ${disabled ? 'disabled' : ''}`}
                                     data-key={index + 1}>
                                <div className="half-star-left">
                                    <i className={`fa fa-star-half ${ item == 'full' || item == 'full-zero' ? 'full' : 'zero'} ${disabled ? 'disabled' : ''}`}
                                       data-key={index + 0.5}
                                       onClick={()=> {
                                           this.selectHandle(index + 0.5)
                                       }}
                                    ></i>
                                </div>
                                <div className="half-star-right">
                                    <i className={`fa fa-star-half ${ item == 'zero' || item == 'full-zero' ? 'zero' : 'full'} ${disabled ? 'disabled' : ''}`}
                                       data-key={index + 1}
                                       onClick={()=> {
                                           this.selectHandle(index + 1)
                                       }}
                                    ></i>
                                </div>
                            </div>
                            )
                        } else {
                            return (
                                <div key={index}
                                    className={`star ${disabled ? 'disabled' : ''}`}
                                     data-key={index + 1}>
                                <i className={`fa fa-star ${ item == 'zero' ? 'zero' : 'full'} ${disabled ? 'disabled' : ''}`}
                                   data-key={index + 1}
                                   onClick={()=> {
                                       this.selectHandle(index + 1)
                                   }}
                                ></i>
                            </div>
                            )
                        }
                    })
                }
            </div>
        );
    }
};

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
     *
     */
    value: PropTypes.number,

    allowHalf: PropTypes.bool,

    disabled: PropTypes.bool,

    /**
     * Callback function fired when the rate change.
     */
    onChange: PropTypes.func

};

Rate.defaultProps = {
    className: '',
    style: null,
    count: 5,
    defaultValue: 0,
    disabled: false
};

