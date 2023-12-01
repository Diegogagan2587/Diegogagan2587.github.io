import PropTypes from "prop-types";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const PortfolioSection = ({sectionRef, isActive}) => {
  return (
    <section id="portfolio" ref={sectionRef} className="portfolio px-6 py-28 flex flex-col gap-24 items-center">
      {/* for each project we will render a component*/}
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} index={index} isActive={isActive}/>;
      })}
    </section>
  );
};

PortfolioSection.propTypes = {
  sectionRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default PortfolioSection;
