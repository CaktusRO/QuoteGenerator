let button = document.querySelector("#button")
let quote = document.querySelector("#quote")
let quotee = document.querySelector("#quotee")
let author = document.querySelector("#author")

let number;
let previousNumber;
let max;


button.addEventListener("click", function(max) {
    max = 21
    number = Math.floor(Math.random() * max)
    if (previousNumber == number) {
        while (true) {
            number = Math.floor(Math.random() * max)
            if (previousNumber !== number) break;
        } }
    if (number == 0) {
        quote.innerHTML = "Be the change you wish to see in the world!"
        author.innerHTML = "-Mahatma Gandhi"
    } else if (number == 1) {
        quote.innerHTML = "I have never let my schooling interfere with my education!"
        author.innerHTML = "-Mark Twain"
    }
    else if (number == 2) {
        quote.innerHTML = "Εν οίδα ότι ουδέν οίδα<br> (I know that I know nothing)"
        author.innerHTML = "-Socrates"
    }
    else if (number == 3) {
        quote.innerHTML = "There are two things a person should never be angry at: what they can help and what they cannot."
        author.innerHTML = "-Plato"
    }
    else if (number == 4) {
        quote.innerHTML = "Everybody is a genius, but if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."
        author.innerHTML = "-Albert Einstein"
    }
    else if (number == 5) {
        quote.innerHTML = "A winner is a dreamer who never gives up."
        author.innerHTML = "-Nelson Mandela"
    }
    else if (number == 6) {
        quote.innerHTML = "Keep your face always toward the sunshine - and shadows will fall behind you."
        author.innerHTML = "-Walt Whitman"
    }
    else if (number == 7) {
        quote.innerHTML = "In a time of deceit, telling the truth is a revolutionary act."
        author.innerHTML = "-George Orwell"
    }
    else if (number == 8) {
        quote.innerHTML = "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."
        author.innerHTML = "-Henry Ford"
    }
    else if (number == 9) {
        quote.innerHTML = "Those who deny freedom to others deserve it not for themselves."
        author.innerHTML = "-Abraham Lincoln"
    }
    else if (number == 10) {
        quote.innerHTML = "A lie can travel halfway around the world while the truth is putting on its shoes."
        author.innerHTML = "-Mark Twain"
    }
    else if (number == 11) {
        quote.innerHTML = "A smile is a curve that sets everything straight."
        author.innerHTML = "-Phyllis Diller"
    }
    else if (number == 12) {
        quote.innerHTML = "A mind is like a parachute. It doesn't work if it isn't open."
        author.innerHTML = "-Frank Zappa"
    }
    else if (number == 13) {
        quote.innerHTML = "Let no man pull you so low as to hate him."
        author.innerHTML = "-Martin Luther King Jr."
    }
    else if (number == 14) {
        quote.innerHTML = "Well done is better than well said."
        author.innerHTML = "-Benjamin Franklin"
    }
    else if (number == 15) {
        quote.innerHTML = "There are no secrets to success. It is the result of preparation, hard work, and learning from failure."
        author.innerHTML = "-Colin Powell"
    }
    else if (number == 16) {
        quote.innerHTML = "It is better to fail in originality than to succeed in imitation."
        author.innerHTML = "-Herman Melville"
    }
    else if (number == 17) {
        quote.innerHTML = "When you undervalue what you do, the world will undervalue who you are."
        author.innerHTML = "-Oprah Winfrey"
    }
    else if (number == 18) {
        quote.innerHTML = "Believe you can and you're halfway there."
        author.innerHTML = "-Theodore Roosevelt"
    }
    else if (number == 19) {
        quote.innerHTML = "You miss 100% of the shots you don't take."
        author.innerHTML = "-Wayne Gretzky"
    }
    else if (number == 20) {
        quote.innerHTML = "Nothing is impossible, the word itself says, ‘I'm possible!'"
        author.innerHTML = "-Audrey Hepburn"
    }
    console.log(number)
    previousNumber = number
})