import React, {Component} from 'react';

import Dropdown from 'src/Dropdown';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Dropdown.json';

import 'scss/containers/app/modules/layout/DropdownExamples.scss';

class DropdownExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example dropdown-examples">

                <h2 className="example-title">Dropdown</h2>

                <p>
                    A <span>Dropdown</span>.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Dropdown triggerValue="Toggle Dropdown"
                                          popupClassName="dropdown-examples-popup">
                                    <div className="dropdown-content">Dropdown content</div>
                                </Dropdown>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Self Defined Position"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Dropdown triggerValue="Toggle Dropdown"
                                          popupClassName="dropdown-examples-popup"
                                          position={Dropdown.Position.TOP_LEFT}
                                          tip="Dropdown Example">
                                    <div className="dropdown-content">Dropdown content</div>
                                </Dropdown>

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

export default DropdownExamples;
