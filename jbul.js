
function loadCDNs() {
    const cdns = [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
        'https://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.css',
        'https://code.jquery.com/jquery-1.9.1.min.js',
        'https://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js'
    ];
    
    cdns.forEach(cdn => {
        if (cdn.endsWith('.css')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cdn;
            document.head.appendChild(link);
        } else if (cdn.endsWith('.js')) {
            const script = document.createElement('script');
            script.src = cdn;
            document.body.appendChild(script);
        }
    });
}

function createAndAppendElement(elementType, attributes = {}) {
    const element = document.createElement(elementType);
    for (let attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    document.body.appendChild(element);
}

function start() {
    loadCDNs();

    const HTMLTags = [
        'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
        'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div',
        'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head',
        'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map',
        'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param',
        'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span',
        'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead',
        'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'
    ];
    
    // Array to hold all HTML5 tags
    const allHTMLTags = [];
    
    // Using push to add all tags from HTMLTags to allHTMLTags
    HTMLTags.forEach(tag => allHTMLTags.push(`<${tag}></${tag}>`));
    
    

    const elementType = document.createElement(HTMLTags);
    document.appendChild(elementType);


    if (HTMLTags.includes(elementType.toLowerCase())) {
        const attributesInput = document.getElementsByTagName(HTMLTags);
        const attributes = parseAttributes(attributesInput);
        createAndAppendElement(elementType.toLowerCase(), attributes);
    } else {
        alert("Elemento HTML non valido.");
    }
}

function parseAttributes(attributesString) {
    const attributes = {};
    if (attributesString.trim() === "") return attributes;

    const attrs = attributesString.split(',');
    attrs.forEach(attr => {
        const [key, value] = attr.split('=');
        attributes[key.trim()] = value.trim();
    });
    return attributes;
}

start();