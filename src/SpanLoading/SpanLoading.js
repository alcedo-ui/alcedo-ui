/**
 * Created by Wendy on 2017/5/9.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './SpanLoading.css';

export default class SpanLoading extends Component {

    constructor(props) {
        super(props);
        const spanning = props.spanning;
        this.state = {
            spanning
        };

    }

    componentWillUnmount() {
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
    }

    componentWillReceiveProps(nextProps) {

        const currentSpinning = this.props.spanning;
        const spanning = nextProps.spanning;
        const {delay} = this.props;

        if (currentSpinning && !spanning) {
            this.debounceTimeout = setTimeout(() => this.setState({spanning}), 1000);
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        } else {
            if (spanning && delay && !isNaN(Number(delay))) {
                this.delayTimeout = setTimeout(() => this.setState({spanning}), delay);
            } else {
                this.setState({spanning});
            }
        }
    }

    render() {
        const {className, style, tip, size, children}=this.props;
        const {spanning} = this.state;

        return (
            <div className={`span-loading span-loading-${size} ${className}`}
                 style={style}>

                {
                    spanning
                        ?
                        <span className={`span-loading-dot ${size ? size : ''}`}>
                            <i />
                            <i />
                            <i />
                            <i />
                        </span>
                        :
                        null

                }

                {children}

                {
                    tip
                        ?
                        <div className={`span-loading-text`}>{tip}</div>
                        :
                        null
                }


            </div>
        )
    }
}

SpanLoading.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true,will show a span loading animation.
     */
    spanning: PropTypes.bool,

    /**
     * Set the tip text,there will be a description under the Loading.
     */
    tip: PropTypes.string,

    /**
     * Set the size of Loading,can use small or large.
     */
    size: PropTypes.string
};

SpanLoading.defaultProps = {

    className: '',
    style: null,
    spanning: true,
    tip: '',
    type: ''

};