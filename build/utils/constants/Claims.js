"use strict";

var _CLAIM_CATEGORY_INDEX, _CLAIM_META_CATEGORIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./StructuredMemo'),
    STRUCTURED_CLAIM = _require.STRUCTURED_CLAIM; // Claim Defaults


var STRUCTURED_CLAIM_VERSION = 0; // Claim Memo Types

var COMPOSITE = 'composite';
var HEALTH = 'health';
var PERSONAL_INFO = 'personal_info';
var FINANCE = 'finance';
var EDUCATION = 'education';
var RESIDENCE = 'residence';
var FAMILY = 'family'; // Claim Types: Health

var COVID19 = 'covid19';
var BLOOD_TYPE = 'blood_type'; // Claim Types: Composite

var HEALTH_CONDITION = 'health_condition';
var DRIVERS_LICENSE = 'drivers_license'; // Claim Types: Personal Info

var FULL_NAME = 'full_name';
var ISO_BIRTHDAY = 'iso_birthday';
var NATIONALITY = 'nationality'; // Claim Types: Finance

var CREDIT_SCORE = 'credit_score'; // Claim Types: Education

var ACADEMIC_DEGREE = 'academic_degree'; // Claim Types: Residence

var REGISTERED_ADDRESS = 'registered_address'; // Claim Types: Family

var CIVIL_STATUS = 'civil_status';
var CLAIM_CATEGORY_INDEX = (_CLAIM_CATEGORY_INDEX = {}, _defineProperty(_CLAIM_CATEGORY_INDEX, 'd44cae3d356f60dcf489b1df843658083ee179a4', "".concat(COVID19, ".").concat(HEALTH, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, 'cb0b9865d5545cf275cb58cc5967be54935b2423', "".concat(BLOOD_TYPE, ".").concat(HEALTH, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, '7cf85cde0a6d5d89213df623fa0fd01007149ae7', "".concat(DRIVERS_LICENSE, ".").concat(COMPOSITE, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, 'c6152943079e3fd7893668feeed91c9441ece121', "".concat(HEALTH_CONDITION, ".").concat(COMPOSITE, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, 'efb538bdfc0b0a47c3f601d76476008031bb3197', "".concat(FULL_NAME, ".").concat(PERSONAL_INFO, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, '924102e48bc6d3757fe52bae4764ea713cfd937b', "".concat(ISO_BIRTHDAY, ".").concat(PERSONAL_INFO, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, '74d9b0bd1d33a714a930e8e7c8c1a71a40439aa1', "".concat(CREDIT_SCORE, ".").concat(FINANCE, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, '728a96b83544f1b7734f7fd774df94d186f696ea', "".concat(ACADEMIC_DEGREE, ".").concat(EDUCATION, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, '4dbf94c72334e35ed2794b9baf40f840b36e645f', "".concat(REGISTERED_ADDRESS, ".").concat(RESIDENCE, ".").concat(STRUCTURED_CLAIM)), _defineProperty(_CLAIM_CATEGORY_INDEX, '5061a17bdac710941d47760889a650a8bfd5bb85', "".concat(CIVIL_STATUS, ".").concat(FAMILY, ".").concat(STRUCTURED_CLAIM)), _CLAIM_CATEGORY_INDEX);
var CLAIM_META_CATEGORIES = (_CLAIM_META_CATEGORIE = {}, _defineProperty(_CLAIM_META_CATEGORIE, COMPOSITE, [HEALTH_CONDITION, DRIVERS_LICENSE]), _defineProperty(_CLAIM_META_CATEGORIE, PERSONAL_INFO, [FULL_NAME, ISO_BIRTHDAY]), _defineProperty(_CLAIM_META_CATEGORIE, HEALTH, [COVID19, BLOOD_TYPE]), _defineProperty(_CLAIM_META_CATEGORIE, FINANCE, [CREDIT_SCORE]), _defineProperty(_CLAIM_META_CATEGORIE, EDUCATION, [ACADEMIC_DEGREE]), _defineProperty(_CLAIM_META_CATEGORIE, RESIDENCE, [REGISTERED_ADDRESS]), _defineProperty(_CLAIM_META_CATEGORIE, FAMILY, [CIVIL_STATUS]), _CLAIM_META_CATEGORIE);
module.exports = {
  COMPOSITE: COMPOSITE,
  HEALTH: HEALTH,
  PERSONAL_INFO: PERSONAL_INFO,
  FINANCE: FINANCE,
  EDUCATION: EDUCATION,
  RESIDENCE: RESIDENCE,
  FAMILY: FAMILY,
  CLAIM_CATEGORY_INDEX: CLAIM_CATEGORY_INDEX,
  COVID19: COVID19,
  BLOOD_TYPE: BLOOD_TYPE,
  HEALTH_CONDITION: HEALTH_CONDITION,
  DRIVERS_LICENSE: DRIVERS_LICENSE,
  FULL_NAME: FULL_NAME,
  ISO_BIRTHDAY: ISO_BIRTHDAY,
  CLAIM_META_CATEGORIES: CLAIM_META_CATEGORIES,
  CREDIT_SCORE: CREDIT_SCORE,
  ACADEMIC_DEGREE: ACADEMIC_DEGREE,
  NATIONALITY: NATIONALITY,
  REGISTERED_ADDRESS: REGISTERED_ADDRESS,
  CIVIL_STATUS: CIVIL_STATUS,
  STRUCTURED_CLAIM_VERSION: STRUCTURED_CLAIM_VERSION
};