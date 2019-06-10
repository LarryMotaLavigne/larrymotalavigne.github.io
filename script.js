// Disable right click on page
document.oncontextmenu = new Function("return false;");

// Generate random skill
const skill_list = [
    "img/skills/angular.png",
    "img/skills/django.png",
    "img/skills/docker.png",
    "img/skills/gdpr.png",
    "img/skills/git.png",
    "img/skills/gitlab.png",
    "img/skills/hibernate.png",
    "img/skills/linux.png",
    "img/skills/mysql.png",
    "img/skills/owasp.png",
    "img/skills/pci-dss.png",
    "img/skills/postgresql.png",
    "img/skills/react.png",
    "img/skills/spring-boot.png",
    "img/skills/spring.png",
    "img/skills/unity.png",
];

var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

Array.prototype.forEach.call(shuffle(skill_list), function (element) {
    let img = document.createElement('img');
    img.setAttribute('src', element);
    img.setAttribute('class', 'skill' )
    document.getElementById('skill_list').appendChild(img);
});

