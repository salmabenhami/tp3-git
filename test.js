var testCases = [
    { note: 10, expected: "la mention est passable" },
    { note: 11.5, expected: "la mention est passable" },
    { note: 12, expected: "la mention est assez bien" },
    { note: 13.5, expected: "la mention est assez bien" },
    { note: 14, expected: "la mention est bien" },
    { note: 15.5, expected: "la mention est bien" },
    { note: 16, expected: "la mention est très bien" },
    { note: 19.5, expected: "la mention est très bien" },
    { note: 9, expected: "la note est invalid, veuillez saisir une notre entre 10 et 20" },
    { note: 21, expected: "la note est invalid, veuillez saisir une notre entre 10 et 20" },
  ];
  
  testCases.forEach(({ note, expected }) => {
    var a = parseFloat(note);
    var result;
    
    if (a >= 10 && a < 12) {
      result = "la mention est passable";
    } else if (a >= 12 && a < 14) {
      result = "la mention est assez bien";
    } else if (a >= 14 && a < 16) {
      result = "la mention est bien";
    } else if (a >= 16 && a < 20) {
      result = "la mention est très bien";
    } else {
      result = "la note est invalid, veuillez saisir une notre entre 10 et 20";
    }
  
    console.log(`Note: ${note}, Expected: "${expected}", Got: "${result}"`);
    if (result !== expected) {
      throw new Error(`Test failed for note ${note}`);
    }
  });
  