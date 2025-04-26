"use client";

import React, { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type AccordionContextType = {
  openItem: string | null;
  setOpenItem: (id: string) => void;
};

type AccordionType = {
  children: React.ReactNode;
};

type AccordionItemProps = {
  id: string;
  children: React.ReactNode;
};

type AccordionHeaderProps = {
  id: string;
  children: React.ReactNode;
};

type AccordionBodyProps = {
  id: string;
  children: React.ReactNode;
};
const AccordionContext = createContext<AccordionContextType | null>(null);

const Accordion = ({ children }: AccordionType) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      {children}
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ id, children }: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  if (!context) return null;
  const { openItem, setOpenItem } = context;
  const handleClick = () => {
    setOpenItem(openItem === id ? null : id);
  };
  return (
    <AnimatePresence>
      <motion.div
        onClick={handleClick}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1.1 } }}
        className={`${
          openItem === id ? "bg-blue-500" : "bg-white"
        } w-full  border border-blue-500 hover:bg-blue-300 rounded-md`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const AccordionHeader = ({ id, children }: AccordionHeaderProps) => {
  const context = useContext(AccordionContext);
  if (!context) return null;
  const { openItem } = context;
  return (
    <div className="p-2 text-black flex justify-between">
      {children}
      <div>
        {openItem === id ? (
          <span className="text-blue-500">-</span>
        ) : (
          <span className="text-blue-500">+</span>
        )}
      </div>
    </div>
  );
};

const AccordionBody = ({ id, children }: AccordionBodyProps) => {
  const context = useContext(AccordionContext);
  if (!context) return null;
  const { openItem } = context;
  return (
    <AnimatePresence>
      {openItem === id && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3 }}
          className={`${openItem === id ? "block" : "hidden"} p-2 text-black `}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
export default Accordion;
