import "./App.css"
import {Welcome} from "./Welcome";
import {Button} from "./button";
import {CandidateProfile} from "./CandidateProfile";

function App() {
  return (
    <div>
      <h1>Components in React</h1>
      <Welcome name="Al-Amin" />
      <Welcome name="John" />
      <Welcome name="Jane" />
      <CandidateProfile />
      <Button />
    </div>

  );
}

export default App
