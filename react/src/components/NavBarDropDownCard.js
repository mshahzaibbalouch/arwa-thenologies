import React from "react";
import { Card } from "react-bootstrap";

const NavBarDropDownCard = ({data}) => {
  return (
    <div>
        <Card
          className="border-0 d-flex align-items-center flex-row justify-content-between bg-white"
        >
          <img src={data.img} alt="" className="w-card-navbar" />
          <p className="m-0 ps-3">{data.name}</p>
        </Card>
    </div>
  );
};

export default NavBarDropDownCard;
