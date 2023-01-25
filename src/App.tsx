import "./styles.css";
import { Estimator } from "./Estimator";
import { Legend } from "./Legend";

export default function App() {
  return (
    <div className="App">
      <h1>Costa's react Function Points Estimator</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Legend />
      <Estimator />
    </div>
  );
}
