import React, {Component} from 'react';

import TextField from 'src/TextField';
import FlashNumber from 'src/FlashNumber';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/FlashNumber.json';

import 'scss/containers/app/modules/field/FlashNumberExamples.scss';

class FlashNumberExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value1: '',
            value2: ''
        };

    }

    changeHandleValue1 = value1 => {
        this.setState({
            value1
        });
    };

    changeHandleValue2 = value2 => {
        this.setState({
            value2
        });
    };

    render() {

        const {value1, value2} = this.state;

        return (
            <div className="example flash-number-examples">

                <h2 className="example-title">FlashNumber</h2>

                <p>
                    A <span>FlashNumber</span> is a numerical calculation animation.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>FlashNumber</code> simple example.</p>

                                <div className="field-group">
                                    <TextField type="number"
                                               value={value1}
                                               onChange={this.changeHandleValue1}/>
                                    <span>&nbsp;&nbsp;X 2 =&nbsp;</span>
                                    <FlashNumber initValue={0}
                                                 value={value1 * 2}/>
                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With flashTime"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>flashTime</code> property to reset animation execution time.</p>

                                <div className="field-group">
                                    <TextField type="number"
                                               value={value2}
                                               onChange={this.changeHandleValue2}/>
                                    <span>&nbsp;&nbsp;X 3 =&nbsp;</span>
                                    <FlashNumber initValue={0}
                                                 flashTime={1000}
                                                 value={value2 * 3}/>
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

export default FlashNumberExamples;
