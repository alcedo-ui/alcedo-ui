/**
 * @file DraggableGrid component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Event from '../_vendors/Event';

export default class DownloadField extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            key: 0
        };

        this.download = ::this.download;

    }

    download() {
        this.setState({
            key: this.state.key + 1
        });
    }

    componentDidMount() {

        this.iframeEl = this.refs.iframe;

        const {onLoad} = this.props;
        Event.addEvent(this.iframeEl, 'load', onLoad);
        Event.addEvent(this.iframeEl, 'error', onLoad);

    }

    componentWillUnmount() {
        const {onLoad} = this.props;
        Event.removeEvent(this.iframeEl, 'load', onLoad);
        Event.removeEvent(this.iframeEl, 'error', onLoad);
    }

    render() {

        const {url} = this.props,
            {key} = this.state;

        return (
            <iframe key={key}
                    ref="iframe"
                    className="download-field"
                    src={url}></iframe>
        );

    }
};

DownloadField.propTypes = {
    url: PropTypes.string
};

DownloadField.defaultProps = {
    url: null
};