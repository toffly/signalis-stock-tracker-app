import { serve} from "inngest/next"
import {sendSignUpEmail} from "@/lib/inngest/function";
import {inngest} from "@/lib/inngest/client";

export const { GET, POST, PUT} = serve({
    client: inngest,
    functions: [sendSignUpEmail],
})