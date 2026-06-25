var renderCategoryTable = ( categoryManager ) => {
  var categoryTable = document.querySelector('#categoryTable');
  var categoryRowHeadingTemplate = document.querySelector('#categoryRowHeadingTemplate');
  var categoryRowTemplate = document.querySelector('#categoryRowTemplate');

  var categories = Object.values(categoryManager.getState());
  
  var categoryRowHeadingTemplateClone = document.importNode( categoryRowHeadingTemplate.content, true );

  var categoryRowHeadingTemplateCells = categoryRowHeadingTemplateClone.querySelectorAll( 'th' );

  requestAnimationFrame(() => {
    categoryTable.hasChildNodes() ? categoryTable.replaceChildren([]) : categoryTable;

    categoryRowHeadingTemplateCells[0].textContent = 'Id';
    categoryRowHeadingTemplateCells[1].textContent = 'Name';
    categoryRowHeadingTemplateCells[2].textContent = 'Description';

    categoryTable.appendChild( categoryRowHeadingTemplateClone );

    for (let i = 0; i < categories.length; i++) {
      var currentCategory = categories[i];
      var categoryRowTemplateClone = document.importNode( categoryRowTemplate.content, true );

      var categoryRowTemplateHeading = categoryRowTemplateClone.querySelector('th');
      var categoryRowTemplateCells = categoryRowTemplateClone.querySelectorAll('td');

      categoryRowTemplateHeading.textContent = currentCategory.id;
      categoryRowTemplateCells[0].textContent = currentCategory.name;
      categoryRowTemplateCells[1].textContent = currentCategory.description;

      categoryTable.appendChild( categoryRowTemplateClone );
    }
  });
}

export { renderCategoryTable };