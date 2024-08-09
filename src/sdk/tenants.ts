/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tenantsCreate } from "../funcs/tenantsCreate.js";
import { tenantsDelete } from "../funcs/tenantsDelete.js";
import { tenantsList } from "../funcs/tenantsList.js";
import { tenantsRetrieve } from "../funcs/tenantsRetrieve.js";
import { tenantsUpdate } from "../funcs/tenantsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Tenants extends ClientSDK {
    /**
     * Create tenant
     *
     * @remarks
     * Create tenant under the current environment
     */
    async create(
        request: components.CreateTenantRequestDto,
        options?: RequestOptions
    ): Promise<components.CreateTenantResponseDto> {
        return unwrapAsync(tenantsCreate(this, request, options));
    }

    /**
     * Delete tenant
     *
     * @remarks
     * Deletes a tenant entity from the Novu platform
     */
    async delete(identifier: string, options?: RequestOptions): Promise<void> {
        return unwrapAsync(tenantsDelete(this, identifier, options));
    }

    /**
     * Get tenants
     *
     * @remarks
     * Returns a list of tenants, could paginated using the `page` and `limit` query parameter
     */
    async list(
        page?: number | undefined,
        limit?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.TenantControllerListTenantsResponse>> {
        return unwrapResultIterator(tenantsList(this, page, limit, options));
    }

    /**
     * Get tenant
     *
     * @remarks
     * Get tenant by your internal id used to identify the tenant
     */
    async retrieve(
        identifier: string,
        options?: RequestOptions
    ): Promise<components.GetTenantResponseDto> {
        return unwrapAsync(tenantsRetrieve(this, identifier, options));
    }

    /**
     * Update tenant
     *
     * @remarks
     * Update tenant by your internal id used to identify the tenant
     */
    async update(
        identifier: string,
        updateTenantRequestDto: components.UpdateTenantRequestDto,
        options?: RequestOptions
    ): Promise<components.UpdateTenantResponseDto> {
        return unwrapAsync(tenantsUpdate(this, identifier, updateTenantRequestDto, options));
    }
}
