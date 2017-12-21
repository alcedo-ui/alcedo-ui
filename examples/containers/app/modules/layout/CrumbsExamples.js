import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Crumbs from 'src/Crumbs';

import PropTypeDescTable from '../../../../components/PropTypeDescTable';
import CrumbsDoc from 'assets/propTypes/Crumbs.json';

import 'sass/containers/app/modules/layout/CrumbsExamples.scss';

export default class CrumbsExamples extends Component {

    constructor(props) {

        super(props);

        this.items = [{
            text: 'Root',
            href: '/#/'
        }, {
            text: 'Landing',
            href: '/#/landing'
        }, {
            text: 'Crumbs',
            href: '/#/components/Crumbs'
        }];

        this.selfDefineItems = [{
            text: 'Root',
            route: '/'
        }, {
            text: 'Landing',
            route: '/landing'
        }, {
            text: 'Crumbs',
            route: '/components/Crumbs'
        }];

    }

    render() {
        return (
            <div className="example crumbs-examples">

                <h2 className="example-title">Crumbs</h2>

                <p>
                    A <span>Crumbs</span> element.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Crumbs items={this.items}/>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Self define item"/>

                    <div className="widget-content">

                        <div className="example-content">

                            <div className="examples-wrapper">

                                <Crumbs items={this.selfDefineItems}
                                        itemRenderer={item => (
                                            <Link className="crumbs-link"
                                                  to={item.route}>
                                                {item.text}
                                            </Link>
                                        )}/>

                            </div>
                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={CrumbsDoc}/>

            </div>
        );
    }
};