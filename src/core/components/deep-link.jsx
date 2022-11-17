import React from "react"
import PropTypes from "prop-types"

export const DeepLink = ({ enabled, path, text }) => {
    return (
        <span id="/${path}">{text}</span>
    )
}
DeepLink.propTypes = {
  enabled: PropTypes.bool,
  isShown: PropTypes.bool,
  path: PropTypes.string,
  text: PropTypes.node
}

export default DeepLink
