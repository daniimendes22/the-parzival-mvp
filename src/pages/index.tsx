// ./pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import parseHtml, { domToReact } from 'html-react-parser'
import get from 'lodash/get'

export default function Home(props) {
  return (
    <>
      <Head>
      </Head>
    </>
  )
}


export async function getStaticProps(ctx) {
  // Import modules in here that aren't needed in the component
  const cheerio = await import(`cheerio`)
  const axios = (await import(`axios`)).default


  // Use path to determine Webflow path
  let url = get(ctx, `params.path`, [])
  url = url.join(`/`)
  if (url.charAt(0) !== `/`) {
    url = `/${url}`
  }
  const fetchUrl = process.env.WEBFLOW_URL + url

  // Fetch HTML
  let res = await axios(fetchUrl)
    .catch(err => {
      console.error(err)
    })
  const html = res.data

  // Parse HTML with Cheerio
  const $ = cheerio.load(html)
  const bodyContent = $(`body`).html()
  const headContent = $(`head`).html()

  // Send HTML to component via props
  return {
    props: {
      bodyContent,
      headContent
    },
  }
}

// Determines if URL is internal or external
function isUrlInternal(link) {
  if (
    !link ||
    link.indexOf(`https:`) === 0 ||
    link.indexOf(`#`) === 0 ||
    link.indexOf(`http`) === 0 ||
    link.indexOf(`://`) === 0
  ) {
    return false
  }
  return true
}

const parseOptions = { replace }

// Replaces DOM nodes with React components
function replace(node) {
  const attribs = node.attribs || {}

  // Replace links with Next links
  if(node.name === `a` && isUrlInternal(attribs.href)){
    console.log(node)

  }
  if (node.name === `a` && isUrlInternal(attribs.href)) {
    const { href, ...props } = attribs
    if (props.class) {
      props.className = props.class
      delete props.class
    }
    return (
      <Link href={href}>
        <a {...props}>
          {!!node.children && !!node.children.length &&
            domToReact(node.children, parseOptions)
          }
        </a>
      </Link>
    )
  }

  // Make Google Fonts scripts work
  if (node.name === `script`) {
    let content = get(node, `children.0.data`, ``)
    if (content && content.trim().indexOf(`WebFont.load(`) === 0) {
      content = `setTimeout(function(){${content}}, 1)`
      return (
        <script {...attribs} dangerouslySetInnerHTML={{ __html: content }}></script>
      )
    }
  }

}

