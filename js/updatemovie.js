function updateMovie(movieName) {
    switch (movieName) {
        case 'World War Z':
            localStorage["moviePoster"] = "./assets/worldwarz.jpg"
            localStorage["movieTitle"] = "World War Z";
            localStorage["cast"] = "Brad Pitt, Mireille Enos, Daniella Kertesz";
            localStorage["summary"] = "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself."
            break;
        case 'Arrival':
            localStorage["moviePoster"] = "./assets/arrival.jpg"
            localStorage["movieTitle"] = "Arrival";
            localStorage["cast"] = "Amy Adams, Jeremy Renner, Forest Whitaker";
            localStorage["summary"] = "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world."
            break;
        case 'A Quiet Place':
            localStorage["moviePoster"] = "./assets/quietplace.jpg"
            localStorage["movieTitle"] = "A Quiet Place";
            localStorage["cast"] = "Emily Blunt, John Krasinski, Millicent Simmonds";
            localStorage["summary"] = "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."
            break;
        case 'Gravity':
            localStorage["moviePoster"] = "./assets/gravity.jpg"
            localStorage["movieTitle"] = "Gravity";
            localStorage["cast"] = "Sandra Bullock, George Clooney, Ed Harris";
            localStorage["summary"] = "Two astronauts work together to survive after an accident leaves them stranded in space."
            break;
        case 'Interstellar':
            localStorage["moviePoster"] = "./assets/interstellar.jpg"
            localStorage["movieTitle"] = "Interstellar";
            localStorage["cast"] = "Matthew McConaughey, Anne Hathaway, Jessica Chastain";
            localStorage["summary"] = "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
            break;
        case 'Mad Max':
            localStorage["moviePoster"] = "./assets/madmax.jpg"
            localStorage["movieTitle"] = "Max Max: Fury Road";
            localStorage["cast"] = "Tom Hardy, Charlize Theron, Nicholas Hoult";
            localStorage["summary"] = "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max."
            break;
        case 'The Martian':
            localStorage["moviePoster"] = "./assets/martian.jpg"
            localStorage["movieTitle"] = "The Martian";
            localStorage["cast"] = "Matt Damon, Jessica Chastain, Kristen Wiig";
            localStorage["summary"] = "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive."
            break;
        case 'Tenet':
            localStorage["moviePoster"] = "./assets/tenet.jpg"
            localStorage["movieTitle"] = "Tenet";
            localStorage["cast"] = "John David Washington, Robert Pattinson, Elizabeth Debicki";
            localStorage["summary"] = "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time."
            break;
        default:
            break;
    }
}