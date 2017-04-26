import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from '../RaisedButton';

import './List.css';

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style, items} = this.props;

        return (
            <div className={`list ${className}`}
                 style={style}>

                {
                    items.length > 0
                        ? (
                        items.map((item, index) => {
                            return (
                                <RaisedButton {...item}
                                              key={index}
                                              className={`list-item ${item.className ? item.className : ''}`}/>
                            );
                        })
                    )
                        : null
                }

                {children}

            </div>
        );

    }
};

List.propTypes = {

    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into the ListItem.
     */
    items: PropTypes.arrayOf(PropTypes.shape({

        className: PropTypes.string,
        style: PropTypes.object,

        theme: PropTypes.oneOf(Object.keys(Theme).map(key => Theme[key])),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool,
        disableTouchRipple: PropTypes.bool,

        iconCls: PropTypes.string,
        iconPosition: PropTypes.string,

        onTouchTap: PropTypes.func

    })).isRequired

};

List.defaultProps = {

    className: '',
    style: null,

    items: []

};