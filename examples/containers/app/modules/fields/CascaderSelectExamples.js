import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import CascaderSelect from 'src/CascaderSelect';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/CascaderSelect.json';

import 'sass/containers/app/modules/fields/CascaderSelectExamples.scss';

class CascaderSelectExamples extends Component {

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
        const args = ['Node Selected::', node];
        if (path) {
            args.push(path);
        }
        console.log(...args);
    };

    changeHandler = (value, path) => {
        const args = ['Changed::', value];
        if (path) {
            args.push(path);
        }
        console.log(...args);
    };

    render() {

        return (
            <div className="example cascader-select-examples">
                <h2 className="example-title">CascaderSelect</h2>

                <p>
                    <span>CascaderSelect</span>
                    is a selection box.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>CascaderSelect simple example.</p>

                                <CascaderSelect data={this.data}
                                                value={'Shanghai'}
                                                onNodeClick={this.nodeClickHandler}
                                                onNodeSelect={this.nodeSelectHandler}
                                                onChange={this.changeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Multi Select"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <CascaderSelect selectMode={CascaderSelect.SelectMode.MULTI_SELECT}
                                                data={this.data}
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
                                                onNodeClick={this.nodeClickHandler}
                                                onNodeSelect={this.nodeSelectHandler}
                                                onChange={this.changeHandler}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default CascaderSelectExamples;