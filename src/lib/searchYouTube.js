import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {

  $.ajax({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {q: query},

    success: (data) => {
      console.log('yay GET request working');
      console.log('data we got back: ', data);
      callback(data);
    },
    error: (error) => console.log('ERROR NOT WORKING', error)
  });
};

export default searchYouTube;