window.onload = function() {
    images = document.getElementsByClassName("expandable");

    for (var i = 0; i < images.length; i++) {
        console.log(images[i].id);

        img = images[i];
        modal = document.getElementById("modal"+images[i].id);
        close = document.getElementById("close"+images[i].id);
        
        img.onclick = function() {
            document.getElementById("modal"+this.id).style.display = "block";
        }

        close.onclick = function() {
            var closeid = this.id;
            var imgid = closeid.substr(5);
            document.getElementById("modal"+imgid).style.display = "none";
        }
    }
}