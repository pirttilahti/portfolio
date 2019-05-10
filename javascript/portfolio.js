/*---Navi kutsut ---*/

$("#projectslink").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

$("#customerslink2").click(function() {
    $('html, body').animate({
        scrollTop: $("#timeline").offset().top
    }, 1000);
});

$("#methodlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#method").offset().top
    }, 1000);
});

$("#customerslink").click(function() {
    $('html, body').animate({
        scrollTop: $("#customers").offset().top
    }, 1000);
});

$("#contactlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#timelinelink").click(function() {
    $('html, body').animate({
        scrollTop: $("#timeline").offset().top
    }, 1000);
});

/*---projektikutsut---*/

$("#kaava").click(function() {
    $('html, body').animate({
        scrollTop: $("#myproject").offset().top
    }, 1000);
});

$("#kaava").click(function(){
	document.getElementById('myproject').innerHTML = "<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "City Planning map application " + "<span class='text-muted'>" + "Service redesign case" + "</span>"+"</h3>"+
            "<p class='lead'>"+ "The city of Tampere wanted a redesign of their city planning map service. The current version was not user friendly nor was it used by users. The task was to develop a new version using lean methodology, saving time and money." + "</p>" +
          "</div>" +
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/Kaava5.PNG' alt='kaava'>"+
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7 order-md-2'>" +
            "<h3 class='featurette-heading'>" + "As usually, everything starts from understanding the user" + "</h3>" +
            "<p class='lead'>" + "To understand what the challenge was and why people didn't use the current system, it was essential to head to the field. A series of interviews and contextual inquiries were conducted to gather the needed information." + "</p>" +
          "</div>" +
          "<div class='col-md-5 order-md-1'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/Flow.jpeg' alt='flow'>" +
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" + 

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Gathering is only the first step" +"</h3>"+
            "<p class='lead'>" + "After gathering the data had to be analyzed. Multiple models were made to find the area were the problems arise. Personas were also created based on what was learned."+"</p>"+
          "</div>"+
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/Persoonat.jpg' alt='Persoonat'>"+
          "</div>"+
        "</div>" +

        "<hr class='featurette-divider'>"+

        "<div class='row featurette'>" +
          "<div class='col-md-7 order-md-2'>" +
            "<h3 class='featurette-heading'>" + "Next up was ideation" + "</h3>" +
            "<p class='lead'>" + "We used the information we had learned to come up with a structure for the changes we would propose for the new design. We made wireframes and came up with the most important changes. The ideas were made into higher fidelity wireframes to present to the client." + "</p>" +
          "</div>" +
          "<div class='col-md-5 order-md-1'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/UI vaihtoehdot.jpg' alt='UI'>" +
          "</div>" +
        "</div>" +
"<hr class='featurette-divider'>" + 

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Interactive prototype" +"</h3>"+
            "<p class='lead'>" + "Next the ideas were built into an interactive prototype taking into consideration the restrictions of the backend. The prototype was tested with users to provide further inisght into improvements and to find out if the design was an improvement at this point. The project is still on going."+"</p>"+
          "</div>"+
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/prototyyppiTAMP.png' alt='proto'>"+
          "</div>"+
          "<br>"+
          "<a href='#projects' id='up' class='back-up'>"+ "<img src='img/ic_expand_less_white_24dp_2x.png' alt='back up' >"+ "<p>"+"back up"+"</p>" +"</a>"+
        "</div>" +

        "<hr class='featurette-divider'>";

	$("#up").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#projects").offset().top
	   			 }, 1000);
	});
});


$("#gaze").click(function() {
    $('html, body').animate({
        scrollTop: $("#myproject").offset().top
    }, 1000);
});

$("#gaze").click(function(){
	document.getElementById('myproject').innerHTML="<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Evaluating user experience " + "<span class='text-muted'>" + "Using gaze tracking" + "</span>"+"</h3>"+
            "<p class='lead'>"+ "To evaluate the user experience of an augmented reality application used for remote collaboration/ assisting, I created a new method of evaluating user experience using gaze tracking and retrospective think-aloud. This project was part of my Masters thesis, however my thesis does not cover the benefits my project had to Delta Cygni Labs." + "</p>" +
            "<span>"+"<a href='http://urn.fi/URN:NBN:fi:uta-201706292168'>" + "Link to thesis" + "</a>" + "</span>" +
          "</div>" +
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/gazesetup.JPG' alt='gazetracker'>"+
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7 order-md-2'>" +
            "<h3 class='featurette-heading'>" + "Use of gaze has its challenges" + "</h3>" +
            "<p class='lead'>" + "To over come the problems involved with using gaze tracking and the nature of user experience a novel approach had to be taken. Gaze cannot tell whether the user likes something, despite some potential indicators like forelonged attention. Therefore, another measurement tool was needed. Thanks to my research background I was able to come up with a solution which enabled me to both harness the powerful method of gaze tracking and measure user experience all in the same testing time." + "</p>" +
          "</div>" +
          "<div class='col-md-5 order-md-1'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/pointrinuse.JPG' alt='pointruse'>" +
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" + 

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "The benefit to the client" +"</h3>"+
            "<p class='lead'>"+ "The client was enable to pinpoint the best parts of their product and find the parts of their product that negatively affect the user experience of the client with great accuracy. Both those the client recognizes and those that they don't recognize affecting their judgement." +"</p>"+ 
            "<p class='lead'>"+ "In addition, to the benefit gained from user insight during the interview process of the method, the client also got a list of usability issues. It is important to notice that despite the goal of gathering user experience data some potential experience affecting issues can be fixed via finding usability issues in the products."+"</p>"+
          "</div>"+
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/pointr.png' alt='pointr'>"+
          "</div>"+
          "<br>"+
          "<a href='#projects' id='up' class='back-up'>"+ "<img src='img/ic_expand_less_white_24dp_2x.png' alt='back up' >"+ "<p>"+"back up"+"</p>" +"</a>"+
        "</div>" +

        "<hr class='featurette-divider'>";

    $("#up").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#projects").offset().top
		    }, 1000);
	});
});


$("#lightguide").click(function() {
    $('html, body').animate({
        scrollTop: $("#myproject").offset().top
    }, 1000);
});

$("#lightguide").click(function(){
	document.getElementById('myproject').innerHTML="<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Light guided way finding system " + "<span class='text-muted'>" + "An interaction design case" + "</span>"+"</h3>"+
            "<p class='lead'>"+ "As part of a university course, we were tasked on innovating with modern technology solutions at our reach. This took us on a path of rediscovering the way people can be guided to their tables at a restaurant." + "</p>" +
          "</div>" +
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/setup1.jpg' alt='Prototype'>"+
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7 order-md-2'>" +
            "<h3 class='featurette-heading'>" + "Extensive usage scenario exploration was used" + "</h3>" +
            "<p class='lead'>" + "In order to understand what our solution would need we analyzed the current scenarios involved with visiting restaurants. We realized the customer isn't always aware of how full the restaurant is, just by walking in. It is upto the waiters to notice new customers walking into a restaurant and point them towards available tables. In addition, some restaurants expect the customer to find their seat on their own and there can be multiple floors available for seating. There seemed to be a clear problem." + "</p>" +
          "</div>" +
          "<div class='col-md-5 order-md-1'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/piccoloplan.jpg' alt='piccoloplan'>" +
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" + 

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Using cheap technology solutions already available we created our prototype" +"</h3>"+
            "<p class='lead'>" + "Our solution was to build a system that recognizes the amount of customers entering, leads them to click on a screen, which then leads them to choose an available table. After this the customer can easily find the specific table in the restaurant by looking for a light above their table."+"</p>"+ 
            "<p>" + "Technology used:" + "</p>" +
            "<ul>" +
            "<li>" + "Touchscreen with a custom made prototype UI for user interaction" + "</li>" +
            "<li>" + "Microsoft kinect for recognizing and counting users entering" + "</li>" +
            "<li>" + "Prototype light guide built of a rasperry pi, led light, and a usb camera" + "</li>" +
            "</ul>" +
          "</div>"+
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/lightprototype.jpg' alt='lightprototype'>"+
          "</div>"+
          "<br>"+
          "<a href='#projects' id='up' class='back-up'>"+ "<img src='img/ic_expand_less_white_24dp_2x.png' alt='back up' >"+ "<p>"+"back up"+"</p>" +"</a>"+
        "</div>" +

        "<hr class='featurette-divider'>";

       $("#up").click(function() {
	   		 $('html, body').animate({
	        	scrollTop: $("#projects").offset().top
	   			 }, 1000);
	});
});


$("#woneapp").click(function() {
    $('html, body').animate({
        scrollTop: $("#myproject").offset().top
    }, 1000);
});

$("#woneapp").click(function(){
	document.getElementById('myproject').innerHTML="<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Wone peer-to-peer payments application " + "<span class='text-muted'>" + "A human-centered design approach" + "</span>"+"</h3>"+
            "<p class='lead'>"+ "Wone payments Oy wanted to create a peer-to-peer payment application for sharing small bills with friends." + "</p>" +
          "</div>" +
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/wonephone.jpg' alt='WoneApp'>"+
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7 order-md-2'>" +
            "<h3 class='featurette-heading'>" + "Human-centered design starts with the user" + "</h3>" +
            "<p class='lead'>" + "The first step was to find out what the user does nowadays. The first challenge we faced was, how do we know when someone needs to share a bill with friends? We came up with a solution by asking potential users to purchase various small things like university lunch for a few peers and have them organize paying back the one who paid." + "</p>" +
            "<p class='lead'>" + "The next step was to combine the findings. To organize the various use cases and make sense of the data we used an affinity diagram." + "</p>" +
          "</div>" +
          "<div class='col-md-5 order-md-1'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/AffinityDiagram.jpg' alt='AffinityDiagram'>" +
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" + 

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Understanding the data is key" + "</h3>"+
            "<p class='lead'>" + "To further understand what was happening when users organized payments to peers we modeled the data using various models such as cultural models, flow models, and sequence models. We also created personas based on our understanding."+"</p>"+
          "</div>"+
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/model.jpg' alt='model'>"+
          "</div>"+
        "</div>" +

        "<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7 order-md-2'>" +
            "<h3 class='featurette-heading'>" + "Understanding enables ideation" + "</h3>" +
            "<p class='lead'>" + "After understanding the current situation we started to ideate. First we created a storyboard about how the application should work. After this we started to rationalize the features that would be needed." + "</p>" +
      
          "</div>" +
          "<div class='col-md-5 order-md-1'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/WoneStory.jpg' alt='WoneStory'>" +
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" +
                "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "The features needed lead thinking forward" + "</h3>"+
            "<p class='lead'>" + "Collecting the features together helped us to make a plan for the application's structure. After which we started sketching the first wireframes, which led us to the final interactive prototype."+"</p>"+
          "</div>"+
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/WONE-UED.jpg' alt='WONE-UED'>"+
          "</div>"+
          "<br>"+
          "<a href='#projects' id='up' class='back-up'>"+ "<img src='img/ic_expand_less_white_24dp_2x.png' alt='back up' >"+ "<p>"+"back up"+"</p>" +"</a>"+
        "</div>" +

        "<hr class='featurette-divider'>";

    $("#up").click(function() {
	    $('html, body').animate({
	       scrollTop: $("#projects").offset().top
	   			 }, 1000);
	});
});


$("#libraryeva").click(function() {
    $('html, body').animate({
        scrollTop: $("#myproject").offset().top
    }, 1000);
});

$("#libraryeva").click(function(){
	document.getElementById('myproject').innerHTML="<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Online university library database " + "<span class='text-muted'>" + "An usability evaluation" + "</span>"+"</h3>"+
            "<p class='lead'>"+ "The universities library had woken up to the fact that their systems were grossly outdated. Their new beta was already in testing and our job was to identify usability issues with the new system." + "</p>" +
          "</div>" +
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/tamcatbeta.jpg' alt='tamcatbeta'>"+
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" +

        "<div class='row featurette'>" +
          "<div class='col-md-7 order-md-2'>" +
            "<h3 class='featurette-heading'>" + "Everything started with a heuristic evalution"+ "</h3>" +
            "<p class='lead'>" + "To understand were the potential issues might exist, we started with an expert evalution in the form of a heuristic evaluation. We pinpointed several issues, some major ones and some less severe." + "</p>" + 
                     "</div>" +
          "<div class='col-md-5 order-md-1'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/UsabilityLinks.jpg' alt='usability'>" +
          "</div>" +
        "</div>" +

        "<hr class='featurette-divider'>" + 

        "<div class='row featurette'>" +
          "<div class='col-md-7'>" +
            "<h3 class='featurette-heading'>" + "Finally we tested with users" + "</h3>"+
            "<p class='lead'>" + "To provide support for our findings and find more issues that might have gone unnoticed, we organized usability testing in a lab. User were given tasks and their progress was recorded and analyzed. Multiple issues were confirmed and potential fixes were communicated to the client."+"</p>"+
          "</div>"+
          "<div class='col-md-5'>" +
            "<img class='featurette-image img-fluid mx-auto' src='img/SearchResults.png' alt='SearchResults'>"+
          "</div>"+
          "<br>"+
          "<a href='#projects' id='up' class='back-up'>"+ "<img src='img/ic_expand_less_white_24dp_2x.png' alt='back up' >"+ "<p>"+"back up"+"</p>" +"</a>"+
        "</div>" +

        "<hr class='featurette-divider'>";

    $("#up").click(function() {
	  	  $('html, body').animate({
	        scrollTop: $("#projects").offset().top
	   			 }, 1000);
	});
});

