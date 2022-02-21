
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

const components = { buttonHref, Center, Image, SyntaxHighlighter, Link }

const PostPage = ({ frontMatter: { title, date, qrCode }, mdxSource }) => {
    return (
        
        <div className="mt-4" className={styles['container']}>
            <h1>{title}</h1>
            <MDXRemote {...mdxSource} components={{...components}} />
        </div>
    )
}

const getStaticPaths = async () => {
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
    const markdownWithMeta = fs.readFileSync(`${process.cwd()}/src/projects/` +
        slug + '.mdx', 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

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