import { createServer } from "miragejs";

function Server() {
  createServer({
    routes() {
      this.get("/api/items", () => ({
        items: [
          {
            id: 1,
            name: "t-shirt",
            price: 4.0,
            links: {
              self: { href: "/api/items/1" },
              product: { href: "/product?id=1" },
            },
          },
          {
            id: 2,
            name: "pants",
            price: 12.0,
            links: {
              self: { href: "/api/items/2" },
              product: { href: "/product?id=2" },
            },
          },
          {
            id: 3,
            name: "hoody",
            price: 25.0,
            links: {
              self: { href: "/api/items/3" },
              product: { href: "/product?id=3" },
            },
          },
          {
            id: 4,
            name: "Hat",
            price: 4.0,
            links: {
              self: { href: "/api/items/4" },
              product: { href: "/product?id=4" },
            },
          },
          {
            id: 5,
            name: "Bag",
            price: 12.0,
            links: {
              self: { href: "/api/items/5" },
              product: { href: "/product?id=5" },
            },
          },
          {
            id: 6,
            name: "Mask",
            price: 25.0,
            links: {
              self: { href: "/api/items/6" },
              product: { href: "/product?id=6" },
            },
          },
        ],
      }));
    },
  });
}

export default Server;
