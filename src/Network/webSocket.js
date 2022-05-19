const W3CWebSocket = require('websocket').w3cwebsocket;

class WebSocketClient {
    constructor(url) {
        this.url = url;
    }

    wsConnect() {
        const W3CWebSocket = require('websocket').w3cwebsocket;

        client.onerror = function() {
            console.log('Connection Error');
        };
    
        client.onopen = function() {
            console.log('WebSocket Client 1 Connected');
        };
    
        client.onclose = function() {
            console.log('echo-protocol Client 1 Closed');
        };
    
        client.onmessage = function(e) {
            alert(e)
        };
    }

    #wsConn1() {

    }

    #sConn2() {
        
    }
}