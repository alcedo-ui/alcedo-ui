/**
 * @file MaterialProvider component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class MaterialProvider extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    render() {

        const {children, className, isLabelAnimate, label, ...restProps} = this.props,
            {value} = this.state,

            wrapperClassName = (isLabelAnimate ? ' animated' : '') + (label ? ' has-label' : '')
                + (value ? ' has-value' : '') + (className ? ' ' + className : '');

        return (
            <div {...restProps}
                 className={'material-provider' + wrapperClassName}>

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

    /**
     * The TextField theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    isLabelAnimate: PropTypes.bool

};

MaterialProvider.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    isLabelAnimate: true

};