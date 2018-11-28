import React, {Component} from 'react';

import Anchor from 'src/Anchor';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Anchor.json';

import 'scss/containers/app/modules/anchor/AnchorExamples.scss';

class AnchorExamples extends Component {

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

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};

export default AnchorExamples;
