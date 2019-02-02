import React, {Component} from 'react';

import ButtonRadioSelect from 'src/ButtonRadioSelect';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

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

        this.state = {
            ButtonRadioSelectVisible: {}
        };

    }

    show = id => {

        const {ButtonRadioSelectVisible} = this.state;

        ButtonRadioSelectVisible[id] = true;

        this.setState({
            ButtonRadioSelectVisible
        });

    };

    hide = id => {

        const {ButtonRadioSelectVisible} = this.state;

        ButtonRadioSelectVisible[id] = false;

        this.setState({
            ButtonRadioSelectVisible
        });

    };

    changeHandler = value => {
        console.log(value);
    };

    render() {

        const {ButtonRadioSelectVisible} = this.state;

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

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Button Radio Select</code> simple example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={ButtonRadioSelectVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <ButtonRadioSelect popupClassName="button-radio-select-example-pop"
                                                                   data={this.data}
                                                                   value={this.data[0]}
                                                                   parentEl={dialogContentEl}
                                                                   onChange={this.changeHandler}/>
                                            </div>
                                    }

                                </Dialog>

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
