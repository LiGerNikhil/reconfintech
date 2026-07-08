import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const langs = ['cURL', 'JavaScript', 'Python', 'Node.js', 'PHP', 'Java']

function codeSample(lang, endpoint, auth, headers, body) {
  const [method, path] = endpoint.split(' ')
  const url = `https://api.reconfintech.com${path}`

  switch (lang) {
    case 'cURL':
      return `curl -X ${method} "${url}" \\\n  -H "${auth}" \\\n${Object.entries(headers).map(([k, v]) => `  -H "${k}: ${v}"`).join(' \\\n')}${body ? ` \\\n  -d '${JSON.stringify(body)}'` : ''}`
    case 'JavaScript':
      return `fetch("${url}", {\n  method: "${method}",\n${Object.keys(headers).length ? `  headers: ${JSON.stringify(headers, null, 4)},\n` : ''}${body ? `  body: JSON.stringify(${JSON.stringify(body, null, 4)}),\n` : ''}})\n  .then(res => res.json())\n  .then(console.log);`
    case 'Python':
      return `import requests\n\nheaders = ${JSON.stringify({ ...Object.fromEntries(Object.entries(headers).map(([k, v]) => [k, v])), Authorization: auth.replace('Authorization: ', '') }, null, 4)}\n${body ? `data = ${JSON.stringify(body, null, 4)}\n\nresponse = requests.${method.toLowerCase()}("${url}", headers=headers, json=data)` : `response = requests.${method.toLowerCase()}("${url}", headers=headers)`}\nprint(response.json())`
    case 'Node.js':
      return `const axios = require('axios');\n\nconst headers = ${JSON.stringify({ ...Object.fromEntries(Object.entries(headers).map(([k, v]) => [k, v])), Authorization: auth.replace('Authorization: ', '') }, null, 4)};\n${body ? `const data = ${JSON.stringify(body, null, 4)};\n\naxios({ method: "${method.toLowerCase()}", url: "${url}", headers, data })` : `axios({ method: "${method.toLowerCase()}", url: "${url}", headers })`}\n  .then(res => console.log(res.data))\n  .catch(err => console.error(err));`
    case 'PHP':
      return `$ch = curl_init();\n\ncurl_setopt_array($ch, [\n  CURLOPT_URL => "${url}",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_CUSTOMREQUEST => "${method}",\n${Object.keys(headers).length ? `  CURLOPT_HTTPHEADER => [\n    "${auth}",\n${Object.entries(headers).map(([k, v]) => `    "${k}: ${v}"`).join(',\n')}\n  ],` : `  CURLOPT_HTTPHEADER => ["${auth}"],`}${body ? `\n  CURLOPT_POSTFIELDS => json_encode(${JSON.stringify(body, null, 4)}),` : ''}\n]);\n\n$response = curl_exec($ch);\ncurl_close($ch);\necho $response;`
    case 'Java':
      return `import java.net.http.*;\nimport java.net.URI;\n\nHttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder()\n  .uri(URI.create("${url}"))\n  .header("Authorization", "${auth.replace('Authorization: ', '')}")${Object.entries(headers).map(([k, v]) => `\n  .header("${k}", "${v}")`).join('')}${body ? `\n  .method("${method}", HttpRequest.BodyPublishers.ofString(${JSON.stringify(JSON.stringify(body))}))` : `\n  .method("${method}", HttpRequest.BodyPublishers.noBody())`}\n  .build();\n\nclient.sendAsync(request, HttpResponse.BodyHandlers.ofString())\n  .thenApply(HttpResponse::body)\n  .thenAccept(System.out::println);`
    default:
      return ''
  }
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={() => { navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500) }).catch(() => {}) }}
      className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-body/60 transition-colors hover:bg-surface hover:text-body"
      aria-label="Copy code"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
          Copied
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>
          Copy
        </>
      )}
    </button>
  )
}

export default function CodeTabs({ endpoint, auth, headers, body, response }) {
  const [lang, setLang] = useState('cURL')
  const sample = codeSample(lang, endpoint, auth, headers, body)
  const respStr = JSON.stringify(response, null, 2)

  return (
    <div>
      {/* Lang tabs */}
      <div className="-mx-5 -mt-5 mb-5 flex overflow-x-auto border-b border-border-soft px-5">
        {langs.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            className={`shrink-0 border-b-2 px-4 py-2.5 text-xs font-semibold transition-colors duration-150 ${
              lang === l ? 'border-primary text-primary' : 'border-transparent text-body/60 hover:text-body'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Endpoint */}
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-md bg-emerald-50 px-2 py-1 font-mono text-[11px] font-bold text-emerald-700">{endpoint.split(' ')[0]}</span>
        <span className="font-mono text-sm text-body/80">{endpoint.split(' ')[1]}</span>
      </div>

      {/* Code */}
      <div className="relative mb-4 overflow-hidden rounded-xl border border-border-soft bg-[#0B1428]">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
          <span className="text-[11px] text-white/30">Request</span>
          <CopyButton text={sample} />
        </div>
        <pre className="max-h-64 overflow-auto p-4 font-mono text-xs leading-relaxed text-white/80 scrollbar-thin">
          <code>{sample}</code>
        </pre>
      </div>

      {/* Response */}
      <div className="overflow-hidden rounded-xl border border-border-soft bg-[#0B1428]">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-white/30">Response</span>
            <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">200 OK</span>
          </div>
          <CopyButton text={respStr} />
        </div>
        <pre className="max-h-64 overflow-auto p-4 font-mono text-xs leading-relaxed text-white/80 scrollbar-thin">
          <code>{respStr}</code>
        </pre>
      </div>
    </div>
  )
}
