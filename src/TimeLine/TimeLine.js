/**
 * @file TimeLine component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TimeLineItem from '../_TimelineItem';
import Theme from '../Theme';

import Util from '../_vendors/Util';

class TimeLine extends Component {

    static Type = TimeLineItem.Type;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {data, style, className} = this.props,

            wrapperClassName = classNames('time-line', {
                [className]: className
            });

        return (
            <ul className={wrapperClassName}
                style={style}>

                {
                    data && data.map((item, index) =>
                        <TimeLineItem key={index}
                                      theme={item.theme}
                                      type={item.type}
                                      title={item.title}
                                      date={item.date}
                                      hasBorder={item.hasBorder}
                                      contentText={item.contentText}
                                      headerText={item.headerText}/>
                    )
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
    hasBorder: true,
    title: '',
    type: ''
};

export default TimeLine;