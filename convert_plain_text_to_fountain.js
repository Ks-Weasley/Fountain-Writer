function decipher_plain_text(plain_text, regObj){
	var deciphered_text = [];
	var font_family = "\'Courier New\', monospace";
	var simultaneous_character = 0;
	for(let i=0; plain_text.length; i++){
		var html_text = "";
		var type_of_object = "";
		var dialogues = "";
		var character = "";
		
		try{
		
			if(regObj['SCENE_HEADING'].test(plain_text[i])){
				if(regObj['SCENE_NUMBER'].test())
					type_of_object = "SCENE HEADING,SCENE NUMBER"; // Dunno what to do with scene number
				else 
					type_of_object = "SCENE HEADING";
				html_text = "<h3 id=\'scene_heading\'>" + plain_text[i] + "</h3><br>";
			}	
		
			else if(regObj['CHARACTER'].test(plain_text[i]) || regObj['DUAL_DIALOGUE'].test(plain_text[i])){
				
				// Check if forced character. If so then change the @ sign at the beggining 
				if(plain_text[i].trim()[0] == "@")
					plain_text[i].replace(/^(\s*@)/, "");
				plain_text[i] = plain_text[i].toUpperCase();
				
				// Check if dual dialogue - If so the id of all dual dialogues will be same as parent
				if(!regObj['DUAL_DIALOGUE'].test(plain_text[i])){
					simultaneous_character += 1;
					type_of_object = "CHARACTER";
					
				}
				
				else {
					plain_text[i].replace(/(\^\s*)$/, '');
					type_of_object = "CHARACTER,DUAL DIALOGUE";
				}
				
				// Add dialogues of the character
				character = plain_text[i];
				// ignore preceding new lines after the CHARACTER. However, give a Warning message in console.
				while((i+1)<plain_text.length && plain_text[i+1]==""){
						console.log("Warning - Line " + (i+1).toString() + ": Found empty lines after a Character!");
						i++;
					}
				while((i+1)<plain_text.length && plain_text[i+1]!=""){
					dialogues += plain_text[i+1] + "<br>";
					i++;
				}
				
				if(dialogues === "")
					throw("Line " + i.toString() +"Found one or more white spaces after a dialogue!");
				html_text = "<div id = \'character" + simultaneous_character.toString() + "\' >" + character + "<br>" + dialogues + "</div>";  
				
			}
		
			else if(regObj['TRANSITION'].test(plain_text[i])){
				if(plain_text[i].trim()[0] == ">")
					plain_text[i].replace( /^(\s*>)/,'');
				type_of_object = "TRANSITION";
				html_text = "<div id=\'transition\'>" + plain_text[i] + "</div>";
			}
		
			else if(regObj['CENTERED_TEXT'].test(plain_text[i])){
				type_of_object = "CENTER";
				plain_text[i] = plain_text[i].trim();
				plain_text[plain_text[i].length - 1] = '';
				plain_text[0] = '';
				html_text = "<div style=\'text-align:center\'>" + plain_text[i] + "</div>";
			}
			
			else if(regObj['PAGE_BREAK'].test(plain_text[i])){	
				type_of_object = "PAGE BREAK";
				html_text = "<hr>";
				
			}
			else{
				// Check if preceded by character - if so dialogue
				if(plain_text[i]===""){
					html_text = "<br>";
					type_of_object = 'EMPTY LINE';
				}
				else{
					html_text = "<div id=\'action\'>" + plain_text[i] + "</div><br>";
					type_of_object = "ACTION";
				}
			}
		}catch(err){
			console.log(err.name);
			return err;
		}
		deciphered_text.push({
			'PLAIN TEXT': (type_of_object.split(',')[0] === "CHARACTER")? character + "\n" + dialogues.replace(/<br>/, "\n") : plain_text[i],
			'HTML TEXT' : html_text,
			'TYPE' : type_of_object,
		});
	}
	
	for(let i=0; i< deciphered_text.length ; i++)
		console.log(deciphered_text[i]);

}
