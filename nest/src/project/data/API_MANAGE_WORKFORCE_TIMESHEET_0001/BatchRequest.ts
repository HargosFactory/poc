/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { TimeSheetEntry } from './index';

/**
 * Batch builder for operations supported on the Api Manage Workforce Timesheet 0001.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultApiManageWorkforceTimesheet0001Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Api Manage Workforce Timesheet 0001.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
    | Array<WriteApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>>,
  ...rest: Array<
    WriteApiManageWorkforceTimesheet0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultApiManageWorkforceTimesheet0001Path =
  '/sap/opu/odata/sap/API_MANAGE_WORKFORCE_TIMESHEET';
export type ReadApiManageWorkforceTimesheet0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<TimeSheetEntry<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeSheetEntry<DeSerializersT>, DeSerializersT>;
export type WriteApiManageWorkforceTimesheet0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<TimeSheetEntry<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeSheetEntry<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeSheetEntry<DeSerializersT>, DeSerializersT>;
