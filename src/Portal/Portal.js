/**
 * @file Portal component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom';

class Portal extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = null;

        this.renderWrapper = ::this.renderWrapper;

    }

    renderWrapper() {

        if (this.wrapper) {
            return;
        }

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'portal';
        document.body.appendChild(this.wrapper);

    }

    componentWillUnmount() {
        if (this.wrapper) {
            document.body.removeChild(this.wrapper);
        }
    }

    render() {

        const {children} = this.props;

        this.renderWrapper();

        return createPortal(
            children,
            this.wrapper
        );

    }

};

Portal.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object

};

Portal.defaultProps = {
    className: null,
    style: null
};

export default Portal;