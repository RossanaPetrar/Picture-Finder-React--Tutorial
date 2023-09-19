import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ajvZiCPn2REKWW2mxOKGJB4v34Z-VDRB93KHcJlG5bg",
  },
});
