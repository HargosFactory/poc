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
import { Yy1_Fi_Jrnentriesfactor } from './index';

/**
 * Batch builder for operations supported on the Yy1 Fi Jrnentriesfactor Cds 0001.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultYy1FiJrnentriesfactorCds0001Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Yy1 Fi Jrnentriesfactor Cds 0001.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
    | Array<WriteYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>>,
  ...rest: Array<
    WriteYy1FiJrnentriesfactorCds0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultYy1FiJrnentriesfactorCds0001Path =
  '/sap/opu/odata/sap/YY1_FI_JRNENTRIESFACTOR_CDS';
export type ReadYy1FiJrnentriesfactorCds0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      Yy1_Fi_Jrnentriesfactor<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Yy1_Fi_Jrnentriesfactor<DeSerializersT>,
      DeSerializersT
    >;
export type WriteYy1FiJrnentriesfactorCds0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      Yy1_Fi_Jrnentriesfactor<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      Yy1_Fi_Jrnentriesfactor<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      Yy1_Fi_Jrnentriesfactor<DeSerializersT>,
      DeSerializersT
    >;
