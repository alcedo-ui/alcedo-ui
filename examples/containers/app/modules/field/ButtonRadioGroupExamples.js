import React, {Component} from 'react';

import ButtonRadioGroup from 'src/ButtonRadioGroup';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ButtonRadioGroup.json';

import 'scss/containers/app/modules/field/ButtonRadioGroupExamples.scss';

class ButtonRadioGroupExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            text: 1,
            value: 1,
            tip: 1
        }, {
            text: 2,
            value: 2,
            tip: 2
        }, {
            text: 3,
            value: 3,
            tip: 3
        }, {
            text: 4,
            value: 4,
            tip: 4
        }, {
            text: 5,
            value: 5,
            tip: 5
        }];

        this.state = {
            ButtonRadioGroupVisible: {}
        };

    }

    show = id => {

        const {ButtonRadioGroupVisible} = this.state;

        ButtonRadioGroupVisible[id] = true;

        this.setState({
            ButtonRadioGroupVisible
        });

    };

    hide = id => {

        const {ButtonRadioGroupVisible} = this.state;

        ButtonRadioGroupVisible[id] = false;

        this.setState({
            ButtonRadioGroupVisible
        });

    };

    dialogRenderHandler = () => {

    };

    changeHandler = value => {
        console.log(value);
    };

    render() {

        const {ButtonRadioGroupVisible} = this.state;
        return (
            <div className="example button-radio-group-examples">


                <h2 className="example-title">ButtonRadioGroup</h2>

                <p>
                    <span>ButtonRadioGroup</span>
                    is a radio group use button style.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>value</code> property to activate one button.</p>

                                <ButtonRadioGroup data={this.data}
                                                  value={1}
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

                                <p>Set the <code>value</code> property to activate one button.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={ButtonRadioGroupVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>

                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <ButtonRadioGroup data={this.data}
                                                                  parentEl={dialogContentEl}
                                                                  value={1}
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

export default ButtonRadioGroupExamples;
