/**
 * @file TimeLineItem component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TimeLineItem extends Component {

    static Type = {
        HEADER: 'header',
        TITLE: 'title'
    };
    static propTypes = {

        /**
         * The CSS class name of the root element.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the root element.
         */
        style: PropTypes.object

    };
    static defaultProps = {
        className: '',
        style: null
    };

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, date, theme, type, headerText, contentText, hasBorder, style} = this.props;

        return (

            <li className={`time-line-item ${className}`}
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