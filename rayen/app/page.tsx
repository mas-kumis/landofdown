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
    body: "This is the content of Item 1. It provides detailed information about the first item, including its features, benefits, and any other relevant details that might be useful for the user to understand its purpose and functionality.",
  },
  {
    id: "item2",
    header: "Item 2",
    body: "This is the content of Item 2. It elaborates on the second item's characteristics, offering insights into how it can be used effectively and why it might be a valuable addition to the user's workflow or experience.",
  },
  {
    id: "item3",
    header: "Item 3",
    body: "This is the content of Item 3. It discusses the third item in depth, highlighting its unique aspects, potential applications, and any other information that could help the user make an informed decision about its use.",
  },
];
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-4">
      <div className="w-[400px]">
        <Accordion>
          {accordionData.map((item) => (
            <Accordion.Item id={item.id} key={item.id}>
              <Accordion.Header id={item.id}>{item.header}</Accordion.Header>
              <Accordion.Body id={item.id}>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
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
