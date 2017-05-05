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
        const {prefixCls, data, style, className, pending, title} = this.props;
        const pendingItem = pending ?
            (
                <TimeLineItem><a href="javascript:void(0)">更多</a></TimeLineItem>
            )
            :
            null;

        return (
            <ul className={`${prefixCls} ${prefixCls}-pending ? "${prefixCls}-pending":null ${className}`}
                style={style}>

                {
                    data.map((item, index) => {

                        const isArray = _.isArray(item.description);

                        return (
                            <TimeLineItem key={index}
                                          color={item.color}
                                          title={item.title}
                                          date={item.date}
                                          className={`${prefixCls}-${item.color}`}>

                                {
                                    item.description && isArray ?
                                        item.description.map((ele, i)=> {
                                            return (
                                                <div className="text-content-list"
                                                     key={i}>
                                                    {ele}
                                                </div>
                                            )

                                        })
                                        :
                                        item.description
                                }


                            </TimeLineItem>
                        );
                    })
                }
                {pendingItem}

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