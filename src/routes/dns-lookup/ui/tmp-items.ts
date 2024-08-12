import type { DnsRecord } from './dns-lookup-results-history'

export const items: DnsRecord[] = [
  {
    status: 'success',
    type: 'TXT',
    host: 'api.github.com',
    result: 'ns-1707.awsdns-21.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400',
    service: 'Google Public DNS',
    timestamp: 1,
    input: {
      disableValidation: true,
      resourceRecordType: 'TXT',
      domainName: 'api.github.com',
    },
  },
  {
    status: 'success',
    type: 'A',
    host: 'plbstl.github.io',
    result: '185.199.110.153, 185.199.108.153, 185.199.109.153, 185.199.111.153',
    service: 'https://dns.custom-query/json',
    timestamp: 2,
    input: {
      receiveDnssecData: true,
      resourceRecordType: 'A',
      domainName: 'plbstl.github.io',
      serviceUrl: 'https%3A%2F%2Fdns.custom-query%2Fjson',
    },
  },
  {
    status: 'error',
    type: 'NS',
    host: 'google.com',
    result: 'Your client has issued a malformed or illegal request. Invalid query name: ‘’.',
    service: 'Cloudflare Families (Malware/Adult)',
    timestamp: 3,
    input: {
      domainName: 'google.com',
      resourceRecordType: 'NS',
      serviceUrl: 'cfa',
    },
  },
  {
    status: 'success',
    type: 'MX',
    host: 'https://dns-long-dn-name.custom-domain-long-name.co.cu',
    result: 'ns1.etecsa.net. admin.enet.cu. 2024080900 7200 1800 1209600 2000',
    service: 'Cloudflare DNS',
    timestamp: 4,
    input: {
      domainName: 'https%3A%2F%2Fdns-long-dn-name.custom-domain-long-name.co.cu',
      resourceRecordType: 'MX',
      serviceUrl: 'cf',
      receiveDnssecData: true,
      disableValidation: true,
    },
  },
  {
    status: 'success',
    type: 'TXT',
    host: 'api.github.com',
    result: 'ns-1707.awsdns-21.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400',
    service: 'Google Public DNS',
    timestamp: 5,
    input: {
      disableValidation: true,
      resourceRecordType: 'TXT',
      domainName: 'api.github.com',
    },
  },
  {
    status: 'success',
    type: 'A',
    host: 'plbstl.github.io',
    result: '185.199.110.153, 185.199.108.153, 185.199.109.153, 185.199.111.153',
    service: 'https://dns.custom-query/json',
    timestamp: 6,
    input: {
      receiveDnssecData: true,
      resourceRecordType: 'A',
      domainName: 'plbstl.github.io',
      serviceUrl: 'https%3A%2F%2Fdns.custom-query%2Fjson',
    },
  },
  {
    status: 'error',
    type: 'NS',
    host: 'google.com',
    result: 'Your client has issued a malformed or illegal request. Invalid query name: ‘’.',
    service: 'Cloudflare Families (Malware/Adult)',
    timestamp: 7,
    input: {
      domainName: 'google.com',
      resourceRecordType: 'NS',
      serviceUrl: 'cfa',
    },
  },
  {
    status: 'success',
    type: 'MX',
    host: 'https://dns-long-dn-name.custom-domain-long-name.co.cu',
    result: 'ns1.etecsa.net. admin.enet.cu. 2024080900 7200 1800 1209600 2000',
    service: 'Cloudflare DNS',
    timestamp: 8,
    input: {
      domainName: 'https%3A%2F%2Fdns-long-dn-name.custom-domain-long-name.co.cu',
      resourceRecordType: 'MX',
      serviceUrl: 'cf',
      receiveDnssecData: true,
      disableValidation: true,
    },
  },
  {
    status: 'success',
    type: 'TXT',
    host: 'api.github.com',
    result: 'ns-1707.awsdns-21.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400',
    service: 'Google Public DNS',
    timestamp: 9,
    input: {
      disableValidation: true,
      resourceRecordType: 'TXT',
      domainName: 'api.github.com',
    },
  },
  {
    status: 'success',
    type: 'A',
    host: 'plbstl.github.io',
    result: '185.199.110.153, 185.199.108.153, 185.199.109.153, 185.199.111.153',
    service: 'https://dns.custom-query/json',
    timestamp: 10,
    input: {
      receiveDnssecData: true,
      resourceRecordType: 'A',
      domainName: 'plbstl.github.io',
      serviceUrl: 'https%3A%2F%2Fdns.custom-query%2Fjson',
    },
  },
  {
    status: 'error',
    type: 'NS',
    host: 'google.com',
    result: 'Your client has issued a malformed or illegal request. Invalid query name: ‘’.',
    service: 'Cloudflare Families (Malware/Adult)',
    timestamp: 11,
    input: {
      domainName: 'google.com',
      resourceRecordType: 'NS',
      serviceUrl: 'cfa',
    },
  },
  {
    status: 'success',
    type: 'MX',
    host: 'https://dns-long-dn-name.custom-domain-long-name.co.cu',
    result: 'ns1.etecsa.net. admin.enet.cu. 2024080900 7200 1800 1209600 2000',
    service: 'Cloudflare DNS',
    timestamp: 12,
    input: {
      domainName: 'https%3A%2F%2Fdns-long-dn-name.custom-domain-long-name.co.cu',
      resourceRecordType: 'MX',
      serviceUrl: 'cf',
      receiveDnssecData: true,
      disableValidation: true,
    },
  },
]