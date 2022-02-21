import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <button className="button">{props.button}</button>
        <button className="button1 button">{props.button1}</button>
        <button className="button2 button">{props.button2}</button>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .button1 {
            margin-left: 5px;
          }
          .button2 {
            margin-left: 5px;
            padding-left: 1rem;
          }

          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  button1: 'La Famiglia',
  button: 'About1',
  button2: 'Projects',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  button1: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
