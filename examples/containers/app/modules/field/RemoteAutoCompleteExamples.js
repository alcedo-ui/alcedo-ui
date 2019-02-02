import React, {Component} from 'react';

import RemoteAutoComplete from 'src/RemoteAutoComplete';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';
import Dialog from 'src/Dialog';
import {findDOMNode} from 'react-dom';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/RemoteAutoComplete.json';

import 'scss/containers/app/modules/field/RemoteAutoCompleteExamples.scss';

class RemoteAutoCompleteExamples extends Component {

    constructor(props) {

        super(props);

        this.data = ['test123456789123456789123456789123456789', 'test2', 'test3', 'derby1', 'derby2', 'derby3',
            'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11'];
        this.searchLength = 2;

        this.state = {
            chooseData: [],
            text: '',
            loading: false,
            RemoteAutoCompleteVisible: {},
            triggerEl: {}
        };

    }

    show = id => {

        const {RemoteAutoCompleteVisible} = this.state;

        RemoteAutoCompleteVisible[id] = true;

        this.setState({
            RemoteAutoCompleteVisible
        });

    };

    hide = id => {

        const {RemoteAutoCompleteVisible} = this.state;

        RemoteAutoCompleteVisible[id] = false;

        this.setState({
            RemoteAutoCompleteVisible
        });

    };


    /**
     * 若input输入时，长度大于searchLength，则进行获取数据操作，并修改chooseData，否则置空。
     */
    onChange = (text, search) => {
        if (this.timing) {
            clearTimeout(this.timing);
        }
        if (text && text.length >= this.searchLength) {
            if (search) {
                this.timing = setTimeout(() => {
                    let data = [];
                    this.data.map(value => {
                        if (value.indexOf(text) === 0) {
                            data.push(value);
                        }
                    });
                    this.setState({
                        chooseData: data,
                        text: text
                    });
                }, 2000);
            } else {
                this.setState({
                    chooseData: [],
                    text: text
                });
            }
        } else {
            this.setState({
                chooseData: [],
                text: text
            });
        }
    };

    onBlur = text => {
        this.setState({
            chooseData: [],
            text
        });
    };

    render() {

        const {chooseData, text, loading, RemoteAutoCompleteVisible, triggerEl} = this.state;

        return (
            <div className="example auto-complete-examples">

                <h2 className="example-title">Remote Auto Complete</h2>

                <p>
                    A <span>Remote Auto Complete</span> is an interface to help users to complete their input.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="In Dialog"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Remote Auto Complete simple default example.</p>

                                <RaisedButton className="trigger-button dialog-button"
                                              value="Show Dialog"
                                              onClick={() => this.show(1)}/>

                                <Dialog visible={RemoteAutoCompleteVisible[1]}
                                        onRequestClose={() => this.hide(1)}>

                                    {
                                        dialogContentEl =>
                                            <div className="popover-dialog-content-scroller">
                                                <RemoteAutoComplete data={chooseData}
                                                                    onChange={this.onChange}
                                                                    value={text}
                                                                    parentEl={dialogContentEl}
                                                                    triggerEl={triggerEl}
                                                                    onBlur={this.onBlur}
                                                                    loading={loading}/>
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

export default RemoteAutoCompleteExamples;