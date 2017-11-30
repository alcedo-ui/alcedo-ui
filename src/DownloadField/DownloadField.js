/**
 * @file DownloadField component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DownloadField extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            key: 0
        };

        this.download = ::this.download;
        this.loadedHandler = ::this.loadedHandler;

    }

    download() {
        this.setState({
            key: this.state.key + 1
        });
    }

    loadedHandler(e) {
        const {onLoad} = this.props;
        onLoad && onLoad(e, this.iframeEl.contentDocument ?
            this.iframeEl.contentDocument.body.innerText
            :
            undefined);
    }

    componentDidMount() {
        this.iframeEl = this.refs.iframe;
    }

    render() {

        const {url} = this.props,
            {key} = this.state;

        return key > 0 ?
            <iframe key={key}
                    ref="iframe"
                    className="download-field"
                    src={key > 0 ? url : null}
                    onLoad={this.loadedHandler}
                    onError={this.loadedHandler}></iframe>
            :
            null;

    }
};

DownloadField.propTypes = {

    /**
     * Download url.
     */
    url: PropTypes.string,

    /**
     * Loaded callback.
     */
    onLoad: PropTypes.func

};

DownloadField.defaultProps = {
    url: null
};