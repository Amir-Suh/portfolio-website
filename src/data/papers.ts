import type { Paper } from "@/types";

export const papers: Paper[] = [
  {
    slug: "fault-tolerant-distributed-systems",
    title: "Fault-Tolerant Distributed Systems: A Survey of Modern Approaches",
    abstract:
      "This survey examines fault-tolerance strategies in distributed systems, covering consensus algorithms, replication protocols, and failure detection mechanisms. We analyse trade-offs between consistency, availability, and partition tolerance across contemporary system designs.",
    authors: ["Amir Suhail", "Co-Author Name"],
    venue: "Journal of Distributed Computing",
    year: 2025,
    pdfUrl: "#",
    tags: ["Distributed Systems", "Fault Tolerance", "Consensus"],
  },
  {
    slug: "ml-systems-optimization",
    title: "Optimizing Inference Latency in Production Machine Learning Systems",
    abstract:
      "We present a set of practical techniques for reducing inference latency in production ML pipelines, including model quantisation, batching strategies, and hardware-aware kernel fusion. Benchmarks demonstrate up to 3× throughput improvement on standard NLP workloads.",
    authors: ["Amir Suhail"],
    venue: "Workshop on ML Systems — NeurIPS",
    year: 2024,
    pdfUrl: "#",
    tags: ["Machine Learning", "Systems", "Optimisation"],
  },
  {
    slug: "static-analysis-security",
    title: "Lightweight Static Analysis for Detecting Security Vulnerabilities in Web Applications",
    abstract:
      "We propose a lightweight static analysis framework that identifies common web application vulnerabilities — including XSS, SQL injection, and CSRF — at the AST level. The approach achieves high recall with low false-positive rates on a benchmark of open-source codebases.",
    authors: ["Amir Suhail", "Co-Author Name"],
    venue: "IEEE Symposium on Security and Privacy",
    year: 2024,
    tags: ["Security", "Static Analysis", "Web"],
  },
];
