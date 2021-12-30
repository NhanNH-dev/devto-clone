import LeftSideBar from "./components/LeftSideBar";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import RightSideBar from "./components/RightSideBar";
import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <main className="main-container">
        <LeftSideBar />
        <Content />
        <RightSideBar />
      </main>
    </>
  );
}

export default App;
