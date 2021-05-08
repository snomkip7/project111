var images = ["beach.jpg", "car2.jpg", "forest.jpg", "pencil.jpg", "hat.jpg"];
var results_micro = ["'name': 'water', 'confidence': 0.999684", "'object': 'Wheel', 'confidence': 0.534 AND 'name': 'land vehicle', 'confidence': 0.957034", "'name': 'tree', 'confidence': 0.9999896", "'name': 'writing implement', 'confidence': 0.806576133", "'name': 'hat', 'confidence': 0.9801668"] 
var i = 0;
var j = 0;
function different(){
    document.getElementById("test").src = images[i];
    document.getElementById("micro").innerHTML = results_micro[j]
    i++;
    j++;
    if(i>4){
        i=0;
        j=0;
    }
}