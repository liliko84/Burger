// listen for form submission
$('#burger-form').on('submit', function(event) {
  event.preventDefault();

  // collect burger data as an object
  const burgerData = {
    burger_name: $('[name=burger-name]')
      .val()
      .trim()
  };

  $.ajax({
    url: '/api/burgers',
    method: 'POST',
    data: burgerData
  }).then(response => {
    console.log(response);
    location.reload();
  });
});

$('.eatBurger').on('click', function() {
  // get id of burger we are eating
  const burgerId = $(this).attr('data-burgerid');

  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: 'PUT',
    data: {
      eaten: 1
    }
  }).then(response => {
    console.log(response);
    location.reload();
  });
});

$('.deleteBurger').on('click', function() {
  // get burger id
  const burgerId = $(this).attr('data-burgerid');

  // delete burger
  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: 'DELETE'
  }).then(response => {
    console.log(response);
    location.reload();
  });
});