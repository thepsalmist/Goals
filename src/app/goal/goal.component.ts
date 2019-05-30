import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  //styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son', new Date('2018,4,5')),
    new Goal(2, 'Buying cookies', 'I have to buy cookies for my Cookie', new Date('2018,8,19')),
    new Goal(3, 'Get Phone Case', 'I have to get a red phone case', new Date('2019,5,13')),
    new Goal(4, 'Get Dog Food', 'Cause the dog always hungry', new Date('2018,5,6')),
    new Goal(5, 'Solve Maths problems', 'Cause i can do it', new Date('2018,3,4')),
    new Goal(6, 'Post My world domination plan', 'Cause I am one hell of a beast', new Date('2019,2,2')),
  ]
  //create completeGoal function here
  //use splice function to delete goal from our array

  //we create deleteGoal function that takes in isComplete(boolean value) and index
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm('Are you sure you wnat to delete ${this.goals[index].name})')

      if (toDelete) {
        //if user confirms goal to be deleted we use splice fxn to remove the goal
        this.goals.splice(index, 1);
      }
    }
  }
  toggleDetails(index) {
    //   //toggleDetails function locates goal at index passes then executes showDetail
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  //create addNewGoal function takes goal object as argument
  addNewGoal(goal) {
    let goalLength = this.goals.length;//get length of array goal and store in a variable
    goal.id = goalLength + 1;//set new id to goalLength+1
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)//push new goal to array of goals
  }
  constructor() { }

  ngOnInit() {
  }

}
