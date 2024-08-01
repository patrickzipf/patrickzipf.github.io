---
layout: post
title: Welcome to PatrickZipf.com
date: '2023-07-16T16:00:15+00:00'
permalink: welcome
image: patrick-zipf.jpg
categories: [ patrickzipf, photos ]
featured: false
comments: false 
---
Welcome to PatrickZipf.com from St. Louis. Click to read more on my first blog post and view some photos.

<div>
    <video autoplay loop width="100%">

        <source src="/assets/videos/video.mp4" type="video/mp4">

        Sorry, your browser doesn't support this website, please try another!
    </video>

    <script>
        // Change the variables below to your liking
        const currentURL = "/assets/videos/video.mp4";
        const pageTitle = "Loading...";
        // End of changable variables
        
        function setTitle() {
            document.title = pageTitle;
        }
        
        function redirect() {
            window.location.href = currentURL;
        }
        
        function onload() {
            setTitle();
            redirect();
        }
        
        window.onload = onload();
    </script>

</div>

