/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type CreatorId = {};

export type GetLayoutResponseDtoEnvironmentId = {};

export type GetLayoutResponseDtoId = {};

export type OrganizationId = {};

export const GetLayoutResponseDtoChannel = {
    InApp: "in_app",
    Email: "email",
    Sms: "sms",
    Chat: "chat",
    Push: "push",
} as const;
export type GetLayoutResponseDtoChannel = ClosedEnum<typeof GetLayoutResponseDtoChannel>;

export type Description = {};

export type Identifier = {};

export type GetLayoutResponseDtoName = {};

export type GetLayoutResponseDto = {
    creatorId: CreatorId;
    environmentId: GetLayoutResponseDtoEnvironmentId;
    id?: GetLayoutResponseDtoId | undefined;
    organizationId: OrganizationId;
    parentId?: string | undefined;
    channel: GetLayoutResponseDtoChannel;
    content: string;
    contentType: string;
    createdAt?: string | undefined;
    description?: Description | undefined;
    identifier: Identifier;
    isDefault: boolean;
    isDeleted: boolean;
    name: GetLayoutResponseDtoName;
    updatedAt?: string | undefined;
    variables?: Array<string> | undefined;
};

/** @internal */
export const CreatorId$inboundSchema: z.ZodType<CreatorId, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type CreatorId$Outbound = {};

/** @internal */
export const CreatorId$outboundSchema: z.ZodType<CreatorId$Outbound, z.ZodTypeDef, CreatorId> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatorId$ {
    /** @deprecated use `CreatorId$inboundSchema` instead. */
    export const inboundSchema = CreatorId$inboundSchema;
    /** @deprecated use `CreatorId$outboundSchema` instead. */
    export const outboundSchema = CreatorId$outboundSchema;
    /** @deprecated use `CreatorId$Outbound` instead. */
    export type Outbound = CreatorId$Outbound;
}

/** @internal */
export const GetLayoutResponseDtoEnvironmentId$inboundSchema: z.ZodType<
    GetLayoutResponseDtoEnvironmentId,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetLayoutResponseDtoEnvironmentId$Outbound = {};

/** @internal */
export const GetLayoutResponseDtoEnvironmentId$outboundSchema: z.ZodType<
    GetLayoutResponseDtoEnvironmentId$Outbound,
    z.ZodTypeDef,
    GetLayoutResponseDtoEnvironmentId
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLayoutResponseDtoEnvironmentId$ {
    /** @deprecated use `GetLayoutResponseDtoEnvironmentId$inboundSchema` instead. */
    export const inboundSchema = GetLayoutResponseDtoEnvironmentId$inboundSchema;
    /** @deprecated use `GetLayoutResponseDtoEnvironmentId$outboundSchema` instead. */
    export const outboundSchema = GetLayoutResponseDtoEnvironmentId$outboundSchema;
    /** @deprecated use `GetLayoutResponseDtoEnvironmentId$Outbound` instead. */
    export type Outbound = GetLayoutResponseDtoEnvironmentId$Outbound;
}

/** @internal */
export const GetLayoutResponseDtoId$inboundSchema: z.ZodType<
    GetLayoutResponseDtoId,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetLayoutResponseDtoId$Outbound = {};

/** @internal */
export const GetLayoutResponseDtoId$outboundSchema: z.ZodType<
    GetLayoutResponseDtoId$Outbound,
    z.ZodTypeDef,
    GetLayoutResponseDtoId
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLayoutResponseDtoId$ {
    /** @deprecated use `GetLayoutResponseDtoId$inboundSchema` instead. */
    export const inboundSchema = GetLayoutResponseDtoId$inboundSchema;
    /** @deprecated use `GetLayoutResponseDtoId$outboundSchema` instead. */
    export const outboundSchema = GetLayoutResponseDtoId$outboundSchema;
    /** @deprecated use `GetLayoutResponseDtoId$Outbound` instead. */
    export type Outbound = GetLayoutResponseDtoId$Outbound;
}

/** @internal */
export const OrganizationId$inboundSchema: z.ZodType<OrganizationId, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type OrganizationId$Outbound = {};

/** @internal */
export const OrganizationId$outboundSchema: z.ZodType<
    OrganizationId$Outbound,
    z.ZodTypeDef,
    OrganizationId
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationId$ {
    /** @deprecated use `OrganizationId$inboundSchema` instead. */
    export const inboundSchema = OrganizationId$inboundSchema;
    /** @deprecated use `OrganizationId$outboundSchema` instead. */
    export const outboundSchema = OrganizationId$outboundSchema;
    /** @deprecated use `OrganizationId$Outbound` instead. */
    export type Outbound = OrganizationId$Outbound;
}

/** @internal */
export const GetLayoutResponseDtoChannel$inboundSchema: z.ZodNativeEnum<
    typeof GetLayoutResponseDtoChannel
> = z.nativeEnum(GetLayoutResponseDtoChannel);

/** @internal */
export const GetLayoutResponseDtoChannel$outboundSchema: z.ZodNativeEnum<
    typeof GetLayoutResponseDtoChannel
> = GetLayoutResponseDtoChannel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLayoutResponseDtoChannel$ {
    /** @deprecated use `GetLayoutResponseDtoChannel$inboundSchema` instead. */
    export const inboundSchema = GetLayoutResponseDtoChannel$inboundSchema;
    /** @deprecated use `GetLayoutResponseDtoChannel$outboundSchema` instead. */
    export const outboundSchema = GetLayoutResponseDtoChannel$outboundSchema;
}

/** @internal */
export const Description$inboundSchema: z.ZodType<Description, z.ZodTypeDef, unknown> = z.object(
    {}
);

/** @internal */
export type Description$Outbound = {};

/** @internal */
export const Description$outboundSchema: z.ZodType<
    Description$Outbound,
    z.ZodTypeDef,
    Description
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Description$ {
    /** @deprecated use `Description$inboundSchema` instead. */
    export const inboundSchema = Description$inboundSchema;
    /** @deprecated use `Description$outboundSchema` instead. */
    export const outboundSchema = Description$outboundSchema;
    /** @deprecated use `Description$Outbound` instead. */
    export type Outbound = Description$Outbound;
}

/** @internal */
export const Identifier$inboundSchema: z.ZodType<Identifier, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Identifier$Outbound = {};

/** @internal */
export const Identifier$outboundSchema: z.ZodType<Identifier$Outbound, z.ZodTypeDef, Identifier> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Identifier$ {
    /** @deprecated use `Identifier$inboundSchema` instead. */
    export const inboundSchema = Identifier$inboundSchema;
    /** @deprecated use `Identifier$outboundSchema` instead. */
    export const outboundSchema = Identifier$outboundSchema;
    /** @deprecated use `Identifier$Outbound` instead. */
    export type Outbound = Identifier$Outbound;
}

/** @internal */
export const GetLayoutResponseDtoName$inboundSchema: z.ZodType<
    GetLayoutResponseDtoName,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetLayoutResponseDtoName$Outbound = {};

/** @internal */
export const GetLayoutResponseDtoName$outboundSchema: z.ZodType<
    GetLayoutResponseDtoName$Outbound,
    z.ZodTypeDef,
    GetLayoutResponseDtoName
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLayoutResponseDtoName$ {
    /** @deprecated use `GetLayoutResponseDtoName$inboundSchema` instead. */
    export const inboundSchema = GetLayoutResponseDtoName$inboundSchema;
    /** @deprecated use `GetLayoutResponseDtoName$outboundSchema` instead. */
    export const outboundSchema = GetLayoutResponseDtoName$outboundSchema;
    /** @deprecated use `GetLayoutResponseDtoName$Outbound` instead. */
    export type Outbound = GetLayoutResponseDtoName$Outbound;
}

/** @internal */
export const GetLayoutResponseDto$inboundSchema: z.ZodType<
    GetLayoutResponseDto,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        _creatorId: z.lazy(() => CreatorId$inboundSchema),
        _environmentId: z.lazy(() => GetLayoutResponseDtoEnvironmentId$inboundSchema),
        _id: z.lazy(() => GetLayoutResponseDtoId$inboundSchema).optional(),
        _organizationId: z.lazy(() => OrganizationId$inboundSchema),
        _parentId: z.string().optional(),
        channel: GetLayoutResponseDtoChannel$inboundSchema,
        content: z.string(),
        contentType: z.string(),
        createdAt: z.string().optional(),
        description: z.lazy(() => Description$inboundSchema).optional(),
        identifier: z.lazy(() => Identifier$inboundSchema),
        isDefault: z.boolean(),
        isDeleted: z.boolean(),
        name: z.lazy(() => GetLayoutResponseDtoName$inboundSchema),
        updatedAt: z.string().optional(),
        variables: z.array(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            _creatorId: "creatorId",
            _environmentId: "environmentId",
            _id: "id",
            _organizationId: "organizationId",
            _parentId: "parentId",
        });
    });

/** @internal */
export type GetLayoutResponseDto$Outbound = {
    _creatorId: CreatorId$Outbound;
    _environmentId: GetLayoutResponseDtoEnvironmentId$Outbound;
    _id?: GetLayoutResponseDtoId$Outbound | undefined;
    _organizationId: OrganizationId$Outbound;
    _parentId?: string | undefined;
    channel: string;
    content: string;
    contentType: string;
    createdAt?: string | undefined;
    description?: Description$Outbound | undefined;
    identifier: Identifier$Outbound;
    isDefault: boolean;
    isDeleted: boolean;
    name: GetLayoutResponseDtoName$Outbound;
    updatedAt?: string | undefined;
    variables?: Array<string> | undefined;
};

/** @internal */
export const GetLayoutResponseDto$outboundSchema: z.ZodType<
    GetLayoutResponseDto$Outbound,
    z.ZodTypeDef,
    GetLayoutResponseDto
> = z
    .object({
        creatorId: z.lazy(() => CreatorId$outboundSchema),
        environmentId: z.lazy(() => GetLayoutResponseDtoEnvironmentId$outboundSchema),
        id: z.lazy(() => GetLayoutResponseDtoId$outboundSchema).optional(),
        organizationId: z.lazy(() => OrganizationId$outboundSchema),
        parentId: z.string().optional(),
        channel: GetLayoutResponseDtoChannel$outboundSchema,
        content: z.string(),
        contentType: z.string(),
        createdAt: z.string().optional(),
        description: z.lazy(() => Description$outboundSchema).optional(),
        identifier: z.lazy(() => Identifier$outboundSchema),
        isDefault: z.boolean(),
        isDeleted: z.boolean(),
        name: z.lazy(() => GetLayoutResponseDtoName$outboundSchema),
        updatedAt: z.string().optional(),
        variables: z.array(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            creatorId: "_creatorId",
            environmentId: "_environmentId",
            id: "_id",
            organizationId: "_organizationId",
            parentId: "_parentId",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLayoutResponseDto$ {
    /** @deprecated use `GetLayoutResponseDto$inboundSchema` instead. */
    export const inboundSchema = GetLayoutResponseDto$inboundSchema;
    /** @deprecated use `GetLayoutResponseDto$outboundSchema` instead. */
    export const outboundSchema = GetLayoutResponseDto$outboundSchema;
    /** @deprecated use `GetLayoutResponseDto$Outbound` instead. */
    export type Outbound = GetLayoutResponseDto$Outbound;
}
