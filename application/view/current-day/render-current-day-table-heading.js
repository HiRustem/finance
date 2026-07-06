var renderCurrentDayTableHeading = ( currentMonth ) => {
  var currentDayTableHeading = document.querySelector('#currentDayTableHeading > span');

  currentDayTableHeading.textContent = `${currentDayTableHeading.textContent} (${String(currentMonth.monthNumber).padStart(2, '0')}.${currentMonth.yearNumber})`;
}

export { renderCurrentDayTableHeading };