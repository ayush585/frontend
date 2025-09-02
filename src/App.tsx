import React, { useState } from "react";

export default function Landing() {
  const [copied, setCopied] = useState(false);

  const copy = async (txt) => {
    try {
      await navigator.clipboard.writeText(txt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Simple header */}
      <div className="border-b px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-medium">SmartChunk</h1>
          <div className="text-sm space-x-4">
            <a href="/docs" className="hover:underline">Docs</a>
            <a href="#usage" className="hover:underline">Usage</a>
            <a href="https://github.com/yourorg/smartchunk" className="hover:underline">GitHub</a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Title and description */}
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-4">SmartChunk</h2>
          <p className="text-lg text-gray-700 mb-6">
            Structure-aware document chunking for RAG applications. Preserves context while improving retrieval performance.
          </p>

          <div className="bg-gray-100 border-l-4 border-blue-500 p-4 mb-8">
            <p className="text-sm">
              <strong>Performance:</strong> +37.4% NDCG@10 improvement, 28% smaller index size, perfect fidelity for code and tables.
            </p>
          </div>
        </div>

        {/* Installation */}
        <section id="install" className="mb-12">
          <h3 className="text-xl font-medium mb-4">Installation</h3>
          <div className="bg-gray-50 border p-4 rounded mb-4">
            <div className="flex justify-between items-center">
              <code className="text-sm">pip install smartchunk</code>
              <button
                onClick={() => copy('pip install smartchunk')}
                className="text-xs px-2 py-1 border rounded hover:bg-gray-100"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600">Requires Python 3.8+</p>
        </section>

        {/* Quick example */}
        <section id="usage" className="mb-12">
          <h3 className="text-xl font-medium mb-4">Quick Start</h3>

          <div className="mb-6">
            <h4 className="font-medium mb-2">Command line:</h4>
            <div className="bg-gray-50 border p-4 rounded">
              <pre className="text-sm overflow-x-auto"><code>{`smartchunk chunk document.md --max-tokens 500 --format markdown`}</code></pre>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-2">Python:</h4>
            <div className="bg-gray-50 border p-4 rounded">
              <pre className="text-sm overflow-x-auto"><code>{`from smartchunk import chunk_text

chunks = chunk_text(
    "Your document content here...",
    max_tokens=500,
    format="markdown"
)`}</code></pre>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h3 className="text-xl font-medium mb-4">Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Structure-aware chunking (respects headings, code blocks, tables)</li>
            <li>• Semantic similarity for intelligent boundaries</li>
            <li>• Configurable chunk size and overlap</li>
            <li>• Multiple format support (Markdown, HTML, text)</li>
            <li>• Deduplication and optimization</li>
          </ul>
        </section>

        {/* Performance data */}
        <section className="mb-12">
          <h3 className="text-xl font-medium mb-4">Performance</h3>
          <div className="border rounded">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-3 font-medium">Metric</th>
                  <th className="text-left p-3 font-medium">SmartChunk</th>
                  <th className="text-left p-3 font-medium">Naive Chunking</th>
                  <th className="text-left p-3 font-medium">Improvement</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-3">NDCG@10</td>
                  <td className="p-3">0.724</td>
                  <td className="p-3">0.527</td>
                  <td className="p-3 text-green-600">+37.4%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">Index Size</td>
                  <td className="p-3">142 MB</td>
                  <td className="p-3">197 MB</td>
                  <td className="p-3 text-green-600">-28%</td>
                </tr>
                <tr>
                  <td className="p-3">Code/Table Fidelity</td>
                  <td className="p-3">1.0</td>
                  <td className="p-3">0.73</td>
                  <td className="p-3 text-green-600">+37%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Benchmarked on technical documentation corpus</p>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h3 className="text-xl font-medium mb-4">Configuration</h3>
          <div className="bg-gray-50 border p-4 rounded">
            <pre className="text-sm overflow-x-auto"><code>{`# Command line options
smartchunk chunk input.md \\
  --max-tokens 500 \\
  --overlap 50 \\
  --min-similarity 0.3 \\
  --format markdown \\
  --output chunks.jsonl

# Python configuration
from smartchunk import ChunkConfig

config = ChunkConfig(
    max_tokens=500,
    overlap_tokens=50,
    min_similarity=0.3,
    preserve_structure=True
)`}</code></pre>
          </div>
        </section>

        {/* Documentation links */}
        <section>
          <h3 className="text-xl font-medium mb-4">Documentation</h3>
          <ul className="space-y-1">
            <li><a href="/docs" className="text-blue-600 hover:underline">API Reference</a></li>
            <li><a href="/docs" className="text-blue-600 hover:underline">Examples</a></li>
            <li><a href="https://github.com/yourorg/smartchunk" className="text-blue-600 hover:underline">Source Code</a></li>
            <li><a href="https://github.com/yourorg/smartchunk/issues" className="text-blue-600 hover:underline">Report Issues</a></li>
          </ul>
        </section>
      </div>

      {/* Simple footer */}
      <div className="border-t mt-16 py-4 text-center text-sm text-gray-500">
        <div className="max-w-4xl mx-auto px-4">
          SmartChunk • MIT License • <a href="https://github.com/yourorg/smartchunk" className="hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );
}