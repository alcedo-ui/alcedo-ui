import React, {Component} from 'react';

import Grid from 'src/Grid';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import GridDoc from 'assets/propTypes/Grid.json';

import 'sass/containers/app/modules/layout/GridExamples.scss';

export default class GridExamples extends Component {

    constructor(props) {

        super(props);

        this.descListData = [{
            iconCls: 'fa fa-facebook',
            text: 'Facebook',
            desc: 'Here is a Facebook Desc.'
        }, {
            iconCls: 'fa fa-twitter',
            text: 'Twitter',
            desc: 'Here is a Twitter Desc.'
        }, {
            iconCls: 'fa fa-google-plus',
            text: 'Google+',
            desc: 'Here is a Google+ Desc.'
        }];

        this.groupedListData = [{
            name: 'socialNetwork',
            children: [{
                iconCls: 'fa fa-facebook',
                text: 'Facebook',
                desc: 'Here is a Facebook Desc.'
            }, {
                iconCls: 'fa fa-twitter',
                text: 'Twitter',
                desc: 'Here is a Twitter Desc.'
            }, {
                iconCls: 'fa fa-google-plus',
                text: 'Google+',
                desc: 'Here is a Google+ Desc.'
            }]
        }, {
            name: 'device',
            children: [{
                iconCls: 'fa fa-android',
                text: 'Android',
                desc: 'Here is a Android Desc.'
            }, {
                iconCls: 'fa fa-apple',
                text: 'Apple',
                desc: 'Here is a Apple Desc.'
            }, {
                iconCls: 'fa fa-windows',
                text: 'Windows',
                desc: 'Here is a Windows Desc.'
            }]
        }];

        this.changeHandle = this::this.changeHandle;

    }

    changeHandle(value) {
        console.log(value);
    }

    render() {
        return (
            <div className="example grid-examples">

                <h2 className="example-title">Grid</h2>

                <p>
                    <span>Grid</span> system.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With desc"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>Grid</code> with desc.
                                </p>

                                <Grid items={this.descListData}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With mode"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>Grid</code> with select mode.Can be normal,radio,checkbox.
                                </p>

                                <Grid selectMode={Grid.Mode.SINGLE_SELECT}
                                      items={this.descListData}
                                      onChange={this.changeHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With isGrouped"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>Grid</code> with isGrouped.
                                </p>

                                <Grid selectMode={Grid.Mode.MULTI_SELECT}
                                      isGrouped={true}
                                      items={this.groupedListData}
                                      onChange={this.changeHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={GridDoc}/>

            </div>
        );
    }
};