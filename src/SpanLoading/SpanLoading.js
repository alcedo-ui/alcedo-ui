/**
 * Created by Wendy on 2017/5/9.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './SpanLoading.css';

export default class SpanLoading extends Component {
    constructor(props) {
        super(props);

    }

    // componentDidMount() {
    //
    // }
    //
    // componentWillUnmount() {
    //     if (this.delayTimeout) {
    //         clearTimeout(this.delayTimeout);
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //
    //     const currentSpinning = this.props.spinning;
    //     const spinning = nextProps.spinning;
    //     const {delay} = this.props;
    //
    //     if (currentSpinning && !spinning) {
    //         this.debounceTimeout = setTimeout(() => this.setState({spinning}), 300);
    //         if (this.delayTimeout) {
    //             clearTimeout(this.delayTimeout);
    //         }
    //     } else {
    //         if (spinning && delay && !isNaN(Number(delay))) {
    //             this.delayTimeout = setTimeout(() => this.setState({spinning}), delay);
    //         } else {
    //             this.setState({spinning});
    //         }
    //     }
    // }

    render() {
        const {className, style, spanning, tip, size, children}=this.props;

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
     * Set the tip text,there will be a description under the SpanLoading.
     */
    tip: PropTypes.string,

    /**
     * Set the size of SpanLoading,can use small or large.
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