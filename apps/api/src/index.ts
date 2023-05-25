import { createServer } from "./server";

export const log = (str: any) => {
  console.log("logger: " + str);
};

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
