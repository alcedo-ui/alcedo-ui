import React, {Component} from 'react';

import AnchorButton from 'src/AnchorButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/AnchorButton.json';

import 'scss/containers/app/modules/buttons/AnchorButtonExamples.scss';

class AnchorButtonExamples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AnchorButtonVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {AnchorButtonVisible} = this.state;

        AnchorButtonVisible[id] = true;

        this.setState({
            AnchorButtonVisible
        });

    };

    hide = id => {

        const {AnchorButtonVisible} = this.state;

        AnchorButtonVisible[id] = false;

        this.setState({
            AnchorButtonVisible
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

        const {AnchorButtonVisible, triggerEl} = this.state;

        return (
            <div className="example anchor-button-examples">

                <h2 className="example-title">Anchor Button</h2>

                <p>
                    <span>Anchor Button</span>
                    are used for general functions and reduce the amount of layering on the
                    screen, making it more readable.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Anchor Button</code> with default
                                    theme, <code>success</code>, <code>warning</code>
                                    , <code>error</code> and <code>disabled</code> props applied.
                                </p>

                                <AnchorButton value="Default"
                                              tip="Default"/>

                                <AnchorButton value="Primary"
                                              tip="Primary"
                                              theme={AnchorButton.Theme.PRIMARY}/>

                                <AnchorButton value="Secondary"
                                              tip="Secondary"
                                              theme={AnchorButton.Theme.SECONDARY}/>

                                <AnchorButton value="Highlight"
                                              tip="Highlight"
                                              theme={AnchorButton.Theme.HIGHLIGHT}/>

                                <AnchorButton value="Info"
                                              tip="Info"
                                              theme={AnchorButton.Theme.INFO}/>

                                <AnchorButton value="Success"
                                              tip="Success"
                                              theme={AnchorButton.Theme.SUCCESS}/>

                                <AnchorButton value="Warning"
                                              tip="Warning"
                                              theme={AnchorButton.Theme.WARNING}/>

                                <AnchorButton value="Error"
                                              tip="Error"
                                              theme={AnchorButton.Theme.ERROR}/>

                                <AnchorButton value="Disabled"
                                              tip="Disabled"
                                              disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With border radius"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>isRounded</code> property to true for button round corner.</p>

                                <AnchorButton value="Default"
                                              isRounded={true}/>

                                <AnchorButton value="Primary"
                                              theme={AnchorButton.Theme.PRIMARY}
                                              isRounded={true}/>

                                <AnchorButton value="Secondary"
                                              theme={AnchorButton.Theme.SECONDARY}
                                              isRounded={true}/>

                                <AnchorButton value="Highlight"
                                              theme={AnchorButton.Theme.HIGHLIGHT}
                                              isRounded={true}/>

                                <AnchorButton value="Info"
                                              theme={AnchorButton.Theme.INFO}
                                              isRounded={true}/>

                                <AnchorButton value="Success"
                                              theme={AnchorButton.Theme.SUCCESS}
                                              isRounded={true}/>

                                <AnchorButton value="Warning"
                                              theme={AnchorButton.Theme.WARNING}
                                              isRounded={true}/>

                                <AnchorButton value="Error"
                                              theme={AnchorButton.Theme.ERROR}
                                              isRounded={true}/>

                                <AnchorButton value="Disabled"
                                              disabled={true}
                                              isRounded={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With icon"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>iconCls</code> property for button left icon.And set the
                                    <code>rightIconCls</code> property for button right icon.</p>

                                <AnchorButton value="Reset"
                                              iconCls="fas fa-undo"/>

                                <AnchorButton value="Add"
                                              theme={AnchorButton.Theme.SUCCESS}
                                              iconCls="fas fa-plus"/>

                                <AnchorButton value="Delete"
                                              theme={AnchorButton.Theme.ERROR}
                                              iconCls="fas fa-trash-alt"/>

                                <AnchorButton value="Next"
                                              theme={AnchorButton.Theme.PRIMARY}
                                              rightIconCls="fas fa-angle-right"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Use circle shape"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the <code>isCircular</code> property to true for circle shape flat button.</p>

                                <AnchorButton value="Primary"
                                              isCircular={true}/>

                                <AnchorButton value="Success"
                                              theme={AnchorButton.Theme.SUCCESS}
                                              isCircular={true}/>

                                <AnchorButton value="Error"
                                              theme={AnchorButton.Theme.ERROR}
                                              isCircular={true}/>

                                <AnchorButton value="Warning"
                                              theme={AnchorButton.Theme.WARNING}
                                              isCircular={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Anchor Button</code> with default
                                    theme, <code>success</code>, <code>warning</code>
                                    , <code>error</code> and <code>disabled</code> props applied.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={AnchorButtonVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">

                                        <AnchorButton value="Default"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      tip="Default"/>

                                        <AnchorButton value="Primary"
                                                      tip="Primary"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      theme={AnchorButton.Theme.PRIMARY}/>

                                        <AnchorButton value="Secondary"
                                                      tip="Secondary"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      theme={AnchorButton.Theme.SECONDARY}/>

                                        <AnchorButton value="Highlight"
                                                      tip="Highlight"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      theme={AnchorButton.Theme.HIGHLIGHT}/>

                                        <AnchorButton value="Info"
                                                      tip="Info"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      theme={AnchorButton.Theme.INFO}/>

                                        <AnchorButton value="Success"
                                                      tip="Success"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      theme={AnchorButton.Theme.SUCCESS}/>

                                        <AnchorButton value="Warning"
                                                      tip="Warning"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      theme={AnchorButton.Theme.WARNING}/>

                                        <AnchorButton value="Error"
                                                      tip="Error"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      theme={AnchorButton.Theme.ERROR}/>

                                        <AnchorButton value="Disabled"
                                                      tip="Disabled"
                                                      parentEl={document.querySelector('.dialog-content')}
                                                      triggerEl={triggerEl}
                                                      disabled={true}/>

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

export default AnchorButtonExamples;
