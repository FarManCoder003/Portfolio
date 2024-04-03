import { Container } from "react-bootstrap";
import Reusableskillandproject from "./reusable/Reusable skill and project";
import Reusablemaintop from "./reusable/Reusable main top";
import Reusableexperiencehighlight from "./reusable/Reusable experience highlight";

const Cyber = () => {
  return (
    <>
      <section id="cyber">
      <section id="feds">
        <Container>
          <Reusablemaintop
            para="Harnessing expertise in website security, reconnaissance and network security, I navigate the cyber realm with finesse, equipped to tackle challenges from social engineering to cloud computing and cyber law. let's explore the depths of cyber security together"/>
          <Reusableskillandproject skill1="Skill" skill2="Skill" skill3="Skill" skill4="Skill" />
          <Reusableexperiencehighlight/>
        </Container>
      </section>
      </section>
    </>
  );
};

export default Cyber;
