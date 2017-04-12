import React, {Component, PropTypes} from 'react';

export default class TabTemplate extends Component {
    render() {

        const {width, children} = this.props;

        return (
            <div className="tab-template"
                 style={{width}}>
                {children}
            </div>
        );

    }
};

TabTemplate.propTypes = {
    width: PropTypes.string
};

TabTemplate.defaultProps = {
    width: '100%'
};