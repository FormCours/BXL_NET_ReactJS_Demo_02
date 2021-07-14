const DemoEvent = () => {

    const actionBtn = () => {
        console.log('L\'utilisateur a cliqué sur le bouton :o');
    }

    const actionOver = () => {
        console.log('L\'utilisateur passe sa souri sur le titre');
    }
    
    const actionLink = (e) => { // On récupere la variable d'evenement 'e'

        // On utilise la méthode 'preventDefault' qui déactive le comportement par defaut
        e.preventDefault();

        console.log('L\'utilisateur a cliqué sur le lien =)');
    }

    // Note : Le 'preventDefault' sera très utile avec la gestion des formulaires

    return (
        <div>
            <h2 onMouseOver={actionOver}>Demo Event</h2>

            <h3>Click sur bouton</h3>
            <button onClick={actionBtn}>Click here !</button>
            
            <h3>Click sur lien (Une balise "a")</h3>
            <a href="http://google.com" onClick={actionLink}>Le lien...</a>
        </div>
    )
}

export default DemoEvent;