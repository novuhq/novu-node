/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messagesDelete } from "../funcs/messagesDelete.js";
import { messagesDeleteByTransactionId } from "../funcs/messagesDeleteByTransactionId.js";
import { messagesRetrieve } from "../funcs/messagesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Messages extends ClientSDK {
    /**
     * Delete message
     *
     * @remarks
     * Deletes a message entity from the Novu platform
     */
    async delete(
        messageId: string,
        options?: RequestOptions
    ): Promise<components.DeleteMessageResponseDto> {
        return unwrapAsync(messagesDelete(this, messageId, options));
    }

    /**
     * Delete messages by transactionId
     *
     * @remarks
     * Deletes messages entity from the Novu platform using TransactionId of message
     */
    async deleteByTransactionId(
        transactionId: string,
        channel?: operations.Channel | undefined,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(messagesDeleteByTransactionId(this, transactionId, channel, options));
    }

    /**
     * Get messages
     *
     * @remarks
     * Returns a list of messages, could paginate using the `page` query parameter
     */
    async retrieve(
        request: operations.MessagesControllerGetMessagesRequest,
        options?: RequestOptions
    ): Promise<components.ActivitiesResponseDto> {
        return unwrapAsync(messagesRetrieve(this, request, options));
    }
}
