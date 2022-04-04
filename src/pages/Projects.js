import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Project from "../components/Project";
import { getProjectDetails } from "../services";
import "./../styles/styles.css";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getProjectDetails().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div className={"projects " + (isOpen === true ? "show" : "")}>
      <Router>
        {!projects ? (
          "Loading"
        ) : (
          <>
            {projects.map(
              ({
                title,
                tags,
                slug,
                projectThumbnail,
                description,
                softwareTags,
                projectAssets,
              }) => (
                <div key={slug}>
                  <h2>{title}</h2>
                  <p>{tags}</p>
                  <Link
                    to={`/projects/${slug}`}
                    onClick={() => setIsOpen(true)}
                  >
                    <img
                      src={projectThumbnail.url}
                      alt={title}
                      style={{ maxWidth: "300px" }}
                    />
                  </Link>
                  <Switch>
                    {description}
                    {softwareTags}
                    {projectAssets.url}
                    <Route path="/projects/:url">
                      {isOpen && (
                        <Project projects={projects} setIsOpen={setIsOpen} />
                      )}
                    </Route>
                  </Switch>
                </div>
              )
            )}
          </>
        )}
      </Router>
    </div>
  );
}

export default Projects;
