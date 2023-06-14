var audioplayer = document.getElementById("audio");
const todoInput = document.getElementById("myInput");
var DInterval;

const nodes = [0.0];
let groundNode = 0; //The starting node in repeat, the final node in continue. First ground is 0, then go on (1, 2, 3)

/**
 * displays
 */
var pnodeOutput = document.getElementById("groundNode");
var nodesOutput = document.getElementById("nodes");

function addNode() {
    nodes.push(audioplayer.currentTime);
    //only used for Control+D
    console.log("Added node at time " + audioplayer.currentTime + "and now nodes is " + nodes);
    //currently does not work if user wants to add a node in the middle. Will need to use splice()
}

/*
*Control + D
   defined as creating a node and repeating
   startnode is initial groundnode
   end node is last node in node[]
   andddd repeat

$$$$$$$\  
$$  __$$\ 
$$ |  $$ |
$$ |  $$ |
$$ |  $$ |
$$ |  $$ |
$$$$$$$  |
\_______/ 
          
          
          

*/
todoInput.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key==="d") {
  
      console.log("start repeating!");
      addNode(); 
      playSubsection();
      event.preventDefault();
      //-------

    }


  });
  let yesClearInterval = false;
  DInterval = setInterval(function() {
    if (audioplayer.currentTime >= nodes[startNode+1] && !(yesClearInterval)) {

      //clearInterval(timer);
      audioplayer.currentTime = nodes[startNode];

    } 
    console.log("runn9ing!");
  }, 0, nowTime, Nexttime);
  function playSubsection() {

    console.log("Groundnode = " + groundNode);
    var startNode = groundNode;
    if (startNode > nodes.length-1) {
      console.log("Cannot playSubsection!");
    }
    audioplayer.currentTime=nodes[startNode];

    audioplayer.play();
    console.log("From: " + nodes[startNode] + " To: " + nodes[startNode+1]);
    
    DInterval = setInterval(function () 
    {
      /*
      if(yesClearInterval) {
        clearInterval(DInterval);
        yesClearInterval = false;
      }*/
      if (audioplayer.currentTime >= nodes[startNode+1] && !(yesClearInterval)) {

        //clearInterval(timer);
        audioplayer.currentTime = nodes[startNode];

      } 
      console.log("runn9ing!");
    }, 0);




    }

let isClicked = "hi";
  
/**
 * Control + F
 * stop repeating(yesClearinterval = true)
 * set groundnode to the last node in node[]
 * play()
 * 
 * 
$$$$$$$$\ 
$$  _____|
$$ |      
$$$$$\    
$$  __|   
$$ |      
$$ |      
\__|      
          
          
          
 */

  todoInput.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key==="f") {
        isClicked = "bye";
      console.log("nextSubsection!");
      NextSubsection();
      event.preventDefault();
    }
  });
  function NextSubsection() {


    groundNode += 1;
    clearInterval(DInterval);
    
    console.log("time should be: " + nodes[groundNode]);
    audioplayer.currentTime = nodes[groundNode] + 0.01;



    console.log(groundNode, nodes);
    console.log(nodes.length - 2);
    if(groundNode == (nodes.length - 1)) {

      console.log("end@");

    } else if(groundNode !=(nodes.length - 1)) {

      audioplayer.pause();

      playSubsection();
      console.log("middle!");
    }

}

/**
 * Control S
 * remember, this scenario is both for after D and F
 * groundnode -= 1
 * 
 * 
  $$$$$$\  
$$  __$$\ 
$$ /  \__|
\$$$$$$\  
 \____$$\ 
$$\   $$ |uwey
\$$$$$$  |
 \______/ 
          
          
          
 */
todoInput.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key==="s") {
  
      console.log("nextSubsection!");
      previousSubsection();
      event.preventDefault();
    }
  });
  function previousSubsection() {
    groundNode -= 1;
    console.log("Groundnode now is: " + groundNode);
    yesClearInterval = false;
    playSubsection();

  }
todoInput.addEventListener("keydown", function(event) {
  pnodeOutput.innerHTML="groundnode: " + groundNode;
  nodesOutput.innerHTML="node list: " + nodes.toString();
  console.log(groundNode, nodes);
});

todoInput.addEventListener("keydown", function(event) {
  if (event.key==="n") {

    console.log("clear interval!");
    clearInterval(DInterval);
  }
});