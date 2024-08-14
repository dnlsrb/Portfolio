 
 
 $(document).ready(function() {
  $(document).scroll(function () {
    var scrollTop = $(document).scrollTop();
    var viewportWidth = $(window).width();
    console.log(scrollTop);  

 
    var isMobile = viewportWidth <= 768;
    var isTablet = viewportWidth <= 1024;
    if(isMobile){ 
    // mobile
    if (scrollTop > 600 && scrollTop <= 900) {
      $("#aquahub").addClass('color-gray');
    } else {
      $("#aquahub").removeClass('color-gray');
    }

    // For #attendance
    if (scrollTop > 900 && scrollTop <= 1400) {
      $("#attendance").addClass('color-gray');
    } else {
      $("#attendance").removeClass('color-gray');
    }

    // For #cloned
    if (scrollTop >= 1400) {
      $("#cloned").addClass('color-gray');
    } else {
      $("#cloned").removeClass('color-gray');
    }
} else if (isTablet){
     // tablet
     if (scrollTop <= 299  ) {
      $("#aquahub").addClass('color-gray');
    } else {
      $("#aquahub").removeClass('color-gray');
    }

    // For #attendance
    if (scrollTop > 300 && scrollTop <= 600) {
      $("#attendance").addClass('color-gray');
    } else {
      $("#attendance").removeClass('color-gray');
    }

    // For #cloned
    if (scrollTop >= 601) {
      $("#cloned").addClass('color-gray');
    } else {
      $("#cloned").removeClass('color-gray');
    }
}
else {
        // For #aquahub
        if (scrollTop <= 10) {
      $("#aquahub").addClass('color-gray');
    } else {
      $("#aquahub").removeClass('color-gray');
    }

    // For #attendance
    if (scrollTop > 10 && scrollTop <= 150) {
      $("#attendance").addClass('color-gray');
    } else {
      $("#attendance").removeClass('color-gray');
    }

    // For #cloned
    if (scrollTop >= 200) {
      $("#cloned").addClass('color-gray');
    } else {
      $("#cloned").removeClass('color-gray');
    }
}
  });
});

 