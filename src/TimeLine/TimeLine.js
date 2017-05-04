/**
 * Created by Wendy on 2017/5/3.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TimeLineItem from './TimelineItem';

import './TimeLine.css';

export default class TimeLine extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {prefixCls, data, style, className} = this.props;

        return (
            <ul className={`${prefixCls} ${prefixCls}-pending ? "${prefixCls}-pending":null ${className}`}
                style={style}>

                {
                    data.map((item, index) => {

                        const isArray = _.isArray(item.textContent);

                        return (
                            <TimeLineItem key={index}
                                          color={item.color}
                                          className={`${prefixCls}-${item.color} ${item.customDot}` }>

                                {
                                    item.textContent && isArray ?
                                        item.textContent.map((ele, i)=> {
                                            return (
                                                <div className="text-content-con"
                                                     key={i}>
                                                    {ele}
                                                </div>
                                            )

                                        })
                                        :
                                        item.textContent
                                }

                            </TimeLineItem>
                        );
                    })
                }

            </ul>
        )
    }
}

TimeLine.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The prefix of element className.
     */
    prefixCls: PropTypes.string,

    /**
     * The items data.
     */
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.array])

};

TimeLine.defaultProps = {
    className: '',
    style: null,
    prefixCls: "time-line"

};