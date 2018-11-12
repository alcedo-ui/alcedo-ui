import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Table from 'src/Table';

import 'scss/components/PropTypeDescTable.scss';

class PropTypeDescTable extends Component {

    constructor(props) {

        super(props);

        this.columns = [{
            header: 'Name',
            renderer: 'name'
        }, {
            header: 'Type',
            renderer: 'type'
        }, {
            header: 'Default',
            renderer: 'default'
        }, {
            header: 'Description',
            renderer: 'desc'
        }];

        this.generateData = this::this.generateData;

    }

    generateData() {

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

    }

    render() {
        return (
            <div className="prop-type-desc-table-wrapper">
                <Table className="prop-type-desc-table"
                       columns={this.columns}
                       data={this.generateData()}
                       isPagging={false}/>
            </div>
        );
    }
};

PropTypeDescTable.propTypes = {
    data: PropTypes.object
};

PropTypeDescTable.defaultProps = {
    data: null
};

export default PropTypeDescTable;
