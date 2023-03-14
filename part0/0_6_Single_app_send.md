Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.

The SPA version of the app does not traditionally send the form data, but instead uses the JavaScript code it fetched from the server. We'll look into this code a bit, even though understanding all the details of it is not important just yet.

Open the Network tab and empty it. When you now create a new note, you'll notice that the browser sends only one request to the server.

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over :  Creating a new note with "sandwich2". Only one request is sent to the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    browser->>server: {"content": "sandwich2", "date": "2023-03-14T13:13:41.537Z"}
  
    server-->>browser: 201

    Note over : Creating a new note with "sandwich2". Only one request is sent to the server.
    The note is added and displayed on the webpage

```