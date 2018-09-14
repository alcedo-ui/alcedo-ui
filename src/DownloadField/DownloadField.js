/**
 * @file DownloadField component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DownloadField extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            downloading: false
        };

    }

    download = () => {
        this.setState({
            downloading: true
        });
    };

    loadedHandler = e => {

        this.setState({
            downloading: false
        }, () => {

            const {onLoad} = this.props,
                iframeEl = this.refs.iframe;

            iframeEl && onLoad && onLoad(
                e, iframeEl.contentDocument ?
                    iframeEl.contentDocument.body.innerText
                    :
                    undefined
            );

        });

    };

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.downloading !== this.state.downloading) {
            return true;
        }
        return false;
    }

    render() {

        const {url} = this.props,
            {downloading} = this.state;

        return downloading ?
            <iframe ref="iframe"
                    className="download-field"
                    onLoad={this.loadedHandler}
                    onError={this.loadedHandler}
                    src={downloading ? url : null}></iframe>
            :
            null;

    }
}

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

export default DownloadField;