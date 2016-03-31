// YOUR CODE GOES HERE

$('.more-sprouts').on('click', function(event) {
  event.preventDefault();
  var page = $('.more-sprouts').attr("href");
  var numberPattern = /\d+/g;
  var pageNumber = numberPattern.exec(page)[0];
    var request = $.ajax({
      method: "GET",
      url: "/tweets.json",
      data: { page: pageNumber }
    }).done(function(tweets) {
      tweets.forEach(function(tweet) {
        var body = tweet["text"]
        var username = tweet["username"]
        $(".tweets").append("<li class='tweet'>" +
          "<div class='body'>" + body + "</div>" +
          "<div class='user'>" + username + "</div>" +
        "</li>");
      });
    });
  });
