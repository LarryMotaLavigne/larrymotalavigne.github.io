'use strict';

// Disable right click on page
document.oncontextmenu = new Function("return false;");

// Generate random skill
const skill_list = [
    "web/images/skills/angular.png",
    "web/images/skills/django.png",
    "web/images/skills/docker.png",
    "web/images/skills/gdpr.png",
    "web/images/skills/git.png",
    "web/images/skills/gitlab.png",
    "web/images/skills/hibernate.png",
    "web/images/skills/linux.png",
    "web/images/skills/mysql.png",
    "web/images/skills/owasp.png",
    "web/images/skills/pci-dss.png",
    "web/images/skills/postgresql.png",
    "web/images/skills/react.png",
    "web/images/skills/spring-boot.png",
    "web/images/skills/spring.png",
    "web/images/skills/unity.png",
];

const shuffle = function (array) {

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

