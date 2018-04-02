/**
 * @file Tab component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import FlatButton from '../FlatButton';

import PureRender from '../_vendors/PureRender';

@PureRender
class Tab extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            activatedIndex: props.activatedIndex
        };

        this.tabClickHandle = ::this.tabClickHandle;

    }

    tabClickHandle(item, activatedIndex) {
        this.setState({
            activatedIndex
        }, () => {
            item.onActive && item.onActive(item, activatedIndex);
        });
    }

    render() {

        const {className, style, isTabFullWidth, tabs} = this.props,
            {activatedIndex} = this.state,

            wrapperClassName = classNames('tab', {
                [className]: className
            }),

            tabsClassName = classNames('tabs', {
                'auto-width': !isTabFullWidth
            }),

            tabWidthPerCent = 100 / tabs.length,
            tabButtonStyle = {
                width: isTabFullWidth ? `${tabWidthPerCent}%` : 'auto'
            },
            inkBarStyle = {
                width: `${tabWidthPerCent}%`,
                transform: `translate(${activatedIndex * 100}%, 0)`
            },
            tabContentScrollerStyle = {
                width: `${tabs.length * 100}%`,
                transform: `translate(${-activatedIndex * tabWidthPerCent}%, 0)`
            },
            tabContentStyle = {
                width: `${tabWidthPerCent}%`
            };

        return (
            <div className={wrapperClassName}
                 style={style}>

                <div className={tabsClassName}>

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
                                            style={tabButtonStyle}
                                            onTouchTap={() => {
                                                this.tabClickHandle(item, index);
                                            }}/>
                            );

                        })
                    }

                    {
                        isTabFullWidth ?
                            <div className="ink-bar"
                                 style={inkBarStyle}></div>
                            :
                            null
                    }

                </div>

                <div className="tab-content-wrapper">
                    <div className="tab-content-scroller"
                         style={tabContentScrollerStyle}>
                        {
                            tabs && tabs.map((item, index) =>
                                <div key={index}
                                     className="tab-content"
                                     style={tabContentStyle}>
                                    {item.renderer}
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

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
        isTabFullWidth: PropTypes.bool

    };

}

Tab.defaultProps = {

    tabs: [],

    activatedIndex: 0,
    isTabFullWidth: true

};

export default Tab;