import React, {Component} from 'react';

import Widget from 'src/Widget/index';
import WidgetHeader from 'src/WidgetHeader/index';
import PropTypeDescTable from '../PropTypeDescTable';
import Tree from 'src/Tree/index';
import TreeDoc from 'examples/assets/propTypes/Tree.json';

import 'sass/containers/app/modules/layout/TreeExamples.scss';

export default class TreeExamples extends Component {

    constructor(props) {

        super(props);

        this.data = {
            id: '1 - 1',
            text: 'one-1',
            deep: 1
        };

        this.onChangeHandler = this::this.onChangeHandler;

    }

    onChangeHandler(value) {
        this.setState({
            value: value
        });
    }

    render() {
        return (
            <div className="example tree-examples">

                <h2 className="examples-title">Tree</h2>

                <p>
                    <span>Tree</span> can fully display the hierarchy, and has interactive functions such as
                    expansion, withdrawal and selection.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Tree</code>simple example.</p>

                                <Tree className="tree-example"
                                      data={this.data}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TreeDoc}/>

            </div>
        );
    }
};