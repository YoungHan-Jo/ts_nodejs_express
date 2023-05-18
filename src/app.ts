import { log } from "console";
import { User } from "./domain/model/user/user";
import { server } from "./infrastructure/webservers/express/server";

// DB抜きで試し用のMap＜PK,Object＞
export let users = new Map<number, User>();
export let userId = {
    id: 1,
    nextId: function() {
        return this.id++;
    }
};

console.log('localhost:3000')

server.listen(3000);