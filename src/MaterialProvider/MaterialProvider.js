/**
 * @file MaterialProvider component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MaterialProvider extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, label, ...restProps} = this.props;

        return (
            <div {...restProps}
                 className={'material-provider' + (className ? ' ' + className : '')}>

                {
                    label ?
                        <div className="material-provider-label">
                            {label}
                        </div>
                        :
                        null
                }

                {children}

            </div>
        );

    }
};

MaterialProvider.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    label: PropTypes.string

};

MaterialProvider.defaultProps = {

    className: '',
    style: null,

    label: null

};