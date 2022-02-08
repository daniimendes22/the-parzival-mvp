import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import React from 'react';

export default function Bio({ projects }) {
    return (
        <div className="mt-5">
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
                                    src={'/images/'+ post.frontMatter.thumbnailUrl}
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

        </div>

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