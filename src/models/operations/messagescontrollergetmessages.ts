/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const QueryParamChannel = {
    InApp: "in_app",
    Email: "email",
    Sms: "sms",
    Chat: "chat",
    Push: "push",
} as const;
export type QueryParamChannel = ClosedEnum<typeof QueryParamChannel>;

export type MessagesControllerGetMessagesRequest = {
    channel?: QueryParamChannel | undefined;
    subscriberId?: string | undefined;
    transactionId?: Array<string> | undefined;
    page?: number | undefined;
    limit?: number | undefined;
};

/** @internal */
export namespace QueryParamChannel$ {
    export const inboundSchema: z.ZodNativeEnum<typeof QueryParamChannel> =
        z.nativeEnum(QueryParamChannel);
    export const outboundSchema: z.ZodNativeEnum<typeof QueryParamChannel> = inboundSchema;
}

/** @internal */
export namespace MessagesControllerGetMessagesRequest$ {
    export const inboundSchema: z.ZodType<
        MessagesControllerGetMessagesRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        channel: QueryParamChannel$.inboundSchema.optional(),
        subscriberId: z.string().optional(),
        transactionId: z.array(z.string()).optional(),
        page: z.number().default(0),
        limit: z.number().default(10),
    });

    export type Outbound = {
        channel?: string | undefined;
        subscriberId?: string | undefined;
        transactionId?: Array<string> | undefined;
        page: number;
        limit: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MessagesControllerGetMessagesRequest
    > = z.object({
        channel: QueryParamChannel$.outboundSchema.optional(),
        subscriberId: z.string().optional(),
        transactionId: z.array(z.string()).optional(),
        page: z.number().default(0),
        limit: z.number().default(10),
    });
}
