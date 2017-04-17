import React, {Component} from 'react';

import Table from 'dist/Table';
import Switcher from 'dist/Switcher';

import 'sass/containers/app/modules/layout/TableExamples.scss';

export default class TableExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: i,
                firstName: `firstName${i}`,
                lastName: `lastName${i}`,
                disabled: true
            });
        }

        return (
            <div className="example table-examples">

                <div className="examples">
                    <div className="examples-title">Table</div>
                    <div className="examples-wrapper">

                        <Table columns={[{
                            header: 'ID',
                            sortable: true,
                            sortProp: 'id',
                            renderer: 'id'
                        }, {
                            header: 'Name',
                            renderer: '${firstName} - ${lastName}'
                        }, {
                            header: 'Status',
                            renderer(rowDate) {
                                return <Switcher value={!rowDate.disabled}
                                                 size="small"/>;
                            }
                        }]}
                               data={data}/>

                    </div>
                </div>

            </div>
        );
    }
};