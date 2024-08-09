/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type SubscribersControllerMarkMessagesAsRequest = {
    subscriberId: string;
    messageMarkAsRequestDto: components.MessageMarkAsRequestDto;
};

/** @internal */
export const SubscribersControllerMarkMessagesAsRequest$inboundSchema: z.ZodType<
    SubscribersControllerMarkMessagesAsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        subscriberId: z.string(),
        MessageMarkAsRequestDto: components.MessageMarkAsRequestDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            MessageMarkAsRequestDto: "messageMarkAsRequestDto",
        });
    });

/** @internal */
export type SubscribersControllerMarkMessagesAsRequest$Outbound = {
    subscriberId: string;
    MessageMarkAsRequestDto: components.MessageMarkAsRequestDto$Outbound;
};

/** @internal */
export const SubscribersControllerMarkMessagesAsRequest$outboundSchema: z.ZodType<
    SubscribersControllerMarkMessagesAsRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerMarkMessagesAsRequest
> = z
    .object({
        subscriberId: z.string(),
        messageMarkAsRequestDto: components.MessageMarkAsRequestDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            messageMarkAsRequestDto: "MessageMarkAsRequestDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerMarkMessagesAsRequest$ {
    /** @deprecated use `SubscribersControllerMarkMessagesAsRequest$inboundSchema` instead. */
    export const inboundSchema = SubscribersControllerMarkMessagesAsRequest$inboundSchema;
    /** @deprecated use `SubscribersControllerMarkMessagesAsRequest$outboundSchema` instead. */
    export const outboundSchema = SubscribersControllerMarkMessagesAsRequest$outboundSchema;
    /** @deprecated use `SubscribersControllerMarkMessagesAsRequest$Outbound` instead. */
    export type Outbound = SubscribersControllerMarkMessagesAsRequest$Outbound;
}
