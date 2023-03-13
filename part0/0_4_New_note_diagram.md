Here is a simple flow chart:

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    browser-->>server: data : "note:sandwich"
           
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: the DOM file
     
```
