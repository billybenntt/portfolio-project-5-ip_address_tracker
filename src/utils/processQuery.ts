async function ProcessQuery(query: string) {

    const ipAddressRegex = /\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
    const domainNameRegex = /^(?!.{256,})([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;


    if (ipAddressRegex.test(query)) {
        return {
            type: "ipAddress",
            ip: query
        }
    }


    if (domainNameRegex.test(query)) {
        const response = await fetch(`https://dns.google/resolve?name=${query}`)
        const queryDomain = await response.json()
        const queryIp = queryDomain['Answer'][0].data

        return {
            type: "domainAddress",
            ip: queryIp
        }
    }

    return {
        type: "invalid",
        ip: "8.8.8.8"
    }

}

export default ProcessQuery