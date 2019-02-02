import React, {Component} from 'react';

import Dropdown from 'src/Dropdown';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Dropdown.json';

import 'scss/containers/app/modules/layout/DropdownExamples.scss';


class DropdownExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            DropdownVisible: {}
        };

    }

    show = id => {

        const {DropdownVisible} = this.state;

        DropdownVisible[id] = true;

        this.setState({
            DropdownVisible
        });

    };

    hide = id => {

        const {DropdownVisible} = this.state;

        DropdownVisible[id] = false;

        this.setState({
            DropdownVisible
        });

    };

    render() {

        const {DropdownVisible}=this.state;

        return (
            <div className="example dropdown-examples">

                <h2 className="example-title">Dropdown</h2>

                <p>
                    A <span>Dropdown</span>.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Dropdown triggerValue="Toggle Dropdown"
                                          popupClassName="dropdown-examples-popup"
                                          tip="Dropdown">
                                    <div className="dropdown-content">Dropdown content</div>
                                </Dropdown>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Self Defined Position"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Dropdown triggerValue="Toggle Dropdown"
                                          popupClassName="dropdown-examples-popup"
                                          position={Dropdown.Position.TOP_LEFT}
                                          tip="Dropdown Example">
                                    <div className="dropdown-content">Dropdown content</div>
                                </Dropdown>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Dropdown in Dialog"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={DropdownVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <Dropdown triggerValue="Toggle Dropdown"
                                                          ref="trigger1"
                                                          popupClassName="dropdown-examples-popup"
                                                          position={Dropdown.Position.BOTTOM}
                                                          parentEl={dialogContentEl}
                                                          tip="Dialog Dropdown Example">
                                                    <div className="dropdown-content">Dialog Dropdown content</div>
                                                </Dropdown>
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

export default DropdownExamples;
