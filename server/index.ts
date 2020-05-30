import { Application, send } from "https://deno.land/x/oak/mod.ts";
import router from "./api/index.ts";
const port = 5000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
  console.log(context)
})

console.log(`server running on port ${port}`);

await app.listen({ port });
