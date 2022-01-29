import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default () => {

    const[businesses,setBusinesses] = useState([])

    var errorMessage = false


    async function searchApi(_searchTerm){
        try
        {let response = await yelp.get('/search',{
            params:{
                limit:50,
                term:_searchTerm,
                location:'san jose'
            }
        })
        setBusinesses(response.data.businesses)}
        catch(err){
            errorMessage = err
        }
    }

    useEffect(() => searchApi("pasta") , [])

    return[searchApi,businesses,errorMessage]

}
    
