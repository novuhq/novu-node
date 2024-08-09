/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { NovuCore } from "../core.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { Result } from "../types/fp.js";
import * as z from "zod";

/**
 * Bulk create subscribers
 *
 * @remarks
 *
 *       Using this endpoint you can create multiple subscribers at once, to avoid multiple calls to the API.
 *       The bulk API is limited to 500 subscribers per request.
 *
 */
export async function subscribersCreateBulk(
    client$: NovuCore,
    request: components.BulkSubscriberCreateDto,
    options?: RequestOptions
): Promise<
    Result<
        void,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => components.BulkSubscriberCreateDto$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$, { explode: true });

    const path$ = pathToFunc("/v1/subscribers/bulk")();

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "*/*",
    });

    const apiKey$ = await extractSecurity(client$.options$.apiKey);
    const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
    const context = {
        operationID: "SubscribersController_bulkCreateSubscribers",
        oAuth2Scopes: [],
        securitySource: client$.options$.apiKey,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["409", "429", "4XX", "503", "5XX"],
        retryConfig: options?.retries ||
            client$.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 30000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            },
        retryCodes: options?.retryCodes || ["408", "409", "429", "5XX"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const [result$] = await m$.match<
        void,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.nil(201, z.void()),
        m$.fail([409, 429, "4XX", 503, "5XX"])
    )(response);
    if (!result$.ok) {
        return result$;
    }

    return result$;
}