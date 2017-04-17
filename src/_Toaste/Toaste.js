import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Toaste extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;

    }

    initializeAnimation(callback) {

        ReactDOM.findDOMNode(this).style.opacity = '0';

        setTimeout(() => {
            this.hasMounted && callback();
        }, 0);

    }

    animate() {
        ReactDOM.findDOMNode(this).style.opacity = '.8';
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
            <div className={`toaste ${className}`}
                 style={style}>
            </div>
        );

    }
};

Toaste.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

Toaste.defaultProps = {
    className: '',
    style: null
};