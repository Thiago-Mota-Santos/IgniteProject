import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Event: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <SideBar />
      </main>
    </div>
  );
};

export default Event;
