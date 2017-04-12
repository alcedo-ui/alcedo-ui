import React, {Component, PropTypes} from 'react';

import FlatButton from '../FlatButton';

import './Tab.css';

export default class Tab extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        const {className, style, tabs} = this.props;

        return (
            <div className={`tab ${className}`}
                 style={style}>

                <div className="tabs">
                    {
                        tabs.length > 0
                            ? (
                            tabs.map((item, index) => {
                                return (
                                    <FlatButton {...item}
                                                key={index}
                                                className="tab-button"
                                                style={{width: `${100 / tabs.length}%`}}
                                                onTouchTap={() => {
                                                    item.onActive && item.onActive(item, index);
                                                }}/>
                                );
                            })

                        )
                            : null
                    }
                </div>

            </div>
        );
    }
};

Tab.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    tabs: PropTypes.arrayOf(PropTypes.shape({

        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool,
        disableTouchRipple: PropTypes.bool,

        iconCls: PropTypes.string,
        iconPosition: PropTypes.string,

        renderer: PropTypes.any,

        onTouchTap: PropTypes.func

    })).isRequired

};

Tab.defaultProps = {

    className: '',
    style: null,

    tabs: []

};