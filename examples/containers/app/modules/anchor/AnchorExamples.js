import React, {Component} from 'react';

import Anchor from 'src/Anchor';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';

import PropTypeDescTable from '../PropTypeDescTable';
import AnchorDoc from 'assets/propTypes/Anchor.json';

import 'sass/containers/app/modules/anchor/AnchorExamples.scss';

export default class AnchorExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example raised-button-examples">

                <h2 className="example-title">Raised Button</h2>

                <p>
                    <span>Raised Button</span> is used to add dimension to mostly flat layouts and emphasizes important
                    functions on your page.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Raised Button</code> with default theme,<code>success</code>,
                                    <code>warning</code>,<code>error</code> and <code>disabled</code> props applied.
                                </p>

                                <Anchor>
                                    Default
                                </Anchor>

                                <Anchor theme={Theme.PRIMARY}>
                                    Primary
                                </Anchor>

                                <Anchor theme={Theme.SECONDARY}>
                                    Secondary
                                </Anchor>

                                <Anchor theme={Theme.HIGHLIGHT}>
                                    Highlight
                                </Anchor>

                                <Anchor theme={Theme.INFO}>
                                    Info
                                </Anchor>

                                <Anchor theme={Theme.SUCCESS}>
                                    Success
                                </Anchor>

                                <Anchor theme={Theme.WARNING}>
                                    Warning
                                </Anchor>

                                <Anchor theme={Theme.ERROR}>
                                    Error
                                </Anchor>

                                <Anchor disabled={true}>
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

                                <p>Set the <code>iconCls</code> property for button left icon.And set the
                                    <code>rightIconCls</code> property for button right icon.</p>

                                <Anchor value="Reset"
                                        iconCls="fa fa-undo"/>

                                <Anchor value="Add"
                                        theme={Theme.SUCCESS}
                                        iconCls="fa fa-plus"/>

                                <Anchor value="Delete"
                                        theme={Theme.ERROR}
                                        iconCls="fa fa-trash"/>

                                <Anchor value="Next"
                                        theme={Theme.PRIMARY}
                                        rightIconCls="fa fa-chevron-right"/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={AnchorDoc}/>

            </div>
        );
    }
};