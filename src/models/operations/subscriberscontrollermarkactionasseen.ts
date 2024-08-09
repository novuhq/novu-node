/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type SubscribersControllerMarkActionAsSeenRequest = {
    messageId: string;
    type?: any | undefined;
    subscriberId: string;
    markMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto;
};

/** @internal */
export const SubscribersControllerMarkActionAsSeenRequest$inboundSchema: z.ZodType<
    SubscribersControllerMarkActionAsSeenRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        messageId: z.string(),
        type: z.any().optional(),
        subscriberId: z.string(),
        MarkMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            MarkMessageActionAsSeenDto: "markMessageActionAsSeenDto",
        });
    });

/** @internal */
export type SubscribersControllerMarkActionAsSeenRequest$Outbound = {
    messageId: string;
    type?: any | undefined;
    subscriberId: string;
    MarkMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto$Outbound;
};

/** @internal */
export const SubscribersControllerMarkActionAsSeenRequest$outboundSchema: z.ZodType<
    SubscribersControllerMarkActionAsSeenRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerMarkActionAsSeenRequest
> = z
    .object({
        messageId: z.string(),
        type: z.any().optional(),
        subscriberId: z.string(),
        markMessageActionAsSeenDto: components.MarkMessageActionAsSeenDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            markMessageActionAsSeenDto: "MarkMessageActionAsSeenDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerMarkActionAsSeenRequest$ {
    /** @deprecated use `SubscribersControllerMarkActionAsSeenRequest$inboundSchema` instead. */
    export const inboundSchema = SubscribersControllerMarkActionAsSeenRequest$inboundSchema;
    /** @deprecated use `SubscribersControllerMarkActionAsSeenRequest$outboundSchema` instead. */
    export const outboundSchema = SubscribersControllerMarkActionAsSeenRequest$outboundSchema;
    /** @deprecated use `SubscribersControllerMarkActionAsSeenRequest$Outbound` instead. */
    export type Outbound = SubscribersControllerMarkActionAsSeenRequest$Outbound;
}
