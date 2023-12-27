import React, { useEffect, useState } from "react";
import "../css/DevelopersCurrentlyAvailable.css";
import axios from "axios";

function CoreTeam() {
  const [teamData, setTeamData] = useState([]);
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

  return (
    <div className="container">
      <h1 className="text-dark text-center my-5">Core Team</h1>
      <div className="row mt-5">
        {teamData.map((developer, index) => (
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoreTeam;
