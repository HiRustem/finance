import { updateMonthConsumption, updateMonthIncome } from '../../../modules/entities-utils/month/month-editors.js';
import { emptyCalendarState } from "../../../modules/entities/calendar.js";
import { createDayString, createMonthString, createYearString } from "../../../modules/entities/date.js";
import { makeCalendarOperationWrapper } from '../../../modules/entities-utils/calendar/calendar-wrapper.js';
import { addEmptyDay, addEmptyMonth, addEmptyYear, addRecordToCalendar, removeRecordFromCalendar, updateCalendarMonth } from '../../../modules/entities-utils/calendar/calendar-editors.js';
import { getCalendarDay, getCalendarMonth, getCalendarMonthConsumption, getCalendarMonthIncome, getCalendarRecordById, getCalendarRecordByIndex, getCalendarYear } from '../../../modules/entities-utils/calendar/calendar-getters.js';

function ExpenseCalendar(state) {
  this.state = state ?? emptyCalendarState;

  this.operationWrapper = ( calendarState ) => ( date ) => (
    makeCalendarOperationWrapper(
      getCalendarYear( calendarState )( createYearString( date ) )
    )(
      getCalendarMonth( calendarState )( createYearString( date ) )( createMonthString( date ) )
    )(
      getCalendarDay( calendarState )( createYearString( date ) )( createMonthString( date ) )( createDayString( date ) )
    )(
      () => ( addEmptyYear( calendarState )( createYearString( date ) ) )
    )(
      () => (
        addEmptyMonth( calendarState )( createYearString( date ) )( createMonthString( date ) ),
        true
      )
    )(
      () => (
        addEmptyDay( calendarState )( createYearString( date ) )( createMonthString( date ) )( createDayString( date ) ),
        true
      )
    )
  );
  
  this.getIncome = () => ( 
    this.operationWrapper( this.state )( new Date() )(
      () => (
        getCalendarMonthIncome( this.state )
        ( createYearString( new Date() ) )
        ( createMonthString( new Date() ) )
      )
    )
  );

  this.getConsumption = () => ( 
    this.operationWrapper( this.state )( new Date() )(
      () => (
        getCalendarMonthConsumption( this.state )
        ( createYearString( new Date() ) )
        ( createMonthString( new Date() ) )
      )
    )
  );

  this.addIncome = ( value ) => 
    (
      this.operationWrapper( this.state )( new Date() )(
        () => (
          updateCalendarMonth( this.state )
          ( createYearString( new Date() ) )
          ( createMonthString( new Date() ) )
          (
            updateMonthIncome(
              getCalendarMonth( this.state )
              ( createYearString( new Date() ) )
              ( createMonthString( new Date() ) )
            )
            (
              Number( 
                getCalendarMonthIncome( this.state )
                ( createYearString( new Date() ) )
                ( createMonthString( new Date() ) )
              ) + Number( value ) 
            )      
          )
        )
      )    
    );

  this.removeIncome = ( value ) => 
    (
      this.operationWrapper( this.state )( new Date() )(
        () => (
          updateCalendarMonth( this.state )
          ( createYearString( new Date() ) )
          ( createMonthString( new Date() ) )
          (  
            updateMonthIncome(
              getCalendarMonth( this.state )
              ( createYearString( new Date() ) )
              ( createMonthString( new Date() ) )
            )
            ( Number( 
              getCalendarMonthIncome( this.state )
              ( createYearString( new Date() ) )
              ( createMonthString( new Date() ) )
            ) - Number( value )  )
          )
        )
      )
    );

  this.addConsumption = ( value ) => 
    (
      this.operationWrapper( this.state )( new Date() )(
        () => (
          updateCalendarMonth( this.state )
          ( createYearString( new Date() ) )
          ( createMonthString( new Date() ) )
          (  
            updateMonthConsumption(
              getCalendarMonth( this.state )
              ( createYearString( new Date() ) )
              ( createMonthString( new Date() ) )
            )
            ( 
              Number(
                getCalendarMonthConsumption( this.state )
                ( createYearString( new Date() ) )
                ( createMonthString( new Date() ) )
              ) + Number( value )  
            )
          )
        )
      )
    );

  this.removeConsumption = ( value ) => 
    (
      this.operationWrapper( this.state )( new Date() )(
        () => (
          updateCalendarMonth( this.state )
          ( createYearString( new Date() ) )
          ( createMonthString( new Date() ) )
          (  
            updateMonthConsumption(
              getCalendarMonth( this.state )
              ( createYearString( new Date() ) )
              ( createMonthString( new Date() ) )
            )
            ( 
              Number(
                getCalendarMonthConsumption( this.state )
                ( createYearString( new Date() ) )
                ( createMonthString( new Date() ) )
              ) - Number( value ) 
            )
          )
        )
      )
    );

  this.getCurrentDay = () => (
    this.operationWrapper( this.state )( new Date() )(
      () => (
        getCalendarDay( this.state )
        ( createYearString( new Date() ) )
        ( createMonthString( new Date() ) )
        ( createDayString( new Date() ) )
      )
    )
  );

  this.getCurrentMonth = () => (
    this.operationWrapper( this.state )( new Date() )(
      () => (
        getCalendarMonth( this.state )
        ( createYearString( new Date() ) )
        ( createMonthString( new Date() ) )
      )
    )
  );

  this.addRecord = ( record ) => (
    this.operationWrapper( this.state )( new Date() )(
      () => (
        addRecordToCalendar( this.state )
        ( createYearString( new Date() ) )
        ( createMonthString( new Date() ) )
        ( createDayString( new Date() ) )
        ( record )
      )
    ),
    true
  );

  this.removeRecord = ( record ) => (
    this.operationWrapper( this.state )( new Date() )(
      () => (
        removeRecordFromCalendar( this.state )
        ( createYearString( new Date() ) )
        ( createMonthString( new Date() ) )
        ( createDayString( new Date() ) )
        ( record )
      )
    ),
    true
  );

  this.getRecordByIndex = ( index ) => (
    getCalendarRecordByIndex( this.state )
    ( createYearString( new Date() ) )
    ( createMonthString( new Date() ) )
    ( createDayString( new Date() ) )
    ( index )
  );

  this.getRecordById = ( id ) => (
    getCalendarRecordById( this.state )
    ( createYearString( new Date() ) )
    ( createMonthString( new Date() ) )
    ( createDayString( new Date() ) )
    ( id )
  );
}

export { ExpenseCalendar };