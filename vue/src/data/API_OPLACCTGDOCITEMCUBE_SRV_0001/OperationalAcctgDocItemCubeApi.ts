/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OperationalAcctgDocItemCube } from './OperationalAcctgDocItemCube';
import { OperationalAcctgDocItemCubeRequestBuilder } from './OperationalAcctgDocItemCubeRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  Time,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class OperationalAcctgDocItemCubeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OperationalAcctgDocItemCube<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  public constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): OperationalAcctgDocItemCubeApi<DeSerializersT> {
    return new OperationalAcctgDocItemCubeApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OperationalAcctgDocItemCube;

  requestBuilder(): OperationalAcctgDocItemCubeRequestBuilder<DeSerializersT> {
    return new OperationalAcctgDocItemCubeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OperationalAcctgDocItemCube<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OperationalAcctgDocItemCube<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OperationalAcctgDocItemCube<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof OperationalAcctgDocItemCube,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OperationalAcctgDocItemCube,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMPANY_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_YEAR: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNTING_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNTING_DOCUMENT_ITEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_CODE_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_ITEM_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CLEARING_CREATION_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CLEARING_ACCOUNTING_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CLEARED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    POSTING_KEY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_ACCOUNT_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_GL_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_GL_TRANSACTION_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_CREDIT_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_AREA_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_BUSINESS_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE_DETERMINATION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ASSIGNMENT_REFERENCE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ITEM_TEXT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_COMPANY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_TRANSACTION_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORPORATE_GROUP_ACCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNING_LEVEL: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROLLING_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROLLING_AREA_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CENTER_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ID: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DOCUMENT_ITEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULE_LINE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MASTER_FIXED_ASSET: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_TRANSACTION_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_VALUE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SALES_RELATED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LINE_ITEM_DISPLAY_IS_ENABLED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_OPEN_ITEM_MANAGED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NOT_CASH_DISCOUNT_LIABLE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_AUTOMATICALLY_CREATED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_USED_IN_PAYMENT_TRANSACTION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    OPERATIONAL_GL_ACCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GL_ACCOUNT_LONG_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_ACCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BALANCE_SHEET_ACCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PROFIT_LOSS_ACCOUNT_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_GL_ACCOUNT_ASSIGNMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_CALCULATION_BASE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_DISCOUNT_1_DAYS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CASH_DISCOUNT_2_DAYS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NET_PAYMENT_DAYS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CASH_DISCOUNT_1_PERCENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CASH_DISCOUNT_2_PERCENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_BLOCKING_REASON: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_CASH_DISCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BP_BANK_ACCOUNT_INTERNAL_ID: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DISTRIBUTION_CODE_1: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DISTRIBUTION_CODE_2: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DISTRIBUTION_CODE_3: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_REFERENCE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_REFERENCE_FISCAL_YEAR: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ITEM_REFERENCE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOLLOW_ON_DOCUMENT_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_CENTRAL_BANK_PAYMENT_REASON: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLYING_COUNTRY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_LIST: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_EXCHANGE_USAGE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNNING_KEY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNNING_BLOCKING_REASON: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_DUNNING_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DUNNING_LEVEL: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNNING_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_CERTIFICATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASING_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASING_DOCUMENT_ITEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_ASSIGNMENT_NUMBER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_COMPLETELY_DELIVERED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MATERIAL_PRICE_CONTROL: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_VALUATION_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REGISTRATION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIV_OF_GOODS_DEST_COUNTRY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_DIFFERENCE_REASON: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_CENTER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_CENTER_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOINT_VENTURE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOINT_VENTURE_COST_RECOVERY_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOINT_VENTURE_EQUITY_GROUP: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOINT_VENTURE_PARTNER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TREASURY_CONTRACT_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_CONTRACT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_FLOW_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_JURISDICTION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REAL_ESTATE_OBJECT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT_REFERENCE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    COMMITMENT_ITEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_NETWORK: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_INTERNAL_BILL_OF_OPERATIONS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_INT_BILL_OF_OPERATIONS_ITEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WBS_ELEMENT_INTERNAL_ID: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFITABILITY_SEGMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOINT_VENTURE_BILLING_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOINT_VENTURE_EQUITY_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EU_TRIANGULAR_DEAL: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COST_ORIGIN_GROUP: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_CODE_CURRENCY_DETN_METHOD: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_IS_REVERSED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PAYMENT_METHOD_SUPPLEMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_GL_ACCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNDS_CENTER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUND: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_PROFIT_CENTER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_1_ID_BY_BUSINESS_PARTNER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2_ID_BY_BUSINESS_PARTNER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NEGATIVE_POSTING: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PAYMENT_CARD_ITEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CARD_PAYMENT_SETTLEMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_CONTROL_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_3_ID_BY_BUSINESS_PARTNER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_EXCHANGE_INSTRUCTION_1: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_EXCHANGE_INSTRUCTION_2: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_EXCHANGE_INSTRUCTION_3: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_EXCHANGE_INSTRUCTION_4: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_PAYMENT_ORDER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PAYMENT_REFERENCE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_DETERMINATION_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CLEARING_ITEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BUSINESS_PLACE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_SECTION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CTR_ACTIVITY_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTS_RECEIVABLE_IS_PLEDGED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PROCESS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GRANT_ID: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_AREA_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_IS_IN_EXECUTION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    FUNDED_PROGRAM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEARING_DOC_FISCAL_YEAR: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_GL_LINE_ITEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_SEGMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_FUNCTIONAL_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK_ACCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ELEMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEPA_MANDATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_DOCUMENT_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_REFERENCE_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_DOCUMENT_LOGICAL_SYSTEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_ITEM_REF: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PERIOD: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_CATEGORY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_CATEGORY_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_TYPE_NAME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_DUE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CASH_DISCOUNT_1_DUE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CASH_DISCOUNT_2_DUE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    OFFSETTING_ACCOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSETTING_ACCOUNT_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_FUND: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_GRANT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_PERIOD: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_BUDGET_PERIOD: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOINT_VENTURE_PRODUCTION_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    COMPANY_CODE_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_COMPANY_CODE_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TAX_AMOUNT_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TAX_BASE_AMOUNT_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    VALUATION_DIFF_AMT_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CASH_DISCOUNT_AMT_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    INVOICE_AMT_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ORIGINAL_TAX_BASE_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TAX_BASE_AMOUNT_IN_TRANS_CRCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    WITHHOLDING_TAX_BASE_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PLANNED_AMT_IN_TRANSACTION_CRCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CASH_DISCOUNT_BASE_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CASH_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NET_PAYMENT_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    WITHHOLDING_TAX_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    WITHHOLDING_TAX_EXEMPTION_AMT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    INVOICE_AMOUNT_IN_FRGN_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BALANCE_TRANSACTION_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_BALANCE_TRANSAC_CRCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ADDITIONAL_CURRENCY_1: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUATION_DIFF_AMT_IN_ADDL_CRCY_1: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    AMOUNT_IN_ADDITIONAL_CURRENCY_1: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ADDITIONAL_CURRENCY_2: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_ADDITIONAL_CURRENCY_2: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    VALUATION_DIFF_AMT_IN_ADDL_CRCY_2: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PAYMENT_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_IN_PAYMENT_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CREDIT_CONTROL_AREA_CURRENCY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEDGED_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    GOODS_MOVEMENT_ENTRY_UNIT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_IN_ENTRY_UNIT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PURCHASING_DOCUMENT_PRICE_UNIT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_QTY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MATERIAL_PRICE_UNIT_QTY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NUMBER_OF_ITEMS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_CREATION_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    EXCHANGE_RATE_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ACCOUNTING_DOC_CREATED_BY_USER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_TRANSACTION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_REFERENCE_ID: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECURRING_ACCOUNTING_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSE_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSE_DOCUMENT_FISCAL_YEAR: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_HEADER_TEXT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BUSINESS_TRANSACTION_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_INPUT_SESSION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINANCIAL_MANAGEMENT_AREA: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSAL_IS_PLANNED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PLANNED_REVERSAL_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    TAX_IS_CALCULATED_AUTOMATICALLY: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    TAX_BASE_AMOUNT_IS_NET_AMOUNT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SOURCE_COMPANY_CODE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOGICAL_SYSTEM: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXCHANGE_RATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    REVERSAL_REASON: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_1_IN_DOCUMENT_HEADER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2_IN_DOCUMENT_HEADER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_RECEIPT_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LEDGER: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_GROUP: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_REFERENCE_DOCUMENT: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REPORTING_DATE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ACCOUNTING_DOCUMENT_CLASS: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATE_PAYMENT_REASON: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DOCUMENT_CONDITION: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REVERSAL: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_REVERSED: OrderableEdmTypeField<
      OperationalAcctgDocItemCube<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ALL_FIELDS: AllFields<OperationalAcctgDocItemCube<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'FiscalYear',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'AccountingDocument',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountingDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link companyCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_ITEM_TYPE: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentItemType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_DATE: fieldBuilder.buildEdmTypeField(
          'ClearingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link clearingCreationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'ClearingCreationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link clearingAccountingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_ACCOUNTING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'ClearingAccountingDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCleared} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CLEARED: fieldBuilder.buildEdmTypeField(
          'IsCleared',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link postingKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_KEY: fieldBuilder.buildEdmTypeField(
          'PostingKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financialAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField(
          'FinancialAccountType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialGlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_GL_CODE: fieldBuilder.buildEdmTypeField(
          'SpecialGLCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialGlTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_GL_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'SpecialGLTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link debitCreditCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CREDIT_CODE: fieldBuilder.buildEdmTypeField(
          'DebitCreditCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_AREA: fieldBuilder.buildEdmTypeField(
          'BusinessArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessAreaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_AREA_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessAreaName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerBusinessArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_BUSINESS_AREA: fieldBuilder.buildEdmTypeField(
          'PartnerBusinessArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link withholdingTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEdmTypeField('TaxType', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionTypeDetermination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE_DETERMINATION: fieldBuilder.buildEdmTypeField(
          'TransactionTypeDetermination',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_DATE: fieldBuilder.buildEdmTypeField(
          'ValueDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link assignmentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'AssignmentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentItemText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ITEM_TEXT: fieldBuilder.buildEdmTypeField(
          'DocumentItemText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_COMPANY: fieldBuilder.buildEdmTypeField(
          'PartnerCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financialTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'FinancialTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link corporateGroupAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORPORATE_GROUP_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CorporateGroupAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planningLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_LEVEL: fieldBuilder.buildEdmTypeField(
          'PlanningLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controllingArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROLLING_AREA: fieldBuilder.buildEdmTypeField(
          'ControllingArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controllingAreaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROLLING_AREA_NAME: fieldBuilder.buildEdmTypeField(
          'ControllingAreaName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER: fieldBuilder.buildEdmTypeField(
          'CostCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCenterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_NAME: fieldBuilder.buildEdmTypeField(
          'CostCenterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link project} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT: fieldBuilder.buildEdmTypeField('Project', 'Edm.String', true),
        /**
         * Static representation of the {@link orderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ID: fieldBuilder.buildEdmTypeField('OrderID', 'Edm.String', true),
        /**
         * Static representation of the {@link billingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'BillingDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'SalesDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'SalesDocumentItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduleLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE: fieldBuilder.buildEdmTypeField(
          'ScheduleLine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link masterFixedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASTER_FIXED_ASSET: fieldBuilder.buildEdmTypeField(
          'MasterFixedAsset',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET: fieldBuilder.buildEdmTypeField(
          'FixedAsset',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'AssetTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetValueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_VALUE_DATE: fieldBuilder.buildEdmTypeField(
          'AssetValueDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSalesRelated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_RELATED: fieldBuilder.buildEdmTypeField(
          'IsSalesRelated',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link lineItemDisplayIsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ITEM_DISPLAY_IS_ENABLED: fieldBuilder.buildEdmTypeField(
          'LineItemDisplayIsEnabled',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isOpenItemManaged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_ITEM_MANAGED: fieldBuilder.buildEdmTypeField(
          'IsOpenItemManaged',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isNotCashDiscountLiable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NOT_CASH_DISCOUNT_LIABLE: fieldBuilder.buildEdmTypeField(
          'IsNotCashDiscountLiable',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isAutomaticallyCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTOMATICALLY_CREATED: fieldBuilder.buildEdmTypeField(
          'IsAutomaticallyCreated',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isUsedInPaymentTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_USED_IN_PAYMENT_TRANSACTION: fieldBuilder.buildEdmTypeField(
          'IsUsedInPaymentTransaction',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link operationalGlAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONAL_GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OperationalGLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'GLAccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link glAccountLongName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GL_ACCOUNT_LONG_NAME: fieldBuilder.buildEdmTypeField(
          'GLAccountLongName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER: fieldBuilder.buildEdmTypeField(
          'Supplier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_NAME: fieldBuilder.buildEdmTypeField(
          'SupplierName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BranchAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBalanceSheetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BALANCE_SHEET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'IsBalanceSheetAccount',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link profitLossAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_LOSS_ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProfitLossAccountType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialGlAccountAssignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_GL_ACCOUNT_ASSIGNMENT: fieldBuilder.buildEdmTypeField(
          'SpecialGLAccountAssignment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueCalculationBaseDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_CALCULATION_BASE_DATE: fieldBuilder.buildEdmTypeField(
          'DueCalculationBaseDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link paymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'PaymentTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashDiscount1Days} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_1_DAYS: fieldBuilder.buildEdmTypeField(
          'CashDiscount1Days',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link cashDiscount2Days} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_2_DAYS: fieldBuilder.buildEdmTypeField(
          'CashDiscount2Days',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link netPaymentDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PAYMENT_DAYS: fieldBuilder.buildEdmTypeField(
          'NetPaymentDays',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link cashDiscount1Percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_1_PERCENT: fieldBuilder.buildEdmTypeField(
          'CashDiscount1Percent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link cashDiscount2Percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_2_PERCENT: fieldBuilder.buildEdmTypeField(
          'CashDiscount2Percent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'PaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentBlockingReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BLOCKING_REASON: fieldBuilder.buildEdmTypeField(
          'PaymentBlockingReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_CASH_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'FixedCashDiscount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK: fieldBuilder.buildEdmTypeField(
          'HouseBank',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bpBankAccountInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_BANK_ACCOUNT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'BPBankAccountInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDistributionCode1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DISTRIBUTION_CODE_1: fieldBuilder.buildEdmTypeField(
          'TaxDistributionCode1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDistributionCode2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DISTRIBUTION_CODE_2: fieldBuilder.buildEdmTypeField(
          'TaxDistributionCode2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDistributionCode3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DISTRIBUTION_CODE_3: fieldBuilder.buildEdmTypeField(
          'TaxDistributionCode3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'InvoiceReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceReferenceFiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REFERENCE_FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'InvoiceReferenceFiscalYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceItemReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ITEM_REFERENCE: fieldBuilder.buildEdmTypeField(
          'InvoiceItemReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link followOnDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLLOW_ON_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'FollowOnDocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateCentralBankPaymentReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_CENTRAL_BANK_PAYMENT_REASON: fieldBuilder.buildEdmTypeField(
          'StateCentralBankPaymentReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplyingCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLYING_COUNTRY: fieldBuilder.buildEdmTypeField(
          'SupplyingCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_LIST: fieldBuilder.buildEdmTypeField(
          'InvoiceList',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfExchangeUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_EXCHANGE_USAGE: fieldBuilder.buildEdmTypeField(
          'BillOfExchangeUsage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunningKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_KEY: fieldBuilder.buildEdmTypeField(
          'DunningKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunningBlockingReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_BLOCKING_REASON: fieldBuilder.buildEdmTypeField(
          'DunningBlockingReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastDunningDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DUNNING_DATE: fieldBuilder.buildEdmTypeField(
          'LastDunningDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link dunningLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_LEVEL: fieldBuilder.buildEdmTypeField(
          'DunningLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunningArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNNING_AREA: fieldBuilder.buildEdmTypeField(
          'DunningArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxCertificate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link material} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL: fieldBuilder.buildEdmTypeField(
          'Material',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link product} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.String', true),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', true),
        /**
         * Static representation of the {@link purchasingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'PurchasingDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasingDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'PurchasingDocumentItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountAssignmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ASSIGNMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountAssignmentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCompletelyDelivered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPLETELY_DELIVERED: fieldBuilder.buildEdmTypeField(
          'IsCompletelyDelivered',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link materialPriceControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_PRICE_CONTROL: fieldBuilder.buildEdmTypeField(
          'MaterialPriceControl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valuationArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_AREA: fieldBuilder.buildEdmTypeField(
          'ValuationArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryValuationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_VALUATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InventoryValuationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REGISTRATION: fieldBuilder.buildEdmTypeField(
          'VATRegistration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link delivOfGoodsDestCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIV_OF_GOODS_DEST_COUNTRY: fieldBuilder.buildEdmTypeField(
          'DelivOfGoodsDestCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentDifferenceReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DIFFERENCE_REASON: fieldBuilder.buildEdmTypeField(
          'PaymentDifferenceReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CENTER: fieldBuilder.buildEdmTypeField(
          'ProfitCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitCenterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CENTER_NAME: fieldBuilder.buildEdmTypeField(
          'ProfitCenterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jointVenture} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOINT_VENTURE: fieldBuilder.buildEdmTypeField(
          'JointVenture',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jointVentureCostRecoveryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOINT_VENTURE_COST_RECOVERY_CODE: fieldBuilder.buildEdmTypeField(
          'JointVentureCostRecoveryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jointVentureEquityGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOINT_VENTURE_EQUITY_GROUP: fieldBuilder.buildEdmTypeField(
          'JointVentureEquityGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jointVenturePartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOINT_VENTURE_PARTNER: fieldBuilder.buildEdmTypeField(
          'JointVenturePartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link treasuryContractType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREASURY_CONTRACT_TYPE: fieldBuilder.buildEdmTypeField(
          'TreasuryContractType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetContract} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_CONTRACT: fieldBuilder.buildEdmTypeField(
          'AssetContract',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashFlowType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_FLOW_TYPE: fieldBuilder.buildEdmTypeField(
          'CashFlowType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxJurisdiction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_JURISDICTION: fieldBuilder.buildEdmTypeField(
          'TaxJurisdiction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link realEstateObject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REAL_ESTATE_OBJECT: fieldBuilder.buildEdmTypeField(
          'RealEstateObject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settlementReferenceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_REFERENCE_DATE: fieldBuilder.buildEdmTypeField(
          'SettlementReferenceDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link commitmentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'CommitmentItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT: fieldBuilder.buildEdmTypeField(
          'CostObject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectNetwork} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NETWORK: fieldBuilder.buildEdmTypeField(
          'ProjectNetwork',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderInternalBillOfOperations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_INTERNAL_BILL_OF_OPERATIONS: fieldBuilder.buildEdmTypeField(
          'OrderInternalBillOfOperations',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderIntBillOfOperationsItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_INT_BILL_OF_OPERATIONS_ITEM: fieldBuilder.buildEdmTypeField(
          'OrderIntBillOfOperationsItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wbsElementInternalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT_INTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'WBSElementInternalID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitabilitySegment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFITABILITY_SEGMENT: fieldBuilder.buildEdmTypeField(
          'ProfitabilitySegment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jointVentureBillingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOINT_VENTURE_BILLING_TYPE: fieldBuilder.buildEdmTypeField(
          'JointVentureBillingType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jointVentureEquityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOINT_VENTURE_EQUITY_TYPE: fieldBuilder.buildEdmTypeField(
          'JointVentureEquityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isEuTriangularDeal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EU_TRIANGULAR_DEAL: fieldBuilder.buildEdmTypeField(
          'IsEUTriangularDeal',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link costOriginGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ORIGIN_GROUP: fieldBuilder.buildEdmTypeField(
          'CostOriginGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyCodeCurrencyDetnMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE_CURRENCY_DETN_METHOD: fieldBuilder.buildEdmTypeField(
          'CompanyCodeCurrencyDetnMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearingIsReversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_IS_REVERSED: fieldBuilder.buildEdmTypeField(
          'ClearingIsReversed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link paymentMethodSupplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_SUPPLEMENT: fieldBuilder.buildEdmTypeField(
          'PaymentMethodSupplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeGlAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_GL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'AlternativeGLAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fundsCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDS_CENTER: fieldBuilder.buildEdmTypeField(
          'FundsCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUND: fieldBuilder.buildEdmTypeField('Fund', 'Edm.String', true),
        /**
         * Static representation of the {@link partnerProfitCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_PROFIT_CENTER: fieldBuilder.buildEdmTypeField(
          'PartnerProfitCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference1IdByBusinessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_1_ID_BY_BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'Reference1IDByBusinessPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference2IdByBusinessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_2_ID_BY_BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'Reference2IDByBusinessPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isNegativePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEGATIVE_POSTING: fieldBuilder.buildEdmTypeField(
          'IsNegativePosting',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link paymentCardItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CARD_ITEM: fieldBuilder.buildEdmTypeField(
          'PaymentCardItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentCardPaymentSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CARD_PAYMENT_SETTLEMENT: fieldBuilder.buildEdmTypeField(
          'PaymentCardPaymentSettlement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditControlArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CONTROL_AREA: fieldBuilder.buildEdmTypeField(
          'CreditControlArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference3IdByBusinessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_3_ID_BY_BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'Reference3IDByBusinessPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataExchangeInstruction1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_EXCHANGE_INSTRUCTION_1: fieldBuilder.buildEdmTypeField(
          'DataExchangeInstruction1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataExchangeInstruction2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_EXCHANGE_INSTRUCTION_2: fieldBuilder.buildEdmTypeField(
          'DataExchangeInstruction2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataExchangeInstruction3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_EXCHANGE_INSTRUCTION_3: fieldBuilder.buildEdmTypeField(
          'DataExchangeInstruction3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataExchangeInstruction4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_EXCHANGE_INSTRUCTION_4: fieldBuilder.buildEdmTypeField(
          'DataExchangeInstruction4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link region} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
        /**
         * Static representation of the {@link hasPaymentOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_PAYMENT_ORDER: fieldBuilder.buildEdmTypeField(
          'HasPaymentOrder',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link paymentReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_REFERENCE: fieldBuilder.buildEdmTypeField(
          'PaymentReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxDeterminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DETERMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'TaxDeterminationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link clearingItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_ITEM: fieldBuilder.buildEdmTypeField(
          'ClearingItem',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link businessPlace} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PLACE: fieldBuilder.buildEdmTypeField(
          'BusinessPlace',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxSection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SECTION: fieldBuilder.buildEdmTypeField(
          'TaxSection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCtrActivityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CTR_ACTIVITY_TYPE: fieldBuilder.buildEdmTypeField(
          'CostCtrActivityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountsReceivableIsPledged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTS_RECEIVABLE_IS_PLEDGED: fieldBuilder.buildEdmTypeField(
          'AccountsReceivableIsPledged',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PROCESS: fieldBuilder.buildEdmTypeField(
          'BusinessProcess',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_ID: fieldBuilder.buildEdmTypeField('GrantID', 'Edm.String', true),
        /**
         * Static representation of the {@link functionalArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_AREA: fieldBuilder.buildEdmTypeField(
          'FunctionalArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalAreaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_AREA_NAME: fieldBuilder.buildEdmTypeField(
          'FunctionalAreaName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerIsInExecution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_IS_IN_EXECUTION: fieldBuilder.buildEdmTypeField(
          'CustomerIsInExecution',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link fundedProgram} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDED_PROGRAM: fieldBuilder.buildEdmTypeField(
          'FundedProgram',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearingDocFiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEARING_DOC_FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'ClearingDocFiscalYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerGlLineItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_GL_LINE_ITEM: fieldBuilder.buildEdmTypeField(
          'LedgerGLLineItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT: fieldBuilder.buildEdmTypeField('Segment', 'Edm.String', true),
        /**
         * Static representation of the {@link segmentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME: fieldBuilder.buildEdmTypeField(
          'SegmentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerSegment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_SEGMENT: fieldBuilder.buildEdmTypeField(
          'PartnerSegment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerFunctionalArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_FUNCTIONAL_AREA: fieldBuilder.buildEdmTypeField(
          'PartnerFunctionalArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'HouseBankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costElement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT: fieldBuilder.buildEdmTypeField(
          'CostElement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sepaMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPA_MANDATE: fieldBuilder.buildEdmTypeField(
          'SEPAMandate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ReferenceDocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalReferenceDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_REFERENCE_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'OriginalReferenceDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceDocumentLogicalSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_DOCUMENT_LOGICAL_SYSTEM: fieldBuilder.buildEdmTypeField(
          'ReferenceDocumentLogicalSystem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentItemRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_ITEM_REF: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentItemRef',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PERIOD: fieldBuilder.buildEdmTypeField(
          'FiscalPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'PostingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'NetDueDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link cashDiscount1DueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_1_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscount1DueDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link cashDiscount2DueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_2_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'CashDiscount2DueDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link offsettingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSETTING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OffsettingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsettingAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSETTING_ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField(
          'OffsettingAccountType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerFund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_FUND: fieldBuilder.buildEdmTypeField(
          'PartnerFund',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerGrant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_GRANT: fieldBuilder.buildEdmTypeField(
          'PartnerGrant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_PERIOD: fieldBuilder.buildEdmTypeField(
          'BudgetPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerBudgetPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_BUDGET_PERIOD: fieldBuilder.buildEdmTypeField(
          'PartnerBudgetPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_CODE: fieldBuilder.buildEdmTypeField(
          'BranchCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jointVentureProductionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOINT_VENTURE_PRODUCTION_DATE: fieldBuilder.buildEdmTypeField(
          'JointVentureProductionDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link companyCodeCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CompanyCodeCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInCompanyCodeCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_COMPANY_CODE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInCompanyCodeCurrency',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link taxAmountInCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxAmountInCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link taxBaseAmountInCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountInCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link valuationDiffAmtInCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_DIFF_AMT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'ValuationDiffAmtInCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountAmtInCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_AMT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'CashDiscountAmtInCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link invoiceAmtInCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'InvoiceAmtInCoCodeCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInTransactionCurrency',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link originalTaxBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TAX_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OriginalTaxBaseAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link taxBaseAmountInTransCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_IN_TRANS_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountInTransCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxBaseAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link plannedAmtInTransactionCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_AMT_IN_TRANSACTION_CRCY: fieldBuilder.buildEdmTypeField(
          'PlannedAmtInTransactionCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscountBaseAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link cashDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CashDiscountAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link netPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetPaymentAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxExemptionAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_EXEMPTION_AMT: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxExemptionAmt',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link invoiceAmountInFrgnCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT_IN_FRGN_CURRENCY: fieldBuilder.buildEdmTypeField(
          'InvoiceAmountInFrgnCurrency',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link balanceTransactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'BalanceTransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInBalanceTransacCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_BALANCE_TRANSAC_CRCY: fieldBuilder.buildEdmTypeField(
          'AmountInBalanceTransacCrcy',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link additionalCurrency1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_CURRENCY_1: fieldBuilder.buildEdmTypeField(
          'AdditionalCurrency1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valuationDiffAmtInAddlCrcy1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_DIFF_AMT_IN_ADDL_CRCY_1: fieldBuilder.buildEdmTypeField(
          'ValuationDiffAmtInAddlCrcy1',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link amountInAdditionalCurrency1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_ADDITIONAL_CURRENCY_1: fieldBuilder.buildEdmTypeField(
          'AmountInAdditionalCurrency1',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link additionalCurrency2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_CURRENCY_2: fieldBuilder.buildEdmTypeField(
          'AdditionalCurrency2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInAdditionalCurrency2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_ADDITIONAL_CURRENCY_2: fieldBuilder.buildEdmTypeField(
          'AmountInAdditionalCurrency2',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link valuationDiffAmtInAddlCrcy2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_DIFF_AMT_IN_ADDL_CRCY_2: fieldBuilder.buildEdmTypeField(
          'ValuationDiffAmtInAddlCrcy2',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link paymentCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'PaymentCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountInPaymentCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_IN_PAYMENT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AmountInPaymentCurrency',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link creditControlAreaCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CONTROL_AREA_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CreditControlAreaCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hedgedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEDGED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'HedgedAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link baseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'BaseUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link goodsMovementEntryUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_MOVEMENT_ENTRY_UNIT: fieldBuilder.buildEdmTypeField(
          'GoodsMovementEntryUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantityInEntryUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_IN_ENTRY_UNIT: fieldBuilder.buildEdmTypeField(
          'QuantityInEntryUnit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link purchasingDocumentPriceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_DOCUMENT_PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchasingDocumentPriceUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_QTY: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderQty',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link materialPriceUnitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_PRICE_UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'MaterialPriceUnitQty',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link numberOfItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_ITEMS: fieldBuilder.buildEdmTypeField(
          'NumberOfItems',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentCreationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentCreationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link creationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIME: fieldBuilder.buildEdmTypeField(
          'CreationTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link accountingDocCreatedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOC_CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'AccountingDocCreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intercompanyTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_TRANSACTION: fieldBuilder.buildEdmTypeField(
          'IntercompanyTransaction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentReferenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'DocumentReferenceID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recurringAccountingDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRING_ACCOUNTING_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'RecurringAccountingDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reverseDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'ReverseDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reverseDocumentFiscalYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_DOCUMENT_FISCAL_YEAR: fieldBuilder.buildEdmTypeField(
          'ReverseDocumentFiscalYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentHeaderText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_HEADER_TEXT: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentHeaderText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link businessTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'BusinessTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link batchInputSession} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_INPUT_SESSION: fieldBuilder.buildEdmTypeField(
          'BatchInputSession',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link financialManagementArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_MANAGEMENT_AREA: fieldBuilder.buildEdmTypeField(
          'FinancialManagementArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reversalIsPlanned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSAL_IS_PLANNED: fieldBuilder.buildEdmTypeField(
          'ReversalIsPlanned',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link plannedReversalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_REVERSAL_DATE: fieldBuilder.buildEdmTypeField(
          'PlannedReversalDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link taxIsCalculatedAutomatically} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_IS_CALCULATED_AUTOMATICALLY: fieldBuilder.buildEdmTypeField(
          'TaxIsCalculatedAutomatically',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link taxBaseAmountIsNetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE_AMOUNT_IS_NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxBaseAmountIsNetAmount',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link sourceCompanyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'SourceCompanyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logicalSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGICAL_SYSTEM: fieldBuilder.buildEdmTypeField(
          'LogicalSystem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'TaxExchangeRate',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link reversalReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSAL_REASON: fieldBuilder.buildEdmTypeField(
          'ReversalReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH: fieldBuilder.buildEdmTypeField('Branch', 'Edm.String', true),
        /**
         * Static representation of the {@link reference1InDocumentHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_1_IN_DOCUMENT_HEADER: fieldBuilder.buildEdmTypeField(
          'Reference1InDocumentHeader',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference2InDocumentHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_2_IN_DOCUMENT_HEADER: fieldBuilder.buildEdmTypeField(
          'Reference2InDocumentHeader',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceReceiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceReceiptDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link ledger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.String', true),
        /**
         * Static representation of the {@link ledgerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_GROUP: fieldBuilder.buildEdmTypeField(
          'LedgerGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeReferenceDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_REFERENCE_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'AlternativeReferenceDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxReportingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORTING_DATE: fieldBuilder.buildEdmTypeField(
          'TaxReportingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link accountingDocumentClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DOCUMENT_CLASS: fieldBuilder.buildEdmTypeField(
          'AccountingDocumentClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link latePaymentReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATE_PAYMENT_REASON: fieldBuilder.buildEdmTypeField(
          'LatePaymentReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDocumentCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DOCUMENT_CONDITION: fieldBuilder.buildEdmTypeField(
          'SalesDocumentCondition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReversal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSAL: fieldBuilder.buildEdmTypeField(
          'IsReversal',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isReversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSED: fieldBuilder.buildEdmTypeField(
          'IsReversed',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OperationalAcctgDocItemCube)
      };
    }

    return this._schema;
  }
}
