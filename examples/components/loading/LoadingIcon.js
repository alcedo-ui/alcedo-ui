import React, {Component, PropTypes} from 'react';

import 'sass/components/loading/LoadingIcon.scss';

export default class LoadingIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style} = this.props;

        return (
            <i className={`fa fa-cog fa-spin loading-icon ${className}`}
               style={style}></i>
        );

    }
};

LoadingIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

LoadingIcon.defaultProps = {
    className: '',
    style: null
};