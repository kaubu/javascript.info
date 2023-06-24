"" + 1 + 0; // 10 /
"" - 1 + 0; // NaN? x, -1, empty strings "" evalute to 0
true + false; // 1 /
6 / "3"; // 2 /
"2" * "3"; // 6 /
4 + 5 + "px"; // 9px /
"$" + 4 + 5; // $45 /
"4" - 2; // 2 /
"4px" - 2; // NaN? /
"  -9  " + 5; // -4 x, becomes string as +
"  -9  " - 5; // -14 /
null + 1; // 1 /
undefined + 1; // NaN /
" \t \n" - 2; // NaN x, becomes -2, evaluated at Number

// Got 11/14