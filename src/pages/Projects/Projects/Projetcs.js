import React from "react";
import Footer from "../../../components/shared/Footer/Footer";
import Navigation from "../../../components/shared/Navigation/Navigation";
import ProjectsArea from "./ProjectsArea/ProjectsArea";
import ProjectsBreadcrumb from "./ProjectsBreadcrumb/ProjectsBreadcrumb";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";

const Projects = () => {
  return (
    <>
      <Navigation />
      <ProjectsBreadcrumb />
      {/* <ProjectsArea /> */}
      <ComingSoon></ComingSoon>
      <Footer />
    </>
  );
};

export default Projects;
