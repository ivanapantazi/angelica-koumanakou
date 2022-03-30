import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getContact } from "../services";
import Loader from "../components/Loader";

function Contact() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContact().then((result) => {
      setContact(result);
    });
  }, []);

  return (
    <div className="contact">
      {!contact ? (
        <Loader />
      ) : (
        <>
          {contact.map(
            ({
              title,
              slug,
              description,
              intro,
              contactImage,
              email,
              instagram,
              linkedin,
              mobile,
            }) => (
              <div key={slug}>
                <span>{title}</span>
                <h1>{intro}</h1>

                <p>{description}</p>
                <img
                  src={contactImage.url}
                  alt={title}
                  style={{ maxWidth: "300px" }}
                />
                <ul>
                  <li>{email}</li>
                  <li>{mobile}</li>
                </ul>
                <ul>
                  <li>
                    <Link to={instagram}>{instagram}</Link>
                  </li>
                  <li>
                    <Link to={`${linkedin}`}>{linkedin}</Link>
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

export default Contact;
