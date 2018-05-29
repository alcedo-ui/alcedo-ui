import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialTextArea from 'src/MaterialTextArea';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/MaterialTextArea.json';

import 'sass/containers/app/modules/fields/MaterialTextAreaExamples.scss';

class MaterialTextAreaExamples extends Component {

    constructor(props) {
        super(props);
    }

    onChangeHandle = value => {
        this.setState({
            value: value
        });
    };

    render() {
        return (
            <div className="example material-text-area-examples">

                <h2 className="examples-title">MaterialTextArea</h2>

                <p>
                    <span>MaterialTextArea</span> allow users to input text.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>MaterialTextArea</code> simple example.</p>

                                <div className="field-group">
                                    <MaterialTextArea theme={MaterialTextArea.Theme.HIGHLIGHT}
                                                      label="Description"
                                                      autoHeight={true}
                                                      wordCountVisible={true}
                                                      placeholder="Description"
                                                      maxLength={100}/>
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
                                    <MaterialTextArea theme={MaterialTextArea.Theme.HIGHLIGHT}
                                                      label="Licence"
                                                      placeholder="..."
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
                                    <MaterialTextArea label="Licence"
                                                      value="..."
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

export default MaterialTextAreaExamples;