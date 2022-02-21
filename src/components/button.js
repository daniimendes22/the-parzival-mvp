import React from 'react'

import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <>
      <div className="container">
        <button className="button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Button.defaultProps = {
  button: 'Button',
}

Button.propTypes = {
  button: PropTypes.string,
}

export default Button
