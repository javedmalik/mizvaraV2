import { pageSeo } from "@/lib/seo";
import { PolicyLayout } from "@/components/inner-page/policy-layout";
export const metadata = pageSeo("/privacy-policy", "Privacy Policy", "Read the provisional MIZAVARA Global privacy policy and enquiry information practices.");
const sections = [
  {
    "id": "collection",
    "title": "Information we collect",
    "body": "When you submit an enquiry, we may receive your name, company, email, phone number and the business requirement you provide."
  },
  {
    "id": "use",
    "title": "How information is used",
    "body": "Enquiry information is intended only to respond to your request, provide relevant product information and maintain necessary business communication."
  },
  {
    "id": "third-party",
    "title": "Third-party service",
    "body": "The enquiry form may use Formspree to process submissions. The final policy will include the applicable service and retention details."
  }
];
export default function PolicyPage(){return <PolicyLayout path="/privacy-policy" title="Privacy Policy" eyebrow="Legal" description="This provisional policy will be reviewed and updated with the company’s final legal and contact information before public launch." sections={sections}/>;}
