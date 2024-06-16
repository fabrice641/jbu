function loadCDNs() {
    const cdns = [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
        'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js',
        'https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css',
        'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        'https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js',
        'https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js',
        'https://ajax.googleapis.com/ajax/libs/d3js/7.9.0/d3.min.js',
        'https://ajax.googleapis.com/ajax/libs/dojo/1.13.0/dojo/dojo.js',
        'https://ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js',
        'https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js',
        'https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.3/themes/smoothness/jquery-ui.css',
        'https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.3/jquery-ui.min.js',
        'https://ajax.googleapis.com/ajax/libs/listjs/2.3.1/list.min.js',
        'https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.0/model-viewer.min.js',
        'https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js',
        'https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.2.1/zawgyi_detector.min.js',
        'https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.2.1/zawgyi_converter.min.js',
        'https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js',
        'https://ajax.googleapis.com/ajax/libs/scriptaculous/1.9.0/scriptaculous.js',
        'https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js',
        'https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js',
        'https://ajax.googleapis.com/ajax/libs/threejs/r84/three.min.js',
        'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
        'https://unpkg.com/vue@3/dist/vue.global.js',
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
        'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes', 'noscript',
        'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rp', 'rt',
        'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot', 'small', 'source', 'spacer', 'span', 'strike',
        'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 
        'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'
    ];
    
    // Example of how the programmer can define the elementType and attributes
    const elementType = 'div';  // Define the HTML element type here
    const attributesInput = 'id=myDiv,class=myClass';  // Define the attributes here

    if (HTMLTags.includes(elementType.toLowerCase())) {
        const attributes = parseAttributes(attributesInput);
        createAndAppendElement(elementType.toLowerCase(), attributes);
    } else {
        console.error("Elemento HTML non valido.");
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
