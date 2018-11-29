import React, {Component} from 'react';

import ButtonRadioSelect from 'src/ButtonRadioSelect';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ButtonRadioSelect.json';

import 'scss/containers/app/modules/field/ButtonRadioSelectExamples.scss';

class ButtonRadioSelectExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            label: 1,
            value: 1
        }, {
            label: 2,
            value: 2
        }, {
            label: 3,
            value: 3
        }, {
            label: 4,
            value: 4
        }, {
            label: 5,
            value: 5
        }];

    }

    changeHandler = value => {
        console.log(value);
    };

    render() {
        return (
            <div className="example button-radio-select-examples">


                <h2 className="example-title">ButtonRadioSelect</h2>

                <p>
                    <span>ButtonRadioSelect</span>
                    &nbsp;is a radio select use button style.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Button Radio Select</code> simple example.</p>

                                <ButtonRadioSelect popupClassName="button-radio-select-example-pop"
                                                   data={this.data}
                                                   value={this.data[0]}
                                                   onChange={this.changeHandler}/>

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

export default ButtonRadioSelectExamples;
