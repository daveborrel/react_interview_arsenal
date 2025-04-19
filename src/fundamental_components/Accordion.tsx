import { useState } from 'react';

type AccordionProps = {
    name: string;
    text: string;
}

export default function Accordion(content: AccordionProps) {

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(val => !val);
    console.log("clicked")
  }

  return (
    <div>
      {content.name}{' '}
      <span
        aria-hidden={true}
        className="accordion-icon"
        onClick={handleClick}
      />
      {isOpen && <div>{content.text}</div>}
    </div>
  );
}