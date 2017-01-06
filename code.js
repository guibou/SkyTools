"use strict;"

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

function toggle()
{
    showLetter = !showLetter;

    if(showLetter)
    {
	im = Math.trunc(Math.random() * items.length);
	currentLetter = items[im];
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
