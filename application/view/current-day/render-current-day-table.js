var renderCurrentDayTable = ( expenseCalendar ) => {
  var currentMonth = expenseCalendar.getCurrentMonth();
  var currentMonthDays = Object.values( currentMonth.days );

  var currentDayTable = document.querySelector('#currentDayTable');
  var currentMonthTableBody = document.querySelector('#currentMonthTableBody');
  var tableRowTemplate = document.querySelector('#recordRowTemplate');

  fillCurrentDayTableHeading( currentMonth );

  var currentDay = getDefaultCurrentDay( currentMonthDays );

  if (!currentDay) return;

  requestAnimationFrame(() => {
    renderCurrentDayTableCaption( currentDayTable )( currentDay.date.toString() );

    if (!currentDay.records.length) return;

    for (let i = 0; i < currentDay.records.length; i++) {
      currentMonthTableBody.appendChild(
        fillCurrentDayTableRecordRow
        (
          document.importNode( tableRowTemplate.content, true)
        )
        (
          currentDay.records[i]
        )
      );
    }
  });
}

var fillCurrentDayTableHeading = ( currentMonth ) => {
  var currentDayTableHeading = document.querySelector('#currentDayTableHeading');

  currentDayTableHeading.textContent = `${currentDayTableHeading.textContent} (${String(currentMonth.monthNumber).padStart(2, '0')}.${currentMonth.yearNumber})`;
}

var getDefaultCurrentDay = ( currentMonthDays ) => ( currentMonthDays[currentMonthDays.length - 1] );

var renderCurrentDayTableCaption = 
( currentDayTable ) => 
( currentDayDate ) => {
  var caption = document.createElement('caption');

  caption.textContent = currentDayDate;
  caption.style.paddingBlock = '10px';

  currentDayTable.appendChild( caption );
}

var fillCurrentDayTableRecordRow = ( rowNode ) => ( currentRecord ) => {
  var rowHeading = rowNode.querySelector('th');
  var rowCells = rowNode.querySelectorAll('td');

  rowHeading.textContent = currentRecord.name;
  rowCells[0].textContent = currentRecord.description;
  rowCells[1].textContent = currentRecord.amount;
  rowCells[2].textContent = currentRecord.currency;
  rowCells[3].textContent = currentRecord.category.name;

  return rowNode;
}

export { renderCurrentDayTable };