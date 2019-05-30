export class Goal {
  public showDescription: boolean;
  constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
    this.showDescription = false
  }
}
//create a constructor that defines instances of each property of the class
//update goal class to add property for details
//we add completeDate argument to our constructor and give it type Date
