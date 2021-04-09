import "./styles.css";
import { Part02 } from "./components/part02";
import { Part03 } from "./components/part03";
import { Tabs, Tab } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Tabs defaultActiveKey="part02" id="uncontrolled-tab-example">
        <Tab eventKey="part02" title="Part 02">
          <Part02 />
        </Tab>
        <Tab eventKey="part03" title="Part 03">
          <Part03 />
        </Tab>
      </Tabs>
    </div>
  );
}
