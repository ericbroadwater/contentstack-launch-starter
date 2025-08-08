import Layout from "../components/Layout";
import { getEntries, getEntry } from "../lib/cms";

export async function getStaticPaths() {
  const entries = await getEntries("page");
  const paths = entries.map((page) => ({
    params: { slug: page.url ? page.url.replace(/^\//, "") : page.uid },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const entry = await getEntry("page", params.slug);
  return { props: { entry } };
}

export default function Page({ entry }) {
  if (!entry) {
    return (
      <Layout>
        <p>Page not found.</p>
      </Layout>
    );
  }
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">{entry.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: entry.body || "" }} />
    </Layout>
  );
}
