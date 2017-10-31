import React, {Component} from 'react';

import LongList from 'src/LongList';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

import PropTypeDescTable from '../PropTypeDescTable';
import LongListDoc from 'assets/propTypes/LongList.json';

import 'sass/containers/app/modules/layout/LongListExamples.scss';

export default class LongListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [];
        for (let i = 0; i < 100; i++) {
            this.listData.push(i);
        }

        this.changeHandle = this::this.changeHandle;

    }

    changeHandle(value) {
        console.log(value);
    }

    render() {
        return (
            <div className="example list-examples">

                <h2 className="example-title">List</h2>

                <p>
                    <span>List</span> are used to present multiple items vertically as a single continuous
                    element. They can be configured for many uses such as a contacts list, nested lists, etc.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A <code>List</code> simple example with left icons.</p>

                                <Paper>
                                    <LongList style={{height: 200}}
                                              data={this.listData}
                                              itemHeight={40}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={LongListDoc}/>

            </div>
        );
    }
};