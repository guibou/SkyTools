$(function ()
{
    load("#questions_c");
    load("#questions_bpa");
});

function load(name) {
    file = $(name).attr('data-file');
    $.get(file, function (data) { setup(data, name); });
}

function setup(data, name)
{
	lines = data.split("\n\n");

	placeholder = $(name);

	for(i = 0; i < lines.length / 2; ++i)
	{
		question = lines[2 * i];
		answers = lines[2 * i + 1].split('\n');

	        item = $('<fieldset data-role="controlgroup"></fieldset>')
		item.append($('<p>' + question + "</p>"));

		for(j = 0; j < answers.length; ++j)
		{
		    label = $("<label></label>");
		    id = "q" + i / 2;
		    radio = $('<input type="radio" id="' + id + '" name="'+id+'" data-mini="true">');
		    answer = answers[j];
		    if(answer.length == 0)
			continue;
		    label.append(radio);
		    label.append(answer.substr(3, answer.length - 3));

		    correct = answer.substr(1, 1) == '*';
		    if(correct)
			    label.addClass("correct");
		    else
			label.addClass("incorrect");

		    item.append(label);
		}

	        placeholder.append(item);

	}

    placeholder.trigger("create");

    //$("input[type=radio]").change(update_status);
    //update_status();
}
/*
function update_status()
{
	// Count the number of items
	n = $("#questions fieldset").length;

	done = $("#questions input[type=radio]:checked").length;
		
	document.getElementById("total").innerHTML = n;
	document.getElementById("done").innerHTML = done;
	document.getElementById("percent").innerHTML = Math.ceil(done * 100 / n);
}
*/
