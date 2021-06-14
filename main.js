let rowCounter = 0
let totalWeight = 0
let totalGradeProd = 0

// Adds new row to table
function addNewRow () {
  totalCredits = 0
  totalGradeProd = 0
  rowCounter++
  document.getElementById('grade').innerHTML = ''
  document.getElementById('letter-grade').innerHTML = ''
  console.log(rowCounter)
  document.getElementById('wrapper').innerHTML += `<span>
  <input type="text" id="ass${String(rowCounter)}">
  <input type="number" id="grade${String(rowCounter)}">
  <input type="number" id="weight${String(rowCounter)}">
  </span>`
}

// Calculates numeric and letter grade
function calculateGrade () {
  // No assignments added
  if (
    document.getElementById('grade1') == null &&
    document.getElementById('weight1') == null
  ) {
    alert('Please add at least one assignment')
  }

  // Fields are blank
  else if (
    document.getElementById('grade1').value == '' &&
    document.getElementById('weight1').value == ''
  ) {
    alert('Please fill in the grade and weight fields')
  } else {
    var i = 1
    // Loop through table to get total weight and total grade product
    while (i <= rowCounter) {
      // Get Grade
      var grade = document.getElementById('grade' + i).value

      // Get Weight
      var weight = document.getElementById('weight' + i).value

      // Grade Product
      var gradeProd = 0

      gradeProd = grade * weight

      // Add to total weight
      totalCredits += Number(weight)

      // Add to total grade product
      totalGradeProd += gradeProd

      i++
    }

    // Calculate grade
    var totalGrade = totalGradeProd / totalCredits
    document.getElementById('grade').innerHTML = totalGrade.toFixed(2)

    // Convert grade into letter grade
    var letterGrade = ''
    if (totalGrade >= 97) {
      letterGrade = 'A+'
    } else if (totalGrade >= 93 && totalGrade <= 97) {
      letterGrade = 'A'
    } else if (totalGrade >= 90 && totalGrade < 93) {
      letterGrade = 'A-'
    } else if (totalGrade >= 87 && totalGrade < 90) {
      letterGrade = 'B+'
    } else if (totalGrade >= 83 && totalGrade < 87) {
      letterGrade = 'B'
    } else if (totalGrade >= 80 && totalGrade < 83) {
      letterGrade = 'B-'
    } else if (totalGrade >= 77 && totalGrade < 80) {
      letterGrade = 'C+'
    } else if (totalGrade >= 73 && totalGrade < 77) {
      letterGrade = 'C'
    } else if (totalGrade >= 70 && totalGrade < 73) {
      letterGrade = 'C-'
    } else if (totalGrade >= 67 && totalGrade < 70) {
      letterGrade = 'D+'
    } else if (totalGrade >= 63 && totalGrade < 67) {
      letterGrade = 'D'
    } else if (totalGrade >= 60 && totalGrade < 63) {
      letterGrade = 'D-'
    } else {
      letterGrade = 'F'
    }
    document.getElementById('letter-grade').innerHTML = letterGrade
  }
}

// Clear all entries in table
function clearAll () {
  totalCredits = 0
  totalGradeProd = 0
  totalGrade = 0
  var i = rowCounter
  while (i > 0) {
    document.getElementById('ass' + i).value = ''
    document.getElementById('grade' + i).value = ''
    document.getElementById('weight' + i).value = ''
    i--
  }
  totalWeight = 0
  totalGradeProd = 0
  document.getElementById('grade').innerHTML = ''
  document.getElementById('letter-grade').innerHTML = ''
}
