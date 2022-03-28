import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getAbout } from '../services';

const About = () => {
  const [About, setAbout] = useState([]);

  useEffect(() => {
    getAbout().then((newAbout) => {
      setAbout(newAbout);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">About</h3>
      {About.map((about, index) => (
        <Link key={index} href={`/about/${about.slug}`}>
          {about.title}
        </Link>
      ))}
    </div>
  );
};

export default About;
