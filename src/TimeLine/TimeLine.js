/**
 * Created by Wendy on 2017/5/3.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TimeLineItem from './TimelineItem';

import './TimeLine.css';

export default class TimeLine extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {prefixCls, children, className, pending} = this.props;

        return (
            <ul className={`${prefixCls} ${prefixCls}-pending ? "${prefixCls}-pending":null`}>

                <TimeLineItem color="green">Create a services site 2015-09-01</TimeLineItem>
                <TimeLineItem color="blue">Create a services site 2015-09-01</TimeLineItem>
                <TimeLineItem color="red">
                    Solve initial network problems 1<br/>
                    Solve initial network problems 2<br/>
                    Solve initial network problems 3 2015-09-01<br/>
                </TimeLineItem>
                <TimeLineItem>
                    Solve initial network problems 1<br/>
                    Solve initial network problems 2<br/>
                    Solve initial network problems 3 2015-09-01<br/>
                </TimeLineItem>
            </ul>
        )
    }
}

TimeLine.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

};

TimeLine.defaultProps = {
    className: '',
    style: null,

};