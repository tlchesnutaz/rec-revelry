import React, { useContext, useState } from "react"
import { AxiosContext } from "../context/AxiosContext"
import HeartButton from "./HeartButton"


export default function Favorites() {

    const [testFill, setTestFill] = useState(true)

    const {favePlaces, gSearchLink, savedFaves, removeFave} = useContext(AxiosContext) 
        
    let places = favePlaces.map((area) =>  
        <div key={area.recAreaID}>
            <h3>
                <a className="g-link-saved"
                    href={gSearchLink(area.RecAreaName)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                {`${area.RecAreaName} (${area.RECAREAADDRESS.map(code => code.AddressStateCode)})`}
                </a>
                <HeartButton testFill={testFill} area={area} savedFaves={savedFaves} removeFave={removeFave} />
            </h3>
        </div>
    )

    return(
       <div className="saved">
        {places}
       </div>  
    )
}