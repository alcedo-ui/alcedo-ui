import React, {Component} from 'react';

import GhostButton from 'dist/GhostButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Theme from 'dist/Theme';

import PropTypeDescTable from '../PropTypeDescTable';
import GhostButtonDoc from 'assets/propTypes/GhostButton.json';

import 'sass/containers/app/modules/buttons/GhostButtonExamples.scss';

export default class GhostButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example ghost-button-examples">

                <h2 className="example-title">Ghost Button</h2>

                <p>
                    <span>Ghost Button</span> outside only to wire frame outline,within only the text represent its
                    function,background revealed,and the entire page/background combined into a design.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Ghost Button</code> with default theme,<code>success</code>,
                                    <code>warning</code>,<code>error</code> and <code>disabled</code> props applied.</p>

                                <GhostButton value="Default"/>

                                <GhostButton value="Primary"
                                             theme={Theme.PRIMARY}/>

                                <GhostButton value="Secondary"
                                             theme={Theme.SECONDARY}/>

                                <GhostButton value="Highlight"
                                             theme={Theme.HIGHLIGHT}/>

                                <GhostButton value="Info"
                                             theme={Theme.INFO}/>

                                <GhostButton value="Success"
                                             theme={Theme.SUCCESS}/>

                                <GhostButton value="Warning"
                                             theme={Theme.WARNING}/>

                                <GhostButton value="Error"
                                             theme={Theme.ERROR}/>

                                <GhostButton value="Disabled"
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

                                <GhostButton value="Default"
                                             isRounded={true}/>

                                <GhostButton value="Primary"
                                             theme={Theme.PRIMARY}
                                             isRounded={true}/>

                                <GhostButton value="Secondary"
                                             theme={Theme.SECONDARY}
                                             isRounded={true}/>

                                <GhostButton value="Highlight"
                                             theme={Theme.HIGHLIGHT}
                                             isRounded={true}/>

                                <GhostButton value="Info"
                                             theme={Theme.INFO}
                                             isRounded={true}/>

                                <GhostButton value="Success"
                                             theme={Theme.SUCCESS}
                                             isRounded={true}/>

                                <GhostButton value="Warning"
                                             theme={Theme.WARNING}
                                             isRounded={true}/>

                                <GhostButton value="Error"
                                             theme={Theme.ERROR}
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

                                <GhostButton value="Reset"
                                             iconCls="fa fa-undo"/>

                                <GhostButton value="Add"
                                             theme={Theme.SUCCESS}
                                             iconCls="fa fa-plus"/>

                                <GhostButton value="Delete"
                                             theme={Theme.ERROR}
                                             iconCls="fa fa-trash"/>

                                <GhostButton value="Next"
                                             theme={Theme.PRIMARY}
                                             rightIconCls="fa fa-chevron-right"/>

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

                                <GhostButton value="Reset"
                                             isCircular={true}/>

                                <GhostButton value="Add"
                                             theme={Theme.SUCCESS}
                                             isCircular={true}/>

                                <GhostButton value="Delete"
                                             theme={Theme.ERROR}
                                             isCircular={true}/>

                                <GhostButton value="Next"
                                             theme={Theme.PRIMARY}
                                             isCircular={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={GhostButtonDoc}/>

            </div>
        );
    }
};