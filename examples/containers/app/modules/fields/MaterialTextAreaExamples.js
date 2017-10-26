import React, {Component} from 'react';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import MaterialTextArea from 'src/MaterialTextArea';
import Theme from 'src/Theme';

import PropTypeDescTable from '../PropTypeDescTable';
import MaterialTextAreaDoc from 'examples/assets/propTypes/MaterialTextArea.json';

import 'sass/containers/app/modules/fields/MaterialTextAreaExamples.scss';

export default class MaterialTextAreaExamples extends Component {

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
                                    <MaterialTextArea theme={Theme.HIGHLIGHT}
                                                      label="Desciption"
                                                      autoHeight={true}
                                                      wordCountVisible={true}
                                                      placeholder="Desciption"
                                                      maxLength={100}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={MaterialTextAreaDoc}/>

            </div>

        );
    }
};