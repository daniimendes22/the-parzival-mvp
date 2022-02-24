import React from 'react'

import PropTypes from 'prop-types'

const ButtonLogin = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <button className="button button-login" onClick={props.onClick}>{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            width: 125px;
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

ButtonLogin.defaultProps = {
  button: 'Login',
  rootClassName: '',
}

ButtonLogin.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  onClick: PropTypes.func
}

export default ButtonLogin
