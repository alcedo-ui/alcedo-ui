import React, {Component} from 'react';

import GhostButton from 'src/GhostButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/GhostButton.json';

import 'scss/containers/app/modules/buttons/GhostButtonExamples.scss';
import RaisedButton from '../../../../../src/RaisedButton';
import Dialog from '../../../../../src/Dialog';
import AnchorButton from '../../../../../src/AnchorButton';

class GhostButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {GhostButtonVisible, triggerEl} = this.state;

        return (
            <div className="example ghost-button-examples">

                <h2 className="example-title">Ghost Button</h2>

                <p>
                    <span>Ghost Button</span>
                    outside only to wire frame outline,within only the text represent its
                    function,background revealed,and the entire page/background combined into a design.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Ghost Button</code> with default theme, <code>success</code>
                                    , <code>warning</code>, <code>error</code> and <code>disabled</code> props applied.
                                </p>

                                <GhostButton value="Primary"
                                             tip="Primary"
                                             theme={GhostButton.Theme.PRIMARY}/>

                                <GhostButton value="Secondary"
                                             tip="Secondary"
                                             theme={GhostButton.Theme.SECONDARY}/>

                                <GhostButton value="Highlight"
                                             tip="Highlight"
                                             theme={GhostButton.Theme.HIGHLIGHT}/>

                                <GhostButton value="Info"
                                             tip="Info"
                                             theme={GhostButton.Theme.INFO}/>

                                <GhostButton value="Success"
                                             tip="Success"
                                             theme={GhostButton.Theme.SUCCESS}/>

                                <GhostButton value="Warning"
                                             tip="Warning"
                                             theme={GhostButton.Theme.WARNING}/>

                                <GhostButton value="Error"
                                             tip="Error"
                                             theme={GhostButton.Theme.ERROR}/>

                                <GhostButton value="Disabled"
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

                                <GhostButton value="Primary"
                                             theme={GhostButton.Theme.PRIMARY}
                                             isRounded={true}/>

                                <GhostButton value="Secondary"
                                             theme={GhostButton.Theme.SECONDARY}
                                             isRounded={true}/>

                                <GhostButton value="Highlight"
                                             theme={GhostButton.Theme.HIGHLIGHT}
                                             isRounded={true}/>

                                <GhostButton value="Info"
                                             theme={GhostButton.Theme.INFO}
                                             isRounded={true}/>

                                <GhostButton value="Success"
                                             theme={GhostButton.Theme.SUCCESS}
                                             isRounded={true}/>

                                <GhostButton value="Warning"
                                             theme={GhostButton.Theme.WARNING}
                                             isRounded={true}/>

                                <GhostButton value="Error"
                                             theme={GhostButton.Theme.ERROR}
                                             isRounded={true}/>

                                <GhostButton value="Disabled"
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

                                <GhostButton value="Add"
                                             theme={GhostButton.Theme.SUCCESS}
                                             iconCls="fas fa-plus"/>

                                <GhostButton value="Delete"
                                             theme={GhostButton.Theme.ERROR}
                                             iconCls="fas fa-trash-alt"/>

                                <GhostButton value="Next"
                                             theme={GhostButton.Theme.PRIMARY}
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

                                <GhostButton value="Add"
                                             theme={GhostButton.Theme.SUCCESS}
                                             isCircular={true}/>

                                <GhostButton value="Delete"
                                             theme={GhostButton.Theme.ERROR}
                                             isCircular={true}/>

                                <GhostButton value="Next"
                                             theme={GhostButton.Theme.PRIMARY}
                                             isCircular={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Ghost Button</code> with default theme, <code>success</code>
                                    , <code>warning</code>, <code>error</code> and <code>disabled</code> props applied.
                                </p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={GhostButtonVisible[1]}
                                        onRender={this.dialogRenderHandler}
                                        onRequestClose={() => this.hide(1)}>
                                    <div className="popover-dialog-content-scroller">

                                        <GhostButton value="Primary"
                                                     tip="Primary"
                                                     parentEl={document.querySelector('.dialog-content')}
                                                     triggerEl={triggerEl}
                                                     theme={GhostButton.Theme.PRIMARY}/>

                                        <GhostButton value="Secondary"
                                                     tip="Secondary"
                                                     parentEl={document.querySelector('.dialog-content')}
                                                     triggerEl={triggerEl}
                                                     theme={GhostButton.Theme.SECONDARY}/>

                                        <GhostButton value="Highlight"
                                                     tip="Highlight"
                                                     parentEl={document.querySelector('.dialog-content')}
                                                     triggerEl={triggerEl}
                                                     theme={GhostButton.Theme.HIGHLIGHT}/>

                                        <GhostButton value="Info"
                                                     tip="Info"
                                                     parentEl={document.querySelector('.dialog-content')}
                                                     triggerEl={triggerEl}
                                                     theme={GhostButton.Theme.INFO}/>

                                        <GhostButton value="Success"
                                                     tip="Success"
                                                     parentEl={document.querySelector('.dialog-content')}
                                                     triggerEl={triggerEl}
                                                     theme={GhostButton.Theme.SUCCESS}/>

                                        <GhostButton value="Warning"
                                                     tip="Warning"
                                                     parentEl={document.querySelector('.dialog-content')}
                                                     triggerEl={triggerEl}
                                                     theme={GhostButton.Theme.WARNING}/>

                                        <GhostButton value="Error"
                                                     tip="Error"
                                                     parentEl={document.querySelector('.dialog-content')}
                                                     triggerEl={triggerEl}
                                                     theme={GhostButton.Theme.ERROR}/>

                                        <GhostButton value="Disabled"
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

export default GhostButtonExamples;
