function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
        alert('hello')
      } else {
        alert('There was a problem with the request.');
      }
    }
}