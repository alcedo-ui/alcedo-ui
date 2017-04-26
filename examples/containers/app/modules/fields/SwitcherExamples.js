import React, {Component} from 'react';

import Switcher from 'dist/Switcher';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import SwitcherDoc from 'assets/propTypes/Switcher.json';

import 'sass/containers/app/modules/fields/SwitcherExamples.scss';

export default class SwitcherExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example switcher-examples">


                <h2 className="example-title">Switcher</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Switcher Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Switcher value={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Small Size Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Switcher size="small"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={SwitcherDoc}/>

            </div>
        );
    }
};