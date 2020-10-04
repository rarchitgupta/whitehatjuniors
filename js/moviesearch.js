function moviesearch() {
    var input = document.getElementById("movieInput");
    var filter = input.value.toUpperCase();
    var movieList = document.getElementById("movieList");
    var movie = movieList.getElementsByTagName("li");
    var i, a, content, txtValue;

    for (i = 0; i < movie.length; i++) {
        a = movie[i].getElementsByClassName("content")[0];
        content = a.getElementsByTagName("h2")[0];
        txtValue = content.textContent || content.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            movie[i].style.display = "";
        } else {
            movie[i].style.display = "none";
        }
    }
}