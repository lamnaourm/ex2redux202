import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Augumenter, Diminuer, initialiser } from '../redux/ActionsCreators';
import * as Actions from '../redux/Actionstype'

const OperationsSolde = () => {

    const dispatch = useDispatch();
    const [valeur, setValeur] = useState(0);

    return (
        <div>
            <input type="number" placeholder='Donner une valeur...' value={valeur} onChange={(e) => setValeur(e.target.value)} /> <br/>
            <button onClick={() => dispatch(Augumenter(valeur))}>Augumenter</button>
            <button onClick={() => dispatch(Diminuer(valeur))}>Diminuer</button>
            <button onClick={() => dispatch(initialiser(valeur))}>initialiser</button>
        </div>
    );
}

export default OperationsSolde;
