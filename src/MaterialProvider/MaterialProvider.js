/**
 * @file MaterialProvider component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MaterialProvider extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, label, ...restProps} = this.props,

            providerClassName = classNames('material-provider', {
                [className]: className
            });

        return (
            <div {...restProps}
                 className={providerClassName}>

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

export default MaterialProvider;