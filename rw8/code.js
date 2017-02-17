"use strict;"

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


var items = []

for(var c = 'A'.charCodeAt(0); c <= 'Q'.charCodeAt(0); c++)
{
    cc = String.fromCharCode(c)

    if(cc == 'I')
        continue;

    items.push(cc);
}

for(var i = 1; i <= 22; i++)
{
    items.push(i);
}

items = shuffle(items);

showLetter = false;

function setLetter(l)
{
    $("#content").css("background-image", "none");
    $("#content").text(l);
}

function setImage(l)
{
    $("#content").css("background-image", "url('" + toPath(l) + "')");
    $("#content").text("");
}

var randomIndex = 0;

function toggle()
{
    showLetter = !showLetter;

    if(showLetter)
    {
        randomIndex += 1;

        if(randomIndex == items.length)
        {
            items = shuffle(items);

            randomIndex = 0;
        }
        currentLetter = items[randomIndex];
        setLetter(currentLetter);
    }
    else
    {
        setImage(currentLetter);
    };
}

function toPath(item)
{
    return "data/" + item + ".jpg";
}

$(function () {
    // preload
    for(var i = 0; i < items.length; i++)
    {
        $("<img />").attr("src", toPath(items[i]));
    }

    $("body").click(toggle);
    $("body").keypress(toggle);

    toggle();
});
