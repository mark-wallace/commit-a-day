import { createServer } from "miragejs"

function server() {
  createServer({
    routes() {
      this.get("/api/items", () => ({
        items: [
          { id: 1, name : "t-shirt", price : 4.00,
            links : {
              self : { href : "/api/items/1" },
              product : {href : "/products/1"}
            }
          },           
          //  { id: 2, name : "pants", price : 12.00 },
          //  { id: 3, name : "hoody", price : 25.00 },
          //  { id: 4, name : "t-shirt", price : 4.00 },           
          //  { id: 5, name : "pants", price : 12.00 },
          //  { id: 6, name : "hoody", price : 25.00 },
        ]
      }))
    },
  })
}

export default server;