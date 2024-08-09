/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    PreferenceChannels,
    PreferenceChannels$inboundSchema,
    PreferenceChannels$Outbound,
    PreferenceChannels$outboundSchema,
} from "./preferencechannels.js";
import * as z from "zod";

export type Preference = {
    /**
     * Subscriber preferences for the different channels regarding this workflow
     */
    channels: PreferenceChannels;
    /**
     * Sets if the workflow is fully enabled for all channels or not for the subscriber.
     */
    enabled: boolean;
};

/** @internal */
export const Preference$inboundSchema: z.ZodType<Preference, z.ZodTypeDef, unknown> = z.object({
    channels: PreferenceChannels$inboundSchema,
    enabled: z.boolean(),
});

/** @internal */
export type Preference$Outbound = {
    channels: PreferenceChannels$Outbound;
    enabled: boolean;
};

/** @internal */
export const Preference$outboundSchema: z.ZodType<Preference$Outbound, z.ZodTypeDef, Preference> =
    z.object({
        channels: PreferenceChannels$outboundSchema,
        enabled: z.boolean(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Preference$ {
    /** @deprecated use `Preference$inboundSchema` instead. */
    export const inboundSchema = Preference$inboundSchema;
    /** @deprecated use `Preference$outboundSchema` instead. */
    export const outboundSchema = Preference$outboundSchema;
    /** @deprecated use `Preference$Outbound` instead. */
    export type Outbound = Preference$Outbound;
}
