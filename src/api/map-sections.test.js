import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data is sent', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns with no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'january brings us firefox 85',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('january brings us firefox 85');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      content: 'abc',
      title: 'news coverage and some surprises',
      metadata: {
        background: false,
        _id: '60cfa420ee3ac13a770e72f5',
        name: 'intro',
        section_id: 'intro',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('abc');
    expect(data.title).toBe('news coverage and some surprises');
  });

  it('should map section text grid', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid-text',
      title: 'My Grid',
      description: 'abc',
      text_grid: [
        {
          _id: '60cfa492ee3ac13a770e730b',
          title: 'Teste 1',
          description: 'abc',
          id: '60cfa492ee3ac13a770e730b',
        },
      ],
      metadata: {
        background: true,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.description).toBe('abc');
    expect(data.title).toBe('My Grid');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('abc');
  });

  it('should map section text grid with no data', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });

  // it('should map section grid image', () => {
  //   const data = mapImageGrid(undefined);
  //   expect(data.background).toBe(false);
  //   expect(data.component).toBe('section.section-grid');
  //   expect(data.sectionId).toBe('');
  //   expect(data.description).toBe('');
  //   expect(data.title).toBe('');
  // });

  // it('should map section text grid with no data', () => {
  //   const data = mapImageGrid(undefined);
  //   expect(data.background).toBe(false);
  //   expect(data.component).toBe('section.section-grid');
  //   expect(data.sectionId).toBe('');
  //   expect(data.description).toBe('');
  //   expect(data.title).toBe('');
  // });
});
