import PageLay from "@/components/PageLay";
import ProjectList from "@/components/ProjectList";
export default function Home() {
  return (
    <PageLay
      title="The best way to predict the future is to invent it."
      desc="These are the ones I take the most pride in.">
      <ProjectList />
      {/* <BlogList allArticles={allArticles} tags={tags} /> */}
    </PageLay>
  );
}
