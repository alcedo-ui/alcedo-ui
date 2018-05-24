import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialTextField from 'src/MaterialTextField';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialTextField.json';

class MaterialTextFieldExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: ''
        };

    }

    onChangeHandler = value => {
        this.setState({
            value
        });
    };

    render() {

        const {value} = this.state;

        return (
            <div className="example material-text-field-examples">

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
                                    <MaterialTextField theme={MaterialTextField.Theme.HIGHLIGHT}
                                                       label="Search"
                                                       placeholder="keywords"
                                                       autoFocus={true}
                                                       rightIconCls={'fas fa-search'}
                                                       value={value}
                                                       onChange={this.onChangeHandler}/>
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
};

export default MaterialTextFieldExamples;