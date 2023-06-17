/*
  This class has 2 reasons for change: trackCalories and logging
*/

class CalorieTracker {
    maxCalories: number;
    currentCalories: number;
    constructor(maxCalories: number) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    // first responsibility
    trackCalories(calorieCount: number) {
       this.currentCalories += calorieCount;
       if (this.currentCalories > this.maxCalories) {
          this.logCaloriesSurplus();
       }
    }

    // second responsibility
    logCaloriesSurplus() {
        console.log("Max calories exceeded");
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);