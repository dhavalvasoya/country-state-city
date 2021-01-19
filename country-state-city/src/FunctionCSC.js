import React, { useEffect, useState } from 'react'

export default function FunctionCSC() {

    const [country, setCountry] = useState([{ name: "india", cnCode: "IN" },
    { name: "USA", cnCode: "USA" },
    { name: "Germany", cnCode: "GR" }])

    const [state, setState] = useState([
        { name: 'gujarat', cnCode: "IN", sCode: "GJ" },
        { name: 'maharashtra', cnCode: "IN", sCode: "MH" },
        { name: 'delhi', cnCode: "IN", sCode: "DL" },
        { name: 'texas', cnCode: "USA", sCode: "TX" },
        { name: 'florida', cnCode: "USA", sCode: "FO" },
        { name: 'berlin', cnCode: "GR", sCode: "BR" },
        { name: 'bremen', cnCode: "GR", sCode: "BM" }
    ])
    const [city, setCity] = useState([
        { name: 'surat', cnCode: "IN", cCode: "ST", sCode: "GJ" },
        { name: 'rajkot', cnCode: "IN", cCode: "RJ", sCode: "GJ" },
        { name: 'ahmadabad', cnCode: "IN", cCode: "AH", sCode: "GJ" },
        { name: 'mumbai', cnCode: "IN", cCode: "MU", sCode: "MH" },
        { name: 'lavasa', cnCode: "IN", cCode: "LV", sCode: "MH" },
        { name: 'lonavala', cnCode: "IN", cCode: "LO", sCode: "MH" },
        { name: 'delhi', cnCode: "IN", cCode: "DE", sCode: "DL" },
        { name: 'miami', cnCode: "USA", cCode: "MI", sCode: "TX" },
        { name: 'tampa', cnCode: "USA", cCode: "TM", sCode: "FO" },
        { name: 'Duesseldorf', cnCode: "GR", cCode: "DU", sCode: "BR" },
        { name: 'Leinfelden-Echterdingen', cnCode: "GR", cCode: "LE", sCode: "BR" },
        { name: 'Eschborn', cnCode: "GR", cCode: "ES", sCode: "BM" }])

    const [countryX, setCountryX] = useState('')
    const [stateX, setStateX] = useState('')
    const [cityX, setCityX] = useState('')
    useEffect(() => {

    }, [countryX])

    const changeCountry = (e) => {
        setCountryX(e.target.value)
        console.log(e.target.value);
    }
    const changeState = (e) => {
        setStateX(e.target.value)
        console.log(e.target.value);

    }
    const changeCity = (e) => {
        setCityX(e.target.value)
        console.log(e.target.value);
    }
    console.log(stateX);
    return (
        <>
            <div>
                <select value={countryX} onChange={changeCountry}>
                    <option selected="selected">---- Choose country ------</option>
                    {country.map(item => <option value={item.cnCode} >{item.name}</option>)}
                </select>
            </div>
            <div>
                <select value={stateX} onChange={changeState}>
                    <option selected="selected">---- Choose region ------</option>
                    {state.map((item) => {
                        if (item.cnCode === countryX)
                            return (
                                <option value={item.sCode}>{item.name}</option>
                            )
                    }
                    )}
                </select>
            </div>
            <div>
                <select value={cityX} onChange={changeCity}>
                    <option selected="selected">---- Choose City ------</option>
                    {city.map((item) => {
                        if (item.sCode === stateX)
                            return (
                                <option value={item.cCode} >{item.name}</option>

                            )
                    })}
                </select>
            </div>
        </>
    )
}
