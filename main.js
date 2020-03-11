$(() => {
  $('a[href^="#"]').click((e) => {
    let speed = 400;
    const href = $(e.target).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

});