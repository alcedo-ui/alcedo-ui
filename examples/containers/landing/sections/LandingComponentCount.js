import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlashNumber from 'dist/FlashNumber';
import {COMPONENTS_TOTAL_COUNT} from 'dist';

import Util from 'vendors/Util';

import 'sass/containers/landing/sections/LandingComponentCount.scss';

export default class LandingComponentCount extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: 0
        };

        this.shouldStartFlash = this::this.shouldStartFlash;

    }

    shouldStartFlash(props = this.props) {

        const windowHeight = window.innerHeight,
            {bodyScrollTop} = props,
            section = this.refs.section,
            sectionHeight = section.offsetHeight,
            sectionOffsetHeight = Util.getOffset(this.refs.section).top;

        if (windowHeight + bodyScrollTop > sectionOffsetHeight + sectionHeight) {
            this.setState({
                value: COMPONENTS_TOTAL_COUNT
            });
        }

    }

    componentDidMount() {
        this.shouldStartFlash();
    }

    componentWillReceiveProps(nextProps) {
        this.shouldStartFlash(nextProps);
    }

    render() {

        const {value} = this.state;

        return (
            <section ref="section"
                     id="landing-component-count"
                     className="landing-section">

                <div className="landing-section-inner">

                    <FlashNumber className="components-total-count"
                                 initValue={0}
                                 value={value}/>

                    <div>Unique Components</div>

                </div>

            </section>
        );
    }
}

LandingComponentCount.propTypes = {
    bodyScrollTop: PropTypes.number
};

LandingComponentCount.defaultProps = {
    bodyScrollTop: 0
};