
//submit message
const form = document.querySelector('messagebox');
  const submitBtn = document.querySelector('#submit-btn');

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    form.submit();

  });