/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SubscribersControllerDeleteSubscriberCredentialsRequest = {
    subscriberId: string;
    providerId: string;
};

/** @internal */
export namespace SubscribersControllerDeleteSubscriberCredentialsRequest$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerDeleteSubscriberCredentialsRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        subscriberId: z.string(),
        providerId: z.string(),
    });

    export type Outbound = {
        subscriberId: string;
        providerId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerDeleteSubscriberCredentialsRequest
    > = z.object({
        subscriberId: z.string(),
        providerId: z.string(),
    });
}
