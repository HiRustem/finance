var renderCurrentDayTable = ( expenseCalendar ) => {
  var currentMonth = expenseCalendar.getCurrentMonth();
  var currentMonthDays = Object.values( currentMonth.days );

  var currentDayTable = document.querySelector('#currentDayTable');
  var currentMonthTableBody = document.querySelector('#currentMonthTableBody');
  var tableRowTemplate = document.querySelector('#recordRowTemplate');

  var currentDay = getDefaultCurrentDay( currentMonthDays );

  if (!currentDay) return;

  requestAnimationFrame(() => {
    renderCurrentDayTableCaption( currentDayTable )( currentDay.date.toString() );

    if (!currentDay.records.length) return;

    currentMonthTableBody.hasChildNodes() ? currentMonthTableBody.replaceChildren([]) : currentMonthTableBody;

    for (let i = 0; i < currentDay.records.length; i++) {
      currentMonthTableBody.appendChild(
        fillCurrentDayTableRecordRow
        ( document.importNode( tableRowTemplate.content, true) )
        ( currentDay.records[i] )
      );
    }
  });
}

var getDefaultCurrentDay = ( currentMonthDays ) => ( currentMonthDays[currentMonthDays.length - 1] );

var renderCurrentDayTableCaption = 
( currentDayTable ) => 
( currentDayDate ) => {
  var existedCaption = currentDayTable.querySelector('caption');
  var caption = document.createElement('caption');

  caption.textContent = currentDayDate;
  caption.style.paddingBlock = '10px';

  if (!!existedCaption) {
    existedCaption.remove();
  };

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