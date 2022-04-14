var display_card = $(".image-card")
var description = $(".description")

var card_elements = {
    date : $("#date"),
    picture : $("#thumbnail"),
    link : $("#subtitle-link")
}

var slideshow_buttons = {
    left : $("#slideshow-left"),
    right : $("#slideshow-right")
}

var info_hider = $("#wiper")

var game_info_dict = {
    0: ["Boxed In", "March 2nd, 2019", "../imgs/boxed-in", "https://teppi-le.itch.io/boxed-in"],
    1: ["How Fitting", "May 19th, 2020", "../imgs/how-fitting", "https://teppi-le.itch.io/how-fitting"],
    2: ["Off the Cuffs", "June 21st, 2020", "../imgs/off-the-cuffs", "https://teppi-le.itch.io/off-the-cuffs"],
    3: ["Ultimate Roulette Wheel", "March 31st, 2021", "../imgs/roulette", "https://teppi-le.itch.io/ultimtate-roulette-wheel"],
    4: ["An original game called Chess™", "December 21st, 2021", "../imgs/chess", "https://teppi-le.itch.io/an-original-game-called-chess"],
}
console.log("startup")
var current_card = 2
updateCard()

display_card.mouseover( function () {
    description.css("opacity", 1)
});

display_card.mouseleave( function () {
    description.css("opacity", 0)
});


console.log(Object.keys(game_info_dict).length)
slideshow_buttons.right.click(function () {
    if((current_card + 1) < Object.keys(game_info_dict).length){
        current_card += 1
    } else {
        current_card = 0
        console.log("eh")
    }
    updateCard()
});

slideshow_buttons.left.click(function () {
    if((current_card - 1) > -1){
        current_card -= 1
    } else {
        current_card = Object.keys(game_info_dict).length - 1
    }
    updateCard()
});

function updateCard() {
    var game_info = game_info_dict[current_card]
    console.log(current_card)
    info_hider.css("opacity", 1)
    setTimeout(() => {
        card_elements.link.html(game_info[0])
        card_elements.date.text(" - " + game_info[1])
        card_elements.picture.attr("src", game_info[2] + ".png")
        card_elements.link.attr("href", game_info[3])
        info_hider.css("opacity", 0)
    }, 400);
}
