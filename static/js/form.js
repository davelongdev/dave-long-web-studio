// listen for submit event
form.addEventListener('submit', function (event) {

  // get form
  let form = document.querySelector('form');

  // set 'action' varialbe to the form's action - here the url for a cloudflare worker api
  let action = form.action;

  // set 'method' variable to the form's method - here 'post'
  let method = form.method;

  // create formdata object (different than regular js object)
  let fdObject = new FormData(form);

  // prevent default form behavior, i.e., send post request to action url
  event.preventDefault();

  // update status element
  statusElem.textContent = 'Sending your message...';

  // fetch request
  fetch(action, {
    method: method,
    body: fdObject,
  }).then(function (response) {
    if (response.ok) {
      statusElem.textContent = 'Message sent.';
      form.reset();
      return response.json();  
    } else {
       statusElem.textContent = 'Something went wrong. Please try again.';
    }
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn(error);
  });

});
