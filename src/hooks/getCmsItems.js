import React, { useEffect, useState } from "react";

function getCmsItems(defaultVal) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getServices().then((result) => {
      setState(result);
    });
  }, []);

  return { state };
}

export default getCmsItems;
