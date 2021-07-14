// Attention, l'import est necessaire !!!
import { useState } from "react";


const DemoState = () => {
    // Le state représente l'état local du composant.
    // -> L'ensemble des valeurs necessaire à l'affichage du composant.

    // Le hook d'état vous permet d'ajouter un state
    // -> Idéalement, il faut stocker une valeur par hook.
    const [text, setText] = useState('Le texte de base');

    const hanldeTextUpdate = () => {
        // Il faut utiliser la méthode "set..." pour modifier une valeur du state
        setText('Le texte à été mit à jours !')
    }

    const [isDay, setDay] = useState(false);

    const handleSwitchDay = () => {
        console.log('Switch !!!');

        // Si la nouvelle valeur dépend de l'ancienne, il faut utiliser une fonction
        setDay(value => !value);

        // Ecriture alternative ↓
        /*
        setDay(function(v) {
            return !v;
        });
        */
    }

    return (
        <div>
            {console.log('rendu')}
            <h2>Demo State</h2>
            <p>{text}</p>
            <button onClick={hanldeTextUpdate}>Ne pas cliquer ici</button>

            <h2>Demo State 2</h2>
            <div onClick={handleSwitchDay}>
                {isDay ? (
                    <p>Jour</p>
                ) : (
                    <p>Nuit</p>
                )}
            </div>
        </div>
    )
}

export default DemoState;