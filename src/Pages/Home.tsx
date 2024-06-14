import Timer from "../components/Timer";
import Socialmedia from "../components/Socialmedia";
function Home() {
  return (
    <div className="home-container">
      <div className="homeDiv">
        <h1> We're launching soon </h1>
        <Timer />
      </div>
      <Socialmedia />
    </div>
  );
}

export default Home;
