import React, {Component} from 'react';

import MaterialProvider from 'src/MaterialProvider';
import Switcher from 'src/Switcher';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MaterialProvider.json';

import 'sass/containers/app/modules/layout/MaterialProviderExamples.scss';

export default class MaterialProviderExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example material-provider-examples">

                <h2 className="example-title">MaterialProvider</h2>

                <p>
                    A <span>MaterialProvider</span> element is a basic container that can give depth to the page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="MaterialProvider Example"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>MaterialProvider examples showing the range of zDepth.</p>

                                <MaterialProvider lable="Switcher">
                                    <Switcher/>
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