import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownSelect from '../DropdownSelect';
import Util from '../_vendors/Util';

import './MaterialDropdownSelect.css';

export default class MaterialDropdownSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isFocus: false
        };

        this.data = ['test0', 'test1', {
            text: 'test2',
            value: 2,
            desc: 'Here is test2.',
            onTouchTap() {
                console.log('test2 selected!');
            }
        }, 'test3', 'test4', 'test5', {
            text: 'test6',
            value: 6,
            desc: 'Here is test6.',
            onTouchTap() {
                console.log('test6 selected!');
            }
        }, 'test7', 'test8', 'test9'];

        this.onTapHandle = this::this.onTapHandle;
        this.onChangeHandle = this::this.onChangeHandle;

    }


    onTapHandle(bool) {
        this.setState({
            isFocus: bool
        })
    }

    onChangeHandle(value) {
        this.setState({
            value
        }, ()=> {
            this.props.onChange && this.props.onChange(value);
        })
    }

    render() {

        const {className, style} = this.props;
        const {isFocus, value} = this.state;

        return (
            <div className={`material-drop-down-select ${className ? className : ''}  ${isFocus ? 'focused' : ''}`}
                 style={style}>
                <DropdownSelect {...this.props}
                                data={this.data}
                                disableTouchRipple={true}
                                onTriggerTouchTap={this.onTapHandle}/>
            </div>
        );

    }
};

MaterialDropdownSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

};

MaterialDropdownSelect.defaultProps = {};

