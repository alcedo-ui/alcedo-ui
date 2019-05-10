/**
 * @file Tab component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlatButton from '../FlatButton';

import ComponentUtil from '../_vendors/ComponentUtil';

class Tab extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            activatedIndex: props.activatedIndex
        };

    }

    handleTabClick = (item, activatedIndex) => {
        this.setState({
            activatedIndex
        }, () => {

            item.onActive && item.onActive(item, activatedIndex);

            const {onIndexChange} = this.props;
            onIndexChange && onIndexChange(activatedIndex, item);

        });
    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            activatedIndex: ComponentUtil.getDerivedState(props, state, 'activatedIndex')
        };
    }

    render() {

        const {className, style, isTabFullWidth, tabs} = this.props,
            {activatedIndex} = this.state,
            tabWidthPerCent = 100 / tabs.length;

        return (
            <div className={classNames('tab', {
                [className]: className
            })}
                 style={style}>

                <div className={classNames('tabs', {
                    'auto-width': !isTabFullWidth
                })}>

                    {
                        tabs && tabs.map((item, index) => {

                            const {

                                    // not passing down these props
                                    renderer, onActive,

                                    ...restProps

                                } = item,

                                className = classNames('tab-button', {
                                    activated: activatedIndex === index
                                });

                            return (
                                <FlatButton {...restProps}
                                            key={index}
                                            className={className}
                                            style={{
                                                width: isTabFullWidth ? `${tabWidthPerCent}%` : 'auto'
                                            }}
                                            onClick={() => this.handleTabClick(item, index)}/>
                            );

                        })
                    }

                    {
                        isTabFullWidth ?
                            <div className="ink-bar"
                                 style={{
                                     width: `${tabWidthPerCent}%`,
                                     transform: `translate(${activatedIndex * 100}%, 0)`
                                 }}></div>
                            :
                            null
                    }

                </div>

                <div className="tab-content-wrapper">
                    <div className="tab-content-scroller"
                         style={{
                             width: `${tabs.length * 100}%`,
                             transform: `translate(${-activatedIndex * tabWidthPerCent}%, 0)`
                         }}>
                        {
                            tabs && tabs.map((item, index) =>
                                <div key={index}
                                     className="tab-content"
                                     style={{
                                         width: `${tabWidthPerCent}%`
                                     }}>
                                    {item.renderer}
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        );

    }
}

Tab.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the TabsItem.
     */
    tabs: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The text value of the tab.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true, the tab will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the tab will be have loading effect.
         */
        isLoading: PropTypes.bool,

        /**
         * If true,the element's ripple effect will be disabled.
         */
        disableTouchRipple: PropTypes.bool,

        /**
         * Use this property to display an icon.It will display on the left.
         */
        iconCls: PropTypes.string,

        /**
         * The position of the icon.
         */
        iconPosition: PropTypes.string,

        /**
         * The render content in tab.
         */
        renderer: PropTypes.any,

        /**
         * Callback function fired when click onActive tab.
         */
        onActive: PropTypes.func

    })).isRequired,

    /**
     * Activated tab index.
     */
    activatedIndex: PropTypes.number,

    /**
     * If true,the tabs is FullWidth.
     */
    isTabFullWidth: PropTypes.bool,

    onIndexChange: PropTypes.func

};

Tab.defaultProps = {

    tabs: [],

    activatedIndex: 0,
    isTabFullWidth: true


};

export default Tab;
