/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type SubscribersControllerUpdateSubscriberChannelRequest = {
    subscriberId: string;
    updateSubscriberChannelRequestDto: components.UpdateSubscriberChannelRequestDto;
};

/** @internal */
export const SubscribersControllerUpdateSubscriberChannelRequest$inboundSchema: z.ZodType<
    SubscribersControllerUpdateSubscriberChannelRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        subscriberId: z.string(),
        UpdateSubscriberChannelRequestDto:
            components.UpdateSubscriberChannelRequestDto$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            UpdateSubscriberChannelRequestDto: "updateSubscriberChannelRequestDto",
        });
    });

/** @internal */
export type SubscribersControllerUpdateSubscriberChannelRequest$Outbound = {
    subscriberId: string;
    UpdateSubscriberChannelRequestDto: components.UpdateSubscriberChannelRequestDto$Outbound;
};

/** @internal */
export const SubscribersControllerUpdateSubscriberChannelRequest$outboundSchema: z.ZodType<
    SubscribersControllerUpdateSubscriberChannelRequest$Outbound,
    z.ZodTypeDef,
    SubscribersControllerUpdateSubscriberChannelRequest
> = z
    .object({
        subscriberId: z.string(),
        updateSubscriberChannelRequestDto:
            components.UpdateSubscriberChannelRequestDto$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            updateSubscriberChannelRequestDto: "UpdateSubscriberChannelRequestDto",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscribersControllerUpdateSubscriberChannelRequest$ {
    /** @deprecated use `SubscribersControllerUpdateSubscriberChannelRequest$inboundSchema` instead. */
    export const inboundSchema = SubscribersControllerUpdateSubscriberChannelRequest$inboundSchema;
    /** @deprecated use `SubscribersControllerUpdateSubscriberChannelRequest$outboundSchema` instead. */
    export const outboundSchema =
        SubscribersControllerUpdateSubscriberChannelRequest$outboundSchema;
    /** @deprecated use `SubscribersControllerUpdateSubscriberChannelRequest$Outbound` instead. */
    export type Outbound = SubscribersControllerUpdateSubscriberChannelRequest$Outbound;
}
