import React, {useState, createContext} from "react"
import axios from "axios"


const AxiosContext = createContext()
const apikey = import.meta.env.VITE_USERNAME

function AxiosContextProvider(props) {

    // const recAreasUrl = "https://ridb.recreation.gov/api/v1/recareas?limit=500&offset=0&full=true&state="
    // console.log(apikey)
    const [recAreasList, setRecAreasList] = useState([])
    const [favePlaces, setFavePlaces] = useState([])

    function gSearchLink(query) {
        const encodedQuery = encodeURIComponent(query)
        return `https://www.google.com/search?q=${encodedQuery}`
    }
    
    function handleClick(selectState) {
        //console.log(`${recAreasUrl}${selectState}`, "test") 
        axios.get (`https://ridb.recreation.gov/api/v1/recareas?limit=500&offset=0&full=true&state=${selectState}&apikey=${apikey}`)       
        .then(res => setRecAreasList(res.data.RECDATA))
        .catch(err => console.log(err)) 
    }
    
    // console.log(recAreasList) //use this to see all recAreas/info
    console.log(favePlaces)

    function savedFaves (newFave) {
        setFavePlaces (prevPlaces => [...prevPlaces, newFave]) 
    }

    function removeFave (placeId) {
        setFavePlaces(prevPlaces => prevPlaces.filter(place => placeId !== place.RecAreaID))
    }

    return(
        <AxiosContext.Provider 
            value={{
             recAreasList,
             handleClick,
             gSearchLink,
             favePlaces,
             savedFaves,
             removeFave
            }}
        >
            {props.children}
        </AxiosContext.Provider>
    ) 
}

export {AxiosContext, AxiosContextProvider}