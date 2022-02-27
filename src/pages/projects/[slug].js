
import SyntaxHighlighter from 'react-syntax-highlighter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import matter from 'gray-matter'
import Image from 'next/image'
import fs from 'fs'
import { Center } from '@chakra-ui/react'
import buttonHref from '../../components/ui/buttons/buttonHref'
import Link from 'next/link'
import styles from '../../styles/blogPost.module.css'

const components = {  }

const PostPage = ({ frontMatter: { title, date, qrCode }, mdxSource }) => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="fixed-header">
          </div>
          <h1 className="text text2XL">
            {title}
          </h1>
          <div className="bg"></div>
        </div>
        <div className="post-details">
          <span className="text02">
            <span className="text03">
              &apos; Everything is essential &apos;
            </span>
            <span className="text04">
              -
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="text05">Bernardo Faro</span>
            <br></br>
          </span>
          <span className="text06">
            <span className="text07">
              As a result of growing emeraldhouse gas emissions, climate models
              predict that our planet will get significantly warmer, that
              ecosystems will be changed or destroyed, and that enormous human
              and economic costs will be incurred. These scenarios aren’t
              guaranteed, but avoiding them will be very hard. We’re trying to
              take small steps to mitigate our impact.
            </span>
            <br></br>
          </span>
        </div>
        <div className="container02">
          <div className='story'>
            <MDXRemote {...mdxSource} components={{ buttonHref, Center, Image, SyntaxHighlighter, Link }} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .container {
          width: 100%;
          height: auto;
          display: flex;
          min-height: 100vh;
          align-items: center;
          flex-direction: column;
        }
        .hero {
          flex: 0 0 auto;
          width: 100%;
          heigth: 100%;
          display: flex;
          position: relative;
          min-height: 75vh;
          align-items: center;
          flex-direction: column;
          background-size: cover;
          justify-content: flex-start;
          background-image: url('/images/project-image/twitter/twitter-choose-name.png');
        }
        .fixed-header {
          width: 100%;
          display: flex;
          z-index: 200;
          position: fixed;
          box-shadow: 0px 0px 20px 0px rgba(17, 18, 38, 0.15);
          align-items: center;
          flex-direction: column;
          justify-content: flex-start;
          background-color: var(--dl-color-secondary-300);
        }
        .text {
          top: 0px;
          left: 276px;
          color: var(--dl-color-gray-white);
          right: auto;
          bottom: 0px;
          margin: auto;
          z-index: 100;
          text-align: center;
        }
        .bg {
          top: auto;
          flex: 0 0 auto;
          left: auto;
          right: 0px;
          width: 100%;
          bottom: auto;
          height: 100%;
          display: flex;
          opacity: 0.4;
          position: absolute;
          align-items: center;
          flex-direction: column;
          justify-content: flex-start;
          background-color: var(--dl-color-gray-black);
        }
        .post-details {
          flex: 0 0 auto;
          width: 95%;
          display: flex;
          position: relative;
          max-width: 1320px;
          box-shadow: 0px 10px 15px -10px #626262;
          margin-top: -100px;
          padding-left: var(--dl-space-space-tripleunit);
          border-radius: var(--dl-radius-radius-radius75);
          padding-right: var(--dl-space-space-tripleunit);
          flex-direction: column;
          background-color: var(--dl-color-secondary-300);
        }
        .container01 {
          top: -2rem;
          flex: 0 0 auto;
          left: auto;
          right: auto;
          width: 4rem;
          bottom: auto;
          height: 4rem;
          display: flex;
          position: absolute;
          align-self: center;
          align-items: center;
          border-radius: var(--dl-radius-radius-round);
          flex-direction: column;
          justify-content: center;
          background-color: var(--dl-color-pimary-500);
        }
        .icon {
          fill: var(--dl-color-gray-white);
          width: 24px;
          height: 24px;
        }
        .text01 {
          color: var(--dl-color-gray-white);
          align-self: center;
          margin-top: var(--dl-space-space-tripleunit);
        }
        .text02 {
          color: #94a3b8ff;
          align-self: center;
        }
        .text03 {
          white-space: normal;
        }
        .text04 {
          white-space: normal;
        }
        .text05 {
          font-style: italic;
        }
        .text06 {
          color: var(--dl-color-gray-white);
          font-size: 1rem;
          font-style: normal;
          text-align: center;
          font-weight: 300;
          padding-top: var(--dl-space-space-tripleunit);
          padding-bottom: var(--dl-space-space-tripleunit);
        }
        .text07 {
          text-align: center;
        }
        .container02 {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
        .story {
          width: 100%;
          display: flex;
          max-width: 1320px;
          grid-column: 3/11;
          padding-top: var(--dl-space-space-tripleunit);
          padding-left: var(--dl-space-space-unit);
          padding-right: var(--dl-space-space-unit);
          flex-direction: column;
        }
        .text08 {
          color: #94a3b8ff;
        }
        .text10 {
          color: var(--dl-color-secondary-400);
          font-size: 1.875rem;
        }
        .image {
          width: 100%;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          margin-top: var(--dl-space-space-tripleunit);
          object-fit: contain;
          border-radius: var(--dl-radius-radius-radius75);
          margin-bottom: var(--dl-space-space-tripleunit);
        }
        .text11 {
          color: rgba(100, 116, 139, 1);
          font-weight: 300;
          margin-bottom: var(--dl-space-space-doubleunit);
        }
        .text12 {
          font-weight: 400;
          white-space: normal;
        }
        .text15 {
          font-weight: 400;
          white-space: normal;
        }
        .container03 {
          display: flex;
          align-items: flex-start;
          border-color: var(--dl-color-gray-900);
          border-width: 0px;
          padding-left: var(--dl-space-space-unit);
          flex-direction: column;
          border-left-width: 1px;
        }
        .text17 {
          color: rgb(100, 116, 139);
          display: inline;
          font-weight: 400;
          white-space: normal;
        }
        .text18 {
          color: rgb(100, 116, 139);
          display: inline;
          font-weight: 400;
          white-space: normal;
        }
        .text19 {
          color: rgb(100, 116, 139);
          display: inline;
          font-weight: 400;
          white-space: normal;
        }
        .text20 {
          color: var(--dl-color-secondary-400);
        }
        .text21 {
          display: inline;
          font-weight: 600;
          white-space: normal;
        }
        .text22 {
          font-weight: 600;
        }
        .text23 {
          color: var(--dl-color-secondary-400);
          font-size: 1.875rem;
          margin-top: var(--dl-space-space-doubleunit);
          margin-bottom: var(--dl-space-space-halfunit);
        }
        .text24 {
          color: rgba(100, 116, 139, 1);
          font-weight: 300;
          margin-bottom: var(--dl-space-space-doubleunit);
        }
        .text25 {
          white-space: normal;
        }
        .image1 {
          width: 450px;
          align-self: center;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          margin-top: var(--dl-space-space-tripleunit);
          object-fit: cover;
          border-radius: var(--dl-radius-radius-radius75);
          margin-bottom: var(--dl-space-space-tripleunit);
        }
        .text26 {
          color: var(--dl-color-secondary-400);
          font-size: 1.875rem;
          margin-top: var(--dl-space-space-tripleunit);
          margin-bottom: var(--dl-space-space-halfunit);
        }
        .text27 {
          color: rgba(100, 116, 139, 1);
          font-weight: 300;
          margin-bottom: var(--dl-space-space-doubleunit);
        }
        .text28 {
          font-weight: 400;
          white-space: normal;
        }
        .text31 {
          font-weight: 400;
          white-space: normal;
        }
        .text34 {
          font-weight: 400;
          white-space: normal;
        }
        .post {
          flex: 0 0 auto;
          width: 60%;
          display: flex;
          padding: var(--dl-space-space-unit);
          max-width: 600px;
          align-self: center;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          align-items: flex-start;
          flex-direction: column;
        }
        .text35 {
          color: var(--dl-color-secondary-400);
          font-weight: 700;
        }
        .divider {
          flex: 0 0 auto;
          width: 100%;
          height: 0.5px;
          display: flex;
          opacity: 0.5;
          align-self: center;
          margin-top: var(--dl-space-space-halfunit);
          align-items: flex-start;
          margin-bottom: var(--dl-space-space-halfunit);
          flex-direction: column;
          background-color: var(--dl-color-gray-900);
        }
        .container04 {
          flex: 0 0 auto;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-top: var(--dl-space-space-triplequarter);
          align-items: center;
          margin-bottom: var(--dl-space-space-triplequarter);
          flex-direction: row;
          justify-content: space-between;
        }
        .container05 {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          flex-direction: row;
        }
        .image2 {
          width: 40px;
          object-fit: cover;
          margin-right: var(--dl-space-space-unit);
          border-radius: var(--dl-radius-radius-round);
        }
        .container06 {
          flex: 0 0 auto;
          display: flex;
          position: relative;
          align-items: flex-start;
          flex-direction: column;
        }
        .text36 {
          color: var(--dl-color-secondary-300);
          font-weight: 700;
          line-height: 20px;
          text-transform: uppercase;
        }
        .container07 {
          display: flex;
          align-items: flex-start;
          flex-direction: row;
        }
        .text37 {
          color: var(--dl-color-secondary-500);
          font-weight: 400;
          line-height: 20px;
        }
        .text38 {
          color: rgba(100, 116, 139, 1);
          font-weight: 300;
          line-height: 1.625;
        }
        .text39 {
          display: inline;
          font-weight: 400;
          white-space: normal;
          background-color: rgb(255, 255, 255);
        }
        .image3 {
          width: 100%;
          margin-top: var(--dl-space-space-unit);
          object-fit: cover;
          border-radius: var(--dl-radius-radius-radius75);
          margin-bottom: var(--dl-space-space-unit);
        }
        .container08 {
          flex: 0 0 auto;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding-left: var(--dl-space-space-doubleunit);
          padding-right: var(--dl-space-space-doubleunit);
          flex-direction: row;
          justify-content: space-between;
        }
        .container09 {
          flex: 0 0 auto;
          display: flex;
          align-self: center;
          margin-top: var(--dl-space-space-halfunit);
          align-items: center;
          flex-direction: row;
        }
        .icon2 {
          fill: rgba(148, 163, 184, 1);
          width: 14px;
          height: 14px;
          margin-top: 1px;
        }
        .text40 {
          color: var(--dl-color-secondary-500);
          line-height: 1.75ren;
          margin-left: 0.25rem;
        }
        .icon4 {
          fill: rgba(148, 163, 184, 1);
          width: 14px;
          height: 14px;
          margin-left: var(--dl-space-space-unit);
        }
        .text41 {
          color: var(--dl-color-secondary-500);
          line-height: 1.75ren;
          margin-left: 0.25rem;
        }
        .icon6 {
          fill: rgba(148, 163, 184, 1);
          width: 14px;
          height: 14px;
          margin-top: 2px;
          margin-left: var(--dl-space-space-unit);
        }
        .text42 {
          color: var(--dl-color-secondary-500);
          line-height: 1.75ren;
          margin-left: 0.25rem;
        }
        .container10 {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          flex-direction: row;
        }
        .image4 {
          width: 20px;
          object-fit: cover;
          border-color: var(--dl-color-gray-white);
          border-width: 1px;
          border-radius: var(--dl-radius-radius-round);
        }
        .image5 {
          width: 20px;
          object-fit: cover;
          margin-left: -10px;
          border-color: var(--dl-color-gray-white);
          border-width: 1px;
          border-radius: var(--dl-radius-radius-round);
        }
        .image6 {
          width: 20px;
          object-fit: cover;
          margin-left: -10px;
          border-color: var(--dl-color-gray-white);
          border-width: 1px;
          border-radius: var(--dl-radius-radius-round);
        }
        .text43 {
          color: var(--dl-color-secondary-400);
          margin-left: 0.25rem;
        }
        .divider1 {
          flex: 0 0 auto;
          width: 100%;
          height: 0.5px;
          display: flex;
          opacity: 0.5;
          align-self: center;
          margin-top: var(--dl-space-space-unit);
          align-items: flex-start;
          margin-bottom: var(--dl-space-space-unit);
          flex-direction: column;
          background-color: var(--dl-color-gray-900);
        }
        .text44 {
          color: var(--dl-color-secondary-500);
          align-self: center;
        }
        .text45 {
          color: var(--dl-color-secondary-500);
          align-self: center;
        }
        .container11 {
          flex: 0 0 auto;
          width: 100%;
          display: flex;
          margin-top: var(--dl-space-space-doubleunit);
          align-items: center;
          margin-bottom: var(--dl-space-space-doubleunit);
          flex-direction: row;
        }
        .image7 {
          width: 40px;
          object-fit: cover;
          margin-right: var(--dl-space-space-unit);
          border-radius: var(--dl-radius-radius-round);
        }
        .textarea {
          color: var(--dl-color-secondary-400);
          width: 100%;
          outline: 0;
          padding: var(--dl-space-space-halfunit);
          transition: 0.3s;
          border-color: rgba(203, 213, 225, 1);
          border-radius: var(--dl-radius-radius-radius4);
        }
        .textarea:focus {
          box-shadow: 0 0 0 2px #4AA4E3;
        }
        .posts {
          display: flex;
          max-width: 1320px;
          align-items: center;
          margin-bottom: var(--dl-space-space-tripleunit);
          flex-direction: column;
        }
        .container12 {
          width: 66%;
          display: flex;
          max-width: 1320px;
          margin-top: var(--dl-space-space-fiveunits);
          align-items: center;
          padding-left: var(--dl-space-space-unit);
          margin-bottom: var(--dl-space-space-tripleunit);
          padding-right: var(--dl-space-space-unit);
          flex-direction: column;
        }
        .text46 {
          color: var(--dl-color-secondary-400);
        }
        .text47 {
          font-weight: 700;
          white-space: normal;
          background-color: rgb(255, 255, 255);
        }
        .text48 {
          color: var(--dl-color-secondary-500);
          text-align: center;
          margin-bottom: var(--dl-space-space-unitandhalf);
        }
        @media (max-width: 991px) {
          .text {
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .post {
            width: 100%;
          }
          .container12 {
            width: 100%;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
          }
        }
        @media (max-width: 767px) {
          .text02 {
            text-align: center;
          }
          .story {
            width: 100%;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
          }
          .image1 {
            width: 80%;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .container12 {
            width: 100%;
          }
        }
        @media (max-width: 479px) {
          .text02 {
            text-align: center;
          }
          .container02 {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}
      </style>
    </>





  )
}

const getStaticPaths = async () => {
  console.log("ola")
  const files = fs.readdirSync(`${process.cwd()}/src/projects`);

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  console.log("ola")
  const markdownWithMeta = fs.readFileSync(`${process.cwd()}/src/projects/` +
    slug + '.mdx', 'utf-8')

    console.log(markdownWithMeta)
  const { data: frontMatter, content } = matter(markdownWithMeta);
  
  console.log(content)
  const mdxSource = await serialize(content);
  console.log(mdxSource)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage