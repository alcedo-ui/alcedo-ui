import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PreventOuterScroller extends Component {

    constructor(props) {

        super(props);

        this.wheelHandler = this::this.wheelHandler;

    }

    wheelHandler(e) {

        const {currentTarget, deltaY} = e,
            {clientHeight, scrollHeight, scrollTop} = currentTarget;

        if ((deltaY < 0 && scrollTop <= 0)
            || (deltaY > 0 && scrollTop >= scrollHeight - clientHeight)) {
            e.preventDefault();
        }

    }

    render() {

        const {className, style, children} = this.props;

        return (
            <div className={className}
                 style={style}
                 onWheel={this.wheelHandler}>
                {children}
            </div>
        );

    }
};

PreventOuterScroller.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

PreventOuterScroller.defaultProps = {
    className: '',
    style: null
};