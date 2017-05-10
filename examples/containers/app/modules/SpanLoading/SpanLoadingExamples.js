/**
 * Created by Wendy on 2017/5/9.
 */
import React, {Component} from 'react';

import SpanLoading from 'dist/SpanLoading';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Switcher from 'dist/Switcher';
import Dialog from 'dist/Dialog';

import PropTypeDescTable from '../PropTypeDescTable';
import SpanLoadingDoc from 'assets/propTypes/SpanLoading.json';

import '../../../../assets/sass/containers/app/modules/SpanLoading/SpanLoadingExamples.scss';

export default class SpanLoadingExamples extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };

        this.toggle = this::this.toggle;
    }

    toggle() {
        this.setState({
            loading: !this.state.loading
        })
    }

    render() {

        const {loading}=this.state;

        return (
            <div className="example span-loading-examples">
                <h2 className="example-title">SpanLoading</h2>

                <p>
                    <span>SpanLoading</span> use to show pages and blocks loading status.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="SpanLoading Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple SpanLoading example.</p>

                            <SpanLoading spanning={true}/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="SpanLoading With Text Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the tip property to add a description for SpanLoading.</p>

                            <SpanLoading spanning={true}
                                         tip="Loading..."/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="SpanLoading In Different Size Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the size property to small or large for different size SpanLoading.</p>

                            <SpanLoading spanning={true}
                                         size="small"/>

                            <SpanLoading spanning={true}/>

                            <SpanLoading spanning={true}
                                         size="large"/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="SpanLoading Inside Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="example-span-loading">

                                <SpanLoading spanning={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="SpanLoading Inside Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <SpanLoading spanning={loading}>

                                <div className={`span-loading-info ${loading ? 'span-loading-blur' : ''}`}>
                                    <span className="span-loading-message">Alert message title</span>
                                    <span className="span-loading-description">
                                        Further details about the context of this alert.
                                    </span>
                                </div>

                            </SpanLoading>


                            <div className="switcher-con">
                                <span>Loading state：</span>
                                <Switcher value={loading}
                                          onChange={(e)=> {
                                              this.toggle(e)
                                          }}/>
                            </div>

                        </div>
                    </div>

                </Widget>


                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={SpanLoadingDoc}/>
            </div>
        )
    }
}