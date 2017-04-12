import React, {Component, PropTypes} from 'react';

import FlatButton from '../FlatButton';

export default class Tab extends Component {

    constructor(props) {

        super(props);

        this.tapHandle = this::this.tapHandle;

    }

    tapHandle() {
        const {onActive, index} = this.props;
        onActive && onActive(index);
    }

    render() {

        const {className, style, label, iconCls, width} = this.props;

        return (
            <FlatButton className={`tab ${className}`}
                        style={{...style, width}}
                        iconCls={iconCls}
                        value={label}
                        onTouchTap={this.tapHandle}/>
        );
    }
};

Tab.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    index: PropTypes.number,
    width: PropTypes.string,
    label: PropTypes.string,
    iconCls: PropTypes.string,

    onActive: PropTypes.func

};

Tab.defaultProps = {

    className: '',
    style: null,

    index: 0,
    width: '100%',
    label: '',
    iconCls: ''

};