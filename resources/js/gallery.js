/**
 * Function to toggle and set message
 * for selected image in gallery view.
 * @param {object} selected_image - The selected image.
 * @returns {undefined}
 */
//made by Armughan
function showMsg(selected_image) {
    // finding message container div
    const message_box = document.getElementById("msg");
    // extracting message from selected image
    // ie. extracting value of attribute msg in <img>
    const message = selected_image.getAttribute("msg");
    // setting message for the selected image
    message_box.innerHTML = message;
    // checking if message for the image is hidden
    if (message_box.style.display == "none") {
        // making message box visible by setting empty display style
        message_box.style.display = "";
    } else {
        // hiding message box by making display style none.
        message_box.style.display = "none";
    }
}
