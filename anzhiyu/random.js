var posts=["posts/f71d.html","posts/3eeb.html","posts/de09.html","posts/92ae.html","posts/f76e.html","posts/3a64.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };