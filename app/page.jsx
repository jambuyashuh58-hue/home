"use client";

import { BookOpen } from "lucide-react";

const CL = { navy: "#0B1F3A", blue: "#1E88E5", gray: "#F3F5F7" };

const RESOURCES = [
  {
    title: "HomeFit Buyer's Guide",
    desc: "Complete guide for builders.",
    tag: "PDF",
    href: "/downloads/HomeFit_Buyers_Guide.pdf",
  },
  {
    title: "ROI Calculator",
    desc: "See how fitouts improve margins.",
    tag: "EXCEL",
    href: "/downloads/ROI_Calculator.xlsx",
  },
  {
    title: "Sample Quotation — 2BHK",
    desc: "Full itemized pricing example.",
    tag: "PDF",
    href: "/downloads/Sample_Quotation_2BHK.pdf",
  },
];

function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: 0.4,
        color: "#5B9CF2",
        background: "#EAF2FE",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function ResourceItem({ title, desc, tag, href }) {
  const handleClick = (e) => {
    if (!href || href === "#") {
      e.preventDefault();
      alert("File not found. Place the file in /public/downloads/ or update the link.");
    }
  };

  return (
    <a href={href} download onClick={handleClick} style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: 20,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 1px 3px rgba(0,0,0,.06), 0 4px 20px rgba(0,0,0,.04)",
          transition: "transform .15s ease, box-shadow .15s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 6px 16px rgba(0,0,0,.06), 0 12px 30px rgba(0,0,0,.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow =
            "0 1px 3px rgba(0,0,0,.06), 0 4px 20px rgba(0,0,0,.04)";
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: CL.blue + "12",
            color: CL.blue,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <BookOpen size={20} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 800,
              color: CL.navy,
              fontSize: 16,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>{desc}</div>
        </div>

        <Pill>{tag}</Pill>
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <section style={{ padding: "80px 24px", minHeight: "70vh", background: CL.gray }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "'Poppins',sans-serif",
            fontWeight: 800,
            color: CL.navy,
            fontSize: "clamp(26px,4vw,36px)",
            margin: "0 0 28px",
          }}
        >
          Resources & Downloads
        </h2>

        <div style={{ display: "grid", gap: 14 }}>
          {RESOURCES.map((r) => (
            <ResourceItem key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
