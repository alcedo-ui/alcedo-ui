import React, {Component, PropTypes} from 'react';

import 'sass/components/widget/Widget.scss';

export default class Widget extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style} = this.props;

        let depth = this.props.depth;
        if (isNaN(depth) || depth < 0 || depth > 7) {
            depth = 1;
        }

        return (
            <div className={`widget depth-${depth} ${className}`}
                 style={style}>
                {children}
            </div>
        );

    }
};

Widget.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    depth: PropTypes.number

};

Widget.defaultProps = {

    className: '',
    style: null,

    depth: 1

};