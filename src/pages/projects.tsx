import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

import ProjectCard from '../components/ui/cards/project-card'

export default function Projects({ projects }) {
    return (
        <>
            {/* <div className="mt-5">
                {projects.map((post, index) => (
                    <Link href={'/projects/' + post.slug} passHref key={index}>
                        <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.frontMatter.title}</h5>
                                        <p className="card-text">{post.frontMatter.description}</p>
                                        <p className="card-text">
                                            <small className="text-muted">{post.frontMatter.date}</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 m-auto">
                                    <Image
                                        src={post.frontMatter.thumbnailUrl}
                                        className="img-fluid mt-1 rounded-start"
                                        alt="thumbnail"
                                        width={500}
                                        height={400}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                </div> */}

            <div className="blog">
                {projects.map((post, index) => (

                    <Link href={'/projects/' + post.slug} passHref key={index}>
                        <div className="project-card">
                            <ProjectCard
                                image_src={post.frontMatter.thumbnailUrl}
                                rootClassName="rootClassName3"
                                description={post.frontMatter.description}
                                title={post.frontMatter.title}
                                author={post.frontMatter.author}
                                profile_src={post.frontMatter.authorPic}
                                label={post.frontMatter.topic}
                            ></ProjectCard>
                        </div>
                    </Link>
                ))}
            </div>
            <style jsx>
                {`
          .image {
            height: 2rem;
            object-fit: cover;
          }
          .nav {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .link {
            display: contents;
          }
          .navigation-links {
            text-decoration: none;
          }
          .container1 {
            width: 181px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-halfunit);
          }
          .icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-halfunit);
          }
          .icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .burger-menu {
            display: none;
          }
          .icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .image1 {
            height: 2rem;
          }
          .close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            flex-wrap: wrap;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container4 {
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: 10px;
            justify-content: space-between;
          }
          .container5 {
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-radius: 10px;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .container1 {
              align-items: center;
              flex-direction: row;
              justify-content: flex-start;
            }
            .icon06 {
              display: none;
            }
            .blog {
              flex-direction: column;
            }
            .container4 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .container5 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .nav {
              display: none;
            }
            .container1 {
              display: none;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .header {
              padding: var(--dl-space-space-unit);
            }
            .icon-group {
              display: none;
            }
            .mobile-menu {
              display: none;
              padding: 16px;
            }
            .blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
            </style>
        </>
    )
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(`${process.cwd()}/src/projects`, 'utf-8');
    const projects = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join(`${process.cwd()}/src/projects`, filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        return {
            frontMatter,
            slug: filename.split('.')[0]
        }
    })
    return {
        props: {
            projects
        }
    }
}