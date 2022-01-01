import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";
import Search from "./Search";

const BreweryCard = ({ breweries = [] }) => {
  const [value, setValue] = useState("");
  console.log("value:", value);

  return (
    <>
      <Search setValue={setValue} />
      <div className="breweryCard">
        {breweries
          .filter((val) => {
            if (value === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(value.toLocaleLowerCase())
            ) {
              return val;
            } else if (
              val.city.toLowerCase().includes(value.toLocaleLowerCase())
            ) {
              return val;
            } else if (
              val.brewery_type.toLowerCase().includes(value.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((brewery) => (
            <Card key={brewery.id}>
              <Card.Text>
                <p>{brewery.name}</p>
                <p>{brewery.brewery_type}</p>
                <p>{brewery.city}</p>
              </Card.Text>
              <Link to={`/${brewery.id}`}>
                <Button variant="warning">View Detail</Button>
              </Link>
            </Card>
          ))}
      </div>
    </>
  );
};

export default BreweryCard;
