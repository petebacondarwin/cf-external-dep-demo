import { foo } from "core";

export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(foo());
  },
};
