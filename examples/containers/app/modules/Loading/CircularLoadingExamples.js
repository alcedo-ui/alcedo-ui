/**
 * Created by Wendy on 2017/5/12.
 */
import React, {Component} from 'react';

import CircularLoading from 'dist/CircularLoading';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import CircularLoadingDoc from 'assets/propTypes/CircularLoading.json';

import '../../../../assets/sass/containers/app/modules/Loading/CircularLoadingExamples.scss';

export default class CircularLoadingExamples extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="example circular-loading-examples">
                <h2 className="example-title">CircularLoading</h2>

                <p>
                    <spin>CircularLoading</spin> use to show pages and blocks loading status.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="CircularLoading Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>A simple CircularLoading example.</p>

                            <CircularLoading />

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="CircularLoading Size Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the size property to small or large for different size CircularLoading.</p>

                            <CircularLoading size="small"/>

                            <CircularLoading />

                            <CircularLoading size="large"/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="CircularLoading Theme Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the theme property for different theme CircularLoading.</p>

                            <CircularLoading />

                            <CircularLoading theme="success"/>

                            <CircularLoading theme="error"/>

                            <CircularLoading theme="warning"/>

                            <CircularLoading theme="highlight"/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="CircularLoading Type Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the type property for different border-style CircularLoading.</p>

                            <CircularLoading />
                            <CircularLoading type="dotted"/>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="CircularLoading Weight Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the weight property for different border-width CircularLoading.</p>

                            <CircularLoading weight={5}
                                             size="large"/>

                            <CircularLoading weight={2}
                                             type="dotted"/>

                        </div>
                    </div>

                </Widget>


                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={CircularLoadingDoc}/>
            </div>
        )
    }
}