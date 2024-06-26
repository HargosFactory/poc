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
import { Yy1_Fi_Jrnentriesfactor } from './Yy1_Fi_Jrnentriesfactor';

/**
 * Request builder class for operations supported on the {@link Yy1_Fi_Jrnentriesfactor} entity.
 */
export class Yy1_Fi_JrnentriesfactorRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Yy1_Fi_Jrnentriesfactor<T>, T> {
  /**
   * Returns a request builder for querying all `Yy1_Fi_Jrnentriesfactor` entities.
   * @returns A request builder for creating requests to retrieve all `Yy1_Fi_Jrnentriesfactor` entities.
   */
  getAll(): GetAllRequestBuilder<Yy1_Fi_Jrnentriesfactor<T>, T> {
    return new GetAllRequestBuilder<Yy1_Fi_Jrnentriesfactor<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `Yy1_Fi_Jrnentriesfactor` entity based on its keys.
   * @param sourceLedger Key property. See {@link Yy1_Fi_Jrnentriesfactor.sourceLedger}.
   * @param companyCode Key property. See {@link Yy1_Fi_Jrnentriesfactor.companyCode}.
   * @param fiscalYear Key property. See {@link Yy1_Fi_Jrnentriesfactor.fiscalYear}.
   * @param accountingDocument Key property. See {@link Yy1_Fi_Jrnentriesfactor.accountingDocument}.
   * @param ledgerGlLineItem Key property. See {@link Yy1_Fi_Jrnentriesfactor.ledgerGlLineItem}.
   * @param ledger Key property. See {@link Yy1_Fi_Jrnentriesfactor.ledger}.
   * @returns A request builder for creating requests to retrieve one `Yy1_Fi_Jrnentriesfactor` entity based on its keys.
   */
  getByKey(
    sourceLedger: DeserializedType<T, 'Edm.String'>,
    companyCode: DeserializedType<T, 'Edm.String'>,
    fiscalYear: DeserializedType<T, 'Edm.String'>,
    accountingDocument: DeserializedType<T, 'Edm.String'>,
    ledgerGlLineItem: DeserializedType<T, 'Edm.String'>,
    ledger: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Yy1_Fi_Jrnentriesfactor<T>, T> {
    return new GetByKeyRequestBuilder<Yy1_Fi_Jrnentriesfactor<T>, T>(
      this.entityApi,
      {
        SourceLedger: sourceLedger,
        CompanyCode: companyCode,
        FiscalYear: fiscalYear,
        AccountingDocument: accountingDocument,
        LedgerGLLineItem: ledgerGlLineItem,
        Ledger: ledger
      }
    );
  }
}
