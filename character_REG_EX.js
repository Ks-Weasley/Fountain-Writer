function get_character_REG_EX(){
	
	// [^A-Za-z0-9\s]* => Will generate all special characters
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

	var foundation_characters = "(^" + capital_characters + "$|^" + character_extensions + "$|^" + forced_characters + "$)";
	var regEx_characters = new RegExp(foundation_characters);
	
	var temp = /([^<>a-z:!\?\n]*[^<>a-z\(!\?:,\.]?)/;
	// console.log(regEx_characters);
	

//	console.log("MARK " + regEx_characters.test("MARK").toString());
// 	console.log("HENRY " + regEx_characters.test("HENRY ").toString());
// 	console.log("  DARK  " + regEx_characters.test("  DARK  ").toString());
// 	console.log(" There in the bushes " + regEx_characters.test(" There in the bushes").toString());
// 	console.log("int.\/ext. scene y " + regEx_characters.test("int.\/ext. scene y").toString());
// 	console.log("y " + regEx_characters.test("y").toString());
// 	console.log("MARK.HENRY " + regEx_characters.test("MARK.HENRY").toString());
	
// 	console.log("@int scene x " + regEx_characters.test("@int scene x").toString());
// 	console.log("@int ,'dd/'ddd ddd\\scene x,;" + regEx_characters.test("@int ,'dd/'ddd   ddd\\scene x,;").toString());
	

// 	console.log("GIVEN: ");
// 	console.log("MARK " + temp.test("MARK").toString());
// 	console.log("HENRY " + temp.test("HENRY ").toString());
// 	console.log("  DARK  " + temp.test("  DARK  ").toString());
// 	console.log(" There in the bushes " + temp.test(" There in the bushes").toString());
// 	console.log("int.\/ext. scene y " + temp.test("int.\/ext. scene y").toString());
// 	console.log("y " + temp.test("y").toString());		
// 	console.log("MARK.HENRY " + temp.test("MARK.HENRY").toString());
	
// 	console.log("@int scene x " + temp.test("@int scene x").toString());
// 	console.log("@int ,'dd/'ddd ddd\\scene x,;" + temp.test("@int ,'dd/'ddd   ddd\\scene x,;").toString());
	
	return regEx_characters;
}


