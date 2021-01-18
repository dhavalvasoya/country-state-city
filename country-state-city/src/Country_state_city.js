import React, { useState } from "react";

export default function Country_state_city() {

    const [country, setCountry] = useState([
        {
            name: "india",
            countryCode: "IN",
            State: [
                {
                    name: "panjab",
                    stateCode: "PN",
                    City: ["patiyala", "amritsar", "pathankot"]
                },

                {
                    name: "gujarat",
                    stateCode: "GJ",
                    city: [
                        "surat", "bhavnagar", "rajkot"
                    ],
                },
                {
                    name: "maharashtra",
                    stateCode: "MH",
                    city: [
                        "mumbai", "pune", "lavasa"],
                },
            ],
        },
        {
            name: "America",
            countryCode: "AM",
            State: [
                {
                    name: "Califoniya",
                    stateCode: "CF",
                    City: ["Los Angel", "San Degio", "Okland"],
                },
                {
                    name: "New Mexico",
                    stateCode: "NE",
                    City: ["Santa Fe", "Roswell", "Deming"],
                },
                {
                    nmae: "Delware",
                    stateCode: "DW",
                    City: ["Dover", "Lewes", "Bear"],
                },
            ],
        },
        {
            name: "Canada",
            countryCode: "CN",
            State: [
                {
                    name: "British Columbia",

                    stateCode: "BC",
                    City: ["Victoria", "Nanimo", "ChillWack",],
                },
                {
                    name: "Quebec",
                    stateCode: "QB",
                    City: ["Quebec City", "Levis", "Laval"],
                },
                {
                    name: "Nova Scotia",
                    stateCode: "NS",
                    City: ["LiverPool", "Berwick", "Digby"],
                },
            ],
        },
    ]);

    const countryChange = (e) => {
            
        
    }

 let states=[];

 
    return (
        <>
            <div>
                <select onChange={countryChange}    >
                    <option disabled selected="selected">----select country----</option>
                    {
                        country.map(item => {
                            return (<option value={item.countryCode} >{item.name}</option>)
                        })
                    }
                </select>

            </div>
            <div>
                <select>
                    <option disabled selected="selected">----select state----</option>
                    {

                    }
                </select>
            </div>
        </>
    );
}
