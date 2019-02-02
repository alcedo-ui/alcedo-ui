import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import RaisedButton from 'src/RaisedButton';
import Popover from 'src/Popover';
import PopoverProvider from 'src/PopoverProvider';
import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Dialog from 'src/Dialog';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Popover.json';

import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/PopoverExamples.scss';

class PopoverExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            menuVisible: {}
        };

    }

    show = id => {

        const menuVisible = {...this.state.menuVisible};
        menuVisible[id] = true;

        this.setState({
            menuVisible
        });

    };

    hide = id => {

        const menuVisible = {...this.state.menuVisible};
        menuVisible[id] = false;

        this.setState({
            menuVisible
        });

    };

    render() {

        const {menuVisible} = this.state,
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

                            <div className="popover-example-wrapper">

                                <p><code>Popover</code> simple example.</p>

                                <RaisedButton ref={el => this.trigger0 = findDOMNode(el)}
                                              className="trigger-button"
                                              value="Toggle Popover"
                                              onMouseOver={() => this.show(0)}/>

                                <Popover theme={Popover.Theme.PRIMARY}
                                         visible={menuVisible[0]}
                                         triggerEl={this.trigger0}
                                         onRequestClose={() => this.hide(0)}>
                                    <div style={{padding: 20, color: '#fff'}}>
                                        Popover Content
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

                            <div className="popover-example-wrapper">

                                <p>
                                    Set <code>hasTriangle</code> to false,the popover will have
                                    no triangle on the top of the DOM element.
                                </p>

                                <RaisedButton ref={el => this.trigger1 = findDOMNode(el)}
                                              className="trigger-button"
                                              value="Toggle Popover"
                                              onMouseOver={() => this.show(1)}/>

                                <Popover visible={menuVisible[1]}
                                         triggerEl={this.trigger1}
                                         hasTriangle={false}
                                         onRequestClose={() => this.hide(1)}>
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

                            <div className="popover-example-wrapper">

                                <p>
                                    Set the <code>value</code> property to show different position
                                    of <code>Popover</code>.
                                </p>

                                <div className="button-group-wrapper">

                                    <div className="button-group top">
                                        <RaisedButton ref={el => this.trigger5 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top Left"
                                                      onMouseOver={() => this.show(5)}/>
                                        <RaisedButton ref={el => this.trigger6 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top"
                                                      onMouseOver={() => this.show(6)}/>
                                        <RaisedButton ref={el => this.trigger7 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Top right"
                                                      onMouseOver={() => this.show(7)}/>
                                    </div>

                                    <div className="button-group right">
                                        <RaisedButton ref={el => this.trigger11 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right Top"
                                                      onMouseOver={() => this.show(11)}/>
                                        <RaisedButton ref={el => this.trigger12 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right"
                                                      onMouseOver={() => this.show(12)}/>
                                        <RaisedButton ref={el => this.trigger13 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Right Bottom"
                                                      onMouseOver={() => this.show(13)}/>
                                    </div>

                                    <div className="button-group bottom">
                                        <RaisedButton ref={el => this.trigger2 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom Left"
                                                      onMouseOver={() => this.show(2)}/>
                                        <RaisedButton ref={el => this.trigger3 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom"
                                                      onMouseOver={() => this.show(3)}/>
                                        <RaisedButton ref={el => this.trigger4 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Bottom Right"
                                                      onMouseOver={() => this.show(4)}/>
                                    </div>

                                    <div className="button-group left">
                                        <RaisedButton ref={el => this.trigger8 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left Top"
                                                      onMouseOver={() => this.show(8)}/>
                                        <RaisedButton ref={el => this.trigger9 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left"
                                                      onMouseOver={() => this.show(9)}/>
                                        <RaisedButton ref={el => this.trigger10 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Left Bottom"
                                                      onMouseOver={() => this.show(10)}/>
                                    </div>

                                    <div className="button-group center">
                                        <RaisedButton ref={el => this.trigger14 = findDOMNode(el)}
                                                      className="trigger-position-button"
                                                      value="Center"
                                                      onMouseOver={() => this.show(14)}/>
                                    </div>

                                </div>

                                <Popover visible={menuVisible[2]}
                                         triggerEl={this.trigger2}
                                         position={Popover.Position.BOTTOM_LEFT}
                                         onRequestClose={() => this.hide(2)}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[3]}
                                         triggerEl={this.trigger3}
                                         position={Popover.Position.BOTTOM}
                                         onRequestClose={() => this.hide(3)}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[4]}
                                         triggerEl={this.trigger4}
                                         position={Popover.Position.BOTTOM_RIGHT}
                                         onRequestClose={() => this.hide(4)}>
                                    <List data={items}/>
                                </Popover>

                                <Popover visible={menuVisible[5]}
                                         triggerEl={this.trigger5}
                                         position={Popover.Position.TOP_LEFT}
                                         onRequestClose={() => this.hide(5)}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[6]}
                                         triggerEl={this.trigger6}
                                         position={Popover.Position.TOP}
                                         onRequestClose={() => this.hide(6)}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[7]}
                                         triggerEl={this.trigger7}
                                         position={Popover.Position.TOP_RIGHT}
                                         onRequestClose={() => this.hide(7)}>
                                    <List data={items}/>
                                </Popover>

                                <Popover visible={menuVisible[8]}
                                         triggerEl={this.trigger8}
                                         position={Popover.Position.LEFT_TOP}
                                         onRequestClose={() => this.hide(8)}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[9]}
                                         triggerEl={this.trigger9}
                                         position={Popover.Position.LEFT}
                                         onRequestClose={() => this.hide(9)}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[10]}
                                         triggerEl={this.trigger10}
                                         position={Popover.Position.LEFT_BOTTOM}
                                         onRequestClose={() => this.hide(10)}>
                                    <List data={items}/>
                                </Popover>

                                <Popover visible={menuVisible[11]}
                                         triggerEl={this.trigger11}
                                         position={Popover.Position.RIGHT_TOP}
                                         onRequestClose={() => this.hide(11)}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[12]}
                                         triggerEl={this.trigger12}
                                         position={Popover.Position.RIGHT}
                                         onRequestClose={() => this.hide(12)}>
                                    <List data={items}/>
                                </Popover>
                                <Popover visible={menuVisible[13]}
                                         triggerEl={this.trigger13}
                                         position={Popover.Position.RIGHT_BOTTOM}
                                         onRequestClose={() => this.hide(13)}>
                                    <List data={items}/>
                                </Popover>

                                <Popover visible={menuVisible[14]}
                                         triggerEl={this.trigger14}
                                         position={Popover.Position.CENTER}
                                         onRequestClose={() => this.hide(14)}>
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

                            <div className="popover-example-wrapper">

                                <RaisedButton ref={el => this.trigger15 = findDOMNode(el)}
                                              className="trigger-button"
                                              value="Toggle Popover"
                                              onMouseOver={() => this.show(15)}/>

                                <Popover className="customized-popover"
                                         visible={menuVisible[15]}
                                         triggerEl={this.trigger15}
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
                                         onRequestClose={() => this.hide(15)}>
                                    <div style={{padding: 20}}>
                                        Popover Content
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

                            <div className="popover-example-wrapper">
                                <PopoverProvider className="customized-popover"
                                                 popoverContent={
                                                     <div style={{padding: 20}}>
                                                         Popover Content
                                                     </div>
                                                 }>
                                    <RaisedButton className="trigger-button"
                                                  value="Toggle Popover"
                                                  onMouseOver={() => console.log('onMouseOver')}/>
                                </PopoverProvider>
                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Popover in Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popover-example-wrapper">

                                <RaisedButton className="trigger-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(16)}/>

                                <Dialog visible={menuVisible[16]}
                                        onRequestClose={() => this.hide(16)}>
                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">

                                                <RaisedButton ref={el => this.trigger17 = findDOMNode(el)}
                                                              className="dialog-trigger-button block"
                                                              value="Toggle Popover"
                                                              onMouseOver={() => this.show(17)}/>
                                                <Popover visible={menuVisible[17]}
                                                         triggerEl={this.trigger17}
                                                         position={Popover.Position.BOTTOM_LEFT}
                                                         parentEl={dialogContentEl}
                                                         onRequestClose={() => this.hide(17)}>
                                                    <List data={items}/>
                                                </Popover>

                                                <PopoverProvider className="customized-popover"
                                                                 position={PopoverProvider.Position.BOTTOM_LEFT}
                                                                 parentEl={dialogContentEl}
                                                                 popoverContent={
                                                                     <div style={{padding: 20}}>
                                                                         Popover Content
                                                                     </div>
                                                                 }>
                                                    <RaisedButton ref={el => this.trigger18 = findDOMNode(el)}
                                                                  className="dialog-trigger-button block"
                                                                  value="Toggle Popover"/>
                                                </PopoverProvider>

                                            </div>
                                    }

                                </Dialog>

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
