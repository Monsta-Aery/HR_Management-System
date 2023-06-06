const myForm = document.getElementById('myForm');

// Get input fields
const nameInput = document.getElementById('name');
const employeeIDInput = document.getElementById('employeeID');
const genderInputs = document.getElementsByName('gender');
const birthDateInput = document.getElementById('birthDate');
const designationInput = document.getElementById('designation');
const departmentInput = document.getElementById('department');
const appointmentDateInput = document.getElementById('appointmentDate');

// Add event listener to form to validate inputs
myForm.addEventListener('submit', function(event) {
  let isError = false;

  // Validate Name
  if (nameInput.value.trim() === '') {
    isError = true;
    showError('nameError', 'Name is required.');
    nameInput.classList.add('error-input');
  } else if (nameInput.value.length < 2 || nameInput.value.length > 40) {
    isError = true;
    showError('nameError', 'Name must be between 2 and 40 characters.');
    nameInput.classList.add('error-input');
  } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
    isError = true;
    showError('nameError', 'Name must only contain alphabetic characters and spaces.');
    nameInput.classList.add('error-input');
  } else {
    hideError('nameError');
    nameInput.classList.remove('error-input');
  }


  // Validate Employee ID
  if (employeeIDInput.value.trim() === '') {
    isError = true;
    showError('employeeIDError', 'Employee ID is required.');
    employeeIDInput.classList.add('error-input');
  } else if (!/^\d+$/.test(employeeIDInput.value)) {
    isError = true;
    showError('employeeIDError', 'Employee ID must be a number.');
    employeeIDInput.classList.add('error-input');
  } else {
    hideError('employeeIDError');
    employeeIDInput.classList.remove('error-input');
  }


  // Validate Gender
  let isGenderSelected = false;
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      isGenderSelected = true;
      break;
    }
  }
  if (!isGenderSelected) {
    isError = true;
    showError('genderError', 'Gender is required.');
  } else {
    hideError('genderError');
  }

  // Validate Birth Date
  if (birthDateInput.value === '') {
    isError = true;
    showError('birthDateError', 'Birth Date is required.');
    birthDateInput.classList.add('error-input');
  } else {
    hideError('birthDateError');
    birthDateInput.classList.remove('error-input');
  }

  // Validate Designation
  if (designationInput.value.trim() === '') {
    isError = true;
    showError('designationError', 'Designation is required.');
    designationInput.classList.add('error-input');
  } else {
    hideError('designationError');
    designationInput.classList.remove('error-input');
  }

  // Validate Department
  if (departmentInput.value === '' || departmentInput.value === 'Choose Your Department') {
    isError = true;
    document.getElementById('departmentError').textContent = 'Department is required.';
    document.getElementById('departmentError').style.display = 'block'; // Show error message
    departmentInput.classList.add('error-input');
  } else {
    document.getElementById('departmentError').textContent = '';
    document.getElementById('departmentError').style.display = 'none'; // Hide error message
    departmentInput.classList.remove('error-input');
  }


  // Validate Appointment Date
  if (appointmentDateInput.value === '') {
    isError = true;
    showError('appointmentDateError', 'Appointment Date is required.');
    appointmentDateInput.classList.add('error-input');
  } else {
    hideError('appointmentDateError');
    appointmentDateInput.classList.remove('error-input');
  }

  // Prevent form submission if there are errors
  if (isError) {
    event.preventDefault();
  }
});

// Function to show error message
function showError(errorId, errorMessage) {
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = errorMessage;
  errorElement.style.display = 'block';
}

// Function to hide error message
function hideError(errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}
