function get_dual_dialogue_REG_EX(){
	// [^[A-Za-z0-9\s]*] => Will generate all special characters
	var special_characters = "\\s\\S";

	// characters
	var characters = "["+ special_characters + "]*";
	characters += "[A-Za-z]" + characters;

	// CHARACTER REGULAR EXPRESSION
	var capital_characters = "[A-Z0-9\\s]*";
	
	// no special characters are allowed in character; I wanted precede the character by @
	capital_characters += "[A-Z]" + capital_characters; 
	
	var forced_characters = "\\s*@["+ characters +"]*";
	var character_extensions = "(" + capital_characters + ")\\s*(\\([" + characters + "]*\\))\\s*";

	var foundation_dual_dialogue = "(^" + capital_characters + "\\s+\\^\\s*$|^" + character_extensions + "\\s+\\^\\s*$|^" + forced_characters + "\\s+\\^\\s*$)";
	var regEx_dual_dialogue = new RegExp(foundation_dual_dialogue);
	
	// TEST
	// console.log("  CHARLES " + regEx_dual_dialogue.test("CHARLES").toString());
	// console.log("CHARLES ^ " + regEx_dual_dialogue.test("CHARLES ^").toString());
	// console.log(" @CHARLES ^  " + regEx_dual_dialogue.test(" @CHARLES ^ ").toString());
	
	return regEx_dual_dialogue;
}


