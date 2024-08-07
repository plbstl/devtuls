# DNS Lookup

Query any DNS resolver service that supports DNS-over-HTTPS and JSON queries.

<details>
<summary>More information about DNS.</summary>
<br/>

**Domain Name System**, or **DNS** for short, is a protocol that translates human-friendly domain names (`www.example.com`) into IP addresses (`192.0.17.3`) that computers use to identify each other on the internet.

It is like an internet phone book, as it is much easier for us to remember a website's name than its IP address.

**DNS lookup** is the process of querying DNS servers to retrieve relevant information for a domain name. **DNS servers** are computers that store DNS records. **DNS records** map domain names to IP addresses and other information.

</details>

## Inputs

State is saved in the URL, can be bookmarked and shared through links. There are _5_ inputs available:

```txt
?url=&name=&type=&cd=&do=
```

### name

The domain name you want to retrieve DNS data for. Examples are `google.com`, `api.github.com`, etc.

### type

The associated resource record (RR) you want to receive. Most services return an `A` record when this is not set. Examples are `CNAME`, `MX`, `TXT`, `A`, etc.

### do

Whether or not to receive DNSSEC data. Any value except for `1` and `true` defaults to `false`.

### cd

Whether or not to disable validation. Any value except for `1` and `true` defaults to `false`.

### url

URL to the DNS-over-HTTPS service (must support JSON queries). If no URL is provided, _Google Public DNS_ will be used. You can also pass in a keyword to choose from the default available options.

- _gg_ — Google Public DNS
- _cf_ — Cloudflare 1.1.1.1
- _cfm_ — Cloudflare 1.1.1.1 for Families (Block malware)
- _cfa_ — Cloudflare 1.1.1.1 for Families (Block malware & adult content)

> [!NOTE]
>
> Responses from Google Public DNS are usually more consistent than others, in case you are looking for that kind of behaviour.
