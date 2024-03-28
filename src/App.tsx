import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/Showcase/Showcase";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-[url('./assets/image/swiss.jpg')] bg-no-repeat my-0 bg-cover mx-auto">
        <div className="w-[90%] mx-auto">
          <Navbar />
          <Showcase />
        </div>
      </div>
    </>
  );
}

export default App;
