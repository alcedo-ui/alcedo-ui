import React, {Component} from 'react';

import TextArea from 'src/TextArea';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/TextArea.json';

class TextAreaExamples extends Component {

    constructor(props) {
        super(props);
    }

    changeHandler = value => {
        console.log(value);
    };

    render() {
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
                                      value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                      onChange={this.changeHandler}/>
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
                                      onChange={this.changeHandler}/>
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
