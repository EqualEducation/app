var saveButtonClicked = false;

Template.schools.events({
      "click .btn-back" : function() {
        Router.go('/');
        return false;
      },
      "click .btn-save" : function() {
        $('#insertSchoolForm').submit();

        var name = AutoForm.getFieldValue("schoolDetails.INSTITUTION_NAME", "insertSchoolForm");
        var classification = AutoForm.getFieldValue("schoolDetails.CLASSIFICATION", "insertSchoolForm");
        var province = AutoForm.getFieldValue("schoolDetails.PROVINCE_NAME", "insertSchoolForm");

        if (!name || !classification || !province) {
          alert('Error saving school');
          return false;
        }
        saveButtonClicked = true;
        return false;
      },
  });

AutoForm.hooks({
  insertSchoolForm: {
      onSuccess: function(operation, result, template) {  
        console.log("Succes result: " + result);
        console.log("Success operation: " + operation);   
        if (operation === "insert") {
          Session.set("selectedSchoolId", result);
        };

        if (saveButtonClicked) {
          alert('Saved School');
          saveButtonClicked = false;
        }   

      },
      onError: function() {
        if (saveButtonClicked) {
          alert('Error saving school');
          saveButtonClicked = false;
        } 
      }
    }
});







