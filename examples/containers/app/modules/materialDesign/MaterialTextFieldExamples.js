import React, {Component} from 'react';


import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import PropTypeDescTable from '../PropTypeDescTable';
import MaterialTextField from 'dist/MaterialTextField';
import MaterialTextFieldDoc from 'assets/propTypes/MaterialTextField.json';

import 'sass/containers/app/modules/materialDesign/MaterialTextFieldExamples.scss';

export default class MaterialTextFieldExamples extends Component {

    constructor(props) {
        super(props);

    }

    onChangeHandle(value) {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div className="example tree-select-examples">

                <h2 className="examples-title">MaterialTextField</h2>

                <p>
                    <span>MaterialTextField</span> allow users to input text.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialTextField</code> simple example.</p>
                                <div className="field-group">
                                    <MaterialTextField placeholder="password field"
                                                       value={'1111'}
                                                       label="label"/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With isLabelAnimate"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialTextField</code> without labelAnimate.</p>
                                <div className="field-group">
                                    <MaterialTextField placeholder="password field"
                                                       isLabelAnimate={false}
                                                       label="label"/>
                                </div>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MaterialTextFieldDoc}/>

            </div>

        );
    }
};