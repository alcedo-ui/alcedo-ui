import React, {Component} from 'react';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Waterfall from 'dist/Waterfall';

import PropTypeDescTable from '../PropTypeDescTable';
import WaterfallDoc from 'assets/propTypes/Waterfall.json';

import 'sass/containers/app/modules/layout/WaterfallExamples.scss';

export default class WaterfallExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example widget-examples">

                <h2 className="example-title">Waterfall</h2>

                <p>
                    A <span>Waterfall</span> is a container that can display items in multi columns.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Waterfall Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">


                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={WaterfallDoc}/>

            </div>
        );
    }
};