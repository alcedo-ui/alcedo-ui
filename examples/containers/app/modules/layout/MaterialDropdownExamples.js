import React, {Component} from 'react';

import MaterialDropdown from 'src/MaterialDropdown';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import {findDOMNode} from 'react-dom';
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Dropdown.json';

import 'scss/containers/app/modules/layout/MaterialDropdownExamples.scss';



class MaterialDropdownExamples extends Component {

    constructor(props) {
        super(props);

        this.state = {
            MaterialDropdownVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {MaterialDropdownVisible} = this.state;

        MaterialDropdownVisible[id] = true;

        this.setState({
            MaterialDropdownVisible
        });

    };

    hide = id => {

        const {MaterialDropdownVisible} = this.state;

        MaterialDropdownVisible[id] = false;

        this.setState({
            MaterialDropdownVisible
        });

    };

    dialogRenderHandler = () => {

        const triggerEl = this.state.triggerEl;
        triggerEl[1] = findDOMNode(this.refs['trigger1']);

        this.setState({
            triggerEl
        });
    };

    render() {

        const {MaterialDropdownVisible,triggerEl}=this.state;

        return (
            <div className="example material-dropdown-examples">

                <h2 className="example-title">MaterialDropdown</h2>

                <p>
                    A <span>MaterialDropdown</span>.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <MaterialDropdown theme={MaterialDropdown.Theme.HIGHLIGHT}
                                                  label="Label"
                                                  triggerValue="Material Dropdown"
                                                  tip="MaterialDropdown Example">
                                    <div className="dropdown-content">MaterialDropdown content</div>
                                </MaterialDropdown>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={MaterialDropdownVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">
                                        <MaterialDropdown theme={MaterialDropdown.Theme.HIGHLIGHT}
                                                          label="Label"
                                                          triggerValue="Material Dropdown"
                                                          parentEl={document.querySelector('.dialog-content')}
                                                          triggerEl={triggerEl}
                                                          tip="MaterialDropdown Example">
                                            <div className="dropdown-content">MaterialDropdown content</div>
                                        </MaterialDropdown>
                                    </div>
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

export default MaterialDropdownExamples;
