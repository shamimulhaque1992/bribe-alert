import React, { useEffect, useState } from "react";
import style from "./map.module.css";
import MapSvgUpdate from "../MapSvg/MapSvgUpdate";
import instance from "../../instance/api_instance";
const MapComponent = ({ setHoveredDivision }) => {
  const [isOpen, setOpen] = useState(false);

  const divisions = [
    { id: "division1", name: "Rangpur" },
    { id: "division2", name: "Khulna" },
    { id: "division3", name: "Barishal" },
    { id: "division4", name: "Rajshahi" },
    { id: "division5", name: "Mymensingh" },
    { id: "division6", name: "Dhaka" },
    { id: "division7", name: "Chittagong" },
    { id: "division8", name: "Sylhet" },
  ];

  return (
    <div
      className={`d-flex justify-content-center justify-content-lg-start ${style.map_container}`}
      style={{
        width: "100%",
        paddingLeft: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <MapSvgUpdate setHoveredDivision={setHoveredDivision}></MapSvgUpdate>
      <div className={style.division_buttons}></div>
    </div>
  );
};

export default MapComponent;
