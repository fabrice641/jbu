class StyleManager {
    constructor() {
        this.styleElement = document.createElement('style');
        this.styleElement.type = 'text/css';
        document.head.appendChild(this.styleElement);
    }

    addStyles(styles) {
        if (this.styleElement.styleSheet) {
            this.styleElement.styleSheet.cssText = styles; // Per IE8 e versioni precedenti
        } else {
            this.styleElement.appendChild(document.createTextNode(styles));
        }
    }
}

// Creazione di un'istanza della classe e aggiunta degli stili
const styleManager = new StyleManager();
const cssStyles = `
.image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Aggiunge spazio tra le immagini */
}

.styled-image {
    width: 100%;
    max-width: 500px;
    height: auto; /* Mantiene le proporzioni */
    padding: 10px; /* Aggiunge padding */
    box-sizing: border-box; /* Include il padding nella dimensione totale */
}

@media (max-width: 600px) {
    .styled-image {
        max-width: 100%; /* Immagini si adattano alla larghezza del contenitore */
    }
}

input {
    height: 70px;
    width: auto;
    border: 0;
}

button {
    height: 100px;
    width: auto;
    border: 0;
}
`;

styleManager.addStyles(cssStyles);
