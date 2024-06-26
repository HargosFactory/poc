/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { OperationalAcctgDocItemCube } from './OperationalAcctgDocItemCube';

/**
 * Request builder class for operations supported on the {@link OperationalAcctgDocItemCube} entity.
 */
export class OperationalAcctgDocItemCubeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperationalAcctgDocItemCube<T>, T> {
  /**
   * Returns a request builder for querying all `OperationalAcctgDocItemCube` entities.
   * @returns A request builder for creating requests to retrieve all `OperationalAcctgDocItemCube` entities.
   */
  getAll(): GetAllRequestBuilder<OperationalAcctgDocItemCube<T>, T> {
    return new GetAllRequestBuilder<OperationalAcctgDocItemCube<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `OperationalAcctgDocItemCube` entity based on its keys.
   * @param companyCode Key property. See {@link OperationalAcctgDocItemCube.companyCode}.
   * @param fiscalYear Key property. See {@link OperationalAcctgDocItemCube.fiscalYear}.
   * @param accountingDocument Key property. See {@link OperationalAcctgDocItemCube.accountingDocument}.
   * @param accountingDocumentItem Key property. See {@link OperationalAcctgDocItemCube.accountingDocumentItem}.
   * @returns A request builder for creating requests to retrieve one `OperationalAcctgDocItemCube` entity based on its keys.
   */
  getByKey(
    companyCode: DeserializedType<T, 'Edm.String'>,
    fiscalYear: DeserializedType<T, 'Edm.String'>,
    accountingDocument: DeserializedType<T, 'Edm.String'>,
    accountingDocumentItem: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OperationalAcctgDocItemCube<T>, T> {
    return new GetByKeyRequestBuilder<OperationalAcctgDocItemCube<T>, T>(
      this.entityApi,
      {
        CompanyCode: companyCode,
        FiscalYear: fiscalYear,
        AccountingDocument: accountingDocument,
        AccountingDocumentItem: accountingDocumentItem
      }
    );
  }
}
