import React, {Component} from 'react';

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

    showMenu(e, id) {

        const {menuVisible, triggerEl} = this.state;

        menuVisible[id] = true;

        if (!triggerEl[id]) {
            triggerEl[id] = e.target;
        }

        this.setState({
            menuVisible,
            triggerEl
        });

    }

    hideMenu(id) {

        const {menuVisible} = this.state;

        menuVisible[id] = false;

        this.setState({
            menuVisible
        });

    }

    render() {

        const {menuVisible, triggerEl} = this.state,
            items = [{
                iconCls: 'fa fa-facebook',
                value: 'Facebook',
                text: 'Facebook'
            }, {
                iconCls: 'fa fa-twitter',
                value: 'Twitter',
                text: 'Twitter'
            }, {
                iconCls: 'fa fa-google-plus',
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

                                <RaisedButton className="trigger-button"
                                              value="Toggle Menu"
                                              onMouseEnter={(e) => {
                                                  this.showMenu(e, 0);
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

                                <RaisedButton className="trigger-button"
                                              value="Toggle Menu"
                                              onMouseEnter={(e) => {
                                                  this.showMenu(e, 1);
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
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top Left"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 5);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 6);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top right"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 7);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Top"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 11);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 12);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 13);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 2);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 3);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 4);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Top"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 8);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 9);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 10);
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

                                <RaisedButton className="trigger-button"
                                              value="Toggle Menu"
                                              onMouseEnter={(e) => {
                                                  this.showMenu(e, 14);
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