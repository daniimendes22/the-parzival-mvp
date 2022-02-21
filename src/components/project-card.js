import React from 'react'

import PropTypes from 'prop-types'

const ProjectCard = (props) => {
  return (
    <>
      <div className={`blog-post-card ${props.rootClassName} `}>
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <div className="container">
          <span className="text">{props.label}</span>
          <h1 className="text1">{props.title}</h1>
          <div className="container1">
            <span className="text2">{props.description}</span>
            <span className="text3">Start</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: row;
            justify-content: center;
          }
          .image {
            width: 500px;
            object-fit: cover;
          }
          .container {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .text {
            color: var(--dl-color-gray-500);
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .text1 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .text2 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text3 {
            color: var(--dl-color-gray-black);
            font-weight: 500;
          }

          @media (max-width: 991px) {
            .image {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card {
              flex-direction: column;
              justify-content: space-between;
            }
            .image {
              width: 100%;
            }
            .container {
              width: 100%;
            }
            .text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .text1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .container1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .text3 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

ProjectCard.defaultProps = {
  image_alt: 'image',
  label: 'ENTERPRISE',
  image_src:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
  title: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
}

ProjectCard.propTypes = {
  image_alt: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default ProjectCard
