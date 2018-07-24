import React, {Component} from 'react';

import DynamicRenderList from 'src/DynamicRenderList';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/DynamicRenderList.json';

import 'sass/containers/app/modules/layout/DynamicRenderListExamples.scss';

class DynamicRenderListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [];
        for (let i = 0; i < 10000; i++) {
            this.listData.push({
                id: i,
                value: i
            });
        }

    }

    changeHandler = value => {
        console.log(value);
    };

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
                                                       selectMode={DynamicRenderList.SelectMode.MULTI_SELECT}
                                                       onChange={this.changeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default DynamicRenderListExamples;