import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
    name: string;
    email: string;
    created_at: string;
};

export const makeServer = () => {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}),
        },
        factories: {
            user: Factory.extend({
                name() {
                    return faker.name.firstName();
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10);
                },
            }),
        },
        seeds(server) {
            server.createList("user", 10);
        },
        routes() {
            this.namespace = "api";
            this.timing = 1500;

            this.post("/auth", (_, request) => {
                const { email, password } = JSON.parse(request.requestBody);

                return { user: "1234", jwt: "123456" };
            });

            this.get("/users");
            this.get("/auth", (_, request) => {
                const req = JSON.parse(request.requestBody);
                return { req };
            });

            this.namespace = "";
            this.passthrough();
        },
    });

    return server;
};
