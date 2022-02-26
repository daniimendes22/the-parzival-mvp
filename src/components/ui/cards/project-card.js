import React from 'react'
import Image from 'next/image'

import PropTypes from 'prop-types'

const ProjectCard = (props) => {
  return (
    <>
      <div className={`blog-post-card ${props.rootClassName} `}>
        <Image height='200px' width='300px' alt={props.image_alt} src={props.image_src} className="image" />
        <div className="container">
          <span className="text">{props.label}</span>
          <span className="text1">{props.title}</span>
          <span className="text2">{props.description}</span>
          <div className="container1">
            <div className="profile">
              <Image
                height='50px'
                width='50px'
                alt={props.profile_alt}
                src={props.profile_src}
                className="image1"
              />
              <span className="text3">{props.author}</span>
            </div>
            <span className="text4">{props.time}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card {
            width: 100%;
            cursor: pointer;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 10px 10px 10px 5px rgba(63, 63, 63, 0.1);
            transition: 0.3s;
            align-items: center;
            border-radius: 10px;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card:hover {
            transform: scale(1.02);
          }
          .image {
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .container {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .text {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .text1 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .text2 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .text3 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .text4 {
            color: var(--dl-color-gray-700);
            font-weight: 300;
          }

          .rootClassName1 {
            max-width: 400px;
          }
          .rootClassName2 {
            max-width: 400px;
          }
          .rootClassName3 {
            max-width: 360px;
          }

          .rootClassName5 {
            max-width: 400px;
          }
          .rootClassName6 {
            max-width: 400px;
          }
          .rootClassName7 {
            max-width: 400px;
          }
          .rootClassName8 {
            max-width: 360px;
          }
          .rootClassName9 {
            max-width: 360px;
          }
          .rootClassName10 {
            max-width: 400px;
          }
          .rootClassName11 {
            max-width: 400px;
            align-self: center;
          }
          @media (max-width: 991px) {
            .image {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

ProjectCard.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  title: 'Lorem ipsum dolor sit amet',
  label: 'ENTERPRISE',
  profile_alt: 'profile',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  author: 'Jon Doe',
  time: '5 min read',
  rootClassName: '',
}

ProjectCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  profile_src: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  profile_alt: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ProjectCard
