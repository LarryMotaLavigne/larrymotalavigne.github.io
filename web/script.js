// Disable right click on page
document.oncontextmenu = new Function("return false;");

// Generate random skill
const skill_list = [
    "web/img/skills/angular.png",
    "web/img/skills/django.png",
    "web/img/skills/docker.png",
    "web/img/skills/gdpr.png",
    "web/img/skills/git.png",
    "web/img/skills/gitlab.png",
    "web/img/skills/hibernate.png",
    "web/img/skills/linux.png",
    "web/img/skills/mysql.png",
    "web/img/skills/owasp.png",
    "web/img/skills/pci-dss.png",
    "web/img/skills/postgresql.png",
    "web/img/skills/react.png",
    "web/img/skills/spring-boot.png",
    "web/img/skills/spring.png",
    "web/img/skills/unity.png",
];

let shuffle = function (array) {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;

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
    img.setAttribute('class', 'skill' );
    img.setAttribute('alt', element.split("/").pop().split(".")[0] + '_logo');
    document.getElementById('skill_list').appendChild(img);
});

