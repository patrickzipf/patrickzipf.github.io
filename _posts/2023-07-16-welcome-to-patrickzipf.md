---
layout: post
title: Welcome to PatrickZipf.com
date: '2023-07-16T16:00:15+00:00'
permalink: welcome
image: zipf.jpg
categories: [ patrickzipf ]
featured: false
comments: false 
---
Welcome to PatrickZipf.com, home of Patrick Zipf, a man from St. Louis.

<div>
    <video autoplay loop width="100%">

        <source src="/assets/videos/video.mp4" type="video/mp4">

        Sorry, your browser doesn't support embedded videos.
    </video>
    <script>
        // Change the variables below to your liking
        const currentURL = "video.mp4";
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

