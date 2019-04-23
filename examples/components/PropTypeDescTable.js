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
                           bodyRenderer: 'name'
                       }, {
                           headRenderer: 'Type',
                           bodyRenderer: 'type'
                       }, {
                           headRenderer: 'Default',
                           bodyRenderer: 'default'
                       }, {
                           headRenderer: 'Description',
                           bodyRenderer: 'desc'
                       }]}
                       data={this.generateData()}
                       isPagging={false}/>
            </div>
        );
    }
};

PropTypeDescTable.propTypes = {
    data: PropTypes.object
};

export default PropTypeDescTable;
