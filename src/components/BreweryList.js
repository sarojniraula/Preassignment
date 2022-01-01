import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import '../App.css';

const BreweryList = ({ breweries }) => {
    const {id} = useParams(); //for remembering the parameters passed.
    const navigate = useNavigate(); //for navigating back and forth.

    return (
        <div>
            <Card>
                {breweries
                    .filter((brewery) => brewery.id === id)
                    .map((brewery) => (
                        <>
                        <p>name: "{brewery.name}",</p>
                        <p>brewery_type: "{brewery.brewery_type}",</p>
                        <p>street: "{brewery.street}",</p>
                        <p>address_2: "{brewery.address_2}",</p>
                        <p>address_3: "{brewery.address_3}",</p>
                        <p>city: "{brewery.city}",</p>
                        <p>state: "{brewery.state}",</p>
                        <p>county_province: "{brewery.county_province}",</p>
                        <p>postal_code: "{brewery.postal_code}"</p>
                        </>
                    ))
                }
                <Button onClick={()=> {navigate("/")}}>
                    Go Back
                </Button>
            </Card>
        </div>
    )
}

export default BreweryList;