/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateLayoutRequestDtoVariables = {};

export type UpdateLayoutRequestDto = {
    /**
     * User defined content for the layout.
     */
    content?: string | undefined;
    /**
     * User defined description of the layout
     */
    description?: string | undefined;
    /**
     * User defined custom key that will be a unique identifier for the Layout updated.
     */
    identifier: string;
    /**
     * Variable that defines if the layout is chosen as default when creating a layout.
     */
    isDefault?: boolean | undefined;
    /**
     * User defined custom name and provided by the user that will name the Layout updated.
     */
    name?: string | undefined;
    /**
     * User defined variables to render in the layout placeholders.
     */
    variables?: Array<UpdateLayoutRequestDtoVariables> | undefined;
};

/** @internal */
export namespace UpdateLayoutRequestDtoVariables$ {
    export const inboundSchema: z.ZodType<UpdateLayoutRequestDtoVariables, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateLayoutRequestDtoVariables
    > = z.object({});
}

/** @internal */
export namespace UpdateLayoutRequestDto$ {
    export const inboundSchema: z.ZodType<UpdateLayoutRequestDto, z.ZodTypeDef, unknown> = z.object(
        {
            content: z.string().optional(),
            description: z.string().optional(),
            identifier: z.string(),
            isDefault: z.boolean().optional(),
            name: z.string().optional(),
            variables: z
                .array(z.lazy(() => UpdateLayoutRequestDtoVariables$.inboundSchema))
                .optional(),
        }
    );

    export type Outbound = {
        content?: string | undefined;
        description?: string | undefined;
        identifier: string;
        isDefault?: boolean | undefined;
        name?: string | undefined;
        variables?: Array<UpdateLayoutRequestDtoVariables$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateLayoutRequestDto> =
        z.object({
            content: z.string().optional(),
            description: z.string().optional(),
            identifier: z.string(),
            isDefault: z.boolean().optional(),
            name: z.string().optional(),
            variables: z
                .array(z.lazy(() => UpdateLayoutRequestDtoVariables$.outboundSchema))
                .optional(),
        });
}
