import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const Leagues = () => {
  const [leagues, setLeageus] = useState([]);

  const fetchLeagues = () => {
    fetch("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php")
      .then((res) => res.json())
      .then((res) => {
        setLeageus(res.leagues);
      });
  };

  useEffect(() => {
    fetchLeagues();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Sport</th>
            <th>League</th>
            <th>League Alternate</th>
          </tr>
        </thead>
        <tbody>
          {leagues.map((league, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{league.strSport}</td>
                <td>{league.strLeague}</td>
                <td>{league.strLeagueAlternate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Leagues;