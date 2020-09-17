/**
 * @file ColorBlock examples
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

// Components
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import ColorBlock from 'src/ColorBlock';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/ColorBlock.json';

// Styles
import 'scss/containers/app/modules/media/ColorPickerExamples.scss';

class ColorBlockExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example color-block-examples">

                <h2 className="example-title">Color Picker</h2>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Hex"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">

                                <ColorBlock value="#38b1eb"
                                            opacity={.5}/>

                                <p>Color: #38b1eb, Opacity: 0.5</p>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="RGBA"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">

                                <ColorBlock value="rgba(255, 0, 0, .5)"/>

                                <p>Color: rgba(255, 0, 0, .5)</p>

                            </div>
                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default ColorBlockExamples;
