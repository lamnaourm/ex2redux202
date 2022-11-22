import React from 'react';
import { useSelector } from 'react-redux';

const ShowSolde = () => {

    const solde = useSelector(state => state.solde);

    return (
        <div>
            <h1>Votre Solde : {solde}</h1>
        </div>
    );
}

export default ShowSolde;
