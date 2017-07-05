import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Tfoot extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, columns, children} = this.props;

        return (
            <tfoot className={className ? className : null}
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