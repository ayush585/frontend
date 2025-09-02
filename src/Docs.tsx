// src/Docs.jsx
import React from "react";

export default function Docs() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900">
            <div className="mx-auto max-w-4xl px-4 py-10">
                <header className="mb-8 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">SmartChunk Docs</h1>
                    <a href="/" className="text-sm underline">Back</a>
                </header>

                <h2 className="text-xl font-semibold">Install</h2>
                <pre className="mt-2 rounded border bg-white p-3 text-sm overflow-auto">
                    <code>pip install -i https://test.pypi.org/simple/ smartchunk</code>
                </pre>

                <h2 className="mt-8 text-xl font-semibold">CLI</h2>
                <pre className="mt-2 rounded border bg-white p-3 text-sm overflow-auto">
                    {`smartchunk chunk docs/README.md --mode markdown --max-tokens 700 --overlap 80 --min-sim 0.35 --dedupe --out out/chunks.jsonl`}
                </pre>

                <h2 className="mt-8 text-xl font-semibold">Python API</h2>
                <pre className="mt-2 rounded border bg-white p-3 text-sm overflow-auto">
                    {`from smartchunk import chunker
chunks = chunker.chunk(path="docs/README.md", mode="markdown", max_tokens=700, overlap=80, min_sim=0.35, dedupe=True)`}
                </pre>

                <h2 className="mt-8 text-xl font-semibold">FAQ</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Supports Markdown/HTML.</li>
                    <li>Preserves headings/lists/tables/code fences.</li>
                    <li>Outputs JSONL ready for vector DBs.</li>
                </ul>
            </div>
        </div>
    );
}
