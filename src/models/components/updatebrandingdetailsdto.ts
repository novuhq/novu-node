/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateBrandingDetailsDto = {
    color: string;
    contentBackground: string;
    fontColor: string;
    fontFamily?: string | undefined;
    logo: string;
};

/** @internal */
export const UpdateBrandingDetailsDto$inboundSchema: z.ZodType<
    UpdateBrandingDetailsDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    color: z.string(),
    contentBackground: z.string(),
    fontColor: z.string(),
    fontFamily: z.string().optional(),
    logo: z.string(),
});

/** @internal */
export type UpdateBrandingDetailsDto$Outbound = {
    color: string;
    contentBackground: string;
    fontColor: string;
    fontFamily?: string | undefined;
    logo: string;
};

/** @internal */
export const UpdateBrandingDetailsDto$outboundSchema: z.ZodType<
    UpdateBrandingDetailsDto$Outbound,
    z.ZodTypeDef,
    UpdateBrandingDetailsDto
> = z.object({
    color: z.string(),
    contentBackground: z.string(),
    fontColor: z.string(),
    fontFamily: z.string().optional(),
    logo: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateBrandingDetailsDto$ {
    /** @deprecated use `UpdateBrandingDetailsDto$inboundSchema` instead. */
    export const inboundSchema = UpdateBrandingDetailsDto$inboundSchema;
    /** @deprecated use `UpdateBrandingDetailsDto$outboundSchema` instead. */
    export const outboundSchema = UpdateBrandingDetailsDto$outboundSchema;
    /** @deprecated use `UpdateBrandingDetailsDto$Outbound` instead. */
    export type Outbound = UpdateBrandingDetailsDto$Outbound;
}
