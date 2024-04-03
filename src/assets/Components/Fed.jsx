import { Container } from "react-bootstrap";
import Reusablemaintop from "./reusable/Reusable main top";
import Reusableexperiencehighlight from "./reusable/Reusable experience highlight";
import Reusableskillandproject from "./reusable/Reusable skill and project";
const Fed = () => {
  return (
    <>
      <section id="feds">
        <Container>
          <Reusablemaintop para="With  expertise in website layout design, JavaScript functions, and  cutting-edge technologies like React JS and Next JS, I craft immersive  digital experiences that captivate audiences. From implementing React  Context API to building e-commerce websites with seamless API  integration, I bring creativity and functionality to every project,  ensuring an unforgettable user journey." />
          <Reusableskillandproject
            skill1="HTML"
            skill2="CSS"
            skill3="Javascript"
            skill4="React"
          />
          <Reusableexperiencehighlight />
        </Container>
      </section>
    </>
  );
};

export default Fed;
