import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Video from "../components/Video";

const Event: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video LessonSlug={slug} /> : <div className="flex-1" />}
        <SideBar />
      </main>
    </div>
  );
};

export default Event;
