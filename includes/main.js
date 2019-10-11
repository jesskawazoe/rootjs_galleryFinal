/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp() {
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
}
function makeGallery(imageArray) {
	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the images in the imageArray
	for (var currentImg = 0; currentImg < pictures.length; currentImg++) {
		//create the elements needed for each picture, store the elements in variable
		var figure = $("<figure>").addClass("imageGallery col-xs-12 col-sm-6 col-md-4").css('background-image', 'url(' + pictures[currentImg] + ')');
		console.log(pictures[currentImg]);
		//attach a click handler to the figure you create.  call the "displayImage" function.
		$(figure).on('click', displayImage);
		//append the element to the #gallery section
		$("#gallery").append(figure);
	}
	// side note: make sure to remove the hard coded html in the index.html when you are done!
}
function addModalCloseHandler() {
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	//var tempVar = $('modal-body').on('click').fade;
	$('.modal-body').on('click', function(){
		$('img').modal('hide');
	}
	)
}

function displayImage() {
	//find the url of the image by grabbing the background-image source, store it in a variable
	var backgroundImageSourceURL = $(this).css('background-image');
	//makes 'this' a jQuery object that points to those things
	console.log(backgroundImageSourceURL);
	//grab the direct url of the image by getting rid of the other pieces you don't need
	var directURL = backgroundImageSourceURL.lastIndexOf('images');
	console.log(directURL);

	var theMostDirectURL = backgroundImageSourceURL.slice(directURL, -2);
	console.log(theMostDirectURL);

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
	// pexels-photo-132037
	//take a look at the lastIndexOf method
	var index = theMostDirectURL.lastIndexOf('/');
	console.log('index: ', index);
	var result = theMostDirectURL.slice(index+1);
	console.log('result: ',result);


	$(".modal-title").text(result);

	//change the modal-title text to the name you found above
	$('.modal-title').text(result);
	//not sure if it is doing what I am asking?

	//change the src of the image in the modal to the url of the image that was clicked on
	$('#galleryModal img').attr('src', theMostDirectURL);

	//show the modal with JS.  Check for more info here:
	$('.modal').modal();
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}
