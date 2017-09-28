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

                <p>
                    A <span>Switcher</span> is used as an on/off control.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Switcher Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Switcher simple example.Set the value property to true for active status.</p>

                                <Switcher value={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Switcher Size Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the size property to small for small size switcher.</p>

                                <Switcher size={Switcher.Size.SMALL}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Switcher Disabled Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the disabled property to true for disabled props applied.</p>

                                <Switcher disabled={true}/>

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