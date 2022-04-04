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
    <div className="services">
      {!services ? (
        <Loader />
      ) : (
        <>
          {services.map(
            ({
              title,
              slug,
              intro,
              description,
              serviceItem1,
              serviceItem2,
              serviceItem3,
              serviceItem4,
              serviceItem5,
              asset1,
              asset2,
              asset3,
              asset4,
              asset5,
            }) => (
              <div key={slug}>
                <span>{title}</span>
                <h1>{intro}</h1>

                <p>{description}</p>

                <div className="serviece-list"></div>
                <ul style={{ listStyle: "none", display: "inline" }}>
                  <li style={{ maxWidth: "150px" }}>
                    {serviceItem1}
                    <br />
                    <img src={asset1.url} alt={serviceItem1} />
                  </li>
                  <li style={{ maxWidth: "150px" }}>
                    {serviceItem2} <br />
                    <img src={asset2.url} alt={serviceItem2} />
                  </li>
                  <li style={{ maxWidth: "150px" }}>
                    {serviceItem3} <br />
                    <img src={asset3.url} alt={serviceItem3} />
                  </li>
                  <li style={{ maxWidth: "150px" }}>
                    {serviceItem4} <br />
                    <img src={asset4.url} alt={serviceItem4} />
                  </li>
                  <li style={{ maxWidth: "150px" }}>
                    {serviceItem5} <br />
                    <img src={asset5.url} alt={serviceItem5} />
                  </li>
                </ul>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
}

export default Services;
