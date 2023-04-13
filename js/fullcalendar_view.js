(function ($) {

  Drupal.behaviors.solrViewFullCalendarInit = {

    attach: function (context, settings) {

      $('.views-view--fullcalendar_solr_based_view').once('solrViewFullCalendarInit').each(function () {

        // Get URL so we can pass facets args to rest API endpoint.
        var api_endpoint = '/api/calendar' + window.location.search;

        var calendarEl = document.getElementById('fullcalendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'multiMonthYear',
          events: api_endpoint,
          navLinks: true,
          eventLimit: true,
        })

        calendar.render();
      });
    }
  };

})(jQuery);