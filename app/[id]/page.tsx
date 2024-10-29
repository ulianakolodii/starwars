import Flow from "./components/Flow";
import fetchGraph from "../api/fetchGraph";
import createNodes from "./utils/createNodes";
import createEdges from "./utils/createEdges";

const HeroPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { hero, films, ships } = await fetchGraph(id);
  if (hero.detail === "Not found.") {
    return <div>Not found</div>;
  }
  return (
    <div>
      <Flow
        initialEdges={createEdges({ hero, films, ships })}
        initialNodes={createNodes({ hero, films, ships })}
      />
    </div>
  );
};

export default HeroPage;
