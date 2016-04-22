
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("coolbeans.gif")) {
        image.src = "https://pbs.twimg.com/profile_images/3509378528/c7d45fb4669be7e91de03a827b821929.jpeg";
    } else {
        image.src = "coolbeans.gif";
    }
}
