/**
 * Call the API to fetch dog images
 * @param {dogBreed} Breed of the dog
 */
function getDogPics(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response=>response.json())
    .then(responseJson=>validateBreedAndUpdateDOM(responseJson))
    .catch(error=>alert("Oops! something went wrong"));

}

/**
 * Validate the user specified breed and update the DOM
 */
function validateBreedAndUpdateDOM(responseJson) {
    if(responseJson.status==="error" && responseJson.code===404) {
        $('.result-status').text("Uh-oh! The specified breed could not be found.")
        return;
    }
   $('.result-status').text("Found the breed! Here is a picture") 
   $('.dog-images').append(`<img src='${responseJson.message}'>`);
}

/**
 * Add a listener for form submission
 */
function addSubmitListener() {
    $('form').submit(event=> {
        event.preventDefault();
        let dogBreed = $('#dog-breed').val().toLowerCase();
        if(!dogBreed) {
            alert("Enter a valid number for dog images");
            return;
        } 
        $(".result-status").empty();
        $(".dog-images").empty();
        getDogPics(dogBreed);
    });
}


$(function(){
    addSubmitListener();
});