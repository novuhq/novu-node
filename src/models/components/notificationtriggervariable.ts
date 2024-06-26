/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type NotificationTriggerVariable = {
    name: string;
};

/** @internal */
export namespace NotificationTriggerVariable$ {
    export const inboundSchema: z.ZodType<NotificationTriggerVariable, z.ZodTypeDef, unknown> =
        z.object({
            name: z.string(),
        });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NotificationTriggerVariable> =
        z.object({
            name: z.string(),
        });
}
