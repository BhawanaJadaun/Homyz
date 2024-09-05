import React, { useState } from 'react';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import val_img from "../../../public/assests/value.png";
import data from "../../utils/accordion";
import './Value.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings v-container innerwidth flexCenter">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src={val_img} alt="Value" />
          </div>
        </div>
        {/* Right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best Services for you.
            <br /> We believe a good place to live can make your life better.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
              data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem className={`AccordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter AccordionButton">
                        <AccordionItemState>
                          {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                        </AccordionItemState>
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDownCircle size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
