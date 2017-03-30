import React, {Component, PropTypes} from 'react';

import 'assets/font-awesome/css/font-awesome.min.css';
import 'sass/global.scss';
import 'sass/containers/Root.scss';

export default class Root extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="root">
                {this.props.children}
            </div>
        );
    }

};

Root.propTypes = {};