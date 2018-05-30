import React, {Component} from 'react';

import ButtonCheckbox from 'src/ButtonCheckbox';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ButtonCheckbox.json';

import 'sass/containers/app/modules/fields/ButtonCheckboxExamples.scss';

class ButtonCheckboxExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example button-checkbox-examples">

                <h2 className="example-title">ButtonCheckbox</h2>

                <p>
                    <span>ButtonCheckbox</span> is a checkbox use button style.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>ButtonCheckbox</code> simple example.</p>

                                <label>Number</label>
                                <ButtonCheckbox text="1"/>
                                <ButtonCheckbox text="2"/>
                                <ButtonCheckbox text="3"/>
                                <ButtonCheckbox text="4"/>
                                <ButtonCheckbox text="5"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>value</code> property to true for ButtonCheckbox using active status.
                                </p>

                                <label>Number</label>
                                <ButtonCheckbox text="1"
                                                value={true}/>
                                <ButtonCheckbox text="2"
                                                value={true}/>
                                <ButtonCheckbox text="3"
                                                value={true}/>
                                <ButtonCheckbox text="4"
                                                value={true}/>
                                <ButtonCheckbox text="5"
                                                value={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With disabled"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>disabled</code> property to true for disabling the ButtonCheckbox.</p>

                                <label>Number</label>
                                <ButtonCheckbox text="one"
                                                value={true}
                                                disabled={true}/>
                                <ButtonCheckbox text="two"
                                                disabled={true}/>
                                <ButtonCheckbox text="three"
                                                value={true}/>
                                <ButtonCheckbox text="four"
                                                disabled={true}/>
                                <ButtonCheckbox text="five"
                                                value={true}/>

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

export default ButtonCheckboxExamples;