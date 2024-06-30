/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type NotificationGroupsControllerUpdateNotificationGroupRequest = {
    id: string;
    createNotificationGroupRequestDto: components.CreateNotificationGroupRequestDto;
};

/** @internal */
export namespace NotificationGroupsControllerUpdateNotificationGroupRequest$ {
    export const inboundSchema: z.ZodType<
        NotificationGroupsControllerUpdateNotificationGroupRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            id: z.string(),
            CreateNotificationGroupRequestDto:
                components.CreateNotificationGroupRequestDto$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                CreateNotificationGroupRequestDto: "createNotificationGroupRequestDto",
            });
        });

    export type Outbound = {
        id: string;
        CreateNotificationGroupRequestDto: components.CreateNotificationGroupRequestDto$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        NotificationGroupsControllerUpdateNotificationGroupRequest
    > = z
        .object({
            id: z.string(),
            createNotificationGroupRequestDto:
                components.CreateNotificationGroupRequestDto$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                createNotificationGroupRequestDto: "CreateNotificationGroupRequestDto",
            });
        });
}
