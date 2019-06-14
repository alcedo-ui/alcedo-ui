/**
 * @file DownloadField component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

class DownloadField extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.iframe = createRef();

        this.state = {
            downloading: false
        };

    }

    download = () => {
        this.setState({
            downloading: true
        });
    };

    handleLoaded = e => {

        this.setState({
            downloading: false
        }, () => {

            const {onLoad} = this.props,
                iframeEl = this.iframe && this.iframe.current;

            iframeEl && onLoad && onLoad(e, iframeEl.contentDocument ?
                iframeEl.contentDocument.body.innerText
                :
                undefined);

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
            <iframe ref={this.iframe}
                    className="download-field"
                    onLoad={this.handleLoaded}
                    onError={this.handleLoaded}
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
