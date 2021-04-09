import "./styles.css";
import * as Part02 from "./components/part02";
import * as Part03 from "./components/part03";
import * as Part04 from "./components/part04";
import { Tabs, Tab } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Tabs defaultActiveKey="part02" id="uncontrolled-tab-example">
        <Tab eventKey="part02" title="Part 2">
          <Part02.Part />
        </Tab>
        <Tab eventKey="part03" title="Part 3">
          <Part03.Part />
        </Tab>
        <Tab eventKey="part04" title="Part 4">
          <Part04.Part />
        </Tab>
      </Tabs>
    </div>
  );
}
