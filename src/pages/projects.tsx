import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import React from 'react';
import "../styles/blog.module.css";
import { useSession, getSession } from "next-auth/react"
import styles from '../styles/blogPost.module.css'
import ProjectCard from '../components/project-card'

export default function Projects({ projects }) {
    const REDIRECT_URL = '/api/auth/signin'
    const { data: session, status } = useSession();
    console.log(status)
    if (status === "unauthenticated") {
        window.location.href = REDIRECT_URL;
        return <></>;
    } else {
        if (status !== "loading") {
            return (
                <div>
                    <div>
                        {projects.map((post, index) => (
                            <div>
                                {/* <Link href={'/projects/' + post.slug} passHref key={index}>
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
                                                    src={'/images/' + post.frontMatter.thumbnailUrl}
                                                    className="img-fluid mt-1 rounded-start"
                                                    alt="thumbnail"
                                                    width={500}
                                                    height={400}
                                                    objectFit="cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Link> */}
                                <div className={styles['container']}>
                                    <div className={styles['blog']}>
                                        {/* <div className={styles['container2']}>
                                            <ProjectCard rootClassName="rootClassName1"></ProjectCard>
                                        </div> */}
                                        <Link href={'/projects/' + post.slug} passHref key={index}>
                                            <div className={styles['container3']}>
                                                <ProjectCard
                                                    image_src={'/images/' + post.frontMatter.thumbnailUrl}
                                                    rootClassName="rootClassName2"
                                                    title={post.frontMatter.title}
                                                    description={post.frontMatter.description}
                                                    label={"Twitter"}
                                                ></ProjectCard>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>

                </div>
            )
        } else {
            return <></>;
        }

    }
}

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/dbAPI/dbGetPostData');
    const data = await response.json();
    const projects = data.map(element => {
        const markdownWithMeta = fs.readFileSync(path.join(`${process.cwd()}/src/projects`, element.fileMdx), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            frontMatter,
            slug: element.fileMdx.split('.')[0]
        }
    });
    // const files = fs.readdirSync(`${process.cwd()}/src/projects`, 'utf-8');
    // const projects = files.map(filename => {
    //     const markdownWithMeta = fs.readFileSync(path.join(`${process.cwd()}/src/projects`, filename), 'utf-8')
    //     const { data: frontMatter } = matter(markdownWithMeta)
    //     return {
    //         frontMatter,
    //         slug: filename.split('.')[0]
    //     }
    // })
    return {
        props: {
            projects
        }
    }
}