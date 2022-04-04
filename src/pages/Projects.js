import React, { useEffect, useState } from "react";
import { getAllProjects } from "../services";

function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getAllProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div className="projects">
      {!projects ? (
        "Loading"
      ) : (
        <>
          {projects.map(({ id, title, tags, projectThumbnail }) => (
            <div key={id}>
              <h2>{title}</h2>
              <p>{tags}</p>
              <img
                src={projectThumbnail.url}
                alt={title}
                style={{ maxWidth: "300px" }}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Projects;
