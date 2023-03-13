Here is a simple flow chart:

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    browser-->>server: data : "note:sandwich"
     
```
