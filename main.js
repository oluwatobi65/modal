//getmodal element//
var modal= document.getElementById('simpleModal');
//get modal button//
var modalbtn= document.getElementById('modalBtn');
// close btn//
var closebtn= document.getElementById('closebtn');
//listen to open button
modalBtn.addEventListener('click', openModal);
// listen for close click
closebtn.addEventListener('click', closeModal);
// outside click
window.addEventListener('click', outsideClick);

// function
function openModal(){
	modal.style.display='block';
}
// function to close modal
function closeModal(){
	modal.style.display= 'none';
}
//function to close modal
function outsideClick(e){
	if (e.target==modal) {
	modal.style.display= 'none';	
	}
	
}