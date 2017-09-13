/**
 * @file Accordion component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlatButton from '../FlatButton';

import './Accordion.css';

export default class Accordion extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            collapsed: false,
            contentHeight: null
        };

        this.titleMouseDownHandle = ::this.titleMouseDownHandle;
        this.resetHeight = ::this.resetHeight;

    }

    titleMouseDownHandle() {

        const {onCollpase, onExpand, onChange} = this.props;

        const collapsed = !this.state.collapsed;

        this.setState({
            collapsed
        }, () => {
            if (collapsed) {
                onCollpase && onCollpase();
                onChange && onChange(true);
            } else {
                onExpand && onExpand();
                onChange && onChange(false);
            }
        });

    }

    resetHeight() {

        const height = this.refs.accordionContent.style.height;

        if (!height || height === 'auto') {
            this.setState({
                contentHeight: this.refs.accordionContent.clientHeight
            });
        }

    }

    componentDidMount() {
        this.resetHeight();
    }

    render() {

        const {className, style, children, title, collapseIcon, expandIcon} = this.props;
        const {collapsed, contentHeight} = this.state;

        return (
            <div className={`accordion ${className}`}
                 style={style}>

                <FlatButton className="accordion-title"
                            value={title}
                            rightIconCls={collapsed ? expandIcon : collapseIcon}
                            onTouchTap={this.titleMouseDownHandle}/>

                <div ref="accordionContent"
                     className={`accordion-content ${collapsed ? 'collapsed' : ''}`}
                     style={{height: contentHeight}}>
                    {children}
                </div>

            </div>
        );

    }
};

Accordion.propTypes = {

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
    title: PropTypes.string,

    /**
     * Collapse icon.
     */
    collapseIcon: PropTypes.string,

    /**
     * Expand icon.
     */
    expandIcon: PropTypes.string,

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

    className: '',
    style: null,

    title: 'title',
    collapseIcon: 'fa fa-angle-up',
    expandIcon: 'fa fa-angle-down'

};