import React, {Component} from 'react';

import TextArea from 'src/TextArea';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/TextArea.json';

class TextAreaExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: {}
        };

    }

    changeHandler = (v, index) => {
        const {value} = this.state;
        value[index] = v;
        this.setState({
            value
        });
    };

    render() {

        const {value} = this.state;

        return (
            <div className="example">

                <h2 className="example-title">TextArea</h2>

                <p>
                    A <span>TextArea</span> is an interface for users to input a value in a range. TextArea can be
                    continuous or discrete.
                </p>

                <h2 className="example-title">Examples</h2>
                <Widget>
                    <WidgetHeader className="example-header" title="TextArea Example"/>
                    <div className="widget-content">
                        <div className="example-content">
                            <p>TextArea with auto size.</p>
                            <TextArea placeholder="placeholder"
                                      autoHeight={true}
                                      value={value[0]}
                                      onChange={v => this.changeHandler(v, 0)}/>
                        </div>
                    </div>
                </Widget>

                <Widget>
                    <WidgetHeader className="example-header" title="TextArea Example"/>
                    <div className="widget-content">
                        <div className="example-content">
                            <p>TextArea with regular size.</p>
                            <TextArea placeholder="placeholder"
                                      autoHeight={false}
                                      wordCountVisible={true}
                                      maxLength={100}
                                      value={value[1]}
                                      onChange={v => this.changeHandler(v, 1)}/>
                        </div>
                    </div>
                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default TextAreaExamples;