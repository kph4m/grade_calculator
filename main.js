let rowCounter = 1
let totalWeight = 0
let totalGradeProd = 0
let totalCredits = 0

// array to store values to repopulate assignment
let assArr = []

// array to store value to repopulate grade
let gradeArr = []

// array to store value to repopulate weight
let weightArr = []

// Adds new row to table
function addNewRow () {
  // Save prev assignments in array
  for (let i = 1; i <= rowCounter; i++) {
    let arrVal = document.getElementById(`ass${i}`).value
    assArr.push(arrVal)
  }

  // Save prev grades in array
  for (let j = 1; j <= rowCounter; j++) {
    let gradeVal = document.getElementById(`grade${j}`).value
    gradeArr.push(gradeVal)
  }

  // Save prev weights in array
  for (let k = 1; k <= rowCounter; k++) {
    let weightVal = document.getElementById(`weight${k}`).value
    weightArr.push(weightVal)
  }

  totalGradeProd = 0
  rowCounter++
  document.getElementById('grade').innerHTML = ''
  document.getElementById('letter-grade').innerHTML = ''
  document.getElementById('wrapper').innerHTML += `<span>
  <input type="text" id="ass${String(rowCounter)}">
  <input type="number" id="grade${String(rowCounter)}">
  <input type="number" id="weight${String(rowCounter)}">
  </span>`

  // After new tag has been created, repopulate previous tags
  for (let i = 1; i <= rowCounter - 1; i++) {
    document.getElementById(`ass${i}`).value = assArr[i - 1]
  }

  // After new tag has been created, repopulate previous tags
  for (let j = 1; j <= rowCounter - 1; j++) {
    document.getElementById(`grade${j}`).value = gradeArr[j - 1]
  }

  // After new tag has been created, repopulate previous tags
  for (let k = 1; k <= rowCounter - 1; k++) {
    document.getElementById(`weight${k}`).value = weightArr[k - 1]
  }

  // Empty ass array
  while (assArr.length > 0) {
    assArr.pop()
  }

  // Empty grade array
  while (gradeArr.length > 0) {
    gradeArr.pop()
  }

  // Empty weight array
  while (weightArr.length > 0) {
    weightArr.pop()
  }
}

// Calculates numeric and letter grade
function calculateGrade () {
  // No inputs
  if (
    document.getElementById('grade1').value == '' &&
    document.getElementById('weight1').value == '' &&
    document.getElementById('ass1').value == ''
  ) {
    alert('Please input at least one assignment')
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
  totalCredits = 0
  totalGradeProd = 0
  totalGrade = 0
}

// RESET TO ORIGINAL
function reset () {
  location.reload()

  /* Can't grab input values (becomes null) after using this method for some reason...
  totalCredits = 0
  totalGradeProd = 0
  totalGrade = 0

  totalWeight = 0
  totalGradeProd = 0
  document.getElementById('grade').innerHTML = ''
  document.getElementById('letter-grade').innerHTML = ''

  let i = 1
  let j = 1
  let k = 1

  document.getElementById('ass1').value = ''
  document.getElementById('grade1').value = ''
  document.getElementById('weight1').value = ''

  i++
  j++
  k++

  // Loop through all assignment inputs and remove them
  while (i <= rowCounter) {
    document.getElementById('ass' + i).remove()
    i++
  }

  // Loop through all grade inputs and remove them
  while (j <= rowCounter) {
    document.getElementById('grade' + j).remove()
    j++
  }

  // Loop through all weight inputs and remove them
  while (k <= rowCounter) {
    document.getElementById('weight' + k).remove()
    k++
  }
  */
}

// KEYBOARD FUNCTIONALITY
document.addEventListener('keyup', e => {
  // If plus, call addNewRow
  if (e.key === 'Control') {
    addNewRow()
  }

  // If enter, call calculateGrade
  if (e.key === 'Enter') {
    calculateGrade()
  }

  // If esc, call reset
  if (e.key === 'Escape') {
    reset()
  }
})
