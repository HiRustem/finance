import { createDayString, createMonthString, createYearString, emptyCalendarState } from "../../modules/entities/index.js";
import {
  updateCalendarMonth,
  getCalendarMonthIncome,
  getCalendarMonthConsumption,
  getCalendarDay, 
  getCalendarMonth,
  addRecordToCalendar,
  removeRecordFromCalendar,
  makeCalendarOperationWrapper,
  addEmptyMonth,
  addEmptyDay,
  updateMonthIncome,
  updateMonthConsumption,
  getCalendarYear,
  addEmptyYear,
  getCalendarRecordByIndex,
  getCalendarRecordById,
} from '../../modules/entities-utils/index.js';

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
    getCalendarDay( this.state )( createYearString( new Date() ) )( createMonthString( new Date() ) )( createDayString( new Date() ) )
  );

  this.getCurrentMonth = () => (
    getCalendarMonth( this.state )( createYearString( new Date() ) )( createMonthString( new Date() ) )
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