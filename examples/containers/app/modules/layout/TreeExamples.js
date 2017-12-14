import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import PropTypeDescTable from '../PropTypeDescTable';
import Paper from 'src/Paper';
import Tree from 'src/Tree';
import TreeDoc from 'examples/assets/propTypes/Tree.json';

import 'sass/containers/app/modules/layout/TreeExamples.scss';

export default class TreeExamples extends Component {

    constructor(props) {

        super(props);

        this.data = {
            id: '0',
            text: 'Root',
            desc: 'Root',
            children: [{
                id: '00',
                text: 'Children 0 - 0',
                desc: 'Children 0 - 0'
            }, {
                id: '01',
                text: 'Children 0 - 1',
                desc: 'Children 0 - 1',
                children: [{
                    id: '010',
                    text: 'Children 0 - 1 - 0',
                    desc: 'Children 0 - 1 - 0'
                }, {
                    id: '011',
                    text: 'Children 0 - 1 - 1',
                    desc: 'Children 0 - 1 - 1'
                }, {
                    id: '012',
                    text: 'Children 0 - 1 - 2',
                    desc: 'Children 0 - 1 - 2'
                }]
            }, {
                id: '02',
                text: 'Children 0 - 2',
                desc: 'Children 0 - 2'
            }]
        };

        this.changeHandler = this::this.changeHandler;

    }

    changeHandler(value, path) {
        console.log(path);
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

                                <Paper className="tree-wrapper">
                                    <Tree className="tree-example"
                                          data={this.data}
                                          onChange={this.changeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Self Define Node Renderer"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Paper className="tree-wrapper">
                                    <Tree className="tree-example"
                                          data={this.data}
                                          collapsedIconCls="fa fa-plus-square-o"
                                          expandedIconCls="fa fa-minus-square-o"
                                          renderer={node => {
                                              return <div className="self-define-node">
                                                  <span className="self-define-node-id">{node.id}</span>
                                                  <span className="self-define-node-text">{node.text}</span>
                                                  <span className="self-define-node-desc">{node.desc}</span>
                                              </div>;
                                          }}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Single Select"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Paper className="tree-wrapper">
                                    <Tree className="tree-example"
                                          selectMode={Tree.SelectMode.SINGLE_SELECT}
                                          data={this.data}
                                          onChange={this.changeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Multi Select"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Paper className="tree-wrapper">
                                    <Tree className="tree-example"
                                          selectMode={Tree.SelectMode.MULTI_SELECT}
                                          data={this.data}
                                          onChange={this.changeHandler}/>
                                </Paper>

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