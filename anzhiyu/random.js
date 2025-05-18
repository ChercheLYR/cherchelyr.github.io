var posts=["posts/155c.html","posts/cb7d.html","posts/f71d.html","posts/bdb8.html","posts/de09.html","posts/4c06.html","posts/cf1d.html","posts/92ae.html","posts/f76e.html","posts/3a64.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };