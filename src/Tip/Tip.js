import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Tip.css';

export default class Tip extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, text} = this.props;

        {/*<div className="tip-wrapper">*/
        }
        {/*</div>*/
        }

        return (
            <div className={`tip ${className}`}
                 style={style}>
                {text}
            </div>
        );

    }

}

Tip.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    text: PropTypes.string

};

Tip.defaultProps = {

    className: '',
    style: null,

    text: ''

};