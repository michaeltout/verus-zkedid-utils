const { STRUCTURED_CLAIM } = require('./StructuredMemo')

// Claim Defaults
const STRUCTURED_CLAIM_VERSION = 0

// Claim Memo Types
const COMPOSITE = 'composite'
const HEALTH = 'health'
const PERSONAL_INFO = 'personal_info'
const FINANCE = 'finance'
const EDUCATION = 'education'
const RESIDENCE = 'residence'
const FAMILY = 'family'

// Claim Types: Health
const COVID19 = 'covid19'
const BLOOD_TYPE = 'blood_type'

// Claim Types: Composite
const HEALTH_CONDITION = 'health_condition'
const DRIVERS_LICENSE = 'drivers_license'

// Claim Types: Personal Info
const FULL_NAME = 'full_name'
const ISO_BIRTHDAY = 'iso_birthday'
const NATIONALITY = 'nationality'

// Claim Types: Finance
const CREDIT_SCORE = 'credit_score'

// Claim Types: Education
const ACADEMIC_DEGREE = 'academic_degree'

// Claim Types: Residence
const REGISTERED_ADDRESS = 'registered_address'

// Claim Types: Family
const CIVIL_STATUS = 'civil_status'

const CLAIM_CATEGORY_INDEX = {
  // Health
  ['d44cae3d356f60dcf489b1df843658083ee179a4']: `${COVID19}.${HEALTH}.${STRUCTURED_CLAIM}`,
  ['cb0b9865d5545cf275cb58cc5967be54935b2423']: `${BLOOD_TYPE}.${HEALTH}.${STRUCTURED_CLAIM}`,

  // Composite
  ['7cf85cde0a6d5d89213df623fa0fd01007149ae7']: `${DRIVERS_LICENSE}.${COMPOSITE}.${STRUCTURED_CLAIM}`,
  ['c6152943079e3fd7893668feeed91c9441ece121']: `${HEALTH_CONDITION}.${COMPOSITE}.${STRUCTURED_CLAIM}`,

  // Personal Info
  ['efb538bdfc0b0a47c3f601d76476008031bb3197']: `${FULL_NAME}.${PERSONAL_INFO}.${STRUCTURED_CLAIM}`,
  ['924102e48bc6d3757fe52bae4764ea713cfd937b']: `${ISO_BIRTHDAY}.${PERSONAL_INFO}.${STRUCTURED_CLAIM}`,

  // Finance
  ['74d9b0bd1d33a714a930e8e7c8c1a71a40439aa1']: `${CREDIT_SCORE}.${FINANCE}.${STRUCTURED_CLAIM}`,

  // Education
  ['728a96b83544f1b7734f7fd774df94d186f696ea']: `${ACADEMIC_DEGREE}.${EDUCATION}.${STRUCTURED_CLAIM}`,

  // Residence
  ['4dbf94c72334e35ed2794b9baf40f840b36e645f']: `${REGISTERED_ADDRESS}.${RESIDENCE}.${STRUCTURED_CLAIM}`,

  // Family
  ['5061a17bdac710941d47760889a650a8bfd5bb85']: `${CIVIL_STATUS}.${FAMILY}.${STRUCTURED_CLAIM}`,
};

const CLAIM_META_CATEGORIES = {
  [COMPOSITE]: [HEALTH_CONDITION, DRIVERS_LICENSE],
  [PERSONAL_INFO]: [FULL_NAME, ISO_BIRTHDAY],
  [HEALTH]: [COVID19, BLOOD_TYPE],
  [FINANCE]: [CREDIT_SCORE],
  [EDUCATION]: [ACADEMIC_DEGREE],
  [RESIDENCE]: [REGISTERED_ADDRESS],
  [FAMILY]: [CIVIL_STATUS] 
}

module.exports = {
  COMPOSITE,
  HEALTH,
  PERSONAL_INFO,
  FINANCE,
  EDUCATION,
  RESIDENCE,
  FAMILY,
  CLAIM_CATEGORY_INDEX,
  COVID19,
  BLOOD_TYPE,
  HEALTH_CONDITION,
  DRIVERS_LICENSE,
  FULL_NAME,
  ISO_BIRTHDAY,
  CLAIM_META_CATEGORIES,
  CREDIT_SCORE,
  ACADEMIC_DEGREE,
  NATIONALITY,
  REGISTERED_ADDRESS,
  CIVIL_STATUS,
  STRUCTURED_CLAIM_VERSION
}