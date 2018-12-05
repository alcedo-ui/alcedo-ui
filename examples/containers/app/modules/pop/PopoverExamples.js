import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Popover from 'src/Popover';
import PopoverProvider from 'src/PopoverProvider';
import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Popover.json';

import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/PopoverExamples.scss';

class PopoverExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            menuVisible: {},
            triggerEl: {}
        };

    }

    showMenu = id => {

        const {menuVisible} = this.state;

        menuVisible[id] = true;

        this.setState({
            menuVisible
        });

    };

    hideMenu = id => {

        const {menuVisible} = this.state;

        menuVisible[id] = false;

        this.setState({
            menuVisible
        });

    };

    componentDidMount() {

        const triggerEl = {};

        for (let i = 0; i <= 15; i++) {
            triggerEl[i] = findDOMNode(this.refs[`trigger${i}`]);
        }

        this.setState({
            triggerEl
        });

    }

    render() {

        const {menuVisible, triggerEl} = this.state,
            items = [{
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

        return (
            <div className="example pop-examples popover-examples">

                <h2 className="example-title">Popover</h2>

                <p>
                    A <span>Popover</span> can be used as an alternative to a Drop Down Popover that can contain
                    elements
                    inside.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p><code>Popover</code> simple example.</p>

                                <RaisedButton ref="trigger0"
                                              className="trigger-button"
                                              value="Toggle Popover"
                                              onMouseOver={() => {
                                                  this.showMenu(0);
                                              }}/>

                                <Popover theme={Popover.Theme.PRIMARY}
                                         visible={menuVisible[0]}
                                         triggerEl={triggerEl[0]}
                                         onRequestClose={() => {
                                             this.hideMenu(0);
                                         }}>
                                    <div style={{padding: 20, color: '#fff'}}>
                                        Popover
                                    </div>
                                </Popover>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Without triangle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set <code>hasTriangle</code> to false,the popover will have
                                    no triangle on the top of the DOM element.
                                </p>

                                <RaisedButton ref="trigger1"
                                              className="trigger-button"
                                              value="Toggle Popover"
                                              onMouseOver={() => {
                                                  this.showMenu(1);
                                              }}/>

                                <Popover visible={menuVisible[1]}
                                         triggerEl={triggerEl[1]}
                                         hasTriangle={false}
                                         onRequestClose={() => {
                                             this.hideMenu(1);
                                         }}>
                                    <List data={items}/>
                                </Popover>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set the <code>value</code> property to show different position
                                    of <code>Popover</code>.
                                </p>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton ref="trigger5"
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onMouseOver={() => {
                                                          this.showMenu(5);
                                                      }}/>
                                        <RaisedButton ref="trigger6"
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onMouseOver={() => {
                                                          this.showMenu(6);
                                                      }}/>
                                        <RaisedButton ref="trigger7"
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onMouseOver={() => {
                                                          this.showMenu(7);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref="trigger11"
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onMouseOver={() => {
                                                          this.showMenu(11);
                                                      }}/>
                                        <RaisedButton ref="trigger12"
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onMouseOver={() => {
                                                          this.showMenu(12);
                                                      }}/>
                                        <RaisedButton ref="trigger13"
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onMouseOver={() => {
                                                          this.showMenu(13);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref="trigger2"
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onMouseOver={() => {
                                                          this.showMenu(2);
                                                      }}/>
                                        <RaisedButton ref="trigger3"
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onMouseOver={() => {
                                                          this.showMenu(3);
                                                      }}/>
                                        <RaisedButton ref="trigger4"
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onMouseOver={() => {
                                                          this.showMenu(4);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref="trigger8"
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onMouseOver={() => {
                                                          this.showMenu(8);
                                                      }}/>
                                        <RaisedButton ref="trigger9"
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onMouseOver={() => {
                                                          this.showMenu(9);
                                                      }}/>
                                        <RaisedButton ref="trigger10"
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onMouseOver={() => {
                                                          this.showMenu(10);
                                                      }}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton ref="trigger14"
                                                      className="trigger-position-button"
                                                      value="Center"
                                                      onMouseOver={() => {
                                                          this.showMenu(14);
                                                      }}/>
                                    </div>

                                </div>

                                <Popover visible={menuVisible[2]}
                                         triggerEl={triggerEl[2]}
                                         position={Popover.Position.BOTTOM_LEFT}
                                         onRequestClose={() => {
                                             this.hideMenu(2);
                                         }}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[3]}
                                         triggerEl={triggerEl[3]}
                                         position={Popover.Position.BOTTOM}
                                         onRequestClose={() => {
                                             this.hideMenu(3);
                                         }}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[4]}
                                         triggerEl={triggerEl[4]}
                                         position={Popover.Position.BOTTOM_RIGHT}
                                         onRequestClose={() => {
                                             this.hideMenu(4);
                                         }}>
                                    <List data={items}/>
                                </Popover>

                                <Popover visible={menuVisible[5]}
                                         triggerEl={triggerEl[5]}
                                         position={Popover.Position.TOP_LEFT}
                                         onRequestClose={() => {
                                             this.hideMenu(5);
                                         }}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[6]}
                                         triggerEl={triggerEl[6]}
                                         position={Popover.Position.TOP}
                                         onRequestClose={() => {
                                             this.hideMenu(6);
                                         }}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[7]}
                                         triggerEl={triggerEl[7]}
                                         position={Popover.Position.TOP_RIGHT}
                                         onRequestClose={() => {
                                             this.hideMenu(7);
                                         }}>
                                    <List data={items}/>
                                </Popover>

                                <Popover visible={menuVisible[8]}
                                         triggerEl={triggerEl[8]}
                                         position={Popover.Position.LEFT_TOP}
                                         onRequestClose={() => {
                                             this.hideMenu(8);
                                         }}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[9]}
                                         triggerEl={triggerEl[9]}
                                         position={Popover.Position.LEFT}
                                         onRequestClose={() => {
                                             this.hideMenu(9);
                                         }}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[10]}
                                         triggerEl={triggerEl[10]}
                                         position={Popover.Position.LEFT_BOTTOM}
                                         onRequestClose={() => {
                                             this.hideMenu(10);
                                         }}>
                                    <List data={items}/>
                                </Popover>

                                <Popover visible={menuVisible[11]}
                                         triggerEl={triggerEl[11]}
                                         position={Popover.Position.RIGHT_TOP}
                                         onRequestClose={() => {
                                             this.hideMenu(11);
                                         }}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[12]}
                                         triggerEl={triggerEl[12]}
                                         position={Popover.Position.RIGHT}
                                         onRequestClose={() => {
                                             this.hideMenu(12);
                                         }}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[13]}
                                         triggerEl={triggerEl[13]}
                                         position={Popover.Position.RIGHT_BOTTOM}
                                         onRequestClose={() => {
                                             this.hideMenu(13);
                                         }}>
                                    <List data={items}/>
                                </Popover>

                                <Popover visible={menuVisible[14]}
                                         triggerEl={triggerEl[14]}
                                         position={Popover.Position.CENTER}
                                         onRequestClose={() => {
                                             this.hideMenu(14);
                                         }}>
                                    <List data={items}/>
                                </Popover>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Customized Popover Triangle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton ref="trigger15"
                                              className="trigger-button"
                                              value="Toggle Popover"
                                              onMouseOver={() => {
                                                  this.showMenu(15);
                                              }}/>

                                <Popover className="customized-popover"
                                         visible={menuVisible[15]}
                                         triggerEl={triggerEl[15]}
                                         triangle={
                                             <svg xmlns="http://www.w3.org/2000/svg"
                                                  version="1.1"
                                                  className="customized-popover-triangle"
                                                  width="17"
                                                  height="7">
                                                 <polyline points="0,7 9,0 17,7"
                                                           style={{stroke: '#e7e7e7', fill: '#fff'}}/>
                                             </svg>
                                         }
                                         onRequestClose={() => {
                                             this.hideMenu(15);
                                         }}>
                                    <div style={{padding: 20}}>
                                        Popover
                                    </div>
                                </Popover>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Popover Provider"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">
                                <PopoverProvider className="customized-popover"
                                                 visible={menuVisible[16]}
                                                 triggerEl={triggerEl[16]}
                                                 popoverContent={
                                                     <div style={{padding: 20}}>
                                                         Popover
                                                     </div>
                                                 }
                                                 onRequestClose={() => this.hideMenu(16)}>
                                    <RaisedButton ref="trigger16"
                                                  className="trigger-button"
                                                  value="Toggle Popover"
                                                  onMouseOver={() => this.showMenu(16)}/>
                                </PopoverProvider>
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

export default PopoverExamples;
