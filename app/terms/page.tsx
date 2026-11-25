import { pageSeo } from "@/lib/seo";
import { PolicyLayout } from "@/components/inner-page/policy-layout";
export const metadata = pageSeo("/terms", "Terms & Conditions", "Read the provisional terms for the MIZAVARA Global product catalogue and business enquiries.");
const sections = [
  {
    "id": "information",
    "title": "Website information",
    "body": "Website information is provided for general business-enquiry purposes. Product availability, origin, specification, certification, price and delivery terms are subject to written confirmation."
  },
  {
    "id": "agreements",
    "title": "Quotations and agreements",
    "body": "Images and descriptions may be representative. No order or commercial commitment is created until both parties confirm the applicable quotation or agreement."
  },
  {
    "id": "review",
    "title": "Policy review",
    "body": "These terms will be reviewed with the company’s final business, jurisdiction and contact details before launch."
  }
];
export default function PolicyPage(){return <PolicyLayout path="/terms" title="Terms & Conditions" eyebrow="Legal" description="Provisional website terms for review before the public launch of Mizavara Global." sections={sections}/>;}
