import React, {Component} from 'react';

import MaterialDropdown from 'src/MaterialDropdown';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Theme from 'src/Theme';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Dropdown.json';

import 'sass/containers/app/modules/layout/MaterialDropdownExamples.scss';

export default class MaterialDropdownExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example dropdown-examples">

                <h2 className="example-title">MaterialDropdown</h2>

                <p>
                    A <span>MaterialDropdown</span>.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <MaterialDropdown theme={Theme.HIGHLIGHT}
                                                  label="Label"
                                                  triggerValue="Material Dropdown">
                                    <div className="dropdown-content">MaterialDropdown content</div>
                                </MaterialDropdown>

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