import React, {Component} from 'react';

import Tab from 'dist/Tab';

import 'sass/containers/app/modules/layout/TabExamples.scss';

export default class TabExamples extends Component {

    constructor(props) {

        super(props);

        this.activeHandle = this::this.activeHandle;

    }

    activeHandle(tab) {
        alert(`${tab.value} activated.`);
    }

    render() {
        return (
            <div className="example widget-examples">

                <div className="examples">
                    <div className="examples-title">Tabs</div>
                    <div className="examples-wrapper">

                        <Tab tabs={[{
                            value: 'Tab 1',
                            renderer: <div>
                                <h1>Tab 1</h1>
                            </div>
                        }, {
                            value: 'Tab 2',
                            renderer: <div>
                                <h1>Tab 2</h1>
                            </div>
                        }, {
                            value: 'onActive',
                            renderer: <div>
                                <h1>onActive</h1>
                            </div>,
                            onActive: this.activeHandle
                        }, {
                            value: 'Disabled',
                            disabled: true
                        }]}/>

                    </div>
                </div>

            </div>
        );
    }
};