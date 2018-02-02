import React, {Component} from 'react';

import MaterialProvider from 'src/MaterialProvider';
import Switcher from 'src/Switcher';
import Checkbox from 'src/Checkbox';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialProvider.json';

export default class MaterialProviderExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example material-provider-examples">

                <h2 className="example-title">MaterialProvider</h2>

                <p>
                    A <span>MaterialProvider</span>.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Switcher"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <MaterialProvider label="Switcher">
                                    <Switcher/>
                                </MaterialProvider>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Checkbox"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <MaterialProvider label="Checkbox">
                                    <Checkbox/>
                                </MaterialProvider>

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