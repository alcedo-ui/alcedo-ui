import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Table from 'src/Table';

import 'scss/components/PropTypeDescTable.scss';

class PropTypeDescTable extends Component {

    constructor(props) {
        super(props);
    }

    generateData = () => {

        let result = [];

        if (!this.props.data) {
            return [];
        }

        for (let name in this.props.data) {
            result.push({
                name,
                ...this.props.data[name]
            });
        }

        return result;

    };

    render() {
        return (
            <div className="prop-type-desc-table-wrapper">
                <Table className="prop-type-desc-table"
                       columns={[{
                           headRenderer: 'Name',
                           bodyRenderer: rowData => rowData.name
                       }, {
                           headRenderer: 'Type',
                           bodyRenderer: rowData => rowData.type
                       }, {
                           headRenderer: 'Default',
                           bodyRenderer: rowData => rowData.default
                       }, {
                           headRenderer: 'Description',
                           bodyRenderer: rowData => rowData.desc
                       }]}
                       data={this.generateData()}
                       isPaginated={false}/>
            </div>
        );
    }
}

PropTypeDescTable.propTypes = {
    data: PropTypes.object
};

export default PropTypeDescTable;
