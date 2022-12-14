import Layout from "../../components/layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Head from "next/head"

// export async function getStaticProps({ params }) {
//   const postDatas = getPostData(params.id)
//   const postData = JSON.stringify(postDatas)
//   return {
//     props: {
//       postData,
//     },
//   }
// }

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
import React from "react"
import utilStyles from "../../styles/utils.module.css"

export default function Post({ postData }) {
  console.log("postData", postData)
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  // const postData = JSON.stringify(postDatas)
  return {
    props: {
      postData,
    },
  }
}
