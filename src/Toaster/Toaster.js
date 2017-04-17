import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import Toast from '../_Toast';

import './Toaster.css';

export default class Toaster extends Component {

    constructor(props) {

        super(props);

        this.state = {
            toasts: []
        };

        this.addToast = this::this.addToast;
        this.removeToast = this::this.removeToast;

    }

    addToast(toast) {
        let toasts = this.state.toasts;
        toasts.unshift(toast);
        this.setState({
            toasts
        });
    }

    removeToast(index) {
        let toasts = this.state.toasts;
        toasts.splice(index, 1);
        this.setState({
            toasts
        });
    }

    render() {

        const {className, style} = this.props;
        const {toasts} = this.state;

        return (
            <ReactCSSTransitionGroup component="div"
                                     className={`toaster ${className}`}
                                     style={style}>
                {
                    toasts && toasts.length > 0
                        ? (
                        toasts.map((options, index) => {
                            return (
                                <Toast {...options}
                                       key={index}
                                       onRequestClose={() => {
                                           this.removeToast(index);
                                       }}/>
                            );
                        })
                    )
                        : null
                }
            </ReactCSSTransitionGroup>
        );

    }
};

Toaster.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

Toaster.defaultProps = {
    className: '',
    style: null
};