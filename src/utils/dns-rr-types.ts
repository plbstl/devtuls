// Last Updated: 2024-07-25
// Source: https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#table-dns-parameters-4
/**
 * Domain Name System (DNS) Parameters - Resource Record (RR) TYPEs
 */
export const DNS_RESOURCE_RECORD_TYPES = {
  0: {
    TYPE: 'Reserved',
    Value: 0,
    Meaning: '',
    Reference: '[RFC6895]',
  },
  1: {
    TYPE: 'A',
    Value: 1,
    Meaning: 'a host address',
    Reference: '[RFC1035]',
  },
  2: {
    TYPE: 'NS',
    Value: 2,
    Meaning: 'an authoritative name server',
    Reference: '[RFC1035]',
  },
  3: {
    TYPE: 'MD',
    Value: 3,
    Meaning: 'a mail destination (OBSOLETE - use MX)',
    Reference: '[RFC1035]',
  },
  4: {
    TYPE: 'MF',
    Value: 4,
    Meaning: 'a mail forwarder (OBSOLETE - use MX)',
    Reference: '[RFC1035]',
  },
  5: {
    TYPE: 'CNAME',
    Value: 5,
    Meaning: 'the canonical name for an alias',
    Reference: '[RFC1035]',
  },
  6: {
    TYPE: 'SOA',
    Value: 6,
    Meaning: 'marks the start of a zone of authority',
    Reference: '[RFC1035]',
  },
  7: {
    TYPE: 'MB',
    Value: 7,
    Meaning: 'a mailbox domain name (EXPERIMENTAL)',
    Reference: '[RFC1035]',
  },
  8: {
    TYPE: 'MG',
    Value: 8,
    Meaning: 'a mail group member (EXPERIMENTAL)',
    Reference: '[RFC1035]',
  },
  9: {
    TYPE: 'MR',
    Value: 9,
    Meaning: 'a mail rename domain name (EXPERIMENTAL)',
    Reference: '[RFC1035]',
  },
  10: {
    TYPE: 'NULL',
    Value: 10,
    Meaning: 'a null RR (EXPERIMENTAL)',
    Reference: '[RFC1035]',
  },
  11: {
    TYPE: 'WKS',
    Value: 11,
    Meaning: 'a well known service description',
    Reference: '[RFC1035]',
  },
  12: {
    TYPE: 'PTR',
    Value: 12,
    Meaning: 'a domain name pointer',
    Reference: '[RFC1035]',
  },
  13: {
    TYPE: 'HINFO',
    Value: 13,
    Meaning: 'host information',
    Reference: '[RFC1035]',
  },
  14: {
    TYPE: 'MINFO',
    Value: 14,
    Meaning: 'mailbox or mail list information',
    Reference: '[RFC1035]',
  },
  15: {
    TYPE: 'MX',
    Value: 15,
    Meaning: 'mail exchange',
    Reference: '[RFC1035]',
  },
  16: {
    TYPE: 'TXT',
    Value: 16,
    Meaning: 'text strings',
    Reference: '[RFC1035]',
  },
  17: {
    TYPE: 'RP',
    Value: 17,
    Meaning: 'for Responsible Person',
    Reference: '[RFC1183]',
  },
  18: {
    TYPE: 'AFSDB',
    Value: 18,
    Meaning: 'for AFS Data Base location',
    Reference: '[RFC1183][RFC5864]',
  },
  19: {
    TYPE: 'X25',
    Value: 19,
    Meaning: 'for X.25 PSDN address',
    Reference: '[RFC1183]',
  },
  20: {
    TYPE: 'ISDN',
    Value: 20,
    Meaning: 'for ISDN address',
    Reference: '[RFC1183]',
  },
  21: {
    TYPE: 'RT',
    Value: 21,
    Meaning: 'for Route Through',
    Reference: '[RFC1183]',
  },
  22: {
    TYPE: 'NSAP',
    Value: 22,
    Meaning: 'for NSAP address, NSAP style A record (DEPRECATED)',
    Reference: '[RFC1706][status-change-int-tlds-to-historic]',
  },
  23: {
    TYPE: 'NSAP-PTR',
    Value: 23,
    Meaning: 'for domain name pointer, NSAP style (DEPRECATED)',
    Reference: '[RFC1706][status-change-int-tlds-to-historic]',
  },
  24: {
    TYPE: 'SIG',
    Value: 24,
    Meaning: 'for security signature',
    Reference: '[RFC2536][RFC2931][RFC3110][RFC4034]',
  },
  25: {
    TYPE: 'KEY',
    Value: 25,
    Meaning: 'for security key',
    Reference: '[RFC2536][RFC2539][RFC3110][RFC4034]',
  },
  26: {
    TYPE: 'PX',
    Value: 26,
    Meaning: 'X.400 mail mapping information',
    Reference: '[RFC2163]',
  },
  27: {
    TYPE: 'GPOS',
    Value: 27,
    Meaning: 'Geographical Position',
    Reference: '[RFC1712]',
  },
  28: {
    TYPE: 'AAAA',
    Value: 28,
    Meaning: 'IP6 Address',
    Reference: '[RFC3596]',
  },
  29: {
    TYPE: 'LOC',
    Value: 29,
    Meaning: 'Location Information',
    Reference: '[RFC1876]',
  },
  30: {
    TYPE: 'NXT',
    Value: 30,
    Meaning: 'Next Domain (OBSOLETE)',
    Reference: '[RFC2535][RFC3755]',
  },
  31: {
    TYPE: 'EID',
    Value: 31,
    Meaning: 'Endpoint Identifier',
    Reference: '[Michael_Patton][http://ana-3.lcs.mit.edu/~jnc/nimrod/dns.txt]',
  },
  32: {
    TYPE: 'NIMLOC',
    Value: 32,
    Meaning: 'Nimrod Locator',
    Reference: '[1][Michael_Patton][http://ana-3.lcs.mit.edu/~jnc/nimrod/dns.txt]',
  },
  33: {
    TYPE: 'SRV',
    Value: 33,
    Meaning: 'Server Selection',
    Reference: '[1][RFC2782]',
  },
  34: {
    TYPE: 'ATMA',
    Value: 34,
    Meaning: 'ATM Address',
    Reference:
      '[\n        ATM Forum Technical Committee, "ATM Name System, V2.0", Doc ID: AF-DANS-0152.000, July 2000. Available from and held in escrow by IANA.]',
  },
  35: {
    TYPE: 'NAPTR',
    Value: 35,
    Meaning: 'Naming Authority Pointer',
    Reference: '[RFC3403]',
  },
  36: {
    TYPE: 'KX',
    Value: 36,
    Meaning: 'Key Exchanger',
    Reference: '[RFC2230]',
  },
  37: {
    TYPE: 'CERT',
    Value: 37,
    Meaning: 'CERT',
    Reference: '[RFC4398]',
  },
  38: {
    TYPE: 'A6',
    Value: 38,
    Meaning: 'A6 (OBSOLETE - use AAAA)',
    Reference: '[RFC2874][RFC3226][RFC6563]',
  },
  39: {
    TYPE: 'DNAME',
    Value: 39,
    Meaning: 'DNAME',
    Reference: '[RFC6672]',
  },
  40: {
    TYPE: 'SINK',
    Value: 40,
    Meaning: 'SINK',
    Reference: '[Donald_E_Eastlake][draft-eastlake-kitchen-sink]',
  },
  41: {
    TYPE: 'OPT',
    Value: 41,
    Meaning: 'OPT',
    Reference: '[RFC3225][RFC6891]',
  },
  42: {
    TYPE: 'APL',
    Value: 42,
    Meaning: 'APL',
    Reference: '[RFC3123]',
  },
  43: {
    TYPE: 'DS',
    Value: 43,
    Meaning: 'Delegation Signer',
    Reference: '[RFC4034]',
  },
  44: {
    TYPE: 'SSHFP',
    Value: 44,
    Meaning: 'SSH Key Fingerprint',
    Reference: '[RFC4255]',
  },
  45: {
    TYPE: 'IPSECKEY',
    Value: 45,
    Meaning: 'IPSECKEY',
    Reference: '[RFC4025]',
  },
  46: {
    TYPE: 'RRSIG',
    Value: 46,
    Meaning: 'RRSIG',
    Reference: '[RFC4034]',
  },
  47: {
    TYPE: 'NSEC',
    Value: 47,
    Meaning: 'NSEC',
    Reference: '[RFC4034][RFC9077]',
  },
  48: {
    TYPE: 'DNSKEY',
    Value: 48,
    Meaning: 'DNSKEY',
    Reference: '[RFC4034]',
  },
  49: {
    TYPE: 'DHCID',
    Value: 49,
    Meaning: 'DHCID',
    Reference: '[RFC4701]',
  },
  50: {
    TYPE: 'NSEC3',
    Value: 50,
    Meaning: 'NSEC3',
    Reference: '[RFC5155][RFC9077]',
  },
  51: {
    TYPE: 'NSEC3PARAM',
    Value: 51,
    Meaning: 'NSEC3PARAM',
    Reference: '[RFC5155]',
  },
  52: {
    TYPE: 'TLSA',
    Value: 52,
    Meaning: 'TLSA',
    Reference: '[RFC6698]',
  },
  53: {
    TYPE: 'SMIMEA',
    Value: 53,
    Meaning: 'S/MIME cert association',
    Reference: '[RFC8162]',
  },
  54: {
    TYPE: 'Unassigned',
    Value: 54,
    Meaning: '',
    Reference: '',
  },
  55: {
    TYPE: 'HIP',
    Value: 55,
    Meaning: 'Host Identity Protocol',
    Reference: '[RFC8005]',
  },
  56: {
    TYPE: 'NINFO',
    Value: 56,
    Meaning: 'NINFO',
    Reference: '[Jim_Reid]',
  },
  57: {
    TYPE: 'RKEY',
    Value: 57,
    Meaning: 'RKEY',
    Reference: '[Jim_Reid]',
  },
  58: {
    TYPE: 'TALINK',
    Value: 58,
    Meaning: 'Trust Anchor LINK',
    Reference: '[Wouter_Wijngaards]',
  },
  59: {
    TYPE: 'CDS',
    Value: 59,
    Meaning: 'Child DS',
    Reference: '[RFC7344]',
  },
  60: {
    TYPE: 'CDNSKEY',
    Value: 60,
    Meaning: 'DNSKEY(s) the Child wants reflected in DS',
    Reference: '[RFC7344]',
  },
  61: {
    TYPE: 'OPENPGPKEY',
    Value: 61,
    Meaning: 'OpenPGP Key',
    Reference: '[RFC7929]',
  },
  62: {
    TYPE: 'CSYNC',
    Value: 62,
    Meaning: 'Child-To-Parent Synchronization',
    Reference: '[RFC7477]',
  },
  63: {
    TYPE: 'ZONEMD',
    Value: 63,
    Meaning: 'Message Digest Over Zone Data',
    Reference: '[RFC8976]',
  },
  64: {
    TYPE: 'SVCB',
    Value: 64,
    Meaning: 'General-purpose service binding',
    Reference: '[RFC9460]',
  },
  65: {
    TYPE: 'HTTPS',
    Value: 65,
    Meaning: 'SVCB-compatible type for use with HTTP',
    Reference: '[RFC9460]',
  },
  '66-98': {
    TYPE: 'Unassigned',
    Value: '66-98',
    Meaning: '',
    Reference: '',
  },
  99: {
    TYPE: 'SPF',
    Value: 99,
    Meaning: '',
    Reference: '[RFC7208]',
  },
  100: {
    TYPE: 'UINFO',
    Value: 100,
    Meaning: '',
    Reference: '[IANA-Reserved]',
  },
  101: {
    TYPE: 'UID',
    Value: 101,
    Meaning: '',
    Reference: '[IANA-Reserved]',
  },
  102: {
    TYPE: 'GID',
    Value: 102,
    Meaning: '',
    Reference: '[IANA-Reserved]',
  },
  103: {
    TYPE: 'UNSPEC',
    Value: 103,
    Meaning: '',
    Reference: '[IANA-Reserved]',
  },
  104: {
    TYPE: 'NID',
    Value: 104,
    Meaning: '',
    Reference: '[RFC6742]',
  },
  105: {
    TYPE: 'L32',
    Value: 105,
    Meaning: '',
    Reference: '[RFC6742]',
  },
  106: {
    TYPE: 'L64',
    Value: 106,
    Meaning: '',
    Reference: '[RFC6742]',
  },
  107: {
    TYPE: 'LP',
    Value: 107,
    Meaning: '',
    Reference: '[RFC6742]',
  },
  108: {
    TYPE: 'EUI48',
    Value: 108,
    Meaning: 'an EUI-48 address',
    Reference: '[RFC7043]',
  },
  109: {
    TYPE: 'EUI64',
    Value: 109,
    Meaning: 'an EUI-64 address',
    Reference: '[RFC7043]',
  },
  '110-127': {
    TYPE: 'Unassigned',
    Value: '110-127',
    Meaning: '',
    Reference: '',
  },
  128: {
    TYPE: 'NXNAME',
    Value: 128,
    Meaning: 'NXDOMAIN indicator for Compact Denial of Existence',
    Reference: '[draft-ietf-dnsop-compact-denial-of-existence-04]',
  },
  '129-248': {
    TYPE: 'Unassigned',
    Value: '129-248',
    Meaning: '',
    Reference: '',
  },
  249: {
    TYPE: 'TKEY',
    Value: 249,
    Meaning: 'Transaction Key',
    Reference: '[RFC2930]',
  },
  250: {
    TYPE: 'TSIG',
    Value: 250,
    Meaning: 'Transaction Signature',
    Reference: '[RFC8945]',
  },
  251: {
    TYPE: 'IXFR',
    Value: 251,
    Meaning: 'incremental transfer',
    Reference: '[RFC1995]',
  },
  252: {
    TYPE: 'AXFR',
    Value: 252,
    Meaning: 'transfer of an entire zone',
    Reference: '[RFC1035][RFC5936]',
  },
  253: {
    TYPE: 'MAILB',
    Value: 253,
    Meaning: 'mailbox-related RRs (MB, MG or MR)',
    Reference: '[RFC1035]',
  },
  254: {
    TYPE: 'MAILA',
    Value: 254,
    Meaning: 'mail agent RRs (OBSOLETE - see MX)',
    Reference: '[RFC1035]',
  },
  255: {
    TYPE: '*',
    Value: 255,
    Meaning: 'A request for some or all records the server has available',
    Reference: '[RFC1035][RFC6895][RFC8482]',
  },
  256: {
    TYPE: 'URI',
    Value: 256,
    Meaning: 'URI',
    Reference: '[RFC7553]',
  },
  257: {
    TYPE: 'CAA',
    Value: 257,
    Meaning: 'Certification Authority Restriction',
    Reference: '[RFC8659]',
  },
  258: {
    TYPE: 'AVC',
    Value: 258,
    Meaning: 'Application Visibility and Control',
    Reference: '[Wolfgang_Riedel]',
  },
  259: {
    TYPE: 'DOA',
    Value: 259,
    Meaning: 'Digital Object Architecture',
    Reference: '[draft-durand-doa-over-dns]',
  },
  260: {
    TYPE: 'AMTRELAY',
    Value: 260,
    Meaning: 'Automatic Multicast Tunneling Relay',
    Reference: '[RFC8777]',
  },
  261: {
    TYPE: 'RESINFO',
    Value: 261,
    Meaning: 'Resolver Information as Key/Value Pairs',
    Reference: '[RFC9606]',
  },
  262: {
    TYPE: 'WALLET',
    Value: 262,
    Meaning: 'Public wallet address',
    Reference: '[Paul_Hoffman]',
  },
  263: {
    TYPE: 'CLA',
    Value: 263,
    Meaning: 'BP Convergence Layer Adapter',
    Reference: '[draft-johnson-dns-ipn-cla-07]',
  },
  264: {
    TYPE: 'IPN',
    Value: 264,
    Meaning: 'BP Node Number',
    Reference: '[draft-johnson-dns-ipn-cla-07]',
  },
  '265-32767': {
    TYPE: 'Unassigned',
    Value: '265-32767',
    Meaning: '',
    Reference: '',
  },
  32768: {
    TYPE: 'TA',
    Value: 32768,
    Meaning: 'DNSSEC Trust Authorities',
    Reference:
      '[Sam_Weiler][\n        Deploying DNSSEC Without a Signed Root.  Technical Report 1999-19,\nInformation Networking Institute, Carnegie Mellon University, April 2004.]',
  },
  32769: {
    TYPE: 'DLV',
    Value: 32769,
    Meaning: 'DNSSEC Lookaside Validation (OBSOLETE)',
    Reference: '[RFC8749][RFC4431]',
  },
  '32770-65279': {
    TYPE: 'Unassigned',
    Value: '32770-65279',
    Meaning: '',
    Reference: '',
  },
  '65280-65534': {
    TYPE: 'Private use',
    Value: '65280-65534',
    Meaning: '',
    Reference: '',
  },
  65535: {
    TYPE: 'Reserved',
    Value: 65535,
    Meaning: '',
    Reference: '',
  },
}
