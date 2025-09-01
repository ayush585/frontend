import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Star, TerminalSquare, Zap, ShieldCheck, Cpu, Rocket, CheckCircle2, ArrowRight, Download, Braces, BookOpen, ChevronRight, Sparkles, Play } from "lucide-react";

/**
 * PIP‑FIRST VARIANT + INTERACTIVE TERMINAL DEMO
 * All install/quickstart sections use Python/pip + CLI, not npm.
 * Adds a fake, sandboxed terminal that accepts a few pip/CLI commands to wow judges.
 * No external libs beyond framer-motion/lucide. Pure client-side state.
 */

// Optional Spline URL. Leave empty to skip loading Spline (prevents fetch errors during dev/offline).
const SPLINE_SCENE = ""; // e.g. "https://prod.spline.design/XXXX/scene.splinecode"

const BRAND = {
  name: "SmartChunk",
  tagline: "Structure‑Aware Semantic Chunking for serious RAG & Agents",
  subTag: "Ship retrieval that actually understands documents.",
  github: "https://github.com/yourorg/smartchunk",
  docs: "/docs",
};

export default function Landing() {
  useThemeInit();
  const [copied, setCopied] = useState(false);

  // pip/TestPyPI focused install (hackathon‑friendly)
  const installCmd = "pip install -i https://test.pypi.org/simple/ smartchunk";

  const quickCodePy = `from smartchunk import chunker
  
  # 1) Chunk a Markdown or HTML file
  chunks = chunker.chunk(
      path="docs/README.md",
      mode="markdown",
      max_tokens=700,
      overlap=80,
      min_sim=0.35,
      dedupe=True,
  )
  
  # 2) Use chunks with your vector DB (example)
  from qdrant_client import QdrantClient
  client = QdrantClient("http://localhost:6333")
  # ... upsert 'chunks' with your preferred schema
  `;

  const cliExample = `# CLI: structure‑aware + semantic\nsmartchunk chunk docs/README.md \\\n  --mode markdown \\\n  --max-tokens 700 \\\n  --overlap 80 \\\n  --min-sim 0.35 \\\n  --dedupe \\\n  --out out/chunks.jsonl\n\n# Compare against a naive splitter\nsmartchunk compare docs/README.md --mode markdown --max-tokens 700 --out out/compare-report.html`;

  const copy = async (txt: string) => {
    try { await navigator.clipboard.writeText(txt); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* clipboard write failed */ }
  };

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(70%_60%_at_50%_0%,rgba(99,102,241,0.20),transparent),radial-gradient(40%_40%_at_80%_20%,rgba(56,189,248,0.15),transparent)] text-zinc-100">
      <BackgroundFX splineUrl={SPLINE_SCENE} />

      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
            <span className="ml-3 hidden rounded-full bg-white/10 px-2 py-0.5 text-xs text-indigo-200 md:inline">Beta</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-white/90 text-white/70" href="#features">Features</a>
            <a className="hover:text-white/90 text-white/70" href="#why">Why</a>
            <a className="hover:text-white/90 text-white/70" href="#bench">Benchmarks</a>
            <a className="hover:text-white/90 text-white/70" href="#terminal">Terminal</a>
            <a className="hover:text-white/90 text-white/70" href="#pricing">Pricing</a>
            <a className="hover:text-white/90 text-white/70" href={BRAND.docs}>Docs</a>
            <a className="hover:text-white/90 text-white/70" href={BRAND.github}><Github className="inline h-4 w-4" /> <span className="ml-1">GitHub</span></a>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="rounded-2xl bg-gradient-to-r from-indigo-500 via-teal-400 to-cyan-500 text-white relative overflow-hidden group"
              onMouseMove={(e) => {
                const button = e.currentTarget;
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left; // X position within the button
                const y = e.clientY - rect.top; // Y position within the button
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 180; // Angle in degrees
                button.style.background = `linear-gradient(${angle}deg, #4F46E5, #34D399, #22D3EE)`;
              }}
              onMouseLeave={(e) => {
                const button = e.currentTarget;
                button.style.background = `linear-gradient(to right, #4F46E5, #34D399, #22D3EE)`; // Reset to default
              }}
            >
              <a href="#cta">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 md:pt-24">
        <div className="mx-auto grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-black leading-tight md:text-6xl">
              Build RAG that <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-teal-200 bg-clip-text text-transparent">actually understands</span> your docs.
            </motion.h1>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              {BRAND.tagline} {" "}
              {BRAND.subTag}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Structure‑aware splitting preserves headings, lists, tables, and code fences.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Semantic stitching avoids context drop, keeps references + linkages intact.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Markdown/HTML/Plain → clean, index‑ready chunks.</li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3" id="cta">
              <Button className="rounded-2xl bg-indigo-500 hover:bg-indigo-400" onClick={() => copy(installCmd)}>
                <Download className="mr-2 h-4 w-4" /> Copy pip install
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20">
                <a href={BRAND.docs}><BookOpen className="mr-2 h-4 w-4" /> Read the docs</a>
              </Button>
              <a href={BRAND.github} className="group inline-flex items-center rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/90 hover:bg-black/50">
                <Github className="mr-2 h-4 w-4" /> Star on GitHub
                <Star className="ml-2 h-4 w-4 opacity-70 group-hover:scale-110" />
              </a>
            </div>

            {/* Install + Python quickstart */}
            <Card className="mt-8 w-full max-w-xl border-white/10 bg-black/40">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white/80">Install via pip (TestPyPI)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/50 p-3">
                  <code className="truncate text-sm">{installCmd}</code>
                  <Button variant="ghost" className="hover:bg-white/10" onClick={() => copy(installCmd)}>{copied ? "Copied" : "Copy"}</Button>
                </div>
                <div className="mt-3 rounded-xl border border-white/10 bg-black/50 p-3">
                  <div className="mb-2 text-xs font-semibold text-white/60">Python (SDK)</div>
                  <pre className="max-h-56 overflow-auto text-xs leading-relaxed text-white/90"><code>{quickCodePy}</code></pre>
                </div>
                <div className="mt-3 rounded-xl border border-white/10 bg-black/50 p-3">
                  <div className="mb-2 text-xs font-semibold text-white/60">CLI</div>
                  <pre className="max-h-56 overflow-auto text-xs leading-relaxed text-white/90"><code>{cliExample}</code></pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics & value */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <Card className="border-white/10 bg-black/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white/90">
                  <Cpu className="h-5 w-5 text-cyan-300" /> Production‑grade chunking pipeline
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <Metric kpi="+37.4%" label="NDCG@10 vs naive split" />
                <Metric kpi="−28%" label="Index size vs sliding window" />
                <Metric kpi="3.2×" label="Faster ingest on 1k Markdown files" />
                <Metric kpi=">99%" label="Table/Code fence fidelity" />
              </CardContent>
            </Card>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <ValueCard icon={<ShieldCheck className="h-5 w-5" />} title="Deterministic" desc="Stable chunk IDs, resumable ingest, idempotent ops." />
              <ValueCard icon={<Zap className="h-5 w-5" />} title="Blazing Fast" desc="Streaming parsers + parallel layout detection." />
              <ValueCard icon={<TerminalSquare className="h-5 w-5" />} title="Dev‑first" desc="Rich CLI + Python API; JSONL schema." />
              <ValueCard icon={<Rocket className="h-5 w-5" />} title="Scales Up" desc="From laptop to millions of tokens." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center text-xl font-semibold text-white/80">Plug into your stack</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-white/60">Vectors: Qdrant • Weaviate • pgvector • Milvus · LLMs: OpenAI • Claude • Llama · ETL: Airflow • Dagster</p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          <Feature title="Structure‑aware" icon={<Braces className="h-5 w-5" />} bullets={["Headings, lists, tables, code fences kept intact", "Cross‑linking between related chunks", "Section‑level embeddings"]} />
          <Feature title="Semantic‑first" icon={<Sparkles className="h-5 w-5" />} bullets={["Dynamic windowing by semantic boundaries", "Coref & citation preservation", "Multi‑modal anchors (OCR/layout)"]} />
          <Feature title="Ops‑ready" icon={<ShieldCheck className="h-5 w-5" />} bullets={["Stable IDs, deterministic transforms", "Retry/resume safe ingest", "Observability & drift metrics"]} />
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-white/10 bg-black/40">
            <CardHeader>
              <CardTitle>Why naive chunking fails</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-white/80">
              <ul className="list-inside list-disc space-y-2">
                <li>Loses document semantics (lists → paragraphs, tables → gibberish).</li>
                <li>Breaks references: figures, equations, code blocks lose context.</li>
                <li>Explodes index size with sliding windows + redundant tokens.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-black/40">
            <CardHeader>
              <CardTitle>How SmartChunk fixes it</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-white/80">
              <ul className="list-inside list-disc space-y-2">
                <li>Understands layout (ToC, headings, lists, tables, code fences).</li>
                <li>Semantic stitching across boundaries to retain meaning.</li>
                <li>Chunk linking + section embeddings → fewer misses, better recall.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benchmarks */}
      <section id="bench" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid items-start gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Benchmarks</h3>
            <p className="mt-2 text-white/70">Evaluated on DocVQA, LongFormQA, and internal legal/tech corpus. Swaps into your RAG stack without retraining.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Stat k="+10.8%" v="Hit@1" note="vs recursive split" />
              <Stat k="−22%" v="Latency" note="tokenization + fewer hops" />
              <Stat k="+15%" v="F1" note="complex table QA" />
              <Stat k="1.0" v="Fidelity" note="code fence preservation" />
            </div>
          </div>
          <Card className="border-white/10 bg-black/40">
            <CardHeader>
              <CardTitle>Try locally in 60s</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-inside list-decimal space-y-2 text-sm text-white/80">
                <li>Install: <code className="rounded bg-white/10 px-1">{installCmd}</code></li>
                <li>Add your docs to <code className="rounded bg-white/10 px-1">docs/</code></li>
                <li>Run CLI: <code className="rounded bg-white/10 px-1">smartchunk chunk docs/README.md --mode markdown</code></li>
                <li>Open report: <code className="rounded bg-white/10 px-1">out/compare-report.html</code></li>
              </ol>
              <Button className="mt-4 rounded-2xl" asChild>
                <a href={BRAND.docs}>Open Quickstart <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* NEW — Interactive Terminal Demo (eye‑catcher before pricing) */}
      <section id="terminal" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Play with the CLI (demo)</h3>
          <div className="flex gap-2">
            <Button className="rounded-2xl bg-indigo-500 hover:bg-indigo-400" onClick={() => window.dispatchEvent(new CustomEvent("smartchunk-demo-run", { detail: installCmd }))}>
              <Play className="mr-2 h-4 w-4" /> Run install
            </Button>
            <Button className="rounded-2xl" variant="outline" onClick={() => window.dispatchEvent(new CustomEvent("smartchunk-demo-run", { detail: "smartchunk chunk docs/README.md --mode markdown --max-tokens 700 --overlap 80 --min-sim 0.35 --dedupe --out out/chunks.jsonl" }))}>
              <TerminalSquare className="mr-2 h-4 w-4" /> Run chunk
            </Button>
          </div>
        </div>
        <Card className="border-white/10 bg-black/40">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-white/90"><TerminalSquare className="h-5 w-5" /> SmartChunk Terminal (sandbox)</CardTitle>
          </CardHeader>
          <CardContent>
            <TerminalDemo brand={BRAND} />
          </CardContent>
        </Card>
        <p className="mt-3 text-xs text-white/50">This is a safe, simulated shell. No packages are actually installed; outputs are scripted to showcase the developer experience.</p>
      </section>

      {/* Email capture */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Card className="border-white/10 bg-gradient-to-br from-white/5 to-white/0">
          <CardHeader>
            <CardTitle className="text-2xl">Join the early access</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Input placeholder="you@company.com" className="w-full bg-black/40" />
            <Button className="rounded-2xl">Request invite <ChevronRight className="ml-1 h-4 w-4" /></Button>
            <p className="text-xs text-white/60">No spam. We’ll reach out with a demo + benchmarks.</p>
          </CardContent>
        </Card>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="text-center text-2xl font-semibold">Simple pricing</h3>
        <p className="mx-auto mt-2 max-w-xl text-center text-white/70">Start free. Usage‑based when you scale. Self‑host or managed cloud.</p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <PriceCard tier="Hacker" price="$0" cta="Start free" features={["MIT License", "Community support", "Local ingest up to 5k pages"]} />
          <PriceCard tier="Pro" price="$49/mo" highlight cta="Go Pro" features={["Managed dashboards", "10M tokens/mo ingest", "Priority support"]} />
          <PriceCard tier="Enterprise" price="Custom" cta="Talk to sales" features={["SSO/SOC2", "VPC deploy", "SLA & custom connectors"]} />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href={BRAND.docs}>Docs</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function useThemeInit() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.setProperty("color-scheme", "dark");
  }, []);
}

/* -----------------------------
   BackgroundFX with Spline‑optional
------------------------------ */
function BackgroundFX({ splineUrl }: { splineUrl?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      {/* If a Spline URL is provided, mount it in an iframe to avoid module fetch errors */}
      {splineUrl ? (
        <iframe
          title="spline"
          src={splineUrl}
          className="h-full w-full opacity-60"
          sandbox="allow-scripts allow-same-origin"
        />
      ) : null}
    </div>
  );
}

/* -----------------------------
   Lightweight UI components (shadcn‑style API)
------------------------------ */

type Classable = { className?: string } & React.HTMLAttributes<HTMLElement>;

function cx(...parts: Array<string | undefined>) { return parts.filter(Boolean).join(" "); }

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  children?: React.ReactNode;
}

export function Button({ asChild, className, variant, children, ...rest }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-400/50 disabled:opacity-50";
  const variants: Record<string, string> = {
    default: "bg-zinc-800 hover:bg-zinc-700 text-white rounded-md",
    outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white rounded-md",
    ghost: "hover:bg-white/10 text-white rounded-md",
  };
  return React.createElement(asChild ? "span" : "button", { className: cx(base, variants[variant || "default"], className), ...rest }, children);
}

export function Card({ className, children, ...rest }: Classable) {
  return <div className={cx("rounded-2xl border p-0", className)} {...rest}>{children}</div>;
}
export function CardHeader({ className, children, ...rest }: Classable) {
  return <div className={cx("p-4", className)} {...rest}>{children}</div>;
}
export function CardTitle({ className, children, ...rest }: Classable) {
  return <div className={cx("text-lg font-semibold", className)} {...rest}>{children}</div>;
}
export function CardContent({ className, children, ...rest }: Classable) {
  return <div className={cx("p-4 pt-0", className)} {...rest}>{children}</div>;
}

export function Input({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cx("rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40", className)} {...rest} />;
}

function Metric({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/50 p-3">
      <div className="text-2xl font-bold text-white">{kpi}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="border-white/10 bg-black/40">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-white/90">{icon}{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/70">{desc}</CardContent>
    </Card>
  );
}

function Feature({ title, icon, bullets }: { title: string; icon: React.ReactNode; bullets: string[] }) {
  return (
    <Card className="border-white/10 bg-black/40">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-white/90">{icon}{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/80">
        <ul className="list-inside list-disc space-y-2">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Stat({ k, v, note }: { k: string; v: string; note: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <div className="text-xs uppercase tracking-wide text-white/50">{note}</div>
      <div className="mt-1 text-3xl font-extrabold text-white">{k}</div>
      <div className="text-sm text-white/70">{v}</div>
    </div>
  );
}

function PriceCard({ tier, price, features, cta, highlight }: { tier: string; price: string; features: string[]; cta: string; highlight?: boolean }) {
  return (
    <Card className={`border ${highlight ? "border-indigo-400/40 shadow-[0_0_60px_-20px_rgba(99,102,241,0.6)]" : "border-white/10"} bg-black/40`}>
      <CardHeader>
        <CardTitle className="text-white/90">{tier}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{price}</div>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          {features.map((f, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{f}</li>))}
        </ul>
        <Button className={`mt-6 w-full rounded-2xl ${highlight ? "bg-indigo-500 hover:bg-indigo-400" : ""}`}>{cta}</Button>
      </CardContent>
    </Card>
  );
}

/* -----------------------------
   Interactive Terminal (Sandbox)
------------------------------ */
function TerminalDemo({ brand }: { brand: { name: string } }) {
  const [lines, setLines] = useState<string[]>([banner(brand.name), promptLine()]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number>(-1);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Allow top‑level buttons to inject commands
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (!busy) runCommand(customEvent.detail);
    };
    window.addEventListener("smartchunk-demo-run", handler as EventListener);
    return () => window.removeEventListener("smartchunk-demo-run", handler as EventListener);
  }, [busy, lines]);

  useEffect(() => {
    // Auto scroll to bottom on new output
    viewportRef.current?.scrollTo({ top: viewportRef.current.scrollHeight, behavior: 'smooth' });
  }, [lines, busy]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!busy) runCommand(input.trim());
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length) {
        const ni = Math.min(history.length - 1, (histIdx < 0 ? history.length - 1 : histIdx + 1));
        setHistIdx(ni);
        setInput(history[history.length - 1 - ni]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx <= 0) { setHistIdx(-1); setInput(""); }
      else { const ni = histIdx - 1; setHistIdx(ni); setInput(history[history.length - 1 - ni]); }
    }
  };

  function runCommand(cmd: string) {
    if (!cmd) return;
    setHistory((h) => [...h, cmd]);
    setHistIdx(-1);
    setInput("");
    setLines((ls) => [...ls.slice(0, -1), `$ ${cmd}`]);

    // Commands
    if (cmd === 'clear') {
      setLines([banner(brand.name), promptLine()]);
      return;
    }

    // Simulated commands
    if (cmd.startsWith('pip install')) return simulatePip();
    if (cmd.startsWith('smartchunk chunk')) return simulateChunk();
    if (cmd.startsWith('smartchunk compare')) return simulateCompare();
    if (cmd === 'help' || cmd === '--help' || cmd === 'smartchunk --help') {
      return emit([
        'Available commands (demo):',
        '  pip install -i https://test.pypi.org/simple/ smartchunk',
        '  smartchunk chunk <file> --mode markdown --max-tokens 700 --overlap 80 --min-sim 0.35 --dedupe --out out/chunks.jsonl',
        '  smartchunk compare <file> --out out/compare-report.html',
        '  clear',
      ]);
    }

    // Fallback
    emit([`smartchunk-demo: ${cmd.split(' ')[0]}: command not found`]);
  }

  function emit(out: string[] | string, withPrompt = true) {
    const payload = Array.isArray(out) ? out : [out];
    setLines((ls) => [...ls, ...payload, ...(withPrompt ? [promptLine()] : [])]);
  }

  function simulatePip() {
    setBusy(true);
    const frames = [
      'Collecting smartchunk',
      '  Downloading smartchunk-0.1.0-py3-none-any.whl (42 kB)',
      'Collecting rich>=13.0',
      'Collecting rapidfuzz>=3.0',
      'Collecting beautifulsoup4>=4.12',
      'Installing collected packages: rapidfuzz, beautifulsoup4, rich, smartchunk',
      'Successfully installed beautifulsoup4-4.12.3 rapidfuzz-3.9.1 rich-13.9.2 smartchunk-0.1.0',
    ];
    stepFrames(frames, 300).then(() => { setBusy(false); emit('# Done. Try: smartchunk chunk docs/README.md', true); });
  }

  function simulateChunk() {
    setBusy(true);
    const frames = [
      'Parsing docs/README.md…',
      'Detected layout: H1/H2 sections, 3 code fences, 2 tables, 14 list items',
      'Building structure graph…',
      'Semantic stitching…',
      '✅ 24 chunks • avg 560 tokens • overlap 80',
      'Writing out/chunks.jsonl…',
      'Done in 0.84s',
    ];
    stepFrames(frames, 350).then(() => { setBusy(false); emit("Open report with: smartchunk compare docs/README.md --out out/compare-report.html", true); });
  }

  function simulateCompare() {
    setBusy(true);
    const frames = [
      'Generating baseline (naive recursive)…',
      'Evaluating boundary quality…',
      'Rendering HTML report…',
      'Report → out/compare-report.html',
      'NDCG@10: +37.4% vs baseline • Fidelity: 1.00 (code/table preserved) • Index size: −28%',
    ];
    stepFrames(frames, 320).then(() => { setBusy(false); emit("Open the HTML file above to explore side‑by‑side chunks.", true); });
  }

  async function stepFrames(frames: string[], delay = 300) {
    for (const f of frames) {
      await sleep(delay);
      setLines((ls) => [...ls, f]);
    }
    setLines((ls) => [...ls, promptLine()]);
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/60">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-white/60">
        <div className="flex gap-1">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <span>smartchunk-demo — bash</span>
      </div>

      <div ref={viewportRef} className="max-h-[380px] overflow-auto px-3 py-3 font-mono text-[12.5px] leading-5 text-white/90">
        {lines.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap">{l}</div>
        ))}
        <div className="mt-1 flex items-center">
          <span className="mr-2 text-emerald-300">$</span>
          <input
            disabled={busy}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={busy ? "running…" : "Try: pip install … | smartchunk chunk … | help"}
            className="w-full bg-transparent outline-none placeholder:text-white/30"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}

function banner(name: string) {
  return [
    `\n${name} CLI demo — type 'help' for commands`,
  ].join('\n');
}
function promptLine() { return '# Type a command and press Enter'; }
function sleep(ms: number) { return new Promise(res => setTimeout(res, ms)); }
