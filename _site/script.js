var activityContainer = $('.activity');
var activityTitle = $('.activity-title');

var eventCount = $('.badge-event');
var hobbyCount = $('.badge-hobby');
var classCount = $('.badge-class');

var descriptionMain = $('.activity-desc');

var learnMoreContainer = $('.learn-more-container');

var upcomingContainer = $('.upcoming-container');
var likesContainer = $('.likes-container');
var exploreContainer = $('.explore-container');

var events = [
  {
    imgUrl: "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    name: "Virtual Dance Party",
    description: "Quarantine Dance Crew"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1527871899604-f1425bcce779?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Science Under the Stars: At Home Edition",
    description: "Dr. Starrgae Zer"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1520820446914-04cb9819a6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1020&q=80",
    name: "Meet Bobby",
    description: "The Loud Ventriloquists"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    name: "Python for Data Science",
    description: "The Peter PyPers"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Fireside Chats: Inclusion & Diversity",
    description: "Frankly Delving Roosters"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1553338258-24fe91e8baf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
    name: "Diving Into the Cretacious Period",
    description: "Tyron Rex"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1585857188908-5b6de3179683?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Let's Play Animal Crossing",
    description: "Nintendon't"
  }, 
  {
    imgUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80",
    name: "Youth Basketball Camp",
    description: "The Last Disco"
  }
];

var hobbies = [
  {
    imgUrl: "https://images.unsplash.com/photo-1522410818928-5522dacd5066?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Acrylic Painting Session",
    description: "Hosted by your friend, Vincent van Gogh. Frida Kahlo, Pablo Picasso, and 3 other friends are attending."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1560269507-68b9732d35c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Bake Together",
    description: "Hosted by your friend, Martha Stewart. Duff Goldman, Anna Olson, and 12 other friends are attending."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Music Circle",
    description: "Hosted by your acquaintance, Frederic Chopin. Ludwig van Beethoven, Wolfgang A. Mozart, and 13 other friends are attending."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Acapella Night",
    description: "Hosted by your acquaintance, Elvis Presley. Adele, Shakira, and 5 other friends are attending."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1502043150060-b01aa3030556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Tinker Tuesdays",
    description: "Hosted by your friend, Thomas Edison. Ben Franklin, Nikola Tesla, and 38 other friends are attending."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1563941402830-3bae42b67b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Settling for Catan",
    description: "Hosted by your friend, Klaus Teuber. Uwe Rosenburg, Stefan Feld, and 9 other friends are attending."
  }
];

var classes = [
  {
    imgUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    name: "Mythology for Self-Proclaimed Geeks",
    description: "8 weeks (1 hour/wk)"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Become a Beauty Guru",
    description: "5 weeks (2 hours/wk)"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
    name: "Self Defense",
    description: "12 weeks (30 minutes/day)"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1127&q=80",
    name: "Exploring the National Parks",
    description: "4 weeks (1 hour/wk)"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1563260797-cb5cd70254c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Krazy Krafts",
    description: "9 weeks (3 hours/wk)"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1586868538513-51335a0c5337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80",
    name: "AutoCAD For Beginners",
    description: "10 weeks (2 hours/wk)"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    name: "Knit Like Your Grandma",
    description: "6 weeks (45 minutes/wk)"
  }
];

var upcoming = [
//   {
//     imgUrl: "https://images.unsplash.com/photo-1578597161173-3d8fdddba0d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
//     name: "Card Magic",
//     description: "9 weeks (1 hour/wk)"
//   },
  {
    imgUrl: "https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Game Night -- Social Deduction Edition",
    description: "Hosted by you. Don Eskridge, Fabian Zimmermann, and 6 other friends are attending."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1591601392196-dd6afe757012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Get That Dough: A Live Breadmaking Event",
    description: "The Yeasty Boys"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Programming Languages: A Roundtable Discussion",
    description: "Hosted by your friend, Guido van Rossum. Tim Berners-Lee, James Gosling, and 42 other friends are attending."
  }
];

var likes = [
  {
    imgUrl: "https://images.unsplash.com/photo-1563941402830-3bae42b67b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Settling for Catan",
    description: "Hosted by your friend, Klaus Teuber. Uwe Rosenburg, Stefan Feld, and 9 other friends are attending."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1560269507-68b9732d35c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Bake Together",
    description: "Hosted by your friend, Martha Stewart. Duff Goldman, Anna Olson, and 12 other friends are attending."
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1586868538513-51335a0c5337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80",
    name: "AutoCAD For Beginners",
    description: "10 weeks (2 hours/wk)"
  },
//   {
//     imgUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
//     name: "Python for Data Science",
//     description: "The Peter PyPers"
//   }
];

var explore = [
  {
    imgUrl: "https://images.unsplash.com/photo-1520820446914-04cb9819a6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1020&q=80",
    name: "Meet Bobby",
    description: "The Loud Ventriloquists"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Acapella Night",
    description: "Hosted by your acquaintance, Elvis Presley. Adele, Shakira, and 5 other friends are attending."
  },
//   {
//     imgUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     name: "Become a Beauty Guru",
//     description: "5 weeks (2 hours/wk)"
//   },
  {
    imgUrl: "https://images.unsplash.com/photo-1585857188908-5b6de3179683?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    name: "Let's Play Animal Crossing",
    description: "Nintendon't"
  }
];

function loadCurrent() {
    event.preventDefault();
    createListings(upcoming, upcomingContainer);
    createListings(likes, likesContainer);
    createListings(explore, exploreContainer);

    eventCount.text(String(events.length));
    hobbyCount.text(String(hobbies.length));
    classCount.text(String(classes.length));

    createListings(events, activityContainer);
}

$('.list-group li').click(function(e) {
  e.preventDefault();

  $that = $(this);

  $that.parent().find('li').removeClass('active');
  $that.addClass('active');
});

function loadEvents() {
    event.preventDefault();
    activityTitle.html("Events");
    descriptionMain.html("Virtual events for virtually anything!");
    createListings(events, activityContainer);
}

function loadHobbies() {
    event.preventDefault();
    activityTitle.html("Hobbies");
    descriptionMain.html("Join your friends for a fun night in!");
    createListings(hobbies, activityContainer);
}

function loadClasses() {
    event.preventDefault();
    activityTitle.html("Classes");
    descriptionMain.html("Classes taught by regular people for regular people.");
    createListings(classes, activityContainer);
}

function createListings(activitiesArr, activityContainer) {
    event.preventDefault();
    activityContainer.html("");

    for (let i = 0; i < activitiesArr.length; i++) {
        var listing = '<div class="card event-card">' + 
                        `<img class="card-img-top" src="${activitiesArr[i].imgUrl}" class="listing-img">` + 
                        `<div class="card-body">` + 
                        `<h4 class="card-title">${activitiesArr[i].name}</h4>` + 
                        `<p class="card-text">${activitiesArr[i].description}</p>` +
                        '</div>' + 
                        '<a href="#" class="btn btn-primary stretched-link" onclick="learnMore()">Learn More & Sign Up</a>';
        activityContainer.append(listing);
  }
}

function learnMore() {
  window.location.href = "learn-more.html";
}

function signUp() {
  learnMoreContainer.html("");
  learnMoreContainer.append(`<p class="lm-desc">Thanks for signing up!</p>`);
  learnMoreContainer.append(`<button class="btn btn-primary lm-btn" onclick="toDiscover()">Done</button>`);
}

function toDiscover() {
  window.location.href = "/discover.html";
}
