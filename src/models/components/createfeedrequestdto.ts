/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateFeedRequestDto = {
    name: string;
};

/** @internal */
export namespace CreateFeedRequestDto$ {
    export const inboundSchema: z.ZodType<CreateFeedRequestDto, z.ZodTypeDef, unknown> = z.object({
        name: z.string(),
    });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateFeedRequestDto> = z.object(
        {
            name: z.string(),
        }
    );
}
