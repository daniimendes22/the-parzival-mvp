
import Link from 'next/link'
import React from 'react'

import { useSession } from 'next-auth/react'
import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  const { data: session } = useSession();
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>

        <Link href="/#about" >
          <button className="button">{props.button21}</button>
        </Link>
        <Link href="/#roadmap" >
          <button className="button1 button">{props.button211}</button>
        </Link>
        <Link href="/#team" >
          <button className="button2 button">{props.button2}</button>
        </Link>
        {session ? (
          <div>
            <Link href="/projects">
              <button className="button3 button">{props.button3}</button>
            </Link>
          </div>
        ) : (
          <></>
        )}
        <a href="https://lafamiglia.vinci.so" target="_blank"  rel="noreferrer">
          <button className="button3 button">{props.button1}</button>
        </a>

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
            padding-left: 1rem;
          }
          .button2 {
            margin-left: 5px;
            padding-left: 1rem;
          }
          .button3 {
            margin-left: 5px;
          }

          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .button1 {
              margin-left: 0px;
            }
            .button2 {
              margin-left: 0px;
            }
            .button3 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  button1: '👩‍🎨 LA FAMIGLIA',
  button3: '🎚️ PROJECTS',
  button2: '👨‍👧‍👧 TEAM',
  button21: '📄 ABOUT',
  rootClassName: '',
  button211: '🛣 ROADMAP',
  link_button: '',
}

NavigationLinks.propTypes = {
  button1: PropTypes.string,
  button2: PropTypes.string,
  button3: PropTypes.string,
  button21: PropTypes.string,
  rootClassName: PropTypes.string,
  button211: PropTypes.string,
  link_button: PropTypes.string,
}

export default NavigationLinks
