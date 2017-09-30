import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from 'src/Paper';
import FlatButton from 'src/FlatButton';

import 'sass/containers/landing/sections/LandingExamples.scss';

export default class LandingExamples extends Component {

    constructor(props) {

        super(props);

        this.goToDemo = this::this.goToDemo;

    }

    goToDemo() {
        this.context.router.push('/components');
    }

    render() {
        return (
            <section id="landing-examples"
                     className="landing-section">

                <div className="landing-section-inner">

                    <div className="landing-section-title">Examples</div>

                    <FlatButton className="ghost-button"
                                value="Go to Demo"
                                onTouchTap={this.goToDemo}/>

                    <Paper className="landing-examples-demo"
                           depth={4}>
                        <div className="window-header">
                            <div className="window-header-dot"></div>
                            <div className="window-header-dot"></div>
                            <div className="window-header-dot"></div>
                        </div>
                        <img className="landing-examples-demo-img"
                             src={require('assets/images/example.jpg')}/>
                    </Paper>

                </div>

            </section>
        );
    }
}

LandingExamples.contextTypes = {
    router: PropTypes.object.isRequired
};