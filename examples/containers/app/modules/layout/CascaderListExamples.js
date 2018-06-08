import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';
import CascaderList from 'src/CascaderList';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/CascaderList.json';

import 'sass/containers/app/modules/layout/TreeExamples.scss';

class CascaderListExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
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
        }];

    }

    nodeSelectHandler = (node, path) => {
        console.log('Node Selected::', node, path);
    };

    changeHandler = value => {
        console.log('Changed::', value);
    };

    render() {
        return (
            <div className="example tree-examples">

                <h2 className="examples-title">CascaderList</h2>

                <p>
                    <span>CascaderList</span> can fully display the hierarchy, and has interactive functions such as
                    expansion, withdrawal and selection.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>CascaderList</code>simple example.</p>

                                <Paper className="tree-wrapper">
                                    <CascaderList data={this.data}
                                                  onNodeSelect={this.nodeSelectHandler}
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
                                    <CascaderList data={this.data}
                                                  collapsedIconCls="far fa-plus-square"
                                                  expandedIconCls="far fa-minus-square"
                                                  renderer={node => {
                                                      return <div className="self-define-node">
                                                          <span className="self-define-node-id">{node.id}</span>
                                                          <span className="self-define-node-text">{node.text}</span>
                                                          <span className="self-define-node-desc">{node.desc}</span>
                                                      </div>;
                                                  }}
                                                  onNodeSelect={this.nodeSelectHandler}
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
                                    <CascaderList selectMode={CascaderList.SelectMode.MULTI_SELECT}
                                                  data={this.data}
                                                  isSelectRecursive={true}
                                                  checkboxUncheckedIconCls="far fa-circle"
                                                  checkboxCheckedIconCls="fas fa-check-circle"
                                                  checkboxIndeterminateIconCls="fas fa-minus-circle"
                                                  onNodeSelect={this.nodeSelectHandler}
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

export default CascaderListExamples;