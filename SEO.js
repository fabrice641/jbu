function SEO() {
  const text = {
    principle_title: 'h1',
    text_after_title: 'p',
    secondary_title: 'h2',
    secondary_text_after_title: 'p',
    theerty_title: 'h3',
    theerty_text_after_title: 'p'
  };

  // Create and append elements based on the 'text' object
  const titleElement = document.querySelector('title');
  const principleTitleElement = document.querySelector(text.principle_title);
  const principleTextElement = document.querySelector(text.text_after_title);

  if (titleElement && principleTitleElement && principleTextElement) {
    document.body.appendChild(principleTitleElement);
    document.body.appendChild(principleTextElement);
  }

  const descriptionElement = document.querySelector('meta[name="description"]');
  const secondaryTitleElement = document.createElement(text.secondary_title);
  const secondaryTextElement = document.createElement(text.secondary_text_after_title);
  const theertyTitleElement = document.createElement(text.theerty_title);
  const theertyTextElement = document.createElement(text.theerty_text_after_title);

  // Append newly created elements to the body
  if (secondaryTitleElement && secondaryTextElement && theertyTitleElement && theertyTextElement) {
    document.body.appendChild(secondaryTitleElement);
    document.body.appendChild(secondaryTextElement);
    document.body.appendChild(theertyTitleElement);
    document.body.appendChild(theertyTextElement);
  }

  // Append meta description to the head
  if (descriptionElement) {
    document.head.appendChild(descriptionElement);
  }

  // Append title to the head
  if (titleElement) {
    document.head.appendChild(titleElement);
  }
}

SEO();
