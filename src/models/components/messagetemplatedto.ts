/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type MessageTemplateDto = {};

/** @internal */
export namespace MessageTemplateDto$ {
    export const inboundSchema: z.ZodType<MessageTemplateDto, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MessageTemplateDto> = z.object(
        {}
    );
}
