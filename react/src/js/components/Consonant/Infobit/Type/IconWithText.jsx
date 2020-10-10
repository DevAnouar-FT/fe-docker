import React from 'react';
import PropTypes from 'prop-types';

function IconWithText({ src, srcAltText, text }) {
    return (
        <div className="consonant-icon-with-text-infobit">
            {src && <img src={src} height="22" alt={srcAltText} loading="lazy" />}
            <span className="consonant-icon-with-text-infobit--text">{text}</span>
        </div>
    );
}

IconWithText.propTypes = {
    src: PropTypes.string,
    srcAltText: PropTypes.string,
    text: PropTypes.string.isRequired,
};

IconWithText.defaultProps = {
    src: '',
    srcAltText: '',
};

export default IconWithText;