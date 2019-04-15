  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBF-tm1raCZ04vUD3KKHZyHsyMM5rWvrAg",
    authDomain: "train-scheduler-ba389.firebaseapp.com",
    databaseURL: "https://train-scheduler-ba389.firebaseio.com",
    projectId: "train-scheduler-ba389",
    storageBucket: "train-scheduler-ba389.appspot.com",
    messagingSenderId: "536871174028"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $(`#add-train-btn`).click(function(event) {
      event.preventDefault();

      var train = $(`#train-name-input`).val().trim();
      var destination = $(`#destination-input`).val().trim();
      var firstTrainTime = $(`#first-train-time-input`).val().trim();
      var trainFrequency = $(`#train-frequency`).val().trim();

      var newTrain = {
          train: train, 
          destination: destination, 
          firstTrainTime: firstTrainTime, 
          trainFrequency: trainFrequency
      };

  database.ref().push(newTrain);

  console.log(newTrain.train);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrainTime);
  console.log(newTrain.trainFrequency);

  train = $(`#train-name-input`).val().trim("");
  destination = $(`#destination-input`).val().trim("");
  firstTrainTime = $(`#first-train-time-input`).val().trim("");
  trainFrequency = $(`#train-frequency`).val().trim("");
});

