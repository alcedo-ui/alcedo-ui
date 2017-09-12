/**
 * Created by Wendy on 2017/5/3.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TimeLineItem from '../_TimelineItem';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './TimeLine.css';

export default class TimeLine extends Component {

    static Type = TimeLineItem.Type;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {data, style, className} = this.props;

        return (
            <ul className={`time-line ${className}`}
                style={style}>

                {
                    data.map((item, index) => {
                        return (
                            <TimeLineItem key={index}
                                          theme={item.theme}
                                          type={item.type}
                                          title={item.title}
                                          date={item.date}
                                          hasBorder={item.hasBorder}
                                          contentText={item.contentText}
                                          headerText={item.headerText}/>
                        );
                    })
                }

            </ul>
        );

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
     * The items data.
     */
    data: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The TimeLine theme.Can be primary,highlight,success,warning,error.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The TimeLine type.Can be header or title.
         */
        type: PropTypes.string,

        /**
         * The text value of TimeLine header.
         */
        headerText: PropTypes.string,

        /**
         * The date value of TimeLine.
         */
        date: PropTypes.string,

        /**
         * If true,the right content will have border style.
         */
        hasBorder: PropTypes.bool,

        /**
         * The text value of right content.
         */
        contentText: PropTypes.string

    })).isRequired

};

TimeLine.defaultProps = {

    className: '',
    style: null,

    hasBorder: true,
    title: '',
    type: ''

};