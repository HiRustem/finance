var renderCurrentMonthInfo = ( expenseCalendar ) => {
  var currentMonthIncomeParagraph = document.querySelector('#currentMonthIncomeParagraph');
  var currentMonthConsumptionParagraph = document.querySelector('#currentMonthConsumptionParagraph');

  requestAnimationFrame(() => (
    currentMonthIncomeParagraph.querySelector('span').textContent = expenseCalendar.getIncome(),
    currentMonthConsumptionParagraph.querySelector('span').textContent = expenseCalendar.getConsumption()
  ));
}

export { renderCurrentMonthInfo };