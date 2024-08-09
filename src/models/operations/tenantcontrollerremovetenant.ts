/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TenantControllerRemoveTenantRequest = {
    identifier: string;
};

/** @internal */
export const TenantControllerRemoveTenantRequest$inboundSchema: z.ZodType<
    TenantControllerRemoveTenantRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    identifier: z.string(),
});

/** @internal */
export type TenantControllerRemoveTenantRequest$Outbound = {
    identifier: string;
};

/** @internal */
export const TenantControllerRemoveTenantRequest$outboundSchema: z.ZodType<
    TenantControllerRemoveTenantRequest$Outbound,
    z.ZodTypeDef,
    TenantControllerRemoveTenantRequest
> = z.object({
    identifier: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TenantControllerRemoveTenantRequest$ {
    /** @deprecated use `TenantControllerRemoveTenantRequest$inboundSchema` instead. */
    export const inboundSchema = TenantControllerRemoveTenantRequest$inboundSchema;
    /** @deprecated use `TenantControllerRemoveTenantRequest$outboundSchema` instead. */
    export const outboundSchema = TenantControllerRemoveTenantRequest$outboundSchema;
    /** @deprecated use `TenantControllerRemoveTenantRequest$Outbound` instead. */
    export type Outbound = TenantControllerRemoveTenantRequest$Outbound;
}
