import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <figure>
        <img
          src="https://source.unsplash.com/random/750x400"
          alt="random placeholder image"
        />
        <figcaption>
          This image is from <a href="https://unsplash.com/">Unsplash</a>.
        </figcaption>
      </figure>
      <article>
        <h1>{postData.title}</h1>
        <h4>By {postData.author}</h4>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
