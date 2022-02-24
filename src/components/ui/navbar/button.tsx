import React from 'react'

import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <button className="button button-login">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            width: 112px;
            height: 48px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }

          @media (max-width: 479px) {
            .rootClassName3 {
              display: none;
            }
            .rootClassName5 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Button.defaultProps = {
  button: 'Login',
  rootClassName: '',
}

Button.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Button
