import React, { useEffect, useState } from "react";
import { getAbout } from "../services";
import Loader from "../components/Loader";

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getAbout().then((result) => {
      setAbout(result);
    });
  }, []);

  return (
    <div className="about">
      {!about ? (
        <Loader />
      ) : (
        <>
          {about.map(
            ({
              title,
              slug,
              description,
              intro,
              downloadCta,
              linkedInCta,
              bioImage,
            }) => (
              <div key={slug}>
                <span>{title}</span>
                <h1>{intro}</h1>

                <p>{description}</p>
                <img
                  src={bioImage.url}
                  alt={title}
                  style={{ maxWidth: "300px" }}
                />
                <button>{downloadCta}</button>
                <button>{linkedInCta}</button>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}

export default About;
