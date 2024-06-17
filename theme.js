document.addEventListener('DOMContentLoaded', function () {

    function DOM_title() {
        // Suppongo che tu voglia fare qualcosa con questi elementi, altrimenti non serve ripetere la selezione
        const titolo1 = document.getElementsByClassName('app')[0];
        const titolo2 = document.getElementsByClassName('app')[1];
        const titolo3 = document.getElementsByClassName('app')[2];
        const titolo4 = document.getElementsByClassName('app')[3];
        const titolo5 = document.getElementsByClassName('app')[4];
        const titolo6 = document.getElementsByClassName('app')[5];
        
        // Fai qualcosa con titolo1, titolo2, ...
    }

    function semanticDOM() {
        const header = document.createElement('header');
        const div = document.createElement('div');
        const main = document.createElement('main');
        const section = document.createElement('section');
        const aside = document.createElement('aside');
        const footer = document.createElement('footer');

        // Aggiungi classi agli elementi creati, se necessario
        header.className = 'app';
        div.className = 'app';
        main.className = 'app';
        section.className = 'app';
        aside.className = 'app';
        footer.className = 'app';

        // Appendi gli elementi al body o ad altri elementi nel DOM
        document.body.appendChild(header);
        document.body.appendChild(div);
        document.body.appendChild(main);
        document.body.appendChild(section);
        document.body.appendChild(aside);
        document.body.appendChild(footer);

        // Adesso puoi selezionare questi elementi per ulteriori manipolazioni
        const appElements = document.getElementsByClassName('app');
        for (let element of appElements) {
            document.appendChild(element.tagName); // Visualizza il tag degli elementi con classe 'app'
        }
    }

    semanticDOM();
});