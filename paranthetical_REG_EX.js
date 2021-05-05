function get_paranthetical_REG_EX(){
	// special characters
	var new_line = "\\n";
	var special_characters = "\\s\\S";

	// characters
	var characters = "[A-Za-z0-9" + special_characters + "]*";
	characters += "[A-Za-z]" + characters;

	// PARANTHETICAL REGULAR EXPRESSION
	var foundation_paranthetical = "^["+special_characters+"]*\\((" + characters + ")*\\)[" + special_characters + "]*$"
	var regEx_paranthetical = new RegExp(foundation_paranthetical);
	var temp = /(\(.*\))/;
	// console.log(foundation_paranthetical);

// 	// TEST
// 	console.log("(): " + regEx_paranthetical.test("()").toString());
// 	console.log("(O.S) " + regEx_paranthetical.test("(O.S)").toString());
// 	console.log("(This is Lord Voldemort): " + regEx_paranthetical.test("(This is Lord Voldemort)").toString());
// 	console.log("\\t \t (He who must not be 1234): " + regEx_paranthetical.test("\t (He who must not be 1234)").toString());
// 	console.log(" There in the bushes I see my heading ext scene 5 " + regEx_paranthetical.test(" There in the bushes I see my heading ext scene 5").toString());
// 	console.log("   (  XASDFFSsenf  )   : " + regEx_paranthetical.test("   (  XASDFFSsenf  )   ").toString());


// 	console.log("GIVEN: ");
// 	console.log("(): " + temp.test("()").toString());
// 	console.log("(O.S) " + temp.test("(O.S)").toString());
// 	console.log("(This is Lord Voldemort): " + temp.test("(This is Lord Voldemort)").toString());
// 	console.log("\\t \t (He who must not be 1234): " + regEx_paranthetical.test("\t (He who must not be 1234)").toString());
// 	console.log(" There in the bushes I see my heading ext scene 5 " + temp.test(" There in the bushes I see my heading ext scene 5").toString());
// 	console.log("   (   XASDFFSsenf   )   : " + temp.test("   (  XASDFFSsenf  )    ").toString());

	return regEx_paranthetical;
}


