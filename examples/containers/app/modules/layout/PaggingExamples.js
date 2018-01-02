import React, {Component} from 'react';

import Pagging from 'src/Pagging';
import Switcher from 'src/Switcher';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

import PropTypeDescTable from 'components/PropTypeDescTable';
import PaggingDoc from 'assets/propTypes/Pagging.json';

import 'sass/containers/app/modules/layout/TableExamples.scss';

export default class PaggingExamples extends Component {

    constructor(props) {

        super(props);

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

    }

    // generateData(size = 100) {
    //
    //     let data = [];
    //     for (let i = 0; i < size; i++) {
    //         data.push({
    //             id: i,
    //             firstName: `firstNameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa${i}`,
    //             lastName: `lastName${i}`,
    //             disabled: Math.random() < .5
    //         });
    //     }
    //
    //     return data;
    //
    // }

    render() {

        return (
            <div className="example pagging-examples">

                <h2 className="example-title">Pagging</h2>

                <p>
                    <span>Pagging </span> are used to display data and to organize it.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With "/>

                    <div className="widget-content">
                        <div className="example-content">
                            <p>A simple <code>Pagging</code> example.</p>
                            <Pagging selectedCountVisible={true}
                                     selectedCount={5}
                                     count={20}
                                     pageSize={10}/>
                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={PaggingDoc}/>

            </div>
        );
    }
};