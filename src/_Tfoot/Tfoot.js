import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Tfoot.css';

export default class Tfoot extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, columns, children} = this.props;

        return (
            <tfoot className={'tfoot' + (className ? ' ' + className : '')}
                   style={style}>
                <tr>
                    <td colSpan={columns.length}>
                        {children}
                    </td>
                </tr>
            </tfoot>
        );

    }
};

Tfoot.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    columns: PropTypes.array

};

Tfoot.defaultProps = {

    className: '',
    style: null,

    columns: []

};