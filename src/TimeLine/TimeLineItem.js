/**
 * Created by Wendy on 2017/5/3.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TimeLine.css';

export default class TimeLineItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {prefixCls, className, children, color} = this.props;

        return (

            <li className={`${prefixCls}-item ${prefixCls}-item-last ${prefixCls}-item-pending ${className}`}>

                <div className={`${prefixCls}-item-tail`}/>

                <div className={`${prefixCls}-item-head ${prefixCls}-item-head-custom ${prefixCls}-item-head-${color}`}
                     style={{borderColor: /blue|red|green/.test(color) ? null : color}}>

                </div>

                <div className={`${prefixCls}-item-content`}>
                    {children}
                </div>

            </li>

        )
    }
}

TimeLineItem.propTypes = {

    className: PropTypes.string,
    prefixCls: PropTypes.string,
    color: PropTypes.string


};

TimeLineItem.defaultProps = {

    className: '',
    prefixCls: 'time-line',
    color: 'blue'

};