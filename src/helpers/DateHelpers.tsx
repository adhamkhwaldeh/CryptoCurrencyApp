import moment from 'moment';
import LoggingHelper from './LoggingHelper';
import {String} from 'typescript-string-operations';

export default class DateHelpers {
  static SERVER_Format_Tag: string = 'yyyy-MM-DDTHH:mm:ss'; //yyyy-MM-DD'T'kk:mm:ss.SSS
  static Standard_Format_Tag: string = 'yyyy-MM-DD';
  static Standard_Datetime_Format_Tag: string = 'yyyy-MM-DD kk:mm'; //yyyy-MM-dd'T'HH:mm:ss

  //2021-06-15T18:13:46.0223952

  static getStanderdFormate(date: Date): string {
    LoggingHelper.log('getStanderdFormate');
    //     LoggingHelper.log(date);
    //    var mom= moment()
    //      mom.date =date;
    //        (.(date))
    return moment(date).format(DateHelpers.Standard_Format_Tag); //
  }

  static getStanderdDatetimeFormate(date: Date): string {
    //     LoggingHelper.log(date);
    //    var mom= moment()
    //      mom.date =date;
    //        (.(date))
    return moment(date).format(DateHelpers.Standard_Datetime_Format_Tag); //
  }

  static getStanderdDateFormatFromString(date: string): string {
    return moment(date).format(DateHelpers.Standard_Format_Tag); //
  }

  static getStanderdDatetimeFormatFromString(date: string): string {
    return moment(date).format(DateHelpers.Standard_Datetime_Format_Tag); //
  }

  static getCurrentDateInServerFormat(): string {
    //LoggingHelper.log('date ' + date);
    //    var mom= moment()
    //      mom.date =date;
    //        (.(date))
    return moment(new Date()).format(DateHelpers.SERVER_Format_Tag); //
  }

  static getDifferences(startDate: Date, endDate: Date): string {
    //milliseconds
    var different: number = endDate.getTime() - startDate.getTime();
    const secondsInMilli: number = 1000;
    const minutesInMilli = secondsInMilli * 60;
    const hoursInMilli = minutesInMilli * 60;
    const daysInMilli = hoursInMilli * 24;
    // const elapsedDays = different / daysInMilli;
    different %= daysInMilli;
    const elapsedHours = different / hoursInMilli;
    different %= hoursInMilli;
    const elapsedMinutes = different / minutesInMilli;
    different %= minutesInMilli;
    // const elapsedSeconds = different / secondsInMilli;
    return String.Format(
      '{0:00}:{1:00}',
      Math.trunc(elapsedHours),
      Math.trunc(elapsedMinutes),
    );
  }

  static getDayOfDate(date: string): string {
    // return String.Format('{0:00}', Math.trunc(moment(date).toDate().getDay()));
    return moment(date).format('DD');
  }

  static getMonthYearDate(date: string): string {
    return moment(date).format('MMM/yyyy'); //
  }

  static getHoursMinutes(date: string): string {
    return moment(date).format('HH:mm'); //
  }
}
