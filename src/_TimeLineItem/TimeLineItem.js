/**
 * @file TimeLineItem component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TimeLineItem extends Component {

    static Type = {
        HEADER: 'header',
        TITLE: 'title'
    };

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, date, theme, type, headerText, contentText, hasBorder, style} = this.props,

            itemClassName = classNames('time-line-item', {
                [className]: className
            });

        return (

            <li className={itemClassName}
                style={style}>

                {
                    type && type == 'header' ?
                        <div className={`time-line-item-header`}>{headerText}</div>
                        :
                        (
                            type && type == 'title' ?
                                <div className={`time-line-item-title time-line-item-title-${theme}`}>
                                    <span className="tl-date">{date}</span>
                                    {
                                        hasBorder
                                            ?
                                            <div className={`tl-content panel panel-${theme}`}>
                                                <span className={`triangle triangle-${theme}`}> </span>
                                                <span className={`tag tag-${theme}`}> </span>
                                                <div>{contentText}</div>
                                            </div>
                                            :
                                            <div className="tl-content">{contentText}</div>
                                    }
                                </div>
                                :
                                null
                        )
                }

            </li>

        );
    }
}

TimeLineItem.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

export default TimeLineItem;