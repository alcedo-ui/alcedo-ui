import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Ripple extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;

    }

    initializeAnimation(callback) {

        const el = ReactDOM.findDOMNode(this);
        if (!el) {
            return;
        }

        el.style.transform = 'scale(0)';

        setTimeout(() => {
            this.hasMounted && callback && callback();
        }, 0);

    }

    animate() {
        ReactDOM.findDOMNode(this).style.transform = 'scale(1)';
    }

    componentDidMount() {
        this.hasMounted = true;
    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentWillEnter(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentDidEnter() {
        this.animate();
    }

    componentWillLeave(callback) {

        ReactDOM.findDOMNode(this).style.opacity = 0;

        this.timeout = setTimeout(() => {
            this.hasMounted && callback();
        }, 2000);

    }

    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
    }

    render() {

        const {className, style} = this.props;

        return (
            <div className={`ripple ${className}`}
                 style={style}>
            </div>
        );

    }
};

Ripple.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

Ripple.defaultProps = {
    className: '',
    style: null
};