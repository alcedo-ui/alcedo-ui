import React, {Component, PropTypes} from 'react';

import Button from 'components/button/Button';

import 'sass/components/theme/ThemeThumbnail.scss';

export default class ThemeThumbnail extends Component {

    constructor(props) {

        super(props);

        this.switchTheme = this::this.switchTheme;

    }

    switchTheme() {
        this.props.onChange && this.props.onChange(this.props.name);
    }

    render() {

        const {className, style, name, isActivated} = this.props;

        return (
            <div className={`theme-thumbnail ${isActivated ? 'activated' : ''} ${className}`}
                 style={style}
                 onClick={this.switchTheme}>

                <div className="theme">
                    <div className={`theme-thumbnail-brand ${name}`}></div>
                    <div className={`theme-thumbnail-nav ${name}`}></div>
                    <div className={`theme-thumbnail-menu ${name}`}></div>
                    <div className={`theme-thumbnail-content ${name}`}></div>
                </div>

                <Button className="title"
                        value={name}/>

            </div>
        );

    }
};

ThemeThumbnail.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string.isRequired,
    isActivated: PropTypes.bool,

    onChange: PropTypes.func

};

ThemeThumbnail.defaultProps = {

    className: '',
    style: null,

    name: '',
    isActivated: false

};