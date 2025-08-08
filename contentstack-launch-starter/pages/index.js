import Layout from "../components/Layout";
import Link from "next/link";
import { getEntries } from "../lib/cms";

export async function getStaticProps() {
  const entries = await getEntries("page");
  return { props: { entries } };
}

export default function Home({ entries }) {
  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">Pages</h2>
      <ul className="space-y-2">
        {entries.length === 0 && <li className="text-gray-500">No pages found yet — create one in Contentstack!</li>}
        {entries.map((page) => (
          <li key={page.uid}>
            <Link href={page.url} className="text-blue-600 hover:underline">
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
