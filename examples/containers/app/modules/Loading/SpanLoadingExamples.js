/**
 * Created by Wendy on 2017/5/9.
 */
import React, {Component} from 'react';

import SpanLoading from 'dist/SpanLoading';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Switcher from 'dist/Switcher';

import PropTypeDescTable from '../PropTypeDescTable';
import SpanLoadingDoc from 'assets/propTypes/SpanLoading.json';

import '../../../../assets/sass/containers/app/modules/Loading/SpanLoadingExamples.scss';

export default class SpanLoadingExamples extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading1: false,
            loading2: false
        };

        this.toggle = this::this.toggle;
    }

    toggle(e, id) {
        this.setState({
            [`loading${id}`]: !this.state[`loading${id}`]
        })
    }

    render() {

        const {loading1, loading2}=this.state;

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

                            <p>Put SpanLoading inside a container.</p>

                            <div className="example-span-loading">

                                <SpanLoading spanning={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="SpanLoading nested Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>You can embed the contents directly into SpanLoading and change the existing containers
                                to loaded states.</p>

                            <SpanLoading spanning={loading1}
                                         className="span-loading-nested">

                                <div className={`span-loading-info ${loading1 ? 'span-loading-blur' : ''}`}>
                                    <span className="span-loading-message">Alert message title</span>
                                    <span className="span-loading-description">
                                        Further details about the context of this alert.
                                    </span>
                                </div>

                            </SpanLoading>


                            <div className="switcher-con">
                                <span>Loading state：</span>
                                <Switcher value={loading1}
                                          onChange={(e)=> {
                                              this.toggle(e, 1)
                                          }}/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="SpanLoading Delay Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the delay property to delay the loading animation.</p>

                            <SpanLoading spanning={loading2}
                                         delay={2000}
                                         className="span-loading-nested">

                                <div className={`span-loading-info ${loading2 ? 'span-loading-blur' : ''}`}>
                                    <span className="span-loading-description">
                                        Delay the loading animation.
                                    </span>
                                </div>

                            </SpanLoading>


                            <div className="switcher-con">
                                <span>Loading state：</span>
                                <Switcher value={loading2}
                                          onChange={(e)=> {
                                              this.toggle(e, 2)
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