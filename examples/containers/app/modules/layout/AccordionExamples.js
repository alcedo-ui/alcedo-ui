/**
 * @file Accordion examples
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

// Components
import Paper from 'src/Paper';
import Accordion from 'src/Accordion';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import RaisedButton from 'src/RaisedButton';

// Docs
import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Accordion.json';

// Styles
import 'scss/containers/app/modules/layout/AccordionExamples.scss';

class AccordionExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            content: [1, 2, 3]
        };

    }

    clickHandler = () => {
        this.setState({
            content: [...this.state.content, ...this.state.content]
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.content.length !== this.state.content.length) {
            this.refs.accordion && this.refs.accordion.resetHeight();
        }
    }

    render() {

        const {content} = this.state;

        return (
            <div className="example accordion-examples">

                <h2 className="example-title">Accordion</h2>

                <p>
                    <span>Accordion</span>
                    is a folding list effect component.You can click title's row to show or hide
                    the drop-down list.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Accordion Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Accordion simple example.
                                </p>

                                <Paper>
                                    <Accordion ref="accordion"
                                               collapsed={true}
                                               title="Title">
                                        <div className="accordion-example-content">
                                            content
                                        </div>
                                    </Accordion>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Accordion Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Set collapseIcon and expandIcon properties to show different icons.
                                </p>

                                <Paper>
                                    <Accordion title="Title"
                                               collapseIcon="fas fa-arrow-circle-down">
                                        <div className="accordion-example-content">
                                            content
                                        </div>
                                    </Accordion>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Dynamic Content"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Update <span>Accordion</span> content when height changed.
                                </p>

                                <Paper>
                                    <Accordion ref="accordion"
                                               title="Title">
                                        <div className="accordion-example-content">
                                            {
                                                content && content.map((item, index) =>
                                                    <div key={index}>
                                                        {item}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </Accordion>
                                </Paper>

                                <RaisedButton className="update-content-button"
                                              value="Update Content"
                                              onClick={this.clickHandler}/>

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

export default AccordionExamples;
