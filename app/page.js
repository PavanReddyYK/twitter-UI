import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import { Feed } from "./../components/Feed";

export default function Home() {
  return (
    <div className="page_main_wrapper">
      {/* <Sidebar /> */}
      <Feed />
      {/* <Widgets /> */}
    </div>
  );
}
