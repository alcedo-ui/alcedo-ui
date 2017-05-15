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
                    <span>CircularLoading</span> use to show pages and blocks loading status.
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

                    <WidgetHeader className="example-header" title="CircularLoading Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <p>Set the size property to small or large for different size CircularLoading.</p>

                            <CircularLoading size="small"/>

                            <CircularLoading />

                            <CircularLoading size="large"/>

                        </div>
                    </div>

                </Widget>


                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={CircularLoadingDoc}/>
            </div>
        )
    }
}