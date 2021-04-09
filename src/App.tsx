import "./styles.css";
import * as Parts from "./components/parts";
import { Tabs, Tab } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Tabs defaultActiveKey="part02" id="uncontrolled-tab-example">
        <Tab eventKey="part02" title="Part 2">
          <Parts.Part02 />
        </Tab>
        <Tab eventKey="part03" title="Part 3">
          <Parts.Part03 />
        </Tab>
        <Tab eventKey="part04" title="Part 4">
          <Parts.Part04 />
        </Tab>
        <Tab eventKey="part05" title="Part 5">
          <Parts.Part05 />
        </Tab>
      </Tabs>
    </div>
  );
}
