export class Workout {
  public _id: string;
  public title: string;
  public exercises: Exercise[];
}

export class Exercise {
  public _id: string;
  public title: string;
  public description: string;
  public targetMuscleGroups: TargetMuscleGroup[];
  public sets?: Set[];
}

export class Set {
  public reps: number; // Wiederholungen in einem Satz
  public rest: number; // Satzpause in Sekunden
}


export class MuscleGroup {
  public _id: string;
  public name: string; // Name der Muskelgruppe
}

export class TargetMuscleGroup extends MuscleGroup {
  utilisation: number; // Auslastung in Prozent
}

