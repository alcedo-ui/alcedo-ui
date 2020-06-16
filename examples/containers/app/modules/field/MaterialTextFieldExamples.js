/**
 * @file MaterialTextField examples
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';

// Components
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialTextField from 'src/MaterialTextField';
import RaisedButton from 'src/RaisedButton';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialTextField.json';

// Styles
import 'scss/containers/app/modules/field/MaterialTextFieldExamples.scss';

class MaterialTextFieldExamples extends Component {

    constructor(props) {

        super(props);

        this.textField = createRef();

        this.state = {
            value: ''
        };

    }

    handleChange = value => {
        this.setState({
            value
        });
    };

    handleFocus = () => {
        this.textField?.current?.focus?.();
    };

    handleBlur = () => {
        this.textField?.current?.blur?.();
    };

    render() {

        const {value} = this.state;

        return (
            <div className="example material-text-field-examples">

                <h2 className="examples-title">MaterialTextField</h2>

                <p>
                    <span>MaterialTextField</span>
                    allow users to input text.
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
                                    <MaterialTextField ref={this.textField}
                                                       theme={MaterialTextField.Theme.HIGHLIGHT}
                                                       label="Search"
                                                       placeholder="keywords"
                                                       rightIconCls={'fas fa-search'}
                                                       value={value}
                                                       onChange={this.handleChange}/>
                                </div>

                                <div className="actions">
                                    <RaisedButton value="Focus"
                                                  onClick={this.handleFocus}/>
                                    <RaisedButton value="Blur"
                                                  onClick={this.handleBlur}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Required"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">
                                <div className="field-group">
                                    <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                       label="Username"
                                                       placeholder="John ..."
                                                       required={true}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Disabled"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">
                                <div className="field-group">
                                    <MaterialTextField label="Username"
                                                       value="John"
                                                       disabled={true}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>

        );
    }
}

export default MaterialTextFieldExamples;
