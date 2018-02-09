import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Menu from 'src/Menu';
import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/MenuBody.json';

import 'sass/containers/app/modules/popup/MenuExamples.scss';

export default class MenuExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            menuVisible: {},
            triggerEl: {}
        };

        this.showMenu = ::this.showMenu;
        this.hideMenu = ::this.hideMenu;

    }

    showMenu(id) {

        const {menuVisible} = this.state;

        menuVisible[id] = true;

        this.setState({
            menuVisible
        });

    }

    hideMenu(id) {

        const {menuVisible} = this.state;

        menuVisible[id] = false;

        this.setState({
            menuVisible
        });

    }

    componentDidMount() {

        const triggerEl = {};

        for (let i = 0; i <= 14; i++) {
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
            <div className="example menu-examples">

                <h2 className="example-title">Menu</h2>

                <p>
                    A <span>Menu</span> can be used as an alternative to a Drop Down Menu that can contain elements
                    inside.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p><code>Menu</code> simple example.</p>

                                <RaisedButton ref="trigger0"
                                              className="trigger-button"
                                              value="Toggle Menu"
                                              onMouseEnter={() => {
                                                  this.showMenu(0);
                                              }}/>

                                <Menu theme={Menu.Theme.PRIMARY}
                                      visible={menuVisible[0]}
                                      triggerEl={triggerEl[0]}
                                      onRequestClose={() => {
                                          this.hideMenu(0);
                                      }}>
                                    <div style={{padding: 20, color: '#fff'}}>
                                        Menu
                                    </div>
                                </Menu>

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
                                              value="Toggle Menu"
                                              onMouseEnter={() => {
                                                  this.showMenu(1);
                                              }}/>

                                <Menu visible={menuVisible[1]}
                                      triggerEl={triggerEl[1]}
                                      hasTriangle={false}
                                      onRequestClose={() => {
                                          this.hideMenu(1);
                                      }}>
                                    <List data={items}/>
                                </Menu>

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
                                    Set the <code>value</code> property to show different position of <code>Menu</code>.
                                </p>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton ref="trigger5"
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onMouseEnter={() => {
                                                          this.showMenu(5);
                                                      }}/>
                                        <RaisedButton ref="trigger6"
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onMouseEnter={() => {
                                                          this.showMenu(6);
                                                      }}/>
                                        <RaisedButton ref="trigger7"
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onMouseEnter={() => {
                                                          this.showMenu(7);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref="trigger11"
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onMouseEnter={() => {
                                                          this.showMenu(11);
                                                      }}/>
                                        <RaisedButton ref="trigger12"
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onMouseEnter={() => {
                                                          this.showMenu(12);
                                                      }}/>
                                        <RaisedButton ref="trigger13"
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onMouseEnter={() => {
                                                          this.showMenu(13);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref="trigger2"
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onMouseEnter={() => {
                                                          this.showMenu(2);
                                                      }}/>
                                        <RaisedButton ref="trigger3"
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onMouseEnter={() => {
                                                          this.showMenu(3);
                                                      }}/>
                                        <RaisedButton ref="trigger4"
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onMouseEnter={() => {
                                                          this.showMenu(4);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref="trigger8"
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onMouseEnter={() => {
                                                          this.showMenu(8);
                                                      }}/>
                                        <RaisedButton ref="trigger9"
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onMouseEnter={() => {
                                                          this.showMenu(9);
                                                      }}/>
                                        <RaisedButton ref="trigger10"
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onMouseEnter={() => {
                                                          this.showMenu(10);
                                                      }}/>
                                    </div>

                                </div>

                                <Menu visible={menuVisible[2]}
                                      triggerEl={triggerEl[2]}
                                      position={Menu.Position.BOTTOM_LEFT}
                                      onRequestClose={() => {
                                          this.hideMenu(2);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible[3]}
                                      triggerEl={triggerEl[3]}
                                      position={Menu.Position.BOTTOM}
                                      onRequestClose={() => {
                                          this.hideMenu(3);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible[4]}
                                      triggerEl={triggerEl[4]}
                                      position={Menu.Position.BOTTOM_RIGHT}
                                      onRequestClose={() => {
                                          this.hideMenu(4);
                                      }}>
                                    <List data={items}/>
                                </Menu>

                                <Menu visible={menuVisible[5]}
                                      triggerEl={triggerEl[5]}
                                      position={Menu.Position.TOP_LEFT}
                                      onRequestClose={() => {
                                          this.hideMenu(5);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible[6]}
                                      triggerEl={triggerEl[6]}
                                      position={Menu.Position.TOP}
                                      onRequestClose={() => {
                                          this.hideMenu(6);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible[7]}
                                      triggerEl={triggerEl[7]}
                                      position={Menu.Position.TOP_RIGHT}
                                      onRequestClose={() => {
                                          this.hideMenu(7);
                                      }}>
                                    <List data={items}/>
                                </Menu>

                                <Menu visible={menuVisible[8]}
                                      triggerEl={triggerEl[8]}
                                      position={Menu.Position.LEFT_TOP}
                                      onRequestClose={() => {
                                          this.hideMenu(8);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible[9]}
                                      triggerEl={triggerEl[9]}
                                      position={Menu.Position.LEFT}
                                      onRequestClose={() => {
                                          this.hideMenu(9);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible[10]}
                                      triggerEl={triggerEl[10]}
                                      position={Menu.Position.LEFT_BOTTOM}
                                      onRequestClose={() => {
                                          this.hideMenu(10);
                                      }}>
                                    <List data={items}/>
                                </Menu>

                                <Menu visible={menuVisible[11]}
                                      triggerEl={triggerEl[11]}
                                      position={Menu.Position.RIGHT_TOP}
                                      onRequestClose={() => {
                                          this.hideMenu(11);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible[12]}
                                      triggerEl={triggerEl[12]}
                                      position={Menu.Position.RIGHT}
                                      onRequestClose={() => {
                                          this.hideMenu(12);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible[13]}
                                      triggerEl={triggerEl[13]}
                                      position={Menu.Position.RIGHT_BOTTOM}
                                      onRequestClose={() => {
                                          this.hideMenu(13);
                                      }}>
                                    <List data={items}/>
                                </Menu>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Customized Menu Triangle"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <RaisedButton ref="trigger14"
                                              className="trigger-button"
                                              value="Toggle Menu"
                                              onMouseEnter={() => {
                                                  this.showMenu(14);
                                              }}/>

                                <Menu className="customized-menu"
                                      visible={menuVisible[14]}
                                      triggerEl={triggerEl[14]}
                                      triangle={
                                          <svg xmlns="http://www.w3.org/2000/svg"
                                               version="1.1"
                                               className="customized-menu-triangle"
                                               width="17"
                                               height="7">
                                              <polyline points="0,7 9,0 17,7"
                                                        style={{stroke: '#e7e7e7', fill: '#fff'}}/>
                                          </svg>
                                      }
                                      onRequestClose={() => {
                                          this.hideMenu(14);
                                      }}>
                                    <div style={{padding: 20}}>
                                        Menu
                                    </div>
                                </Menu>

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