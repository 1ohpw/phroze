$(function() {
  $.ajax({
    type: 'GET',
    url: "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2&count=5",
    success: function(response) {
      console.log(response.data._embedded.media)
      let mediaJson = response.data._embedded.media;
      $.each(mediaJson, function(i, image) {
        console.log(mediaJson[i].images.normal);
        let imgUrl = mediaJson[i].images.normal;
        $("#gallery-img-" + i).attr("src", imgUrl);
      });
    }
  });
});
