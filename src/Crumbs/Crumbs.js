/**
 * @file Crumbs component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Crumbs extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style} = this.props,

            crumbsClassName = (className ? ' ' + className : '');

        return (
            <div className={'crumbs' + crumbsClassName}
                 style={style}>

            </div>
        );

    }
};

Crumbs.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

Crumbs.defaultProps = {

    className: '',
    style: null

};