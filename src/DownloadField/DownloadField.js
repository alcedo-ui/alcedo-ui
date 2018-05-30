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
            key: 0
        };

    }

    download = () => {
        this.setState({
            key: this.state.key + 1
        });
    };

    loadedHandler = e => {

        const {onLoad} = this.props,
            iframeEl = this.refs.iframe;

        iframeEl && onLoad && onLoad(
            e, iframeEl.contentDocument ?
                iframeEl.contentDocument.body.innerText
                :
                undefined
        );

    };

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.key !== this.state.key) {
            return true;
        }
        return false;
    }

    render() {

        const {url} = this.props,
            {key} = this.state;

        return key > 0 ?
            <iframe key={key}
                    ref="iframe"
                    className="download-field"
                    onLoad={this.loadedHandler}
                    onError={this.loadedHandler}
                    src={key > 0 ? url : null}></iframe>
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