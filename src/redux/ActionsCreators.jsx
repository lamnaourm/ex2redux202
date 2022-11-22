import * as Actions from './Actionstype'


const Augumenter = (valeur) => {
    return {
        type : Actions.AUGUMENTER,
        payload: valeur
    }
}

const Diminuer = (valeur) => {
    return {
        type : Actions.DIMINUER,
        payload: valeur
    }
}

const initialiser = (valeur) => {
    return {
        type : Actions.INIT,
        payload: valeur
    }
}

export {Augumenter, Diminuer, initialiser}