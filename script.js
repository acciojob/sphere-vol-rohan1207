function volume_sphere() {
    //Write your code here

	let radius=parseFloat(document.querySelector("#radius").value)
	let volume=document.querySelector("#volume");
	

	if(isNaN(radius) || radius<0){
		volume.value="NaN";
		
	}
	else{
		let calculatedVolume=(4 / 3) * Math.PI * Math.pow(radius, 3);
		volume.value=calculatedVolume.toFixed(4);
		
	}
	return false;



	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
