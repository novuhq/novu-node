/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetTenantResponseDtoData = {};

export type GetTenantResponseDto = {
    environmentId: string;
    id: string;
    createdAt: string;
    data?: GetTenantResponseDtoData | undefined;
    identifier: string;
    name?: string | undefined;
    updatedAt: string;
};

/** @internal */
export namespace GetTenantResponseDtoData$ {
    export const inboundSchema: z.ZodType<GetTenantResponseDtoData, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTenantResponseDtoData> =
        z.object({});
}

/** @internal */
export namespace GetTenantResponseDto$ {
    export const inboundSchema: z.ZodType<GetTenantResponseDto, z.ZodTypeDef, unknown> = z
        .object({
            _environmentId: z.string(),
            _id: z.string(),
            createdAt: z.string(),
            data: z.lazy(() => GetTenantResponseDtoData$.inboundSchema).optional(),
            identifier: z.string(),
            name: z.string().optional(),
            updatedAt: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                _environmentId: "environmentId",
                _id: "id",
            });
        });

    export type Outbound = {
        _environmentId: string;
        _id: string;
        createdAt: string;
        data?: GetTenantResponseDtoData$.Outbound | undefined;
        identifier: string;
        name?: string | undefined;
        updatedAt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTenantResponseDto> = z
        .object({
            environmentId: z.string(),
            id: z.string(),
            createdAt: z.string(),
            data: z.lazy(() => GetTenantResponseDtoData$.outboundSchema).optional(),
            identifier: z.string(),
            name: z.string().optional(),
            updatedAt: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                environmentId: "_environmentId",
                id: "_id",
            });
        });
}
