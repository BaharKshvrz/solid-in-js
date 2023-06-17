import logMessage from './logMessage.js';

class NewCalorieTracker {
    maxCaloriesCount: number;
    currentCaloriesCount: number;

    constructor(maxCaloriesCount: number) {
        this.maxCaloriesCount = maxCaloriesCount;
        this.currentCaloriesCount = 0;
    }

    trackCalories(calorieCountConsumed: number) {
       this.currentCaloriesCount += calorieCountConsumed;
       if (this.currentCaloriesCount > this.maxCaloriesCount) {
          this.logCaloriesSurplus();
       }
    }

    logCaloriesSurplus() {
        logMessage("Max calories exceeded ...");
    }
}

const newCalorieTracker = new NewCalorieTracker(2000);
newCalorieTracker.trackCalories(500);
newCalorieTracker.trackCalories(1000);
newCalorieTracker.trackCalories(700);