import React, {Component} from 'react';

import Switcher from 'src/Switcher';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Switcher.json';

import 'sass/containers/app/modules/fields/SwitcherExamples.scss';

class SwitcherExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: true
        };

    }

    updateValue = value => {
        this.setState({
            value
        });
    };

    setActive = () => {
        this.setState({
            value: true
        });
    };

    setInactive = () => {
        this.setState({
            value: false
        });
    };

    render() {

        const {value} = this.state;

        return (
            <div className="example switcher-examples">

                <h2 className="example-title">Switcher</h2>

                <p>
                    A <span>Switcher</span> is used as an on/off control.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Switcher Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Switcher simple example.Set the value property to true for active status.</p>

                                <Switcher value={value}
                                          onChange={this.updateValue}/>

                                <br/>

                                <RaisedButton className="switcher-ctrl"
                                              value="On"
                                              onClick={this.setActive}/>
                                <RaisedButton className="switcher-ctrl"
                                              value="Off"
                                              onClick={this.setInactive}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Switcher Size Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the size property to small for small size switcher.</p>

                                <Switcher theme={Switcher.Theme.HIGHLIGHT}
                                          size={Switcher.Size.SMALL}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Other Config"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Display a hint icon.</p>

                                <Switcher theme={Switcher.Theme.HIGHLIGHT}
                                          labelVisible={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Switcher Disabled Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Set the disabled property to true for disabled props applied.</p>

                                <Switcher disabled={true}/>

                                <br/>

                                <Switcher value={true}
                                          disabled={true}/>

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

export default SwitcherExamples;
