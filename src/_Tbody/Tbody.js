import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableRow from '../_TableRow';

import './Tbody.css';

export default class Tbody extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {
            columns, data, startIndex, idProp,
            onRowTouchTap, onCellTouchTap
        } = this.props;

        return (
            <tbody className="tbody">

                {
                    data.map((row, rowIndex) => {
                        return (
                            <TableRow key={idProp && idProp in row ? row[idProp] : rowIndex}
                                      rowIndex={startIndex + rowIndex}
                                      columns={columns}
                                      data={row}
                                      onRowTouchTap={onRowTouchTap}
                                      onCellTouchTap={onCellTouchTap}/>
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
    idProp: PropTypes.string,

    onRowTouchTap: PropTypes.func,
    onCellTouchTap: PropTypes.func

};

Tbody.defaultProps = {
    data: [],
    columns: [],
    startIndex: 0,
    idProp: 'id'
};