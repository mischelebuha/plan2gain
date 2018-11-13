export class Workout {
  public id: string;
  public title: string;
  public exercises: Exercise[];
}

export class Exercise {
  public id: string;
  public title: string;
  public description: string;
  public targetMuscleGroups: TargetMuscleGroup[];
  public sets?: Set[];
}

export class Set {
  public id: number;
  public reps: number; // Wiederholungen in einem Satz
  public rest: number; // Satzpause in Sekunden
}

export class MuscleGroup {
  public id: string;
  public name: string; // Name der Muskelgruppe
}

export class TargetMuscleGroup extends MuscleGroup {
  public utilisation: number; // Auslastung in Prozent
}

