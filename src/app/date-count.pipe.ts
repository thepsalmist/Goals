import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); //get current date
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in milliseconds
    const secondsInADay = 86400; //60 seconds*60 minutes in an hour *24hours
    var dateDifferenceSeconds = dateDifference * 0.001; //converte to seconds
    var dateCounter = dateDifferenceSeconds / secondsInADay

    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;

    } else {
      return 0;
    }
  }

}
//we have @Pipe decorator that defines name of PipeTransform
//we have DateCountPipe class that has transform function that takes in value of any type
//
