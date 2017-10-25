import React, {Component} from 'react';

import Widget from 'src/Widget/index';
import WidgetHeader from 'src/WidgetHeader/index';
import MaterialTextField from 'src/MaterialTextField/index';
import Theme from 'src/Theme/index';

import PropTypeDescTable from '../PropTypeDescTable';
import MaterialTextFieldDoc from 'examples/assets/propTypes/MaterialTextField.json';

import 'sass/containers/app/modules/fields/MaterialTextFieldExamples.scss';

export default class MaterialTextFieldExamples extends Component {

    constructor(props) {
        super(props);

    }

    onChangeHandle(value) {
        this.setState({
            value: value
        });
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
                                    <MaterialTextField theme={Theme.HIGHLIGHT}
                                                       label="Search"
                                                       placeholder="keywords"
                                                       rightIconCls={'fa fa-search'}/>
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