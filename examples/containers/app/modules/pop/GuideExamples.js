import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import Tip from 'src/Tip';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'examples/assets/propTypes/Guide.json';

import 'sass/containers/app/modules/pop/PopExamples.scss';
import 'sass/containers/app/modules/pop/GuideExamples.scss';

class GuideExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tipVisible: {},
            triggerEl: {}
        };

    }

    showTip = id => {

        const {tipVisible} = this.state;

        tipVisible[id] = true;

        this.setState({
            tipVisible
        });

    };

    hideTip = id => {

        const {tipVisible} = this.state;

        tipVisible[id] = false;

        this.setState({
            tipVisible
        });

    };

    componentDidMount() {

        const triggerEl = {};

        for (let i = 0; i <= 12; i++) {
            triggerEl[i] = findDOMNode(this.refs[`trigger${i}`]);
        }

        this.setState({
            triggerEl
        });

    }

    render() {

        const {tipVisible, triggerEl} = this.state;

        return (
            <div className="example pop-examples guide-examples">

                <h2 className="example-title">Tip</h2>

                <p>
                    A <span>Tip</span> can be used as an alternative to a Drop Down Tip that can contain elements
                    inside.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header"
                                  title="With value"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="popup-example-wrapper">

                                <p>
                                    Set the <code>value</code> property to show different position of <code>Tip</code>.
                                </p>


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

export default GuideExamples;