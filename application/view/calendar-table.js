var renderCalendarTable = ( expenseCalendar ) => {
  var currentMonth = expenseCalendar.getCurrentMonth();
  var currentMonthDays = Object.values( currentMonth.days );

  var currentMonthTableHeading = document.querySelector('#currentMonthTableHeading');
  var currentMonthTableBody = document.querySelector('#currentMonthTableBody');
  var tableRowTemplate = document.querySelector('#recordRowTemplate');
  var tableRowHeadingTemplate = document.querySelector('#recordRowHeadingTemplate');

  currentMonthTableHeading.textContent = `${currentMonthTableHeading.textContent} (${currentMonth.monthNumber}.${currentMonth.yearNumber})`;

  requestAnimationFrame(() => {
    for (let i = 0; i < currentMonthDays.length; i++) {
      var currentDay = currentMonthDays[i];

      var titleRow = document.createElement('tr');
      var titleCell = document.createElement('th');

      titleCell.textContent = currentDay.date.toString();
      titleCell.setAttribute('colspan', 5);
      titleCell.style.padding = '5px';
      titleRow.appendChild( titleCell );

      currentMonthTableBody.appendChild( titleRow );

      var tableRowHeadingTemplateClone = document.importNode( tableRowHeadingTemplate.content, true );

      var tableRowHeadingTemplateCells = tableRowHeadingTemplateClone.querySelectorAll( 'th' );
      tableRowHeadingTemplateCells[0].textContent = 'Name';
      tableRowHeadingTemplateCells[1].textContent = 'Description';
      tableRowHeadingTemplateCells[2].textContent = 'Amount';
      tableRowHeadingTemplateCells[3].textContent = 'Currency';
      tableRowHeadingTemplateCells[4].textContent = 'Category name';

      currentMonthTableBody.appendChild( tableRowHeadingTemplateClone );

      for (let j = 0; j < currentDay.records.length; j++) {
        var currentRecord = currentDay.records[j];
        var rowTemplateClone = document.importNode( tableRowTemplate.content, true)

        var rowHeading = rowTemplateClone.querySelector('th');
        var rowCells = rowTemplateClone.querySelectorAll('td');

        rowHeading.textContent = currentRecord.name;
        rowCells[0].textContent = currentRecord.description;
        rowCells[1].textContent = currentRecord.amount;
        rowCells[2].textContent = currentRecord.currency;
        rowCells[3].textContent = currentRecord.category.name;

        currentMonthTableBody.appendChild( rowTemplateClone );
      }
    }
  });
}

export { renderCalendarTable };