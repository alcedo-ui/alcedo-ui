/**
 * @file CursorPopover examples
 */

import React, {Component} from 'react';

// Components
import RaisedButton from 'src/RaisedButton';
import CursorPopover from 'src/CursorPopover';
// import CursorPopoverProvider from 'src/CursorPopoverProvider';
import List from 'src/List';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
// import Dialog from 'src/Dialog';

// Vendors
import {findDOMNode} from 'react-dom';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/CursorPopover.json';

// Styles
import 'scss/containers/app/modules/pop/PopExamples.scss';
import 'scss/containers/app/modules/pop/CursorPopoverExamples.scss';

class CursorPopoverExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            popVisible: {}
        };

    }

    show = id => {

        const popVisible = {...this.state.popVisible};
        popVisible[id] = true;

        this.setState({
            popVisible
        });

    };

    hide = id => {

        const popVisible = {...this.state.popVisible};
        popVisible[id] = false;

        this.setState({
            popVisible
        });

    };

    render() {

        const {popVisible} = this.state;
        const items = [{
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
            <div className="example pop-examples cursor-popover-examples">

                <h2 className="example-title">CursorPopover</h2>

                <p>
                    A
                    <span>CursorPopover</span>
                    can be used as an alternative to a Drop Down CursorPopover that can contain elements inside.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="cursor-popover-example-wrapper">

                                <p><code>CursorPopover</code> simple example.</p>

                                <div ref={el => this.trigger0 = findDOMNode(el)}
                                     className="trigger-area"
                                     onMouseOver={() => this.show(0)}>
                                    Toggle CursorPopover
                                </div>

                                <CursorPopover theme={CursorPopover.Theme.PRIMARY}
                                               visible={popVisible[0]}
                                               triggerEl={this.trigger0}
                                               onRequestClose={() => this.hide(0)}>
                                    <div style={{padding: 20, color: '#fff'}}>
                                        CursorPopover Content
                                    </div>
                                </CursorPopover>

                            </div>

                        </div>
                    </div>
                </Widget>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="cursor-popover-example-wrapper">

                                <p>
                                    Set the <code>value</code> property to show different position
                                    of <code>CursorPopover</code>.
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

                                <CursorPopover visible={popVisible[2]}
                                               triggerEl={this.trigger2}
                                               position={CursorPopover.Position.BOTTOM_LEFT}
                                               onRequestClose={() => this.hide(2)}>
                                    <List data={items}/>
                                </CursorPopover>
                                <CursorPopover visible={popVisible[3]}
                                               triggerEl={this.trigger3}
                                               position={CursorPopover.Position.BOTTOM}
                                               onRequestClose={() => this.hide(3)}>
                                    <List data={items}/>
                                </CursorPopover>
                                <CursorPopover visible={popVisible[4]}
                                               triggerEl={this.trigger4}
                                               position={CursorPopover.Position.BOTTOM_RIGHT}
                                               onRequestClose={() => this.hide(4)}>
                                    <List data={items}/>
                                </CursorPopover>

                                <CursorPopover visible={popVisible[5]}
                                               triggerEl={this.trigger5}
                                               position={CursorPopover.Position.TOP_LEFT}
                                               onRequestClose={() => this.hide(5)}>
                                    <List data={items}/>
                                </CursorPopover>
                                <CursorPopover visible={popVisible[6]}
                                               triggerEl={this.trigger6}
                                               position={CursorPopover.Position.TOP}
                                               onRequestClose={() => this.hide(6)}>
                                    <List data={items}/>
                                </CursorPopover>
                                <CursorPopover visible={popVisible[7]}
                                               triggerEl={this.trigger7}
                                               position={CursorPopover.Position.TOP_RIGHT}
                                               onRequestClose={() => this.hide(7)}>
                                    <List data={items}/>
                                </CursorPopover>

                                <CursorPopover visible={popVisible[8]}
                                               triggerEl={this.trigger8}
                                               position={CursorPopover.Position.LEFT_TOP}
                                               onRequestClose={() => this.hide(8)}>
                                    <List data={items}/>
                                </CursorPopover>
                                <CursorPopover visible={popVisible[9]}
                                               triggerEl={this.trigger9}
                                               position={CursorPopover.Position.LEFT}
                                               onRequestClose={() => this.hide(9)}>
                                    <List data={items}/>
                                </CursorPopover>
                                <CursorPopover visible={popVisible[10]}
                                               triggerEl={this.trigger10}
                                               position={CursorPopover.Position.LEFT_BOTTOM}
                                               onRequestClose={() => this.hide(10)}>
                                    <List data={items}/>
                                </CursorPopover>

                                <CursorPopover visible={popVisible[11]}
                                               triggerEl={this.trigger11}
                                               position={CursorPopover.Position.RIGHT_TOP}
                                               onRequestClose={() => this.hide(11)}>
                                    <List data={items}/>
                                </CursorPopover>
                                <CursorPopover visible={popVisible[12]}
                                               triggerEl={this.trigger12}
                                               position={CursorPopover.Position.RIGHT}
                                               onRequestClose={() => this.hide(12)}>
                                    <List data={items}/>
                                </CursorPopover>
                                <CursorPopover visible={popVisible[13]}
                                               triggerEl={this.trigger13}
                                               position={CursorPopover.Position.RIGHT_BOTTOM}
                                               onRequestClose={() => this.hide(13)}>
                                    <List data={items}/>
                                </CursorPopover>

                                <CursorPopover visible={popVisible[14]}
                                               triggerEl={this.trigger14}
                                               position={CursorPopover.Position.CENTER}
                                               onRequestClose={() => this.hide(14)}>
                                    <List data={items}/>
                                </CursorPopover>

                            </div>

                        </div>
                    </div>
                </Widget>

                {/*<Widget>*/}

                {/*    <WidgetHeader className="example-header"*/}
                {/*                  title="CursorPopover Provider"/>*/}

                {/*    <div className="widget-content">*/}
                {/*        <div className="example-content">*/}

                {/*            <div className="cursor-popover-example-wrapper">*/}
                {/*                <CursorPopoverProvider className="customized-cursor-popover"*/}
                {/*                                 popoverContent={*/}
                {/*                                     <div style={{padding: 20}}>*/}
                {/*                                         CursorPopover Content*/}
                {/*                                     </div>*/}
                {/*                                 }>*/}
                {/*                    <RaisedButton className="trigger-button"*/}
                {/*                                  value="Toggle CursorPopover"*/}
                {/*                                  onMouseOver={() => console.log('onMouseOver')}/>*/}
                {/*                </CursorPopoverProvider>*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Widget>*/}

                {/*<Widget>*/}

                {/*    <WidgetHeader className="example-header"*/}
                {/*                  title="CursorPopover in Dialog"/>*/}

                {/*    <div className="widget-content">*/}
                {/*        <div className="example-content">*/}

                {/*            <div className="cursor-popover-example-wrapper">*/}

                {/*                <RaisedButton className="trigger-button"*/}
                {/*                              value="Show Dialog"*/}
                {/*                              onClick={() => this.show(16)}/>*/}

                {/*                <Dialog visible={popVisible[16]}*/}
                {/*                        onRequestClose={() => this.hide(16)}>*/}
                {/*                    {*/}
                {/*                        dialogContentEl =>*/}
                {/*                            <div className="cursor-popover-dialog-content-scroller">*/}

                {/*                                <RaisedButton ref={el => this.trigger17 = findDOMNode(el)}*/}
                {/*                                              className="dialog-trigger-button"*/}
                {/*                                              value="Toggle CursorPopover"*/}
                {/*                                              onMouseOver={() => this.show(17)}/>*/}
                {/*                                <CursorPopover position={CursorPopover.Position.BOTTOM_LEFT}*/}
                {/*                                         visible={popVisible[17]}*/}
                {/*                                         triggerEl={this.trigger17}*/}
                {/*                                         parentEl={dialogContentEl}*/}
                {/*                                         onRequestClose={() => this.hide(17)}>*/}
                {/*                                    <List data={items}/>*/}
                {/*                                </CursorPopover>*/}

                {/*                                <CursorPopoverProvider className="customized-cursor-popover"*/}
                {/*                                                 position={CursorPopoverProvider.Position.BOTTOM_LEFT}*/}
                {/*                                                 parentEl={dialogContentEl}*/}
                {/*                                                 popoverContent={*/}
                {/*                                                     <div style={{padding: 20}}>*/}
                {/*                                                         CursorPopover Content*/}
                {/*                                                     </div>*/}
                {/*                                                 }>*/}
                {/*                                    <RaisedButton className="dialog-trigger-button"*/}
                {/*                                                  value="Toggle CursorPopover Provider"/>*/}
                {/*                                </CursorPopoverProvider>*/}

                {/*                                <RaisedButton ref={el => this.trigger18 = findDOMNode(el)}*/}
                {/*                                              className="dialog-trigger-button"*/}
                {/*                                              value="Toggle CursorPopover"*/}
                {/*                                              onMouseOver={() => this.show(18)}/>*/}
                {/*                                <CursorPopover position={CursorPopover.Position.BOTTOM_LEFT}*/}
                {/*                                         visible={popVisible[18]}*/}
                {/*                                         triggerEl={this.trigger18}*/}
                {/*                                         shouldFollowScroll={true}*/}
                {/*                                         onRequestClose={() => this.hide(18)}>*/}
                {/*                                    <List data={items}/>*/}
                {/*                                </CursorPopover>*/}

                {/*                                <CursorPopoverProvider className="customized-cursor-popover"*/}
                {/*                                                 position={CursorPopoverProvider.Position.BOTTOM_LEFT}*/}
                {/*                                                 shouldFollowScroll={true}*/}
                {/*                                                 popoverContent={*/}
                {/*                                                     <div style={{padding: 20}}>*/}
                {/*                                                         CursorPopover Content*/}
                {/*                                                     </div>*/}
                {/*                                                 }>*/}
                {/*                                    <RaisedButton className="dialog-trigger-button"*/}
                {/*                                                  value="Toggle CursorPopover Provider"/>*/}
                {/*                                </CursorPopoverProvider>*/}

                {/*                            </div>*/}
                {/*                    }*/}
                {/*                </Dialog>*/}

                {/*            </div>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Widget>*/}

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default CursorPopoverExamples;
