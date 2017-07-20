import React, {Component} from 'react';

import IconButton from 'dist/IconButton';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';
import Tip from 'dist/Tip';

import TipContainer from 'dist/TipContainer';
import RaisedButton from 'dist/RaisedButton';
import PropTypeDescTable from '../PropTypeDescTable';
import TipDoc from 'assets/propTypes/TipBody.json';

import 'sass/containers/app/modules/message/TipExamples.scss';

export default class TipExamples extends Component {

    constructor(props) {
        super(props);
        this.text = 'This is a icon button';
    }

    render() {
        return (
            <div className="example tip-examples">

                <h2 className="example-title">Tip</h2>

                <p>
                    <span>Tip</span>is a simple text bubble box.Move the mouse to display the prompt, remove the
                    disappearance, bubble floating layer does not carry the complex text and operation.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With theme and tipPosition"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set <code>theme</code> property to different theme and <code>tipPosition</code> to
                                    different position.</p>

                                <IconButton iconCls="fa fa-plus"
                                            theme="success"
                                            tip={this.text}
                                            tipPosition={Tip.Position.TOP}/>

                                <IconButton iconCls="fa fa-plus"
                                            theme="error"
                                            tip={this.text}
                                            tipPosition={Tip.Position.RIGHT}/>

                                <IconButton iconCls="fa fa-plus"
                                            theme="primary"
                                            tip={this.text}
                                            tipPosition={Tip.Position.BOTTOM}/>

                                <IconButton iconCls="fa fa-plus"
                                            theme="highlight"
                                            tip={this.text}
                                            tipPosition={Tip.Position.LEFT}/>

                                <IconButton iconCls="fa fa-plus"
                                            theme="warning"
                                            tip={this.text}
                                            tipPosition={Tip.Position.TOP_LEFT}/>

                                <IconButton iconCls="fa fa-plus"
                                            theme="success"
                                            tip={this.text}
                                            tipPosition={Tip.Position.TOP_RIGHT}/>

                                <IconButton iconCls="fa fa-plus"
                                            theme="success"
                                            tip={this.text}
                                            tipPosition={Tip.Position.BOTTOM_RIGHT}/>

                                <IconButton iconCls="fa fa-plus"
                                            theme="success"
                                            tip={this.text}
                                            tipPosition={Tip.Position.BOTTOM_LEFT}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Tip Container"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">
                                <TipContainer text="Here is a tip.">
                                    <RaisedButton className="tip-button"
                                                  value="Show me a tip">
                                    </RaisedButton>
                                </TipContainer>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={TipDoc}/>

            </div>
        );
    }
};