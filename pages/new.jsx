import useFetched from "../lib/useFetched";
import getStories from "../lib/getStories";
import Stories from "../components/Stories";

export async function getStaticProps() {
  const posts = await getStories("newstories");
  return { props: { posts } };
}

export default function New({ posts }) {
  const { data, isPending } = useFetched("/api/newstories", posts);

  return (
    <div className="container grid justify-center my-5">
      <h1 className="main-title">New Stories</h1>
      {!isPending ? <Stories stories={data} /> : null}
    </div>
  );
}
