import React from 'react'
import { useParams } from 'react-router'

const CharacterScreen = () => {
    const {id} = useParams();


    return (
        <>
           {id}
        </>
    )
}

export default CharacterScreen
