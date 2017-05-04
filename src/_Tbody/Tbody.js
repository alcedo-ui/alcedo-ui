import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableRow from '../_TableRow';

export default class Tbody extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {columns, data, startIndex} = this.props;

        return (
            <tbody>

                {
                    data.map((row, rowIndex) => {
                        return (
                            <TableRow key={rowIndex}
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
    startIndex: PropTypes.number
};

Tbody.defaultProps = {
    data: [],
    columns: [],
    startIndex: 0
};