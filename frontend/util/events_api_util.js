export const fetchEvents = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
  });
};

export const createEvent = data => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data
  })
);