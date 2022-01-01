import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import '../App.css';
import Search from "./Search";

const BreweryCard = ({ breweries = [] }) => {

    return (
        <>
        <Search />
        <div className="breweryCard">
           {breweries.map((brewery) => (
               <Card key={brewery.id}>
                   <Card.Text>
                       <p>{brewery.name}</p>
                       <p>{brewery.brewery_type}</p>
                       <p>{brewery.city}</p>
                   </Card.Text>{" "}
                   <Link to={`/${brewery.id}`}>
                       {" "}
                       <Button variant="warning">
                           View Detail
                       </Button>
                   </Link>
               </Card>
           ))}
           <hr />
        </div>
       </>
    );
};

export default BreweryCard;