/**
 * @file Accordion component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';

import Theme from '../Theme';
import ComponentUtil from '../_vendors/ComponentUtil';

class Accordion extends Component {

    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            collapsed: ComponentUtil.getDerivedState(props, state, 'collapsed')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.accordionContent = createRef();

        this.state = {
            collapsed: props.collapsed,
            contentHeight: null
        };

    }

    componentDidMount() {
        this.init();
    }

    /**
     * public
     */
    resetHeight = callback => {

        const el = this.accordionContent && this.accordionContent.current;
        if (this.state.collapsed || !el) {
            return;
        }

        const style = window.getComputedStyle(el);
        if (!style) {
            return;
        }

        this.setState({
            contentHeight: 'auto'
        }, () => {
            this.setState({
                contentHeight: el.clientHeight
            }, () => {
                callback && callback();
            });
        });

    };

    /**
     * public
     */
    collpase = () => {
        this.setState({
            collapsed: true
        }, () => {
            const {onCollpase, onChange} = this.props;
            onCollpase && onCollpase();
            onChange && onChange(true);
        });
    };

    /**
     * public
     */
    expand = () => {
        this.setState({
            collapsed: false
        }, () => {
            const {onExpand, onChange} = this.props;
            onExpand && onExpand();
            onChange && onChange(false);
        });
    };

    handleClick = () => {
        this.state.collapsed ?
            this.expand()
            :
            this.collpase();
    };

    init = () => {
        if (!this.props.collapsed) {
            this.resetHeight();
        } else {
            setTimeout(() => {
                this.setState({
                    collapsed: false
                }, () => {
                    this.resetHeight(() => {
                        this.setState({
                            collapsed: this.props.collapsed
                        });
                    });
                });
            }, 0);
        }
    };

    render() {

        const {children, className, style, title, collapseIcon} = this.props,
            {collapsed, contentHeight} = this.state;

        return (
            <div className={classNames('accordion', {
                collapsed: collapsed,
                [className]: className
            })}
                 style={style}>

                <RaisedButton className="accordion-title"
                              theme={Theme.SECONDARY}
                              value={title}
                              rightIconCls={collapseIcon}
                              onClick={this.handleClick}/>

                <div ref={this.accordionContent}
                     className="accordion-content"
                     style={{height: contentHeight}}>
                    {children}
                </div>

            </div>
        );

    }
}

Accordion.propTypes = {

    children: PropTypes.any,

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The accordion's title.
     */
    title: PropTypes.any,

    collapsed: PropTypes.bool,

    /**
     * Collapse icon.
     */
    collapseIcon: PropTypes.string,

    /**
     * Callback function fired when collpase the accordion.
     */
    onCollpase: PropTypes.func,

    /**
     * Callback function fired when expand the accordion.
     */
    onExpand: PropTypes.func,

    /**
     * Callback function fired when change the status of accordion.
     */
    onChange: PropTypes.func

};

Accordion.defaultProps = {
    title: 'title',
    collapsed: false,
    collapseIcon: 'fas fa-angle-down'
};

export default Accordion;
