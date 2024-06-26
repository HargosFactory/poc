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
import type { OperationalAcctgDocItemCubeApi } from './OperationalAcctgDocItemCubeApi';

/**
 * This class represents the entity "A_OperationalAcctgDocItemCube" of service "API_OPLACCTGDOCITEMCUBE_SRV".
 */
export class OperationalAcctgDocItemCube<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OperationalAcctgDocItemCubeType<T>
{
  /**
   * Technical entity name for OperationalAcctgDocItemCube.
   */
  static _entityName = 'A_OperationalAcctgDocItemCube';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_OPLACCTGDOCITEMCUBE_SRV';
  /**
   * All key fields of the OperationalAcctgDocItemCube entity
   */
  static _keys = [
    'CompanyCode',
    'FiscalYear',
    'AccountingDocument',
    'AccountingDocumentItem'
  ];
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
   * Journal Entry Posting View Item.
   * Maximum length: 3.
   */
  declare accountingDocumentItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code Name.
   * Maximum length: 25.
   * @nullable
   */
  declare companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chart of Accounts.
   * Maximum length: 4.
   * @nullable
   */
  declare chartOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification of the Line Item.
   * Maximum length: 1.
   * @nullable
   */
  declare accountingDocumentItemType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clearing Date.
   * @nullable
   */
  declare clearingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Clearing Creation Date.
   * @nullable
   */
  declare clearingCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Clearing Journal Entry.
   * Maximum length: 10.
   * @nullable
   */
  declare clearingAccountingDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clearing Status: Is Cleared.
   * @nullable
   */
  declare isCleared?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Posting Key.
   * Maximum length: 2.
   * @nullable
   */
  declare postingKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * Maximum length: 1.
   * @nullable
   */
  declare financialAccountType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special G/L Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare specialGlCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special G/L Transaction Type.
   * Maximum length: 1.
   * @nullable
   */
  declare specialGlTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit/Credit Code.
   * Maximum length: 1.
   * @nullable
   */
  declare debitCreditCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Area.
   * Maximum length: 4.
   * @nullable
   */
  declare businessArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Area Name.
   * Maximum length: 30.
   * @nullable
   */
  declare businessAreaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Business Area.
   * Maximum length: 4.
   * @nullable
   */
  declare partnerBusinessArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax on Sales/Purchases Code.
   * Maximum length: 2.
   * @nullable
   */
  declare taxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  declare withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Type.
   * Maximum length: 1.
   * @nullable
   */
  declare taxType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Key.
   * Maximum length: 3.
   * @nullable
   */
  declare transactionTypeDetermination?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Value Date.
   * @nullable
   */
  declare valueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Assignment Reference.
   * Maximum length: 18.
   * @nullable
   */
  declare assignmentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Text.
   * Maximum length: 50.
   * @nullable
   */
  declare documentItemText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company ID of Trading Partner.
   * Maximum length: 6.
   * @nullable
   */
  declare partnerCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Transaction Type.
   * Maximum length: 3.
   * @nullable
   */
  declare financialTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Corporate Group Account.
   * Maximum length: 10.
   * @nullable
   */
  declare corporateGroupAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning Level.
   * Maximum length: 2.
   * @nullable
   */
  declare planningLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area.
   * Maximum length: 4.
   * @nullable
   */
  declare controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Controlling Area Name.
   * Maximum length: 25.
   * @nullable
   */
  declare controllingAreaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  declare costCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Center Name.
   * Maximum length: 20.
   * @nullable
   */
  declare costCenterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project.
   * Maximum length: 24.
   * @nullable
   */
  declare project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order ID.
   * Maximum length: 12.
   * @nullable
   */
  declare orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Document.
   * Maximum length: 10.
   * @nullable
   */
  declare billingDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Document.
   * Maximum length: 10.
   * @nullable
   */
  declare salesDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Document Item.
   * Maximum length: 6.
   * @nullable
   */
  declare salesDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Schedule Line.
   * Maximum length: 4.
   * @nullable
   */
  declare scheduleLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Asset.
   * Maximum length: 12.
   * @nullable
   */
  declare masterFixedAsset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Subnumber.
   * Maximum length: 4.
   * @nullable
   */
  declare fixedAsset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Transaction Type.
   * Maximum length: 3.
   * @nullable
   */
  declare assetTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Value Date.
   * @nullable
   */
  declare assetValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Personnel Number.
   * Maximum length: 8.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Sales Related.
   * @nullable
   */
  declare isSalesRelated?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Can Line Items Be Displayed by Account?.
   * @nullable
   */
  declare lineItemDisplayIsEnabled?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Managed on an Open Item Basis.
   * Maximum length: 1.
   * @nullable
   */
  declare isOpenItemManaged?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Not Cash Discount Liable.
   * @nullable
   */
  declare isNotCashDiscountLiable?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Automatically Created.
   * @nullable
   */
  declare isAutomaticallyCreated?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Used In Payment Transaction.
   * @nullable
   */
  declare isUsedInPaymentTransaction?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Operational General Ledger Account.
   * Maximum length: 10.
   * @nullable
   */
  declare operationalGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * G/L Account.
   * Maximum length: 10.
   * @nullable
   */
  declare glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * G/L Account Name.
   * Maximum length: 30.
   * @nullable
   */
  declare glAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * G/L Account Long Name.
   * Maximum length: 50.
   * @nullable
   */
  declare glAccountLongName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Number.
   * Maximum length: 10.
   * @nullable
   */
  declare customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Customer.
   * Maximum length: 80.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier.
   * Maximum length: 10.
   * @nullable
   */
  declare supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Supplier.
   * Maximum length: 80.
   * @nullable
   */
  declare supplierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Account.
   * Maximum length: 10.
   * @nullable
   */
  declare branchAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Balance Sheet Account.
   * @nullable
   */
  declare isBalanceSheetAccount?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Profit Loss Account Type.
   * Maximum length: 2.
   * @nullable
   */
  declare profitLossAccountType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Assignment Number for Special G/L Accounts.
   * Maximum length: 18.
   * @nullable
   */
  declare specialGlAccountAssignment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Calculation Base Date.
   * @nullable
   */
  declare dueCalculationBaseDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Terms of Payment Key.
   * Maximum length: 4.
   * @nullable
   */
  declare paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Discount Days 1.
   * @nullable
   */
  declare cashDiscount1Days?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Cash Discount Days 2.
   * @nullable
   */
  declare cashDiscount2Days?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Payment Terms Period.
   * @nullable
   */
  declare netPaymentDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Cash Discount Percentage 1.
   * @nullable
   */
  declare cashDiscount1Percent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Cash Discount Percentage 2.
   * @nullable
   */
  declare cashDiscount2Percent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Payment Method.
   * Maximum length: 1.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Blocking Reason.
   * Maximum length: 1.
   * @nullable
   */
  declare paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Cash Discount.
   * Maximum length: 1.
   * @nullable
   */
  declare fixedCashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Key.
   * Maximum length: 5.
   * @nullable
   */
  declare houseBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Bank Account Internal ID.
   * Maximum length: 4.
   * @nullable
   */
  declare bpBankAccountInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Code 1 for Distribution.
   * Maximum length: 2.
   * @nullable
   */
  declare taxDistributionCode1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Code 2 for Distribution.
   * Maximum length: 2.
   * @nullable
   */
  declare taxDistributionCode2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Code 3 for Distribution.
   * Maximum length: 2.
   * @nullable
   */
  declare taxDistributionCode3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Reference.
   * Maximum length: 10.
   * @nullable
   */
  declare invoiceReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Reference Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  declare invoiceReferenceFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Item Reference.
   * Maximum length: 3.
   * @nullable
   */
  declare invoiceItemReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Follow-On Document Type.
   * Maximum length: 1.
   * @nullable
   */
  declare followOnDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Central Bank Indicator.
   * Maximum length: 3.
   * @nullable
   */
  declare stateCentralBankPaymentReason?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Supplying Country/Region.
   * Maximum length: 3.
   * @nullable
   */
  declare supplyingCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice List.
   * Maximum length: 8.
   * @nullable
   */
  declare invoiceList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill of Exchange Usage Type.
   * Maximum length: 1.
   * @nullable
   */
  declare billOfExchangeUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dunning Key.
   * Maximum length: 1.
   * @nullable
   */
  declare dunningKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dunning Blocking Reason.
   * Maximum length: 1.
   * @nullable
   */
  declare dunningBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Last Dunning Notice.
   * @nullable
   */
  declare lastDunningDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Dunning Level.
   * Maximum length: 1.
   * @nullable
   */
  declare dunningLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dunning Area.
   * Maximum length: 2.
   * @nullable
   */
  declare dunningArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Certificate.
   * Maximum length: 10.
   * @nullable
   */
  declare withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Number.
   * Maximum length: 40.
   * @nullable
   */
  declare material?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * Maximum length: 40.
   * @nullable
   */
  declare product?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  declare plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Document.
   * Maximum length: 10.
   * @nullable
   */
  declare purchasingDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Document Item.
   * Maximum length: 5.
   * @nullable
   */
  declare purchasingDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequential Number of Account Assignment.
   * Maximum length: 2.
   * @nullable
   */
  declare accountAssignmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is completely delivered.
   * @nullable
   */
  declare isCompletelyDelivered?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Material Price Control Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare materialPriceControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation Area.
   * Maximum length: 4.
   * @nullable
   */
  declare valuationArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation Type.
   * Maximum length: 10.
   * @nullable
   */
  declare inventoryValuationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAT Registration.
   * Maximum length: 20.
   * @nullable
   */
  declare vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country/Region of Destination for Delivery of Goods.
   * Maximum length: 3.
   * @nullable
   */
  declare delivOfGoodsDestCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Difference Reason.
   * Maximum length: 3.
   * @nullable
   */
  declare paymentDifferenceReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  declare profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description of Profit Center.
   * Maximum length: 20.
   * @nullable
   */
  declare profitCenterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Joint Venture.
   * Maximum length: 6.
   * @nullable
   */
  declare jointVenture?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recovery Indicator.
   * Maximum length: 2.
   * @nullable
   */
  declare jointVentureCostRecoveryCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Joint Venture Equity Group.
   * Maximum length: 3.
   * @nullable
   */
  declare jointVentureEquityGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Joint Venture Partner.
   * Maximum length: 10.
   * @nullable
   */
  declare jointVenturePartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Treasury Contract Type.
   * Maximum length: 1.
   * @nullable
   */
  declare treasuryContractType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Contract.
   * Maximum length: 13.
   * @nullable
   */
  declare assetContract?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flow Type.
   * Maximum length: 4.
   * @nullable
   */
  declare cashFlowType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   * @nullable
   */
  declare taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal Key for Real Estate Object.
   * Maximum length: 40.
   * @nullable
   */
  declare realEstateObject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Date for Settlement.
   * @nullable
   */
  declare settlementReferenceDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Commitment Item.
   * Maximum length: 24.
   * @nullable
   */
  declare commitmentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Object.
   * Maximum length: 12.
   * @nullable
   */
  declare costObject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Network Number for Account Assignment.
   * Maximum length: 12.
   * @nullable
   */
  declare projectNetwork?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Internal Bill of Operations ID.
   * Maximum length: 10.
   * @nullable
   */
  declare orderInternalBillOfOperations?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Order Internal Bill of Operations Item.
   * Maximum length: 8.
   * @nullable
   */
  declare orderIntBillOfOperationsItem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * WBS Element (Internal Number Without Conversion).
   * Maximum length: 8.
   * @nullable
   */
  declare wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profitability Segment.
   * Maximum length: 10.
   * @nullable
   */
  declare profitabilitySegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Joint Venture Billing Type.
   * Maximum length: 2.
   * @nullable
   */
  declare jointVentureBillingType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Joint Venture Equity Type.
   * Maximum length: 3.
   * @nullable
   */
  declare jointVentureEquityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is EU Triangular Deal.
   * @nullable
   */
  declare isEuTriangularDeal?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Origin Group as Subdivision of Cost Element.
   * Maximum length: 4.
   * @nullable
   */
  declare costOriginGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Code Currency Determination Method.
   * Maximum length: 1.
   * @nullable
   */
  declare companyCodeCurrencyDetnMethod?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Clearing Is Reversed.
   * @nullable
   */
  declare clearingIsReversed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Payment Method Supplement.
   * Maximum length: 2.
   * @nullable
   */
  declare paymentMethodSupplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative G/L Account Number In Company Code.
   * Maximum length: 10.
   * @nullable
   */
  declare alternativeGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Funds Management Center.
   * Maximum length: 16.
   * @nullable
   */
  declare fundsCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fund.
   * Maximum length: 10.
   * @nullable
   */
  declare fund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  declare partnerProfitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID of Reference 1 by Business Partner.
   * Maximum length: 12.
   * @nullable
   */
  declare reference1IdByBusinessPartner?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * ID of Reference 2 by Business Partner.
   * Maximum length: 12.
   * @nullable
   */
  declare reference2IdByBusinessPartner?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Negative Posting.
   * @nullable
   */
  declare isNegativePosting?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Payment Card Item.
   * Maximum length: 3.
   * @nullable
   */
  declare paymentCardItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Card Payment Settlement.
   * Maximum length: 10.
   * @nullable
   */
  declare paymentCardPaymentSettlement?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Credit Control Area.
   * Maximum length: 4.
   * @nullable
   */
  declare creditControlArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID of Reference 3 by Business Partner.
   * Maximum length: 20.
   * @nullable
   */
  declare reference3IdByBusinessPartner?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Data Exchange Instruction 1.
   * Maximum length: 2.
   * @nullable
   */
  declare dataExchangeInstruction1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Exchange Instruction 2.
   * Maximum length: 2.
   * @nullable
   */
  declare dataExchangeInstruction2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Exchange Instruction 3.
   * Maximum length: 2.
   * @nullable
   */
  declare dataExchangeInstruction3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Exchange Instruction 4.
   * Maximum length: 2.
   * @nullable
   */
  declare dataExchangeInstruction4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region (State, Province, County).
   * Maximum length: 3.
   * @nullable
   */
  declare region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Payment Order Exists for this Item.
   * @nullable
   */
  declare hasPaymentOrder?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Payment Reference.
   * Maximum length: 30.
   * @nullable
   */
  declare paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date for Determination of Tax Rates.
   * @nullable
   */
  declare taxDeterminationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Clearing Item.
   * @nullable
   */
  declare clearingItem?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Business Place.
   * Maximum length: 4.
   * @nullable
   */
  declare businessPlace?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Section.
   * Maximum length: 4.
   * @nullable
   */
  declare taxSection?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Type.
   * Maximum length: 6.
   * @nullable
   */
  declare costCtrActivityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounts Receivable Is Pledged.
   * Maximum length: 2.
   * @nullable
   */
  declare accountsReceivableIsPledged?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Business Process.
   * Maximum length: 12.
   * @nullable
   */
  declare businessProcess?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Grant.
   * Maximum length: 20.
   * @nullable
   */
  declare grantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Area.
   * Maximum length: 16.
   * @nullable
   */
  declare functionalArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Area Name.
   * Maximum length: 30.
   * @nullable
   */
  declare functionalAreaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Is In Execution.
   * @nullable
   */
  declare customerIsInExecution?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Funded Program.
   * Maximum length: 24.
   * @nullable
   */
  declare fundedProgram?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Year of Clearing Journal Entry.
   * Maximum length: 4.
   * @nullable
   */
  declare clearingDocFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Ledger Journal Entry Line Item.
   * Maximum length: 6.
   * @nullable
   */
  declare ledgerGlLineItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment for Segmental Reporting.
   * Maximum length: 10.
   * @nullable
   */
  declare segment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name.
   * Maximum length: 50.
   * @nullable
   */
  declare segmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Segment for Segmental Reporting.
   * Maximum length: 10.
   * @nullable
   */
  declare partnerSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Functional Area.
   * Maximum length: 16.
   * @nullable
   */
  declare partnerFunctionalArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank Account.
   * Maximum length: 5.
   * @nullable
   */
  declare houseBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Element.
   * Maximum length: 10.
   * @nullable
   */
  declare costElement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unique Reference to Mandate for each Payee.
   * Maximum length: 35.
   * @nullable
   */
  declare sepaMandate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Document Type.
   * Maximum length: 5.
   * @nullable
   */
  declare referenceDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Original Reference Document.
   * Maximum length: 20.
   * @nullable
   */
  declare originalReferenceDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Logical System of Reference Document.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceDocumentLogicalSystem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Journal Entry Line Item Reference.
   * Maximum length: 10.
   * @nullable
   */
  declare accountingDocumentItemRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Period.
   * Maximum length: 3.
   * @nullable
   */
  declare fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Entry Category.
   * Maximum length: 1.
   * @nullable
   */
  declare accountingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Entry Category Name.
   * Maximum length: 60.
   * @nullable
   */
  declare accountingDocumentCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Posting Date.
   * @nullable
   */
  declare postingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Journal Entry Date.
   * @nullable
   */
  declare documentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Journal Entry Type.
   * Maximum length: 2.
   * @nullable
   */
  declare accountingDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Type Name.
   * Maximum length: 20.
   * @nullable
   */
  declare accountingDocumentTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date for Net Payment.
   * @nullable
   */
  declare netDueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Due Date for Cash Discount 1.
   * @nullable
   */
  declare cashDiscount1DueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Cash Discount 2 Due Date.
   * @nullable
   */
  declare cashDiscount2DueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Offsetting Account.
   * Maximum length: 10.
   * @nullable
   */
  declare offsettingAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offsetting Account Type.
   * Maximum length: 1.
   * @nullable
   */
  declare offsettingAccountType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Fund.
   * Maximum length: 10.
   * @nullable
   */
  declare partnerFund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Grant.
   * Maximum length: 20.
   * @nullable
   */
  declare partnerGrant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Period.
   * Maximum length: 10.
   * @nullable
   */
  declare budgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * FM: Partner Budget Period.
   * Maximum length: 10.
   * @nullable
   */
  declare partnerBudgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Code.
   * Maximum length: 5.
   * @nullable
   */
  declare branchCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Joint Venture Production Date.
   * @nullable
   */
  declare jointVentureProductionDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Company Code Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare companyCodeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Company Code Currency.
   * @nullable
   */
  declare amountInCompanyCodeCurrency?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Signed Tax Amount in Company Code Currency.
   * @nullable
   */
  declare taxAmountInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Tax Base Amount in Company Code Currency.
   * @nullable
   */
  declare taxBaseAmountInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Valuation Difference Amount In Company Code Currency.
   * @nullable
   */
  declare valuationDiffAmtInCoCodeCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Cash Discount Amount in Company Code Currency.
   * @nullable
   */
  declare cashDiscountAmtInCoCodeCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Invoice Amount in Company Code Currency.
   * @nullable
   */
  declare invoiceAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Transaction Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Transaction Currency.
   * @nullable
   */
  declare amountInTransactionCurrency?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Original Tax Base Amount in Transaction Currency.
   * @nullable
   */
  declare originalTaxBaseAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Tax Amount in Transaction Currency.
   * @nullable
   */
  declare taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Tax Base Amount in Transaction Currency.
   * @nullable
   */
  declare taxBaseAmountInTransCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Withholding Tax Base Amount.
   * @nullable
   */
  declare withholdingTaxBaseAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Planned Amount in Transaction Currency.
   * @nullable
   */
  declare plannedAmtInTransactionCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Cash Discount Base Amount.
   * @nullable
   */
  declare cashDiscountBaseAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Cash Discount Amount.
   * @nullable
   */
  declare cashDiscountAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Payment Amount.
   * @nullable
   */
  declare netPaymentAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Withholding Tax Amount.
   * @nullable
   */
  declare withholdingTaxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Withholding Tax-Exemption Amount.
   * @nullable
   */
  declare withholdingTaxExemptionAmt?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Invoice Amount in Foreign Currency.
   * @nullable
   */
  declare invoiceAmountInFrgnCurrency?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Balance Transaction Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare balanceTransactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Balance Transaction Currency.
   * @nullable
   */
  declare amountInBalanceTransacCrcy?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Additional Currency 1.
   * Maximum length: 5.
   * @nullable
   */
  declare additionalCurrency1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation Difference Amount in Additional Currency 1.
   * @nullable
   */
  declare valuationDiffAmtInAddlCrcy1?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Amount in Additional Currency 1.
   * @nullable
   */
  declare amountInAdditionalCurrency1?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Additional Currency 2.
   * Maximum length: 5.
   * @nullable
   */
  declare additionalCurrency2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Additional Currency 2.
   * @nullable
   */
  declare amountInAdditionalCurrency2?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Valuation Difference Amount in Additional Currency 2.
   * @nullable
   */
  declare valuationDiffAmtInAddlCrcy2?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Currency for Automatic Payment.
   * Maximum length: 5.
   * @nullable
   */
  declare paymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount in Payment Currency.
   * @nullable
   */
  declare amountInPaymentCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Credit Control Area Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare creditControlAreaCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Management: Hedged Amount.
   * @nullable
   */
  declare hedgedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Base Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   * @nullable
   */
  declare quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of entry.
   * Maximum length: 3.
   * @nullable
   */
  declare goodsMovementEntryUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity in Entry Unit of Measure.
   * @nullable
   */
  declare quantityInEntryUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Purchasing Document Price Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare purchasingDocumentPriceUnit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Order Quantity.
   * @nullable
   */
  declare purchaseOrderQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Material Price Unit Quantity.
   * @nullable
   */
  declare materialPriceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Number of Items.
   * @nullable
   */
  declare numberOfItems?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Accounting Document Entry Date.
   * @nullable
   */
  declare accountingDocumentCreationDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Creation Time.
   * @nullable
   */
  declare creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Last Change Date.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Exchange Rate Date.
   * @nullable
   */
  declare exchangeRateDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * User that created the journal entry.
   * Maximum length: 12.
   * @nullable
   */
  declare accountingDocCreatedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * Maximum length: 20.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany Transaction Number.
   * Maximum length: 16.
   * @nullable
   */
  declare intercompanyTransaction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Reference ID.
   * Maximum length: 16.
   * @nullable
   */
  declare documentReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Recurring Journal Entry.
   * Maximum length: 10.
   * @nullable
   */
  declare recurringAccountingDocument?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reverse Document.
   * Maximum length: 10.
   * @nullable
   */
  declare reverseDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reverse Document Fiscal Year.
   * Maximum length: 4.
   * @nullable
   */
  declare reverseDocumentFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Header Text.
   * Maximum length: 25.
   * @nullable
   */
  declare accountingDocumentHeaderText?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Exchange Rate.
   * @nullable
   */
  declare exchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Business Transaction Category.
   * Maximum length: 4.
   * @nullable
   */
  declare businessTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Input Session.
   * Maximum length: 12.
   * @nullable
   */
  declare batchInputSession?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Financial Management Area.
   * Maximum length: 4.
   * @nullable
   */
  declare financialManagementArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Reversal Is Planned for Document.
   * @nullable
   */
  declare reversalIsPlanned?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Planned Date for the Reversal Posting.
   * @nullable
   */
  declare plannedReversalDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Tax Is Automatically Calculated.
   * @nullable
   */
  declare taxIsCalculatedAutomatically?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Tax Base Amount is Net Amount.
   * @nullable
   */
  declare taxBaseAmountIsNetAmount?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Source Company Code.
   * Maximum length: 4.
   * @nullable
   */
  declare sourceCompanyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Logical System.
   * Maximum length: 10.
   * @nullable
   */
  declare logicalSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Exchange Rate.
   * @nullable
   */
  declare taxExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Reason for Reversal or Inverse Posting.
   * Maximum length: 2.
   * @nullable
   */
  declare reversalReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch.
   * Maximum length: 4.
   * @nullable
   */
  declare branch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal ID of Reference Key 1 in Document Header.
   * Maximum length: 20.
   * @nullable
   */
  declare reference1InDocumentHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internal ID of Reference Key 2 in Document Header.
   * Maximum length: 20.
   * @nullable
   */
  declare reference2InDocumentHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Receipt Date.
   * @nullable
   */
  declare invoiceReceiptDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Ledger.
   * Maximum length: 2.
   * @nullable
   */
  declare ledger?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Group.
   * Maximum length: 4.
   * @nullable
   */
  declare ledgerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Reference Document.
   * Maximum length: 26.
   * @nullable
   */
  declare alternativeReferenceDocument?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tax Reporting Date.
   * @nullable
   */
  declare taxReportingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Accounting Document Class.
   * Maximum length: 6.
   * @nullable
   */
  declare accountingDocumentClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Type.
   * Maximum length: 4.
   * @nullable
   */
  declare exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Late Payment Reason.
   * Maximum length: 2.
   * @nullable
   */
  declare latePaymentReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Document Condition.
   * Maximum length: 10.
   * @nullable
   */
  declare salesDocumentCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Item is Reversing Another Item.
   * @nullable
   */
  declare isReversal?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Item is Reversed.
   * @nullable
   */
  declare isReversed?: DeserializedType<T, 'Edm.Boolean'> | null;

  constructor(_entityApi: OperationalAcctgDocItemCubeApi<T>) {
    super(_entityApi);
  }
}

export interface OperationalAcctgDocItemCubeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  companyCode: DeserializedType<T, 'Edm.String'>;
  fiscalYear: DeserializedType<T, 'Edm.String'>;
  accountingDocument: DeserializedType<T, 'Edm.String'>;
  accountingDocumentItem: DeserializedType<T, 'Edm.String'>;
  companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
  chartOfAccounts?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocumentItemType?: DeserializedType<T, 'Edm.String'> | null;
  clearingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  clearingCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  clearingAccountingDocument?: DeserializedType<T, 'Edm.String'> | null;
  isCleared?: DeserializedType<T, 'Edm.Boolean'> | null;
  postingKey?: DeserializedType<T, 'Edm.String'> | null;
  financialAccountType?: DeserializedType<T, 'Edm.String'> | null;
  specialGlCode?: DeserializedType<T, 'Edm.String'> | null;
  specialGlTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  debitCreditCode?: DeserializedType<T, 'Edm.String'> | null;
  businessArea?: DeserializedType<T, 'Edm.String'> | null;
  businessAreaName?: DeserializedType<T, 'Edm.String'> | null;
  partnerBusinessArea?: DeserializedType<T, 'Edm.String'> | null;
  taxCode?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  taxType?: DeserializedType<T, 'Edm.String'> | null;
  transactionTypeDetermination?: DeserializedType<T, 'Edm.String'> | null;
  valueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  assignmentReference?: DeserializedType<T, 'Edm.String'> | null;
  documentItemText?: DeserializedType<T, 'Edm.String'> | null;
  partnerCompany?: DeserializedType<T, 'Edm.String'> | null;
  financialTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  corporateGroupAccount?: DeserializedType<T, 'Edm.String'> | null;
  planningLevel?: DeserializedType<T, 'Edm.String'> | null;
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  controllingAreaName?: DeserializedType<T, 'Edm.String'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  costCenterName?: DeserializedType<T, 'Edm.String'> | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  billingDocument?: DeserializedType<T, 'Edm.String'> | null;
  salesDocument?: DeserializedType<T, 'Edm.String'> | null;
  salesDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  scheduleLine?: DeserializedType<T, 'Edm.String'> | null;
  masterFixedAsset?: DeserializedType<T, 'Edm.String'> | null;
  fixedAsset?: DeserializedType<T, 'Edm.String'> | null;
  assetTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  assetValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isSalesRelated?: DeserializedType<T, 'Edm.Boolean'> | null;
  lineItemDisplayIsEnabled?: DeserializedType<T, 'Edm.Boolean'> | null;
  isOpenItemManaged?: DeserializedType<T, 'Edm.String'> | null;
  isNotCashDiscountLiable?: DeserializedType<T, 'Edm.Boolean'> | null;
  isAutomaticallyCreated?: DeserializedType<T, 'Edm.Boolean'> | null;
  isUsedInPaymentTransaction?: DeserializedType<T, 'Edm.Boolean'> | null;
  operationalGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  glAccountName?: DeserializedType<T, 'Edm.String'> | null;
  glAccountLongName?: DeserializedType<T, 'Edm.String'> | null;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  supplierName?: DeserializedType<T, 'Edm.String'> | null;
  branchAccount?: DeserializedType<T, 'Edm.String'> | null;
  isBalanceSheetAccount?: DeserializedType<T, 'Edm.Boolean'> | null;
  profitLossAccountType?: DeserializedType<T, 'Edm.String'> | null;
  specialGlAccountAssignment?: DeserializedType<T, 'Edm.String'> | null;
  dueCalculationBaseDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  cashDiscount1Days?: DeserializedType<T, 'Edm.Decimal'> | null;
  cashDiscount2Days?: DeserializedType<T, 'Edm.Decimal'> | null;
  netPaymentDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  cashDiscount1Percent?: DeserializedType<T, 'Edm.Decimal'> | null;
  cashDiscount2Percent?: DeserializedType<T, 'Edm.Decimal'> | null;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  fixedCashDiscount?: DeserializedType<T, 'Edm.String'> | null;
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  bpBankAccountInternalId?: DeserializedType<T, 'Edm.String'> | null;
  taxDistributionCode1?: DeserializedType<T, 'Edm.String'> | null;
  taxDistributionCode2?: DeserializedType<T, 'Edm.String'> | null;
  taxDistributionCode3?: DeserializedType<T, 'Edm.String'> | null;
  invoiceReference?: DeserializedType<T, 'Edm.String'> | null;
  invoiceReferenceFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  invoiceItemReference?: DeserializedType<T, 'Edm.String'> | null;
  followOnDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  stateCentralBankPaymentReason?: DeserializedType<T, 'Edm.String'> | null;
  supplyingCountry?: DeserializedType<T, 'Edm.String'> | null;
  invoiceList?: DeserializedType<T, 'Edm.String'> | null;
  billOfExchangeUsage?: DeserializedType<T, 'Edm.String'> | null;
  dunningKey?: DeserializedType<T, 'Edm.String'> | null;
  dunningBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  lastDunningDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  dunningLevel?: DeserializedType<T, 'Edm.String'> | null;
  dunningArea?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  material?: DeserializedType<T, 'Edm.String'> | null;
  product?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  purchasingDocument?: DeserializedType<T, 'Edm.String'> | null;
  purchasingDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  accountAssignmentNumber?: DeserializedType<T, 'Edm.String'> | null;
  isCompletelyDelivered?: DeserializedType<T, 'Edm.Boolean'> | null;
  materialPriceControl?: DeserializedType<T, 'Edm.String'> | null;
  valuationArea?: DeserializedType<T, 'Edm.String'> | null;
  inventoryValuationType?: DeserializedType<T, 'Edm.String'> | null;
  vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
  delivOfGoodsDestCountry?: DeserializedType<T, 'Edm.String'> | null;
  paymentDifferenceReason?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  profitCenterName?: DeserializedType<T, 'Edm.String'> | null;
  jointVenture?: DeserializedType<T, 'Edm.String'> | null;
  jointVentureCostRecoveryCode?: DeserializedType<T, 'Edm.String'> | null;
  jointVentureEquityGroup?: DeserializedType<T, 'Edm.String'> | null;
  jointVenturePartner?: DeserializedType<T, 'Edm.String'> | null;
  treasuryContractType?: DeserializedType<T, 'Edm.String'> | null;
  assetContract?: DeserializedType<T, 'Edm.String'> | null;
  cashFlowType?: DeserializedType<T, 'Edm.String'> | null;
  taxJurisdiction?: DeserializedType<T, 'Edm.String'> | null;
  realEstateObject?: DeserializedType<T, 'Edm.String'> | null;
  settlementReferenceDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  commitmentItem?: DeserializedType<T, 'Edm.String'> | null;
  costObject?: DeserializedType<T, 'Edm.String'> | null;
  projectNetwork?: DeserializedType<T, 'Edm.String'> | null;
  orderInternalBillOfOperations?: DeserializedType<T, 'Edm.String'> | null;
  orderIntBillOfOperationsItem?: DeserializedType<T, 'Edm.String'> | null;
  wbsElementInternalId?: DeserializedType<T, 'Edm.String'> | null;
  profitabilitySegment?: DeserializedType<T, 'Edm.String'> | null;
  jointVentureBillingType?: DeserializedType<T, 'Edm.String'> | null;
  jointVentureEquityType?: DeserializedType<T, 'Edm.String'> | null;
  isEuTriangularDeal?: DeserializedType<T, 'Edm.Boolean'> | null;
  costOriginGroup?: DeserializedType<T, 'Edm.String'> | null;
  companyCodeCurrencyDetnMethod?: DeserializedType<T, 'Edm.String'> | null;
  clearingIsReversed?: DeserializedType<T, 'Edm.Boolean'> | null;
  paymentMethodSupplement?: DeserializedType<T, 'Edm.String'> | null;
  alternativeGlAccount?: DeserializedType<T, 'Edm.String'> | null;
  fundsCenter?: DeserializedType<T, 'Edm.String'> | null;
  fund?: DeserializedType<T, 'Edm.String'> | null;
  partnerProfitCenter?: DeserializedType<T, 'Edm.String'> | null;
  reference1IdByBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
  reference2IdByBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
  isNegativePosting?: DeserializedType<T, 'Edm.Boolean'> | null;
  paymentCardItem?: DeserializedType<T, 'Edm.String'> | null;
  paymentCardPaymentSettlement?: DeserializedType<T, 'Edm.String'> | null;
  creditControlArea?: DeserializedType<T, 'Edm.String'> | null;
  reference3IdByBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
  dataExchangeInstruction1?: DeserializedType<T, 'Edm.String'> | null;
  dataExchangeInstruction2?: DeserializedType<T, 'Edm.String'> | null;
  dataExchangeInstruction3?: DeserializedType<T, 'Edm.String'> | null;
  dataExchangeInstruction4?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  hasPaymentOrder?: DeserializedType<T, 'Edm.Boolean'> | null;
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  taxDeterminationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  clearingItem?: DeserializedType<T, 'Edm.Decimal'> | null;
  businessPlace?: DeserializedType<T, 'Edm.String'> | null;
  taxSection?: DeserializedType<T, 'Edm.String'> | null;
  costCtrActivityType?: DeserializedType<T, 'Edm.String'> | null;
  accountsReceivableIsPledged?: DeserializedType<T, 'Edm.String'> | null;
  businessProcess?: DeserializedType<T, 'Edm.String'> | null;
  grantId?: DeserializedType<T, 'Edm.String'> | null;
  functionalArea?: DeserializedType<T, 'Edm.String'> | null;
  functionalAreaName?: DeserializedType<T, 'Edm.String'> | null;
  customerIsInExecution?: DeserializedType<T, 'Edm.Boolean'> | null;
  fundedProgram?: DeserializedType<T, 'Edm.String'> | null;
  clearingDocFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  ledgerGlLineItem?: DeserializedType<T, 'Edm.String'> | null;
  segment?: DeserializedType<T, 'Edm.String'> | null;
  segmentName?: DeserializedType<T, 'Edm.String'> | null;
  partnerSegment?: DeserializedType<T, 'Edm.String'> | null;
  partnerFunctionalArea?: DeserializedType<T, 'Edm.String'> | null;
  houseBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  costElement?: DeserializedType<T, 'Edm.String'> | null;
  sepaMandate?: DeserializedType<T, 'Edm.String'> | null;
  referenceDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  originalReferenceDocument?: DeserializedType<T, 'Edm.String'> | null;
  referenceDocumentLogicalSystem?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocumentItemRef?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPeriod?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocumentCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  postingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  documentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  accountingDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocumentTypeName?: DeserializedType<T, 'Edm.String'> | null;
  netDueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  cashDiscount1DueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  cashDiscount2DueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  offsettingAccount?: DeserializedType<T, 'Edm.String'> | null;
  offsettingAccountType?: DeserializedType<T, 'Edm.String'> | null;
  partnerFund?: DeserializedType<T, 'Edm.String'> | null;
  partnerGrant?: DeserializedType<T, 'Edm.String'> | null;
  budgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  partnerBudgetPeriod?: DeserializedType<T, 'Edm.String'> | null;
  branchCode?: DeserializedType<T, 'Edm.String'> | null;
  jointVentureProductionDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  companyCodeCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInCompanyCodeCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  taxAmountInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  taxBaseAmountInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  valuationDiffAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  cashDiscountAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  invoiceAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInTransactionCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  originalTaxBaseAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  taxBaseAmountInTransCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  withholdingTaxBaseAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  plannedAmtInTransactionCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  cashDiscountBaseAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  cashDiscountAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  netPaymentAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  withholdingTaxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  withholdingTaxExemptionAmt?: DeserializedType<T, 'Edm.Decimal'> | null;
  invoiceAmountInFrgnCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  balanceTransactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInBalanceTransacCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  additionalCurrency1?: DeserializedType<T, 'Edm.String'> | null;
  valuationDiffAmtInAddlCrcy1?: DeserializedType<T, 'Edm.Decimal'> | null;
  amountInAdditionalCurrency1?: DeserializedType<T, 'Edm.Decimal'> | null;
  additionalCurrency2?: DeserializedType<T, 'Edm.String'> | null;
  amountInAdditionalCurrency2?: DeserializedType<T, 'Edm.Decimal'> | null;
  valuationDiffAmtInAddlCrcy2?: DeserializedType<T, 'Edm.Decimal'> | null;
  paymentCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountInPaymentCurrency?: DeserializedType<T, 'Edm.Decimal'> | null;
  creditControlAreaCurrency?: DeserializedType<T, 'Edm.String'> | null;
  hedgedAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  goodsMovementEntryUnit?: DeserializedType<T, 'Edm.String'> | null;
  quantityInEntryUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  purchasingDocumentPriceUnit?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  materialPriceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  numberOfItems?: DeserializedType<T, 'Edm.Decimal'> | null;
  accountingDocumentCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  exchangeRateDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  accountingDocCreatedByUser?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyTransaction?: DeserializedType<T, 'Edm.String'> | null;
  documentReferenceId?: DeserializedType<T, 'Edm.String'> | null;
  recurringAccountingDocument?: DeserializedType<T, 'Edm.String'> | null;
  reverseDocument?: DeserializedType<T, 'Edm.String'> | null;
  reverseDocumentFiscalYear?: DeserializedType<T, 'Edm.String'> | null;
  accountingDocumentHeaderText?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  businessTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  batchInputSession?: DeserializedType<T, 'Edm.String'> | null;
  financialManagementArea?: DeserializedType<T, 'Edm.String'> | null;
  reversalIsPlanned?: DeserializedType<T, 'Edm.Boolean'> | null;
  plannedReversalDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  taxIsCalculatedAutomatically?: DeserializedType<T, 'Edm.Boolean'> | null;
  taxBaseAmountIsNetAmount?: DeserializedType<T, 'Edm.Boolean'> | null;
  sourceCompanyCode?: DeserializedType<T, 'Edm.String'> | null;
  logicalSystem?: DeserializedType<T, 'Edm.String'> | null;
  taxExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  reversalReason?: DeserializedType<T, 'Edm.String'> | null;
  branch?: DeserializedType<T, 'Edm.String'> | null;
  reference1InDocumentHeader?: DeserializedType<T, 'Edm.String'> | null;
  reference2InDocumentHeader?: DeserializedType<T, 'Edm.String'> | null;
  invoiceReceiptDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  ledger?: DeserializedType<T, 'Edm.String'> | null;
  ledgerGroup?: DeserializedType<T, 'Edm.String'> | null;
  alternativeReferenceDocument?: DeserializedType<T, 'Edm.String'> | null;
  taxReportingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  accountingDocumentClass?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  latePaymentReason?: DeserializedType<T, 'Edm.String'> | null;
  salesDocumentCondition?: DeserializedType<T, 'Edm.String'> | null;
  isReversal?: DeserializedType<T, 'Edm.Boolean'> | null;
  isReversed?: DeserializedType<T, 'Edm.Boolean'> | null;
}
