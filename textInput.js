var audiof = document.getElementById("audio");
var transcriptf = document.getElementById("transcript");

function secondsToLabel(fullseconds) {
  var minutes = Math.floor(fullseconds / 60);
  var seconds = Math.round(fullseconds - minutes*60);
  if (seconds < 10) {
    var timevalue = minutes + ":0" + seconds;       
  } else {
    var timevalue = minutes + ":" + seconds; 
  }
  return timevalue;
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    var time = audiof.currentTime;
    var timevalue=secondsToLabel(time);

    li.setAttribute("data_timecode", timevalue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("transcript").appendChild(li);
      }
    document.getElementById("myInput").value = "";

    transcriptf.scrollBy(0, (-1)*transcriptf.scrollHeight);
    console.log(transcriptf.scrollHeight)
    console.log(transcriptf.scrollTop);



}



const todInput = document.getElementById("myInput");
todInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        newElement();
    }
});



