import React, {Component} from 'react';

import DynamicRenderList from 'src/DynamicRenderList';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

import PropTypeDescTable from '../PropTypeDescTable';
import DynamicRenderListDoc from 'assets/propTypes/DynamicRenderList.json';

import 'sass/containers/app/modules/layout/DynamicRenderListExamples.scss';

export default class DynamicRenderListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [];
        for (let i = 0; i < 10000; i++) {
            this.listData.push(i);
        }

        this.changeHandler = this::this.changeHandler;

    }

    changeHandler(value) {
        console.log(value);
    }

    render() {
        return (
            <div className="example dynamic-render-list-examples">

                <h2 className="example-title">DynamicRenderList</h2>

                <p>
                    <span>DynamicRenderList</span> are used to present multiple items vertically as a single continuous
                    element. They can be configured for many uses such as a contacts list, nested lists, etc.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A <code>DynamicRenderList</code> simple example with checkbox.</p>

                                <Paper>
                                    <DynamicRenderList data={this.listData}
                                                       mode={DynamicRenderList.Mode.CHECKBOX}
                                                       onChange={this.changeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DynamicRenderListDoc}/>

            </div>
        );
    }
};