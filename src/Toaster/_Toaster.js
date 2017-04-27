import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import Toast from '../_Toast';

import './Toaster.css';

export default class Toaster extends Component {

    constructor(props) {

        super(props);

        this.nextKey = 0;

        this.state = {
            toasts: []
        };

        this.addToast = this::this.addToast;
        this.removeToast = this::this.removeToast;

    }

    addToast(toast) {

        let toasts = this.state.toasts;

        toasts.unshift({...toast, toastsId: this.nextKey++});

        this.setState({
            toasts
        });

    }

    removeToast(toastsId) {

        let toasts = this.state.toasts;

        toasts.splice(toasts.findIndex(item => item.toastsId === toastsId), 1);

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
                        toasts.map(options => {
                            return (
                                <Toast {...options}
                                       key={options.toastsId}
                                       onRequestClose={this.removeToast}/>
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

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

Toaster.defaultProps = {
    className: '',
    style: null
};