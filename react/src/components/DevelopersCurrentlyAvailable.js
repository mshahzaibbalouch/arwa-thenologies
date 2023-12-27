import React, { useEffect, useState } from "react";
import "../css/DevelopersCurrentlyAvailable.css";
import ButtonStyle from "./ButtonStyle";
import axios from "axios";

function DevelopersCurrentlyAvailable({ cetagory }) {
  const [teamData, setTeamData] = useState([]);
  const [filteredTeamData, setFilteredTeamData] = useState([]);
  console.log(cetagory);
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/team`);
        setTeamData(response.data.teamMembers);
        console.log(response.data.teamMembers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeamData();
  }, []);

  useEffect(() => {
    if (teamData.length > 0) {
      const filteredData = teamData.filter((developer) =>
        developer.skills.some((skill) => skill.toLowerCase().includes(cetagory.toLowerCase()))
      );
      setFilteredTeamData(filteredData);
      console.log(filteredData);
    }
  }, [teamData, cetagory]);

  return (
    <div className="container" id="developer-cruntly">
      <div className="row mt-5">
        {filteredTeamData.map((developer, index) => (
          <div key={index} className="col-lg-4 p-3">
            <div className="rounded shadow custom-cards mx-auto">
              <div className="image">
                <div className="px-5 py-3">
                  <img
                    src={developer.image}
                    className="img-fluid"
                    alt={developer.firstName}
                  />
                </div>
              </div>
              <div className="contect pb-3 px-3">
                <div className="text-center">
                  <h3>{developer.firstName + " " + developer.lastName}</h3>
                </div>
                <p className="text-center m-0">
                  <span>{developer.role}</span>
                </p>
                <p className="text-center m-0">{developer.description}</p>
                <ul className="p-0 m-0">
                  {developer.skills.map((skill, index) => (
                    <li className="p-1 m-1 rounded" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
                <ButtonStyle title={"Hire Now"} onClickFunction="#" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevelopersCurrentlyAvailable;
