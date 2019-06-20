'use strict';

const CACHE_NAME = 'Larry-Resume-cache';

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/web/script/app.js',
    '/web/stylesheet.css',
    '/web/SF Distant Galaxy Outline.ttf',
    '/web/images/icons/photo.jpg',
    '/web/images/logo/github.png',
    '/web/images/logo/linkedin.png',
    '/web/images/logo/twitter.png',
    '/web/images/skills/angular.png',
    '/web/images/skills/django.png',
    '/web/images/skills/docker.png',
    '/web/images/skills/gdpr.png',
    '/web/images/skills/git.png',
    '/web/images/skills/gitlab.png',
    '/web/images/skills/hibernate.png',
    '/web/images/skills/linux.png',
    '/web/images/skills/mysql.png',
    '/web/images/skills/owasp.png',
    '/web/images/skills/pci-dss.png',
    '/web/images/skills/postgresql.png',
    '/web/images/skills/react.png',
    '/web/images/skills/spring-boot.png',
    '/web/images/skills/spring.png',
    '/web/images/skills/unity.png',
];
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map((key) => {
                if (!CACHE_NAME.includes(key)) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

self.addEventListener('fetch', (evt) => {
    if (evt.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('/');
                    });
            })
    );

});