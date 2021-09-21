/*

Swap the number

*/


var swap = function(array, firstIndex, secondIndex) {
	var tmp = array[secondIndex];
	array[secondIndex] = array[firstIndex];
	array[firstIndex] = tmp;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);

swap(testArray, 0, 2);

println(testArray);

Program.assertEqual(testArray, [4, 7, 9]);

swap(testArray, 0, 2);

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);
