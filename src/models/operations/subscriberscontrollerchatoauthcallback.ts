/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SubscribersControllerChatOauthCallbackRequest = {
    subscriberId: string;
    providerId: string;
    code: string;
    hmacHash: string;
    environmentId: string;
    integrationIdentifier?: string | undefined;
};

export type SubscribersControllerChatOauthCallbackResponseBody = {};

/** @internal */
export namespace SubscribersControllerChatOauthCallbackRequest$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerChatOauthCallbackRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        subscriberId: z.string(),
        providerId: z.string(),
        code: z.string(),
        hmacHash: z.string(),
        environmentId: z.string(),
        integrationIdentifier: z.string().optional(),
    });

    export type Outbound = {
        subscriberId: string;
        providerId: string;
        code: string;
        hmacHash: string;
        environmentId: string;
        integrationIdentifier?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerChatOauthCallbackRequest
    > = z.object({
        subscriberId: z.string(),
        providerId: z.string(),
        code: z.string(),
        hmacHash: z.string(),
        environmentId: z.string(),
        integrationIdentifier: z.string().optional(),
    });
}

/** @internal */
export namespace SubscribersControllerChatOauthCallbackResponseBody$ {
    export const inboundSchema: z.ZodType<
        SubscribersControllerChatOauthCallbackResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubscribersControllerChatOauthCallbackResponseBody
    > = z.object({});
}
