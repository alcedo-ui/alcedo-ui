import React, {Component} from 'react';
import Highlight from 'react-highlight';

import 'highlight.js/styles/androidstudio.css';
import 'sass/containers/landing/sections/LandingUsage.scss';

export default class LandingUsage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="landing-usage"
                     className="landing-section">

                <div className="landing-section-inner">

                    <div className="landing-section-title">Usage</div>

                    <Highlight className='jsx landing-bash'>
                        {'import React, {Component} from \'react\';\n'
                        + 'import RaisedButton from \'alcedo-ui/RaisedButton\';\n'
                        + '\n'
                        + 'export default class MyComponent extends Component {\n'
                        + '\n'
                        + '\tconstructor(props) {\n'
                        + '\t\tsuper(props);\n'
                        + '\t}\n'
                        + '\n'
                        + '\t// ...\n'
                        + '\n'
                        + '\trender() {\n'
                        + '\t\treturn (\n'
                        + '\t\t\t<RaisedButton value="Default"/>\n'
                        + '\t\t);\n'
                        + '\t}\n'
                        + '\n'
                        + '}'}
                    </Highlight>

                </div>

            </section>
        );
    }
}