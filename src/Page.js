import React, { useEffect, useRef, useState } from "react";

const Page = ({ index, src, reset }) => {
  const knowl = [
    {
      title: "Belle Époque - City Hall",
      address: "Ijentea Kalea, 1, 20003 Donostia, Gipuzkoa",
      constructed: "1887",
      text: "The building was built in 1887 at the Gardens of Alderdi-Eder of San Sebastián, next to the Nautical Royal Club, to house the main casino. The opening ceremony was attended by Queen Maria Christina of Austria. However, it closed as a casino after the ban on gambling in 1924. On 14 April 1928, an agreement was reached to open in this building the Center of Attraction and Tourism, later this moved to a building next to Hotel María Cristina. On 20 January 1945, the council moved to this building. The architects Alday and Arizmendi amended the initial project in 1943 and turned the former casino into council. Until then, the City Hall was located in Constitution Square (Parte Vieja), now headquarters of the Municipal Library",
      readMore: "https://en.wikipedia.org/wiki/City_Council_of_San_Sebasti%C3%A1n",
    },
    {
      title: "El Sagrado Corazón - The Sacred Heart",
      address: "Urgull Mendia, 1, 20003 Donostia, Gipuzkoa",
      constructed: "1950",
      text: "The Sagrado Corazón (“Sacred Heart”) statue, measuring over 12 metres in height, has blessed the city since 1950 from the highest point of Monte Urgull. The statue itself rests upon a base which houses a chapel, making the entire monument more than 24 metres in height. Also known as the Cristo de la Mota, this monument is at one with the landscape of Donostia, and the statue, created by Federico Coullaut can be seen from four miles out to sea. El Sagrado Corazón is now one of the symbols of the city: a lofty protagonist of the fmost characteristic photographs of San Sebastián.",
      readMore: "https://www.sansebastianturismoa.eus/en/to-do/what-not-to-miss/mount-urgull",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: Math.min(500, window.innerWidth - 20),
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <p style={{ textAlign: "center", marginBottom: -10, cursor: "default" }} onClick={reset}>
        Click here to begin a new search
      </p>
      <h2 style={{ textAlign: "center" }}>{knowl[index % 2].title}</h2>
      <div
        style={{
          width: Math.min(500, window.innerWidth - 20),
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img src={src} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <p style={{ heigth: "auto", marginBottom: -10 }}>
        <span style={{ fontWeight: "bold" }}>Address: </span>
        {knowl[index % 2].address}
      </p>
      <p style={{ heigth: "auto", marginBottom: -10 }}>
        <span style={{ fontWeight: "bold" }}>Year of Completion: </span> {knowl[index % 2].constructed}
      </p>
      <p style={{ heigth: "auto", marginBottom: -10 }}>
        <span style={{ fontWeight: "bold" }}>More Information: </span> {knowl[index % 2].text}
      </p>

      <a
        href={knowl[index % 2].readMore}
        style={{ textDecoration: "none", fontWeight: "bold", color: "#ffffcf" }}
        taget="_blank"
        rel="noopener noreferrer"
      >
        <p>Read More</p>
      </a>
    </div>
  );
};

export default Page;
