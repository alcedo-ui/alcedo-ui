import React, {Component} from 'react';

import Table from 'src/ComplicatedTable';
import Switcher from 'src/Switcher';
import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Table.json';

import 'scss/containers/app/modules/layout/TableExamples.scss';

class TableExamples extends Component {

    constructor(props) {

        super(props);

        this.columns = [{
            header: 'ID',
            sortable: true,
            sortProp: 'id',
            renderer: 'id',
            headerClassName: 'test-header',
            cellClassName: 'test-cell'
        }, {
            header: 'Name',
            sortable: true,
            collapseAble: true,
            childrenNumKey: 'childrenNum',
            sortProp: 'firstName',
            renderer: '${firstName} - ${lastName}'
        }, {
            header: 'Status',
            renderer: rowData =>
                <Switcher value={!rowData.disabled}
                          size="small"
                          onClick={e => e.stopPropagation()}/>
        }];

        this.pageSizes = [{
            value: 10,
            text: '10 / page'
        }, {
            value: 20,
            text: '20 / page'
        }, {
            value: 30,
            text: '30 / page'
        }, {
            value: 40,
            text: '40 / page'
        }, {
            value: 50,
            text: '50 / page'
        }];

        this.state = {
            data: this.generateData(),
            sort: null
        };

    }

    generateData = (size = 100) => {

        let data = [];
        for (let i = 0; i < size; i++) {
            data.push({
                id: i,
                firstName: `firstName ${i}`,
                lastName: `lastName ${i}`,
                childrenNum: i === 0 ? 9 : 0
            });
        }

        return data;

    };

    deleteRow = id => {

        const {data} = this.state,
            newData = data.filter(item => item.id !== id);

        this.setState({
            data: newData
        });

    };

    sortHandler = sort => {
        this.setState({
            sort
        });
        console.log('Sort Change Value: ', sort);
    };

    toggleCollapseRow = (index) => {


        setTimeout(() => {
            let data = this.state.data.slice();
            data[0].children = [{
                id: 100,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 101,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 102,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 103,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 104,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 105,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 106,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 107,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 108,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 109,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 110,
                firstName: `firstName`,
                lastName: `lastName`
            }, {
                id: 111,
                firstName: `firstName`,
                lastName: `lastName`
            }];
            this.setState({
                data
            });
        }, 1000);

    };

    viewAllHandler = (rowIndex) => {
        // let data = this.state.data.slice();
        // data[rowIndex].viewAll = !data[rowIndex].viewAll;
        // this.setState({
        //     data
        // });
    };

    pageChangeHandler = (page, pageSize) => {
        console.log(`page: ${page}, pageSize: ${pageSize}`);
    };

    dataUpdateHandler = currentPageData => {
        console.log('Data Update Value: ', currentPageData);
    };

    selectHandler = (rowData, rowIndex, value) => {
        console.log('Select Value: ', rowData);
    };

    deselectHandler = (rowData, rowIndex, value) => {
        console.log('Deselect Value: ', rowData);
    };

    selectAllHandler = value => {
        console.log('Select All Value: ', value);
    };

    deselectAllHandler = value => {
        console.log('Deselect All Value: ', value);
    };

    changeHandler = value => {
        console.log('Changed Value: ', value);
    };

    clearSort = () => {
        this.setState({
            sort: null
        });
    };

    render() {

        const {data, sort} = this.state;

        return (
            <div className="example table-examples">

                <h2 className="example-title">Table</h2>

                <p>
                    <span>Tables</span>
                    are used to display data and to organize it.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With isPagging"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple <code>Table</code> example.</p>

                            <Table data={data}
                                   columns={[...this.columns, {
                                       header: 'Action',
                                       renderer: rowData =>
                                           <IconButton iconCls="fas fa-trash-alt"
                                                       onClick={() => this.deleteRow(rowData.id)}/>
                                   }]}/>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default TableExamples;
