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

                                <Anchor iconCls="fa fa-undo">
                                    Reset
                                </Anchor>

                                <Anchor theme={Theme.SUCCESS}
                                        iconCls="fa fa-plus">
                                    Add
                                </Anchor>

                                <Anchor theme={Theme.ERROR}
                                        iconCls="fa fa-trash">
                                    Delete
                                </Anchor>

                                <Anchor theme={Theme.PRIMARY}
                                        rightIconCls="fa fa-chevron-right">
                                    Next
                                </Anchor>

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