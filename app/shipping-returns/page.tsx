import { pageSeo } from "@/lib/seo";
import { PolicyLayout } from "@/components/inner-page/policy-layout";
export const metadata = pageSeo("/shipping-returns", "Shipping & Returns", "Read delivery and return arrangements for MIZAVARA Global catalogue and business enquiries.");
const sections = [
  {
    "id": "delivery",
    "title": "Delivery arrangements",
    "body": "Product availability, packaging, delivery destination, shipping charges and dispatch schedules are confirmed in the quotation. This website is a catalogue and does not accept online orders or payments."
  },
  {
    "id": "returns",
    "title": "Returns and damaged goods",
    "body": "Return eligibility and any applicable procedures are subject to the agreed order terms and applicable law. Contact MIZAVARA to discuss a specific delivery or product concern."
  }
];
export default function PolicyPage(){return <PolicyLayout path="/shipping-returns" title="Shipping & Returns" eyebrow="Information" description="Delivery and return arrangements for catalogue and business enquiries." sections={sections} note="Final commercial policies are subject to company approval."/>;}
