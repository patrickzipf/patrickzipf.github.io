
var documents = [{
    "id": 0,
    "url": "https://patrickzipf.com/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://patrickzipf.com/about",
    "title": "About PatrickZipf.com",
    "body": " Patrick Zipf is all about it. "
    }, {
    "id": 2,
    "url": "https://patrickzipf.com/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://patrickzipf.com/",
    "title": "Patrick Zipf's Home Page",
    "body": "      All Posts:                                                                               What does TOCE Stand For?              :       “Top Official Commander of Engineering” for TOCE:                               17 Aug 2023                                                                                            Understanding Zipf's Law - The Mathematical Mystery in Language              :       Zipf’s Law is a peculiar phenomenon that manifests itself in various aspects of our daily lives. From the distribution of wealth in economies to the pattern of links on the. . . :                               13 Aug 2023                                                                                                              Patrick Zipf at the Tail of the Dragon              :       A visit to the Tail of the Dragon in North Carolina with my BMW. Check out some photos::                               09 Aug 2023                                                                                                              Welcome to PatrickZipf. com              :       Welcome to PatrickZipf. com from St. Louis. Click to read more on my first blog post and view some photos. :                               16 Jul 2023                                            "
    }, {
    "id": 4,
    "url": "https://patrickzipf.com/About",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "https://patrickzipf.com/redirects.json",
    "title": "",
    "body": "{“/About”:”https://patrickzipf. com/about”} "
    }, {
    "id": 6,
    "url": "https://patrickzipf.com/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "https://patrickzipf.com/toce",
    "title": "What does TOCE Stand For?",
    "body": "2023/08/17 - “Top Official Commander of Engineering” for TOCE "
    }, {
    "id": 8,
    "url": "https://patrickzipf.com/zipfslaw",
    "title": "Understanding Zipf's Law - The Mathematical Mystery in Language",
    "body": "2023/08/13 - Zipf’s Law is a peculiar phenomenon that manifests itself in various aspects of our daily lives. From the distribution of wealth in economies to the pattern of links on the internet, it can be observed in many different areas. However, it is in the realm of language where Zipf’s Law is most famously illustrated. Let’s delve into what Zipf’s Law is, its history, its relevance to natural language, and its broader applications. What is Zipf’s Law?: Zipf’s Law is a statistical principle that describes the distribution of frequencies of elements within a given set. In the context of language, it states that if you take a large body of text and rank the words by their frequency of occurrence, the frequency of any word is inversely proportional to its rank. Mathematically, this can be expressed as: [ f = \frac{c}{r} ] Where:  ( f ) is the frequency of the word, ( r ) is the rank of the word, ( c ) is a constant. For example, the most common word in English, “the”, appears twice as often as the second most common word, three times as often as the third most common word, and so on. History of Zipf’s Law: Zipf’s Law is named after George Zipf, a linguist and philologist who first observed this phenomenon in the 1930s. He studied different languages and found that this statistical distribution was consistent across various linguistic systems. Although he was not the first to notice this pattern, he was instrumental in popularizing it, and it now bears his name. Zipf’s Law and Natural Language: The fascinating aspect of Zipf’s Law in language is how it appears to be a universal principle. Whether examining English, Chinese, Russian, or any other language, the distribution seems to follow this pattern. Some theories attempt to explain this phenomenon by relating it to the cognitive processes involved in speech and communication, while others attribute it to the inherent structure of languages. One application of Zipf’s Law in computational linguistics is in text compression and information retrieval. Understanding the statistical distribution of words can lead to more efficient algorithms for processing large bodies of text. Broader Applications of Zipf’s Law: Beyond language, Zipf’s Law appears in many other areas:  Economics: The distribution of income within a population often follows Zipf’s Law.  Biology: Some species abundance patterns conform to this law.  Internet: The distribution of hyperlinks and website traffic exhibits Zipfian characteristics. These occurrences provide intriguing insights into the fundamental structures and systems in various domains. Conclusion: Zipf’s Law is a compelling and somewhat mysterious statistical principle. Its appearance in natural language offers a unique perspective on the inherent patterns within linguistic systems, reflecting perhaps something fundamental about human cognition or communication. Furthermore, its application extends to various fields, making it a valuable concept for researchers, scientists, and anyone fascinated by patterns in the world around them. Whether a beautiful mathematical artifact or a deeper indication of the universality of certain natural phenomena, Zipf’s Law continues to be an exciting area of exploration and study. Its simple mathematical formulation belies a complexity that we are still striving to fully comprehend, making it an ongoing challenge and inspiration for curious minds. "
    }, {
    "id": 9,
    "url": "https://patrickzipf.com/tailofthedragon",
    "title": "Patrick Zipf at the Tail of the Dragon",
    "body": "2023/08/09 - A visit to the Tail of the Dragon in North Carolina with my BMW. Check out some photos:           Sorry, your browser doesn't support this website, please try another!    "
    }, {
    "id": 10,
    "url": "https://patrickzipf.com/welcome",
    "title": "Welcome to PatrickZipf.com",
    "body": "2023/07/16 - Welcome to PatrickZipf. com from St. Louis. Click to read more on my first blog post and view some photos.           Sorry, your browser doesn't support this website, please try another!    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});