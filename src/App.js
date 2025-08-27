import logo from "./logo.svg";
import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import MapWithDraw from "./MapWithDraw";

function App() {
  return (
    <div className="App">
      <MapWithDraw />
    </div>
  );
}

export default App;
