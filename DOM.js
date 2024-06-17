// Import JavaScript modules
import { DOM_title, semanticDOM } from './themes.js';
import './jquery-ui.js';
import './jquery-ui.min.js';

// Import CSS files
import './jquery-ui.css';
import './jquery-ui-structure.css';
import './jquery-ui-structure.min.css';
import './jquery-ui-theme.min.css';
import './jquery-ui-theme.css';

// Example usage of imported modules
document.addEventListener('DOMContentLoaded', () => {
  DOM_title();
  semanticDOM();
});



document.addEventListener('DOMContentLoaded', function () {

    function HTML() {
        // Crea nuovi elementi
        const titolo1 = document.createElement('header');
        const titolo2 = document.createElement('div');
        const titolo3 = document.createElement('main');
        const titolo4 = document.createElement('section');
        const titolo5 = document.createElement('aside');
        const titolo6 = document.createElement('footer');

        // Imposta il contenuto di testo per ciascun elemento
        titolo1.textContent = 'Header';
        titolo2.textContent = 'Div';
        titolo3.textContent = 'Main';
        titolo4.textContent = 'Section';
        titolo5.textContent = 'Aside';
        titolo6.textContent = 'Footer';

        // Appendi gli elementi al body
        document.body.appendChild(titolo1);
        document.body.appendChild(titolo2);
        document.body.appendChild(titolo3);
        document.body.appendChild(titolo4);
        document.body.appendChild(titolo5);
        document.body.appendChild(titolo6);

        // Seleziona tutti gli elementi con classe 'app'
        const appElements = document.getElementsByClassName('app');
        for (let element of appElements) {
            console.log(element.tagName); // Visualizza il tag degli elementi con classe 'app'
        }
    }

    HTML();
});
