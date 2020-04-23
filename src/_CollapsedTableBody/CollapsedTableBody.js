import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import TableRow from '../_Tr';
import CircularLoading from '../CircularLoading';

import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';

class CollapsedTableBody extends Component {

    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);

        this.state = {
            expandedList: {}
        };
    }

    isItemChecked = rowData => {

        const {selectMode, idField, value} = this.props;

        if (!rowData || !value) {
            return false;
        }

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return value && value.findIndex(item => item[idField] === rowData[idField]) !== -1;
            case SelectMode.SINGLE_SELECT:
                return value[idField] === rowData[idField];
        }

    };

    onExpandClick = (row, rowIndex, colIndex) => {
        const {idField, onExpandClick} = this.props;
        let {expandedList} = this.state;
        expandedList[row[idField]] = 'PART';

        this.setState({
            expandedList
        }, () => {
            onExpandClick && onExpandClick(row, rowIndex, colIndex);
        });
    };

    onCollapseClick = (row, rowIndex, colIndex) => {
        const {idField, onCollapseClick} = this.props;
        let {expandedList} = this.state;
        delete expandedList[row[idField]];

        this.setState({
            expandedList
        }, () => {
            onCollapseClick && onCollapseClick(row, rowIndex, colIndex);
        });
    };

    onViewAllClick = (row, rowIndex) => {
        const {idField, onViewAllClick} = this.props;
        let {expandedList} = this.state;
        expandedList[row[idField]] = 'ALL';

        this.setState({
            expandedList
        }, () => {
            onViewAllClick && onViewAllClick(row, rowIndex);
        });
    };

    render() {

        const {
            columns, data, startIndex, idField, disabled, value, selectMode, expandedChildrenLimit, expandedIconCls,
            onRowClick, onCellClick
        } = this.props, {expandedList} = this.state;

        return (
            <tbody className="collapsed-table-body">
                {
                    data && data.map((row, rowIndex) => row ?
                        <Fragment>
                            <TableRow key={idField && idField in row ? row[idField] : rowIndex}
                                      rowIndex={startIndex + rowIndex}
                                      columns={columns}
                                      data={row}
                                      isExpanded={!!expandedList[row[idField]]}
                                      expandedIconCls={expandedIconCls}
                                      isChecked={this.isItemChecked(row)}
                                      disabled={disabled || row.disabled}
                                      onRowClick={onRowClick}
                                      onCellClick={onCellClick}
                                      onExpand={(colIndex) => {
                                          idField && idField in row && this.onExpandClick(row, rowIndex, colIndex);
                                      }}
                                      onCollapse={(colIndex) => {
                                          idField && idField in row && this.onCollapseClick(row, rowIndex, colIndex);
                                      }}/>
                            {
                                expandedList[row[idField]] ?
                                    !row.children || row.children.length === 0 ?
                                        <tr>
                                            <td>
                                                <div className="is-expand-loading"><CircularLoading/></div>
                                            </td>
                                        </tr>
                                        :
                                        (row.children.length <= expandedChildrenLimit || expandedList[row[idField]] === 'ALL') ?
                                            <Fragment>
                                                {
                                                    row.children.map((childRow, childIndex) => childRow ?
                                                        <TableRow className="expanded-children-row"
                                                                  key={idField && idField in childRow ? childRow[idField] : childIndex + 'child'}
                                                                  rowIndex={startIndex + childIndex}
                                                                  columns={columns}
                                                                  data={childRow}
                                                                  isChecked={this.isItemChecked(childRow)}
                                                                  disabled={disabled || childRow.disabled}
                                                                  onRowClick={onRowClick}
                                                                  onCellClick={onCellClick}/>
                                                        :
                                                        null
                                                    )
                                                }
                                            </Fragment>
                                            :
                                            <Fragment>
                                                {
                                                    row.children.slice(0, expandedChildrenLimit).map((childRow, childIndex) => childRow ?
                                                        <TableRow className="expanded-children-row"
                                                                  key={idField && idField in childRow ? childRow[idField] : childIndex + 'child'}
                                                                  rowIndex={startIndex + childIndex}
                                                                  columns={columns}
                                                                  data={childRow}
                                                                  isChecked={this.isItemChecked(childRow)}
                                                                  disabled={disabled || childRow.disabled}
                                                                  onRowClick={onRowClick}
                                                                  onCellClick={onCellClick}/>
                                                        :
                                                        null
                                                    )
                                                }
                                                <tr>
                                                    <td>
                                                        <span className="view-all" onClick={() => {
                                                            this.onViewAllClick(row, rowIndex);
                                                        }}>View All({row.children.length})
                                                        </span>
                                                    </td>
                                                </tr>
                                            </Fragment>
                                    :
                                    null
                            }
                        </Fragment>
                        :
                        null
                    )
                }
            </tbody>
        );

    }
}

CollapsedTableBody.propTypes = {

    columns: PropTypes.array,
    data: PropTypes.array,
    startIndex: PropTypes.number,
    expandedChildrenLimit: PropTypes.number,
    idField: PropTypes.string,
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    disabled: PropTypes.bool,

    isItemChecked: PropTypes.func,

    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func

};

CollapsedTableBody.defaultProps = {
    data: [],
    columns: [],
    expandedChildrenLimit: 10,
    startIndex: 0,
    idField: 'id',
    selectMode: SelectMode.SINGLE_SELECT,
    disabled: false
};

export default CollapsedTableBody;
