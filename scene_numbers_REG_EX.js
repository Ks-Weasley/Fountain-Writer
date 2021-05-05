function get_scene_number_REG_EX(){

	var regEx_scene_number = /#[A-Za-z0-9\-.]+#/;
	
	// TEST
	// console.log("##" + regEx_scene_number.test("##"));
	// console.log("#1A#" + regEx_scene_number.test("#1A#"));
	// console.log("#1-I-A#" + regEx_scene_number.test("#1-I-A#"));
	// console.log("#1.#" + regEx_scene_number.test("#1.#"));
	// console.log("#1 " + regEx_scene_number.test("#1"));
	
	return regEx_scene_number;

}


