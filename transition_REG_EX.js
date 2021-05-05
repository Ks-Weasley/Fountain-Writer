function get_transition_REG_EX(){
	// special characters
	var new_line = "\\n";
	var special_characters = "\\s\\S";

	// characters
	var characters = "[A-Za-z0-9" + special_characters + "]*";
	characters += "[A-Za-z]" + characters;

	// TRANSITION
	var foundation_transition = "[\\s]*[A-Z]*(TO:)$|^>[" + characters + "]*$";

	// REGULAR EXPRESSION
	var regEx_transitions = new RegExp(foundation_transition);
	var temp = /([\*_]*([^<>\na-z]*TO:|FADE TO BLACK[\.|\:]|FADE OUT[\.|\:]|CUT TO BLACK[\.|\:])[\*_]*)/;
	// console.log(regEx_transitions);

// 	// TEST
// 	console.log("CUT TO: " + regEx_transitions.test("CUT TO:").toString());
// 	console.log("CUT TO: " + regEx_transitions.test("CUT TO: ").toString());
// 	console.log("MOVE OUT: " + regEx_transitions.test("MOVE OUT:").toString());
// 	console.log("MOVE TOOo:  " + regEx_transitions.test("MOVE TOOO: ").toString());
// 	console.log("\\t CUT TO: " + regEx_transitions.test("\t CUT TO:").toString());

// 	var temp = /([^<>a-z:!\?\n]*[^<>a-z\(!\?:,\.]?)/;

// 	console.log("GIVEN: ");
// 	console.log("CUT TO: " + temp.test("CUT TO:").toString());
// 	console.log("CUT TO: " + temp.test("CUT TO: ").toString());
// 	console.log("MOVE OUT: " + temp.test("MOVE OUT:").toString());
// 	console.log("MOVE TOOO:  " + temp.test("MOVE TOOO: ").toString());
// 	console.log("\\t CUT TO: " + temp.test("\t CUT TO:").toString());

	return regEx_transitions;
}

// get_transition_REG_EX();
