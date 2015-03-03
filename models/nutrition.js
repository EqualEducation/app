Nutrition = new Mongo.Collection("nutrition");

NutritionSchema = new SimpleSchema({
  isInNutritionProgramme: {
    label: "Is the school in the National School Nutrition Programme?",
    type: Boolean,
      optional: true,
      autoform: {
           type: "boolean-radios",
           trueLabel: "Yes",
           falseLabel: "No",
    }
  },
  nutritionProgram: {
    optional: true,
    label: "Which of the following describes the school’s nutrition program?",
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Works well", value: 'Works well'},
          {label: "Sometimes or rarely works well ", value: 'Sometimes or rarely works well '},
          {label: "No nutrition program but school needs one", value: 'No nutrition program but school needs one'},
          {label: "No nutrition program necessary", value: 'No nutrition program necessary'},
        ];
      }
    }
  },
  hasNutritionCentre: {
    label: "Does the school have a nutrition centre?",
    type: Boolean,
      optional: true,
      autoform: {
           type: "boolean-radios",
           trueLabel: "Yes",
           falseLabel: "No",
    }
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 4,
    }
  }
});

Nutrition.attachSchema(NutritionSchema);