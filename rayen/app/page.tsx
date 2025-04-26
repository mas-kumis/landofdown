"use client";

import Accordion from "@/components/ui/Accordion";

// import Accordion from "@/components/ui/Accordion";
// import Tab from "@/components/ui/Tab";
// import Button from "@/components/ui/Button";
// import Image from "next/image";

const accordionData = [
  {
    id: "item1",
    header: "Item 1",
    body: "This is the content of Item 1",
  },
  {
    id: "item2",
    header: "Item 2",
    body: "This is the content of Item 2",
  },
  {
    id: "item3",
    header: "Item 3",
    body: "This is the content of Item 3",
  },
];
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-4">
      <div className="w-[400px]">
        <Accordion>
          <Accordion.Item id="item1">
            <Accordion.Header id="item1">Item 1</Accordion.Header>

            <Accordion.Body id="item1">
              This is the content of Item 1
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      {/* <Tab>
        <Tab.Button id="tab1">Tab 1</Tab.Button>
        <Tab.Button id="tab2">Tab 2</Tab.Button>
        <Tab.Button id="tab3">Tab 3</Tab.Button>
      </Tab> */}
    </div>
  );
}
