import React, { useEffect, useState } from "react";
import { getServices } from "../services";
import Loader from "../components/Loader";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then((result) => {
      setServices(result);
    });
  }, []);

  return (
    <div className="Services">
      {!services ? (
        <Loader />
      ) : (
        <>
          {services.map(({ title, slug, intro, description }) => (
            <div key={slug}>
              <span>{title}</span>
              <h1>{intro}</h1>

              <p>{description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Services;
