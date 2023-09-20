import {NetworkManager} from "./DCNT-JS/NetworkManager.js"

// NetworkManager event listeners
const listeners = {}

// Create a new NetworkManager instance
const networkManager = new NetworkManager(
    listeners,
    ["stun:YOUR-STUN-SERVER-HERE:PORT"],
    ["YOUR_APPLICATION_PROTOCOL_HERE"]
)
