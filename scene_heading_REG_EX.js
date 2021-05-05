function generate_scene_start_string(){
	var res = "";
    var scene_start_temp = [
		"int",
		"ext",
		"est",
		"int.\/ext",
		"int\/ext",
		"i\/e"
	];
	
	for(let i=0; i< scene_start_temp.length; i++){
            	var temp = scene_start_temp[i].toUpperCase();
		res += scene_start_temp[i];  //int
		res += '\\s|';  
		res += temp;  //INT
		res += '\\s|';
		res += scene_start_temp[i] + '.'; //int.
		res += '\\s|' ;
		res += temp + '.';  //INT.
		res += '\\s|';
	}
	res = res.slice(0, res.length-1);
	return res;
}

function get_scene_heading_REG_EX(){
	// generate scene_start_string
	var scene_start = generate_scene_start_string();

	// special characters
	var new_line = "\\n";
	var special_characters = "\\s\\S";

	// characters
	var characters = "[" + special_characters + "]*";
	characters += "[A-Za-z]" + characters;

	// SCENE HEADING
	var foundation_scene_heading = "^(" + scene_start + ")(" + characters + ")*(" + new_line + ")*$|^[.][^.][\\s\\S]*";

	// create a REGULAR EXPRESSION for SCENE HEADING
	var regEx_scene_heading = new RegExp(foundation_scene_heading);
	var temp = /(([iI][nN][tT]|[eE][xX][tT]|[eE][sS][tT]|[iI]\.?\/[eE])((?=\.|\/|\s)(.+))*)/;

	// console.log("INT. SCENE 1 " + regEx_scene_heading.test("INT. SCENE 1").toString());
	// console.log("EXT SCENE 2 " + regEx_scene_heading.test("EXT SCENE 2").toString());
	// console.log("ext. SCENE 3 " + regEx_scene_heading.test("ext. SCENE 3").toString());
	// console.log("Exxxtr SCENE 4 " + regEx_scene_heading.test("Exxxtr SCENE 4").toString());
	// console.log(" There in the bushes I see my heading ext scene 5 " + regEx_scene_heading.test(" There in the bushes I see my heading ext scene 5").toString());
	// console.log("\\t int scene x " + regEx_scene_heading.test("\t int scene x").toString());
	// console.log("int.\/ext. scene y " + regEx_scene_heading.test("int.\/ext. scene y").toString());
	// console.log("y " + regEx_scene_heading.test("y").toString());
	// console.log(".xyz " + regEx_scene_heading.test(".xyz").toString());

	// console.log("GIVEN: ");
	// console.log("INT. SCENE 1 " + temp.test("INT. SCENE 1").toString());
	// console.log("EXT SCENE 2 " + temp.test("EXT SCENE 2").toString());
	// console.log("ext. SCENE 3 " + temp.test("ext. SCENE 3").toString());
	// console.log("Exxxtr SCENE 4 " + temp.test("Exxxtr SCENE 4").toString());
	// console.log(" There in the bushes I see my heading ext scene 5 " + temp.test(" There in the bushes I see my heading ext scene 5").toString());
	// console.log("\\t int scene x " + temp.test("\t int scene x").toString());
	// console.log("int.\/ext. scene y " + temp.test("int.\/ext. scene y").toString());
	// console.log("y " + temp.test("y").toString());
	// console.log(".xyz " + temp.test(".xyz").toString());


	return regEx_scene_heading;
}

get_scene_heading_REG_EX();
