import type { Metadata } from "next";
import ScorecardClient from "./ScorecardClient";

export const metadata: Metadata = {
  title: "Interactive Compliance Risk Scorecard",
  description: "Calculate your company's operational compliance risk score. Instantly evaluate your business against enterprise security standards.",
};

export default function ComplianceScorecardPage() {
  return <ScorecardClient />;
}
