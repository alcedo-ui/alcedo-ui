import React, {Component} from 'react';

import AnchorButton from 'src/AnchorButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';

import PropTypeDescTable from 'components/PropTypeDescTable';
import AnchorButtonDoc from 'assets/propTypes/AnchorButton.json';

import 'sass/containers/app/modules/buttons/AnchorButtonExamples.scss';

export default class AnchorButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example anchor-button-examples">

                <h2 className="example-title">Anchor Button</h2>

                <p>
                    <span>Anchor Button</span> are used for general functions and reduce the amount of layering on the
                    screen, making it more readable.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Anchor Button</code> with default
                                    theme, <code>success</code>, <code>warning</code>
                                    , <code>error</code> and <code>disabled</code> props applied.</p>

                                <AnchorButton value="Default"/>

                                <AnchorButton value="Primary"
                                              theme={Theme.PRIMARY}/>

                                <AnchorButton value="Secondary"
                                              theme={Theme.SECONDARY}/>

                                <AnchorButton value="Highlight"
                                              theme={Theme.HIGHLIGHT}/>

                                <AnchorButton value="Info"
                                              theme={Theme.INFO}/>

                                <AnchorButton value="Success"
                                              theme={Theme.SUCCESS}/>

                                <AnchorButton value="Warning"
                                              theme={Theme.WARNING}/>

                                <AnchorButton value="Error"
                                              theme={Theme.ERROR}/>

                                <AnchorButton value="Disabled"
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
                                              theme={Theme.PRIMARY}
                                              isRounded={true}/>

                                <AnchorButton value="Secondary"
                                              theme={Theme.SECONDARY}
                                              isRounded={true}/>

                                <AnchorButton value="Highlight"
                                              theme={Theme.HIGHLIGHT}
                                              isRounded={true}/>

                                <AnchorButton value="Info"
                                              theme={Theme.INFO}
                                              isRounded={true}/>

                                <AnchorButton value="Success"
                                              theme={Theme.SUCCESS}
                                              isRounded={true}/>

                                <AnchorButton value="Warning"
                                              theme={Theme.WARNING}
                                              isRounded={true}/>

                                <AnchorButton value="Error"
                                              theme={Theme.ERROR}
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
                                              iconCls="fa fa-undo"/>

                                <AnchorButton value="Add"
                                              theme={Theme.SUCCESS}
                                              iconCls="fa fa-plus"/>

                                <AnchorButton value="Delete"
                                              theme={Theme.ERROR}
                                              iconCls="fa fa-trash"/>

                                <AnchorButton value="Next"
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

                                <AnchorButton value="Primary"
                                              isCircular={true}/>

                                <AnchorButton value="Success"
                                              theme={Theme.SUCCESS}
                                              isCircular={true}/>

                                <AnchorButton value="Error"
                                              theme={Theme.ERROR}
                                              isCircular={true}/>

                                <AnchorButton value="Warning"
                                              theme={Theme.WARNING}
                                              isCircular={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={AnchorButtonDoc}/>

            </div>
        );
    }
};