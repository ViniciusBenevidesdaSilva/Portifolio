// Download Currículo
$(function() {
    $('#downloadButton').click(function() {
        window.open('/docs/CV.pdf', '_blank');
    });
});

// Sortable Widget
$(function() {
    $( "#skillsList" ).sortable();
    $( "#skillsList" ).disableSelection();
});


// Light and Dark Mode

$(function() {
    $('#btnColorMode').click(function() {

    var changeToLight = $('body').attr('data-bs-theme') == 'dark';

    if(changeToLight){
      btnColorMode.innerHTML = '<i class="bi bi-brightness-high"></i>';
      $('body').attr('data-bs-theme', 'light');

      $('.bg-dark-2').toggleClass('bg-dark-2 bg-white');
      $('.bg-dark').toggleClass('bg-dark bg-light');

      $('.btn-outline-light').toggleClass('btn-outline-light btn-outline-secondary');

      document.documentElement.style.setProperty('--background-animation-color', '#F8F9FA');
      document.documentElement.style.setProperty('--link-color', '#383838');

    } else{
      btnColorMode.innerHTML = '<i class="bi bi-moon"></i>';
      $('body').attr('data-bs-theme', 'dark');

      $('.bg-white').toggleClass('bg-white bg-dark-2');
      $('.bg-light').toggleClass('bg-light bg-dark');

      $('.btn-outline-secondary').toggleClass('btn-outline-secondary btn-outline-light');

      document.documentElement.style.setProperty('--background-animation-color', '#212529');
      document.documentElement.style.setProperty('--link-color', '#fff');

    }

  });
});
