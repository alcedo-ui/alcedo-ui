import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableRow from '../_TableRow';

export default class Tbody extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {columns, data, startIndex, idProp} = this.props;

        return (
            <tbody>

                {
                    data.map((row, rowIndex) => {
                        return (
                            <TableRow key={idProp && idProp in row ? row[idProp] : rowIndex}
                                      rowIndex={startIndex + rowIndex}
                                      columns={columns}
                                      data={row}/>
                        );
                    })
                }

            </tbody>
        );

    }
};

Tbody.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    startIndex: PropTypes.number,
    idProp: PropTypes.string
};

Tbody.defaultProps = {
    data: [],
    columns: [],
    startIndex: 0,
    idProp: 'id'
};