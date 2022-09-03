import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="bg-slate-100 h-screen flex">
      <Sidebar />
      <Header />
    </div>
  );
}
