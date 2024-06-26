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
import { OperationalAcctgDocItemCube } from './index';

/**
 * Batch builder for operations supported on the Api Oplacctgdocitemcube Srv 0001.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultApiOplacctgdocitemcubeSrv0001Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Api Oplacctgdocitemcube Srv 0001.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
    | Array<WriteApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>>,
  ...rest: Array<
    WriteApiOplacctgdocitemcubeSrv0001RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultApiOplacctgdocitemcubeSrv0001Path =
  '/sap/opu/odata/sap/API_OPLACCTGDOCITEMCUBE_SRV';
export type ReadApiOplacctgdocitemcubeSrv0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      OperationalAcctgDocItemCube<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      OperationalAcctgDocItemCube<DeSerializersT>,
      DeSerializersT
    >;
export type WriteApiOplacctgdocitemcubeSrv0001RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      OperationalAcctgDocItemCube<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      OperationalAcctgDocItemCube<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      OperationalAcctgDocItemCube<DeSerializersT>,
      DeSerializersT
    >;
