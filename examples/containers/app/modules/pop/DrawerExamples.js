import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Drawer from 'src/Drawer';
import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Drawer.json';

import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/DrawerExamples.scss';
import Dialog from '../../../../../src/Dialog';
import TipProvider from '../../../../../src/TipProvider';

class DrawerExamples extends Component {

    constructor(props) {

        super(props);

        this.data = [{
            iconCls: 'fab fa-facebook',
            value: 'Facebook',
            text: 'Facebook'
        }, {
            iconCls: 'fab fa-twitter',
            value: 'Twitter',
            text: 'Twitter'
        }, {
            iconCls: 'fab fa-google-plus-g',
            value: 'Google+',
            text: 'Google+'
        }];

        this.state = {
            popupVisible: {},
        };

    }

    toggleDrawer = id => {

        const {popupVisible} = this.state;

        popupVisible[id] = !popupVisible[id];

        this.setState({
            popupVisible
        });

    };

    openDrawer = id => {

        const {popupVisible} = this.state;

        popupVisible[id] = true;

        this.setState({
            popupVisible
        });

    };

    closeDrawer = id => {

        const {popupVisible} = this.state;

        popupVisible[id] = false;

        this.setState({
            popupVisible
        });

    };


    componentDidMount() {
        this.trigger0El = findDOMNode(this.refs.trigger0);
        this.trigger1El = findDOMNode(this.refs.trigger1);
        this.trigger2El = findDOMNode(this.refs.trigger2);
        this.trigger3El = findDOMNode(this.refs.trigger3);
    }

    render() {

        const {popupVisible} = this.state;

        return (
            <div className="example pop-examples drawer-examples">

                <h2 className="example-title">Drawer</h2>

                <p>
                    A <span>Drawer</span> can be used as an alternative to a Drop Down that can contain elements inside.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set the <code>value</code> property to show different position
                                    of <code>Drawer</code>.
                                </p>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton ref="trigger0"
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onClick={() => this.toggleDrawer(0)}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref="trigger1"
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onClick={() => this.toggleDrawer(1)}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref="trigger2"
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onClick={() => this.toggleDrawer(2)}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref="trigger3"
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onClick={() => this.toggleDrawer(3)}/>
                                    </div>

                                </div>


                                <Drawer visible={popupVisible[0]}
                                        position={Drawer.Position.TOP}
                                        triggerEl={this.trigger0El}
                                        onRequestClose={() => this.closeDrawer(0)}>
                                    <List data={this.data}/>
                                </Drawer>
                                <Drawer visible={popupVisible[1]}
                                        position={Drawer.Position.RIGHT}
                                        triggerEl={this.trigger1El}
                                        onRequestClose={() => this.closeDrawer(1)}>
                                    <List data={this.data}/>
                                </Drawer>
                                <Drawer visible={popupVisible[2]}
                                        position={Drawer.Position.BOTTOM}
                                        triggerEl={this.trigger2El}
                                        onRequestClose={() => this.closeDrawer(2)}>
                                    <List data={this.data}/>
                                </Drawer>
                                <Drawer visible={popupVisible[3]}
                                        position={Drawer.Position.LEFT}
                                        triggerEl={this.trigger3El}
                                        onRequestClose={() => this.closeDrawer(3)}>
                                    <List data={this.data}/>
                                </Drawer>

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

export default DrawerExamples;
