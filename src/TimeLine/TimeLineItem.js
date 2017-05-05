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

        const {prefixCls, className, children, color, title,date} = this.props;

        return (

            <li className={`${prefixCls}-item ${prefixCls}-item-last ${prefixCls}-item-pending ${className}`}>

                <div className={`${prefixCls}-item-con`}>

                    <div className={`${prefixCls}-item-time-stamp`}>
                        <span>{date}</span>
                    </div>

                    <div className={`${prefixCls}-item-thread`}/>

                    <div className={`${prefixCls}-item-head ${prefixCls}-item-head-icon ${prefixCls}-item-head-${color}`}
                        style={{borderColor: /blue|red|green/.test(color) ? null : color}}/>

                    <div className={`${prefixCls}-item-content`}>

                        {
                            title?
                                <div className={`${prefixCls}-item-title ${color}`}>
                                    {title}
                                </div>
                                :
                                null
                        }

                        <div className={`${prefixCls}-item-description ${color}`}>
                            {children}
                        </div>
                    </div>

                </div>


            </li>

        )
    }
}

TimeLineItem.propTypes = {

    prefixCls: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string

};

TimeLineItem.defaultProps = {

    className: '',
    prefixCls: 'time-line',
    color: 'blue'

};