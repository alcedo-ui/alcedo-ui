import React, {Component} from 'react';

import FlatButton from 'src/FlatButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/FlatButton.json';

import 'scss/containers/app/modules/buttons/FlatButtonExamples.scss';

class FlatButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="example flat-button-examples">

                <h2 className="example-title">Flat Button</h2>

                <p>
                    <span>Flat Button</span>
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
                                    <code>Flat Button</code> with default
                                    theme, <code>success</code>, <code>warning</code>
                                    , <code>error</code> and <code>disabled</code> props applied.
                                </p>

                                <FlatButton value="Default"
                                            tip="Default"/>

                                <FlatButton value="Primary"
                                            tip="Primary"
                                            theme={FlatButton.Theme.PRIMARY}/>

                                <FlatButton value="Secondary"
                                            tip="Secondary"
                                            theme={FlatButton.Theme.SECONDARY}/>

                                <FlatButton value="Highlight"
                                            tip="Highlight"
                                            theme={FlatButton.Theme.HIGHLIGHT}/>

                                <FlatButton value="Info"
                                            tip="Info"
                                            theme={FlatButton.Theme.INFO}/>

                                <FlatButton value="Success"
                                            tip="Success"
                                            theme={FlatButton.Theme.SUCCESS}/>

                                <FlatButton value="Warning"
                                            tip="Warning"
                                            theme={FlatButton.Theme.WARNING}/>

                                <FlatButton value="Error"
                                            tip="Error"
                                            theme={FlatButton.Theme.ERROR}/>

                                <FlatButton value="Disabled"
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

                                <FlatButton value="Default"
                                            isRounded={true}/>

                                <FlatButton value="Primary"
                                            theme={FlatButton.Theme.PRIMARY}
                                            isRounded={true}/>

                                <FlatButton value="Secondary"
                                            theme={FlatButton.Theme.SECONDARY}
                                            isRounded={true}/>

                                <FlatButton value="Highlight"
                                            theme={FlatButton.Theme.HIGHLIGHT}
                                            isRounded={true}/>

                                <FlatButton value="Info"
                                            theme={FlatButton.Theme.INFO}
                                            isRounded={true}/>

                                <FlatButton value="Success"
                                            theme={FlatButton.Theme.SUCCESS}
                                            isRounded={true}/>

                                <FlatButton value="Warning"
                                            theme={FlatButton.Theme.WARNING}
                                            isRounded={true}/>

                                <FlatButton value="Error"
                                            theme={FlatButton.Theme.ERROR}
                                            isRounded={true}/>

                                <FlatButton value="Disabled"
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

                                <FlatButton value="Reset"
                                            iconCls="fas fa-undo"/>

                                <FlatButton value="Add"
                                            theme={FlatButton.Theme.SUCCESS}
                                            iconCls="fas fa-plus"/>

                                <FlatButton value="Delete"
                                            theme={FlatButton.Theme.ERROR}
                                            iconCls="fas fa-trash-alt"/>

                                <FlatButton value="Next"
                                            theme={FlatButton.Theme.PRIMARY}
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

                                <FlatButton value="Primary"
                                            isCircular={true}/>

                                <FlatButton value="Success"
                                            theme={FlatButton.Theme.SUCCESS}
                                            isCircular={true}/>

                                <FlatButton value="Error"
                                            theme={FlatButton.Theme.ERROR}
                                            isCircular={true}/>

                                <FlatButton value="Warning"
                                            theme={FlatButton.Theme.WARNING}
                                            isCircular={true}/>

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

export default FlatButtonExamples;
