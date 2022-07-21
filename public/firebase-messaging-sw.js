importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCPWLQup_jtzV4WxkGvKlY2i7HEERwZfRQ",
    authDomain: "learningcloudmessaging.firebaseapp.com",
    projectId: "learningcloudmessaging",
    storageBucket: "learningcloudmessaging.appspot.com",
    messagingSenderId: "451935961786",
    appId: "1:451935961786:web:07132445263c630ac97883",
    measurementId: "G-WG00K4SYJ6"
  };
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});