import AccordianData from "../../../fixtures/faqs.json";
import AccordianList from "./AccordianList";
import { AccordianContainer, AccordianHeading } from "../../../styles/homepage/AccordianStyle";

const Accordian = () => {
  return (
    <AccordianContainer>
      <AccordianHeading size={'2.8rem'}>Frequently Asked Questions</AccordianHeading>
      {AccordianData.map((item) => {
        return (
          <AccordianList
            key={item.id}
            header={item.header}
            body={item.body}
          ></AccordianList>
        );
      })}
    </AccordianContainer>
  );
};
export default Accordian;
