/**
 * Function to toggle and set message
 * for selected image in gallery view.
 * @param {object} selected_image - The selected image.
 * @returns {undefined}
 */
function showMsg(selected_image) {
    // finding message container
    const message_box = document.getElementById("msg");
    // extracting message from selected image
    const message = selected_image.getAttribute("msg");
    // setting message for the selected image
    message_box.innerHTML = message;
    // checking if image is hidden
    if (message_box.style.display == "none") {
        // making message box visible be setting empty display style
        message_box.style.display = "";
    } else {
        // hiding message box by making display style none.
        message_box.style.display = "none";
    }
}