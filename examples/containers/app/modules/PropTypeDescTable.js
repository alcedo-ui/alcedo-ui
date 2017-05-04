import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Table from 'dist/Table';

import 'sass/containers/app/modules/PropTypeDescTable.scss';

export default class PropTypeDescTable extends Component {

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
            <Table className="prop-type-desc-table"
                   columns={this.columns}
                   data={this.generateData()}
                   isAdaptiveHeight={true}/>
        );
    }
};

PropTypeDescTable.propTypes = {
    data: PropTypes.object
};

PropTypeDescTable.defaultProps = {
    data: ''
};