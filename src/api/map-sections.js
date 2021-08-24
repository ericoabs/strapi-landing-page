export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (sections.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (sections.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (sections.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  /*
  {
        "__component": "section.section-two-columns",
        "title": "january brings us firefox 85",
        "description": "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
        "metadata": {
          "background": true,
          "section_id": "home",
        },
        "image": {
          "url": "https://res.cloudinary.com/dvawcyisr/image/upload/v1624220407/javascript_6992900498.svg",

      }
*/
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
