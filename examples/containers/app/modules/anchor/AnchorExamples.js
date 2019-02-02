import React, {Component} from 'react';

import Anchor from 'src/Anchor';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Anchor.json';

import 'scss/containers/app/modules/anchor/AnchorExamples.scss';

class AnchorExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AnchorVisible: {}
        };

    }

    show = id => {

        const {AnchorVisible} = this.state;

        AnchorVisible[id] = true;

        this.setState({
            AnchorVisible
        });

    };

    hide = id => {

        const {AnchorVisible} = this.state;

        AnchorVisible[id] = false;

        this.setState({
            AnchorVisible
        });

    };


    render() {

        const {AnchorVisible} = this.state;

        return (
            <div className="example anchor-examples">

                <h2 className="example-title">Anchor</h2>

                <p>
                    An <span>Anchor</span> element.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Anchor tip="Default">
                                    Default
                                </Anchor>

                                <Anchor theme={Anchor.Theme.PRIMARY}
                                        tip="Primary">
                                    Primary
                                </Anchor>

                                <Anchor theme={Anchor.Theme.SECONDARY}
                                        tip="Secondary">
                                    Secondary
                                </Anchor>

                                <Anchor theme={Anchor.Theme.HIGHLIGHT}
                                        tip="Highlight">
                                    Highlight
                                </Anchor>

                                <Anchor theme={Anchor.Theme.INFO}
                                        tip="Info">
                                    Info
                                </Anchor>

                                <Anchor theme={Anchor.Theme.SUCCESS}
                                        tip="Success">
                                    Success
                                </Anchor>

                                <Anchor theme={Anchor.Theme.WARNING}
                                        tip="Warning">
                                    Warning
                                </Anchor>

                                <Anchor theme={Anchor.Theme.ERROR}
                                        tip="Error">
                                    Error
                                </Anchor>

                                <Anchor disabled={true}
                                        tip="Disabled">
                                    Disabled
                                </Anchor>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With icon"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Anchor iconCls="fas fa-undo">
                                    Reset
                                </Anchor>

                                <Anchor theme={Anchor.Theme.SUCCESS}
                                        iconCls="fas fa-plus">
                                    Add
                                </Anchor>

                                <Anchor theme={Anchor.Theme.ERROR}
                                        iconCls="fas fa-trash-alt">
                                    Delete
                                </Anchor>

                                <Anchor theme={Anchor.Theme.PRIMARY}
                                        rightIconCls="fas fa-angle-right">
                                    Next
                                </Anchor>

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

                                <Dialog visible={AnchorVisible[1]}
                                        onRequestClose={() => this.hide(1)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">

                                                <Anchor tip="Default"
                                                        parentEl={dialogContentEl}
                                                        >
                                                    Default
                                                </Anchor>

                                                <Anchor theme={Anchor.Theme.PRIMARY}
                                                        parentEl={dialogContentEl}
                                                        tip="Primary">
                                                    Primary
                                                </Anchor>

                                                <Anchor theme={Anchor.Theme.SECONDARY}
                                                        parentEl={dialogContentEl}
                                                        tip="Secondary">
                                                    Secondary
                                                </Anchor>

                                                <Anchor theme={Anchor.Theme.HIGHLIGHT}
                                                        parentEl={dialogContentEl}
                                                        tip="Highlight">
                                                    Highlight
                                                </Anchor>

                                                <Anchor theme={Anchor.Theme.INFO}
                                                        parentEl={dialogContentEl}
                                                        tip="Info">
                                                    Info
                                                </Anchor>

                                                <Anchor theme={Anchor.Theme.SUCCESS}
                                                        parentEl={dialogContentEl}
                                                        tip="Success">
                                                    Success
                                                </Anchor>

                                                <Anchor theme={Anchor.Theme.WARNING}
                                                        parentEl={dialogContentEl}
                                                        tip="Warning">
                                                    Warning
                                                </Anchor>

                                                <Anchor theme={Anchor.Theme.ERROR}
                                                        parentEl={dialogContentEl}
                                                        tip="Error">
                                                    Error
                                                </Anchor>

                                                <Anchor disabled={true}
                                                        tip="Disabled">
                                                    Disabled
                                                </Anchor>

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

export default AnchorExamples;
