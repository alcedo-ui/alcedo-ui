import React, {Component, PropTypes} from 'react';

import EditableField from 'src/EditableField';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/EditableField.json';


import 'scss/containers/app/modules/field/EditableFieldExamples.scss';



class EditableFieldExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: 'text',
            disabled: false,
            EditableFieldSelectVisible: {}
        };
    }

    show = id => {

        const {EditableFieldSelectVisible} = this.state;

        EditableFieldSelectVisible[id] = true;

        this.setState({
            EditableFieldSelectVisible
        });

    };

    hide = id => {

        const {EditableFieldSelectVisible} = this.state;

        EditableFieldSelectVisible[id] = false;

        this.setState({
            EditableFieldSelectVisible
        });

    };

    onClick = e => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }
    };

    onChange = text => {
        console.log(text);
        if (text === '123') {
            this.setState({
                disabled: true,
                value: 'text111'
            });
        }
    };

    onEditEnd = () => {
        console.log('end');
    };

    onEditStart = () => {
        console.log('start');
    };

    beforeChange = text => {
        if (text == '123') {
            return false;
        }
        return true;
    };

    render() {

        const {EditableFieldSelectVisible} = this.state;
        return (
            <div className="example editable-field-examples">

                <h2 className="example-title">Editable Field</h2>

                <p>
                    An <span>Editable Field</span> is an editable text display area.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Field</code> simple example.</p>

                                <EditableField value={this.state.value}
                                               onBlur={this.onBlur}
                                               title="Click to Edit"/>
                                ,&nbsp;
                                <EditableField value={this.state.value}
                                               autoWidth={true}
                                               onBlur={this.onBlur}
                                               disabled={this.state.disabled}
                                               onChange={this.onChange}
                                               onEditStart={this.onEditStart}
                                               beforeChange={this.beforeChange}
                                               onClick={this.onClick}
                                               showModal={true}/>
                                ,&nbsp;
                                <EditableField value={this.state.value}
                                               onBlur={this.onBlur}
                                               title={'Click to edit'}/>
                                ,&nbsp;
                                <EditableField value={this.state.value}
                                               onBlur={this.onBlur}/>
                                ,&nbsp;
                                <EditableField value={this.state.value}
                                               onBlur={this.onBlur}/>
                                ,&nbsp;
                                <EditableField value={this.state.value}
                                               onBlur={this.onBlur}/>
                                ,&nbsp;
                                <EditableField value={this.state.value}
                                               onBlur={this.onBlur}
                                               onEditStart={this.onEditStart}
                                               onEditEnd={this.onEditEnd}/>

                            </div>

                        </div>
                    </div>

                </Widget>


                <Widget>

                    <WidgetHeader className="example-header" title="Tip"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Field</code> simple example.</p>

                                <EditableField value={this.state.value}
                                               onBlur={this.onBlur}
                                               maxLength={5}
                                               tip="this is a tip"/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Editable Field</code> simple example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={EditableFieldSelectVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <EditableField value={this.state.value}
                                                               onBlur={this.onBlur}
                                                               maxLength={5}
                                                               parentEl={dialogContentEl}
                                                               tip="this is a tip"/>
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

export default EditableFieldExamples;
