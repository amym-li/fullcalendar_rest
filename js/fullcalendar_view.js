(function ($) {

  Drupal.behaviors.solrViewFullCalendarInit = {

    attach: function (context, settings) {

      $('.views-view--fullcalendar_solr_based_view').once('solrViewFullCalendarInit').each(function () {

        // Get URL so we can pass facets args to rest API endpoint.
        var api_endpoint = '/api/calendar' + window.location.search;

        var calendarEl = document.getElementById('fullcalendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'multiMonthYear',
          //events: api_endpoint,
          events: [
            {
              start: '2023-04-01',
              display: "background"
            },
            {
              start: '2023-04-07',
              display: "background"
            },
            {
              start: '2023-04-09',
              display: "background"
            },
            {
              start: '2023-04-16',
              display: "background"
            },
            {
              start: '2023-04-11',
              display: "background"
            },
            {
              start: '2023-04-25',display: "background"
            },
            {
              start: '2023-04-29',display: "background"
            },
            {
              start: '2023-04-26',display: "background"
            },
            {
              start: '2023-04-24',display: "background"
            },
            {
              start: '2023-04-10',display: "background"
            },
            {
              start: '2023-04-13',display: "background"
            },
            {
              start: '2023-04-28',display: "background"
            }
          ],
          multiMonthMinWidth: 200,
          multiMonthMaxColumns: 4,
          contentHeight:"auto",
          dayHeaderFormat: {
            weekday: 'narrow',    // Monday, Wednesday, etc
          },
          eventClick: function(date, jsEvent, view) {
            console.log("hi");
          },
          defaultAllDay:true,
          navLinks: true
        })

        calendar.render();
      });
    }
  };

})(jQuery);