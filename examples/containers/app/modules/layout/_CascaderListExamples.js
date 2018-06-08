import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Paper from 'src/Paper';
import CascaderList from 'src/CascaderList';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/CascaderList.json';

import 'sass/containers/app/modules/layout/CascaderListExamples.scss';

class _CascaderListExamples extends Component {

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

    changeHandler = (value, path) => {
        console.log(value, path);
    };

    render() {
        return (
            <div className="example cascader-list-examples">
                <h2 className="example-title">CascaderList</h2>

                <p>
                    <span>CascaderList</span> is a selection box.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>CascaderList simple example.</p>

                                <Paper className="cascader-list-wrapper">
                                    <CascaderList data={this.data}
                                                  onChange={this.changeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>CascaderList with default value example.</p>

                                <Paper className="cascader-list-wrapper">
                                    <CascaderList data={this.data}
                                                  value={'Shanghai'}
                                                  onChange={this.changeHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Multi select"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>CascaderList with default value example.</p>

                                <Paper className="cascader-list-wrapper">
                                    <CascaderList selectMode={CascaderList.SelectMode.MULTI_SELECT}
                                                  data={this.data}
                                                  value={'Shanghai'}
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

}

export default _CascaderListExamples;