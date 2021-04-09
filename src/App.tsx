import "./styles.css";
import * as Parts from "./components/parts";
import { Tabs, Tab } from "react-bootstrap";

const parts = [
  Parts.Part02,
  Parts.Part03,
  Parts.Part04,
  Parts.Part05,
  Parts.Part06,
  Parts.Part07
];

export default function App() {
  return (
    <div>
      <Tabs defaultActiveKey="part-02" id="uncontrolled-tab-example">
        {parts.map((p, i) => (
          <Tab eventKey={`part-${i + 2}`} title={`Part ${i + 2}`}>
            {p()}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
