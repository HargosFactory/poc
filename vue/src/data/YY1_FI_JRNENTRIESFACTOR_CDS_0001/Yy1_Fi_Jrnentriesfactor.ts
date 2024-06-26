/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { Yy1_Fi_JrnentriesfactorApi } from './Yy1_Fi_JrnentriesfactorApi';

/**
 * This class represents the entity "YY1_FI_JRNENTRIESFACTOR" of service "YY1_FI_JRNENTRIESFACTOR_CDS".
 */
export class Yy1_Fi_Jrnentriesfactor<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Yy1_Fi_JrnentriesfactorType<T>
{
  /**
   * Technical entity name for Yy1_Fi_Jrnentriesfactor.
   */
  static _entityName = 'YY1_FI_JRNENTRIESFACTOR';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/YY1_FI_JRNENTRIESFACTOR_CDS';
  /**
   * All key fields of the Yy1_Fi_Jrnentriesfactor entity
   */
  static _keys = [
    'SourceLedger',
    'CompanyCode',
    'FiscalYear',
    'AccountingDocument',
    'LedgerGLLineItem',
    'Ledger'
  ];
  /**
   * Source Ledger.
   * Maximum length: 2.
   */
  declare sourceLedger: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  declare companyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Year.
   * Maximum length: 4.
   */
  declare fiscalYear: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Entry.
   * Maximum length: 10.
   */
  declare accountingDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * General Ledger Journal Entry Line Item.
   * Maximum length: 6.
   */
  declare ledgerGlLineItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger in General Ledger Accounting.
   * Maximum length: 2.
   */
  declare ledger: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Yy1_Fi_JrnentriesfactorApi<T>) {
    super(_entityApi);
  }
}

export interface Yy1_Fi_JrnentriesfactorType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceLedger: DeserializedType<T, 'Edm.String'>;
  companyCode: DeserializedType<T, 'Edm.String'>;
  fiscalYear: DeserializedType<T, 'Edm.String'>;
  accountingDocument: DeserializedType<T, 'Edm.String'>;
  ledgerGlLineItem: DeserializedType<T, 'Edm.String'>;
  ledger: DeserializedType<T, 'Edm.String'>;
}
