import React from "react";

export const ServiceList = () => {
  const serviceList = [
    "Rådgivning",
    "Nyetablering",
    "Budsjettering",
    "Digitalisering og automatisering",
    "Rutiner og kvalitetssikring",
  ];

  return (
    <>
      <h2>Andre tjenester</h2>
      <h3>Vi bistår også med:</h3>
      <ul>
        {serviceList.map((s, i) => (
          <li key={`serviceItem_${i}`}>
            <p>{s}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
