
 //var apikey="rotX86FszzvGQLoKU5IZJvssJtJOxlmZ";


            // Initial array of movies
            var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

            // displayMovieInfo function re-renders the HTML to display the appropriate content
            function displayMovieInfo() {

                var movie = $(this).attr("data-name");
                var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

                // Creates AJAX call for the specific movie button being clicked
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function(response) {

                    // Creates a div to hold the movie
                    // var d = $('<div>');
                    console.log(response);
                    //$("#movies-view").append(d);
                    // Retrieves the Rating Data
                    $("#movies-view").append('<h1>' + response.Title + '</h1>');
                    // Creates an element to have the rating displayed
                    $("#movies-view").append('<h1> Rating: ' + response.Rated + '</h1>');
                    // Displays the rating
                    // var ratings = response.Ratings();
                    // var ratingDiv = $('<div>');
                    // ratingDiv.text(ratings);
                    // $("#movies-view").append(ratingDiv);
                    // Retrieves the release year
                    $("#movies-view").append('<h1> Release Year: ' + response.Released + '</h1>');
                    // Creates an element to hold the release year
                    // Displays the release year
                    // Retrieves the plot
                    // Creates an element to hold the plot
                    // Appends the plot
                    // Creates an element to hold the image
                    // Appends the image
                    var imgURL = response.Poster;
                    var imagen = $("<img>").attr("src", imgURL);
                    $("#movies-view").prepend(imagen);
                    // Puts the entire Movie above the previous movies.
                });

            }

            // Function for displaying movie data
            function renderButtons() {

                // Deletes the movies prior to adding new movies
                // (this is necessary otherwise you will have repeat buttons)
                $("#buttons-view").empty();
                // Loops through the array of movies
                for (var i = 0; i < movies.length; i++) {

                    // Then dynamicaly generates buttons for each movie in the array
                    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
                    var a = $("<button>");
                    // Adds a class of movie to our button
                    a.addClass("movie");
                    // Added a data-attribute
                    a.attr("data-name", movies[i]);
                    // Provided the initial button text
                    a.text(movies[i]);
                    // Added the button to the buttons-view div
                    $("#buttons-view").append(a);
                }
            }

            // This function handles events where the add movie button is clicked
            $("#add-movie").on("click", function(event) {
                event.preventDefault();
                // This line of code will grab the input from the textbox
                var movie = $("#movie-input").val().trim();

                // The movie from the textbox is then added to our array
                movies.push(movie);

                // Calling renderButtons which handles the processing of our movie array
                renderButtons();
            });

            // Adding click event listeners to all elements with a class of "movie"
            $(document).on("click", ".movie", displayMovieInfo);

            // Calling the renderButtons function to display the intial buttons
            renderButtons();
        
     