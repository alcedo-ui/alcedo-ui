import React, {Component} from 'react';

import RaisedButton from 'src/RaisedButton';
import Menu from 'src/Menu';
import List from 'src/List';
import Theme from 'src/Theme';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import MenuDoc from 'assets/propTypes/MenuBody.json';

import 'sass/containers/app/modules/popup/MenuExamples.scss';

export default class MenuExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            menuVisible1: false,
            menuVisible2: false,
            menuVisible3: false,
            menuVisible4: false,
            menuVisible5: false,
            menuVisible6: false,
            menuVisible7: false,
            menuVisible8: false,
            menuVisible9: false,
            menuVisible10: false,
            menuVisible11: false,
            menuVisible12: false,
            menuVisible13: false,
            menuVisible14: false,
            menuVisible15: false,
            triggerEl1: null,
            triggerEl2: null,
            triggerEl3: null,
            triggerEl4: null,
            triggerEl5: null,
            triggerEl6: null,
            triggerEl7: null,
            triggerEl8: null,
            triggerEl9: null,
            triggerEl10: null,
            triggerEl11: null,
            triggerEl12: null,
            triggerEl13: null,
            triggerEl14: null,
            triggerEl15: null
        };

        this.showMenu = this::this.showMenu;
        this.hideMenu = this::this.hideMenu;

    }

    showMenu(e, id) {
        this.setState({
            [`menuVisible${id}`]: true,
            [`triggerEl${id}`]: e.currentTarget
        });
    }

    hideMenu(id) {
        this.setState({
            [`menuVisible${id}`]: false
        });
    }

    render() {

        const {
                menuVisible1, menuVisible2, menuVisible3, menuVisible4, menuVisible5, menuVisible6,
                menuVisible7, menuVisible8, menuVisible9, menuVisible10, menuVisible11, menuVisible12,
                menuVisible13, menuVisible14, menuVisible15,
                triggerEl1, triggerEl2, triggerEl3, triggerEl4, triggerEl5, triggerEl6,
                triggerEl7, triggerEl8, triggerEl9, triggerEl10, triggerEl11, triggerEl12
                , triggerEl13, triggerEl14, triggerEl15
            } = this.state,
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
                                                  this.showMenu(e, 1);
                                              }}/>

                                <Menu theme={Theme.PRIMARY}
                                      visible={menuVisible1}
                                      triggerEl={triggerEl1}
                                      onRequestClose={() => {
                                          this.hideMenu(1);
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
                                                  this.showMenu(e, 3);
                                              }}/>

                                <Menu visible={menuVisible3}
                                      triggerEl={triggerEl3}
                                      hasTriangle={false}
                                      onRequestClose={() => {
                                          this.hideMenu(3);
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
                                                          this.showMenu(e, 7);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 8);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Top right"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 9);
                                                      }}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Top"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 13);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 14);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 15);
                                                      }}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 4);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 5);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 6);
                                                      }}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Top"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 10);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 11);
                                                      }}/>
                                        <RaisedButton className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onMouseEnter={(e) => {
                                                          this.showMenu(e, 12);
                                                      }}/>
                                    </div>

                                </div>

                                <Menu visible={menuVisible4}
                                      triggerEl={triggerEl4}
                                      position={Menu.Position.BOTTOM_LEFT}
                                      onRequestClose={() => {
                                          this.hideMenu(4);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible5}
                                      triggerEl={triggerEl5}
                                      position={Menu.Position.BOTTOM}
                                      onRequestClose={() => {
                                          this.hideMenu(5);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible6}
                                      triggerEl={triggerEl6}
                                      position={Menu.Position.BOTTOM_RIGHT}
                                      onRequestClose={() => {
                                          this.hideMenu(6);
                                      }}>
                                    <List data={items}/>
                                </Menu>

                                <Menu visible={menuVisible7}
                                      triggerEl={triggerEl7}
                                      position={Menu.Position.TOP_LEFT}
                                      onRequestClose={() => {
                                          this.hideMenu(7);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible8}
                                      triggerEl={triggerEl8}
                                      position={Menu.Position.TOP}
                                      onRequestClose={() => {
                                          this.hideMenu(8);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible9}
                                      triggerEl={triggerEl9}
                                      position={Menu.Position.TOP_RIGHT}
                                      onRequestClose={() => {
                                          this.hideMenu(9);
                                      }}>
                                    <List data={items}/>
                                </Menu>

                                <Menu visible={menuVisible10}
                                      triggerEl={triggerEl10}
                                      position={Menu.Position.LEFT_TOP}
                                      onRequestClose={() => {
                                          this.hideMenu(10);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible11}
                                      triggerEl={triggerEl11}
                                      position={Menu.Position.LEFT}
                                      onRequestClose={() => {
                                          this.hideMenu(11);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible12}
                                      triggerEl={triggerEl12}
                                      position={Menu.Position.LEFT_BOTTOM}
                                      onRequestClose={() => {
                                          this.hideMenu(12);
                                      }}>
                                    <List data={items}/>
                                </Menu>

                                <Menu visible={menuVisible13}
                                      triggerEl={triggerEl13}
                                      position={Menu.Position.RIGHT_TOP}
                                      onRequestClose={() => {
                                          this.hideMenu(13);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible14}
                                      triggerEl={triggerEl14}
                                      position={Menu.Position.RIGHT}
                                      onRequestClose={() => {
                                          this.hideMenu(14);
                                      }}>
                                    <List data={items}/>
                                </Menu>
                                <Menu visible={menuVisible15}
                                      triggerEl={triggerEl15}
                                      position={Menu.Position.RIGHT_BOTTOM}
                                      onRequestClose={() => {
                                          this.hideMenu(15);
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
                                                  this.showMenu(e, 2);
                                              }}/>

                                <Menu className="customized-menu"
                                      visible={menuVisible2}
                                      triggerEl={triggerEl2}
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
                                          this.hideMenu(2);
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

                <PropTypeDescTable data={MenuDoc}/>

            </div>
        );
    }
};