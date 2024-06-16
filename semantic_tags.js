document.addEventListener('DOMContentLoaded', function() {
    function semantic_tags() {
        const tags = [
            { tagName: 'h1', text: 'Titolo 1' },
            { tagName: 'h2', text: 'Titolo 2' },
            { tagName: 'h3', text: 'Titolo 3' },
            { tagName: 'h4', text: 'Titolo 4' },
            { tagName: 'h5', text: 'Titolo 5' },
            { tagName: 'h6', text: 'Titolo 6' },
            { tagName: 'header', text: 'Header' },
            { tagName: 'div', text: 'Content' },
            { tagName: 'main', text: 'Main' },
            { tagName: 'section', text: 'Section' },
            { tagName: 'aside', text: 'Aside' },
            { tagName: 'footer', text: 'Footer' }
        ];

        tags.forEach(item => {
            const element = document.createElement(item.tagName);
            element.innerText = item.text;
            document.body.appendChild(element);
        });
    }

    // Chiamata alla funzione per eseguire il codice
    semantic_tags();
});
