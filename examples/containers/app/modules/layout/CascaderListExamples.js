import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';
import CascaderList from 'src/CascaderList';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/CascaderList.json';

import 'assets/scss/containers/app/modules/layout/CascaderListExamples.scss';

class CascaderListExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            text: 'Asia',
            value: 'Asia',
            children: [{
                text: 'Korea',
                value: 'Korea'
            }, {
                text: 'Japan',
                value: 'Japan',
                children: [{
                    text: 'Tokyo',
                    value: 'Tokyo'
                }, {
                    text: 'Yokohama',
                    value: 'Yokohama'
                }, {
                    text: 'Osaka',
                    value: 'Osaka'
                }]
            }, {
                text: 'China',
                value: 'China',
                children: [{
                    text: 'Shanghai',
                    value: 'Shanghai'
                }, {
                    text: 'Beijing',
                    value: 'Beijing'
                }, {
                    text: 'Shenzhen',
                    value: 'Shenzhen'
                }]
            }]
        }, {
            text: 'Europe',
            value: 'Europe',
            children: [{
                text: 'Germany',
                value: 'Germany'
            }, {
                text: 'France',
                value: 'France'
            }]
        }, {
            text: 'North America',
            value: 'North America',
            children: [{
                text: 'Canada',
                value: 'Canada'
            }, {
                text: 'America',
                value: 'America'
            }]
        }, {
            text: 'South America',
            value: 'South America'
        }, {
            text: 'Africa',
            value: 'Africa'
        }, {
            text: 'Oceania',
            value: 'Oceania'
        }, {
            text: 'Antarctica',
            value: 'Antarctica'
        }];

    }

    nodeClickHandler = (node) => {
        console.log('Node Clicked::', node);
    };

    nodeSelectHandler = (node, path) => {
        console.log('Node Selected::', node, path);
    };

    changeHandler = value => {
        console.log('Changed::', value);
    };

    render() {
        return (
            <div className="example cascader-list-examples">

                <h2 className="examples-title">CascaderList</h2>

                <p>
                    <span>CascaderList</span>
                    can fully display the hierarchy, and has interactive functions such as
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

                                <Paper className="cascader-list-wrapper">
                                    <CascaderList data={this.data}
                                                  onNodeClick={this.nodeClickHandler}
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
                                <Paper className="cascader-list-wrapper">
                                    <CascaderList data={this.data}
                                                  renderer={node => {
                                                      return (
                                                          <div className="self-define-node">
                                                              <span className="self-define-node-text">{node.text}</span>
                                                              {
                                                                  node.children && node.children.length > 0 ?
                                                                      <span className="self-define-node-desc">
                                                                          ({node.children.length})
                                                                      </span>
                                                                      :
                                                                      null
                                                              }
                                                          </div>
                                                      );
                                                  }}
                                                  expandDirection={CascaderList.ExpandDirection.LEFT}
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
                                <Paper className="cascader-list-wrapper">
                                    <CascaderList selectMode={CascaderList.SelectMode.MULTI_SELECT}
                                                  data={this.data}
                                                  idField="value"
                                                  renderer={node => {
                                                      return (
                                                          <div className="self-define-node">
                                                              <span className="self-define-node-text">{node.text}</span>
                                                              {
                                                                  node.children && node.children.length > 0 ?
                                                                      <span className="self-define-node-desc">
                                                                          ({node.children.length})
                                                                      </span>
                                                                      :
                                                                      null
                                                              }
                                                          </div>
                                                      );
                                                  }}
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
