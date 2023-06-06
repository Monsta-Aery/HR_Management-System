function validateForm() {
  var name = document.getElementsByName('name')[0];
  var eid = document.getElementsByName('eid')[0];
  var department = document.getElementsByName('department')[0];
  var appointmentDate = document.getElementsByName('appointmentdate')[0];
  var isValid = true; // Track overall form validity

  // Validate name (required)
  if (name.value.trim() === '') {
    name.classList.add('invalid');
    name.nextElementSibling.innerHTML = 'Name is required.';
    isValid = false;
  } else {
    name.classList.remove('invalid');
    name.nextElementSibling.innerHTML = '';
  }

  // Validate employee ID (required)
  if (eid.value.trim() === '') {
    eid.classList.add('invalid');
    eid.nextElementSibling.innerHTML = 'Employee ID is required.';
    isValid = false;
  } else {
    eid.classList.remove('invalid');
    eid.nextElementSibling.innerHTML = '';
  }

  // Validate department (required)
  if (department.value === '') {
    department.classList.add('invalid');
    department.nextElementSibling.innerHTML = 'Department is required.';
    isValid = false;
  } else {
    department.classList.remove('invalid');
    department.nextElementSibling.innerHTML = '';
  }

  // Validate appointment date (required)
  if (appointmentDate.value === '') {
    appointmentDate.classList.add('invalid');
    appointmentDate.nextElementSibling.innerHTML = 'Appointment Date is required.';
    isValid = false;
  } else {
    appointmentDate.classList.remove('invalid');
    appointmentDate.nextElementSibling.innerHTML = '';
  }

  return isValid; // Return overall form validity
}
