var strings_list = ["Programming", "Database", "Designing" , "Gaming", "Tech Stuffs"];	//Strings to be displayed
var string_number = 0;		//Index of current string that is being displayed
var character_index = 0;		//Character index of the string
var interval_flag;		// Holds the handle returned from setInterval
var html_element = document.querySelector("#typewriting");	//ID selection for typewriting

// Implements typing effect
function Type() { 
	var typewriting =  strings_list[string_number].substring(0, character_index + 1);
	html_element.innerHTML = typewriting;
	character_index++;

	//When sentence is fully typed, it waits for the timeout amount of period.
	if(typewriting === strings_list[string_number]) {
		clearInterval(interval_flag);
		setTimeout(function() {
			interval_flag = setInterval(Delete, 50);	//This integer value controls the speed of text appearance.
		}, 1500);	//Time for which the text will be shown after being typed fully.
	}
}

//This function deletes text. It is set in motion by the Type function. It is kind of an inter-recursion that causes an infinite loop to be developed within.
function Delete() {		
	var typewriting =  strings_list[string_number].substring(0, character_index - 1);
	html_element.innerHTML = typewriting;
	character_index--;

	// If sentence has been deleted then start to display the next sentence
	if(typewriting === '') {
		clearInterval(interval_flag);

		//Next sentence is selected.
		if(string_number == (strings_list.length - 1)){
			string_number = 0;
		}
		else{
			string_number++;
			character_index = 0;
		}

		// Start to display the next sentence after some time
		setTimeout(function() {
			interval_flag = setInterval(Type, 80);	//This integer value controls the speed of text disappearance.
		}, 300);	//Time for which the nothing will be displayed.
	}
}

// Start the typing effect on load
interval_flag = setInterval(Type, 30);