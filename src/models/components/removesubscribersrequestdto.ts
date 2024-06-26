/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RemoveSubscribersRequestDto = {
    /**
     * List of subscriber identifiers that will be removed to the topic
     */
    subscribers: Array<string>;
};

/** @internal */
export namespace RemoveSubscribersRequestDto$ {
    export const inboundSchema: z.ZodType<RemoveSubscribersRequestDto, z.ZodTypeDef, unknown> =
        z.object({
            subscribers: z.array(z.string()),
        });

    export type Outbound = {
        subscribers: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveSubscribersRequestDto> =
        z.object({
            subscribers: z.array(z.string()),
        });
}
