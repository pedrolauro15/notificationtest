import React, { useState } from 'react';
import './global.css';

function App() {
  const [notificationText, setNotificationText] = useState('');

  function notifyMe() {
    if (!("Notification" in window)) {
      alert("Este browser não suporta notificações de Desktop");
    }
    else if (Notification.permission === "granted") {
      var notification = new Notification("minha notificação!", {
        body: notificationText,
        image: "https://www.rbsdirect.com.br/imagesrc/25633494.jpg?w=150",
        icon: "https://www.rbsdirect.com.br/imagesrc/25633494.jpg?w=150",
      });
      notification.onclose = () => {
        alert("Bye");
      };
    }

    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
          notification.onclick = () => {alert("Hello")}
        }
      });
    }
  }
  return (
    <div className="App">
      <h1>Notification test</h1>
      <input
        type="text"
        name=""
        id="NotInput"
        placeholder="Notificação"
        value={notificationText}
        onChange={(e) => setNotificationText(e.target.value)}
      />
      <button onClick={notifyMe}>Enviar notificação</button>
    </div>
  );
}

export default App;
