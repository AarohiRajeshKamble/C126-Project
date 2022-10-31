function setup() {
       canvas = createCanvas(300, 300);
       canvas.create();
       video = createCanvas(VIDEO);   
       video.hide();
       classifier = ml5.imageClassifier('https://teachine.withgoogle.com/models/ylc2slq4M/model.json',modelLoade);
  }
  function modelLoade() {
       console.log('Model Loaded');
  }

  function draw() {
     image(video, 0, 0, 300, 300);
     classifier.classify(video, gotresult);
  }

  function gotresult(error, results) {
     if (error) {
          console.log(results);
     } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].cofidence.toFixed (3); 
     }
  }