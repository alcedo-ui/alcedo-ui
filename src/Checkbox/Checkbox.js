import React, {Component, PropTypes} from 'react';

import IconButton from '../IconButton';

import './Checkbox.css';

export default class Checkbox extends Component {

    constructor(props) {

        super(props);

        this.state = {
            value: !!props.value
        };

        this.clickHandle = this::this.clickHandle;

    }

    clickHandle() {
        const value = !this.state.value;
        this.setState({
            value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(value);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, name, label, disabled} = this.props;
        const {value} = this.state;

        return (
            <div className={`checkbox ${value ? 'activated' : ''} ${className}`}
                 style={style}
                 disabled={disabled}>

                <input type="hidden"
                       name={name}
                       value={value}/>

                {/*<i className={`fa ${value ? 'fa-check-square' : 'fa-square-o'} checkbox-icon`}*/}
                   {/*aria-hidden="true"*/}
                   {/*onClick={this.clickHandle}>*/}
                {/*</i>*/}

                <IconButton className="checkbox-icon"
                            iconCls={`fa ${value ? 'fa-check-square' : 'fa-square-o'}`}
                            onTouchTap={this.clickHandle}/>

                <div className="checkbox-label"
                     onClick={this.clickHandle}>
                    {label}
                </div>

            </div>
        );

    }
};

Checkbox.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,

    onChange: PropTypes.func

};

Checkbox.defaultProps = {

    className: '',
    style: null,

    name: '',
    label: '',
    value: false,
    disabled: false

};