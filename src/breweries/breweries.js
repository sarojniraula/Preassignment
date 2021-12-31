import axios from "axios";

//making an API call
export const getBreweries = () => {
    return axios.get("https://api.openbrewerydb.org/breweries");
}