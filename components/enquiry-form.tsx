"use client";

import { FormEvent, useState, useEffect, useRef } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { T, useLanguage } from "@/components/language-provider";
import { hindi } from "@/lib/hindi-dictionary";
import { contact } from "@/lib/site-data";

type FormStatus = "idle" | "sending" | "success" | "error";

export function EnquiryForm({ enquiryType = "General enquiry", initialProduct = "General enquiry", initialMessage }: { enquiryType?: string; initialProduct?: string; initialMessage?: string }) {
  const {language} = useLanguage();
  const tr = (text: string) => language === "hi" ? (hindi[text] ?? text) : text;
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => { formRef.current?.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea").forEach(field => field.setCustomValidity("")); }, [language]);
  const wholesale = enquiryType === "Wholesale & Bulk Supply";
  const distributor = enquiryType === "Distributor Partnership";
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!contact.formspreeEndpoint) {
      setStatus("error");
      setErrorMessage(
        "The enquiry service is not configured. Please contact us directly."
      );
      return;
    }

    if (status === "sending") return;
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);

        const message =
          result?.errors
            ?.map((error: { message?: string }) => error.message)
            .filter(Boolean)
            .join(", ") ||
          "We could not submit your enquiry. Please try again.";

        throw new Error(message);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  function handleFormChange() {
    if (status === "success" || status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      onChange={handleFormChange}
      onInput={(event) => {
        const field = event.target;
        if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) field.setCustomValidity("");
      }}
      onInvalid={(event) => {
        const field = event.target;
        if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return;
        field.setCustomValidity("");
        const v = field.validity;
        if (v.valid) return;
        const message = v.valueMissing ? "Please fill out this field." : v.typeMismatch ? "Please enter a valid email address." : v.badInput ? "Please enter a valid number." : v.rangeUnderflow || v.rangeOverflow || v.stepMismatch ? "Please check the allowed value or range." : v.tooShort ? "Please enter at least 10 characters." : "Please check this field.";
        field.setCustomValidity(tr(message));
      }}
      className="card space-y-5 p-6 sm:p-8"
    >
      {/* Formspree email subject */}
      <input
        type="hidden"
        name="_subject"
        value={`${enquiryType} | Mizavara Global website`}
      />

      <input type="hidden" name="enquiryType" value={enquiryType} />

      {/* Spam-protection honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          <T text="Full name" /> <span className="text-red-500">*</span>

          <input
            className="field"
            name="name"
            required
            autoComplete="name"
            placeholder={tr("Enter your full name")}
          />
        </label>

        <label className="grid gap-2 text-sm font-bold">
          <T text="Company" /> {(wholesale || distributor) && <span className="text-red-500">*</span>}

          <input
            className="field"
            name="company"
            required={wholesale || distributor}
            autoComplete="organization"
            placeholder={tr("Enter your company name")}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          <T text="Email" /> <span className="text-red-500">*</span>

          <input
            className="field"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={tr("name@company.com")}
          />
        </label>

        <label className="grid gap-2 text-sm font-bold">
          <T text="Phone" /> {(wholesale || distributor) && <span className="text-red-500">*</span>}

          <input
            className="field"
            type="tel"
            name="phone"
            required={wholesale || distributor}
            autoComplete="tel"
            placeholder={tr("+91 98765 43210")}
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold">
        <T text="Interested product" />

        <select
          className="field"
          name="product"
          defaultValue={["General enquiry", "Makhana", "Natural Makhana", "Peri Peri Makhana", "Pudina Makhana"].includes(initialProduct) ? initialProduct : "General enquiry"}
        >
          {["General enquiry", "Makhana", "Natural Makhana", "Peri Peri Makhana", "Pudina Makhana"].map(value => <option key={value} value={value}>{tr(value)}</option>)}
        </select>
      </label>

      {wholesale && (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">
            <T text="Business type" /> *
            <select className="field" name="businessType" required defaultValue="">
              <option value="" disabled>{tr("Select business type")}</option>
              {["Retailer", "Wholesaler", "Distributor", "Institutional buyer", "Other"].map(type => <option key={type} value={type}>{tr(type)}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold">
            <T text="Preferred pack size" /> *
            <select className="field" name="packSize" required defaultValue="">
              <option value="" disabled>{tr("Select pack size")}</option>
              {["1 KG", "5 KG", "10 KG", "25 KG", "Custom"].map(size => <option key={size} value={size}>{tr(size)}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold">
            <T text="Total quantity (kg)" /> *
            <input className="field" name="quantityKg" type="number" min="0.01" step="0.01" required placeholder={tr("e.g. 100")} />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            <T text="Delivery city / country" /> *
            <input className="field" name="destination" required maxLength={150} placeholder={tr("City, country")} />
          </label>
        </div>
      )}

      {distributor && (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">
            <T text="Business location" /> *
            <input className="field" name="businessLocation" required maxLength={150} placeholder={tr("City, state, country")} />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            <T text="Preferred territory" /> *
            <input className="field" name="preferredTerritory" required maxLength={150} placeholder={tr("Region or market")} />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            <T text="Distribution experience (optional)" />
            <select className="field" name="distributionExperience" defaultValue="">
              <option value="">{tr("Select experience")}</option>
              {['New to distribution', 'Less than 1 year', '1–3 years', 'More than 3 years'].map(value => <option key={value} value={value}>{tr(value)}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold">
            <T text="Current brands handled (optional)" />
            <input className="field" name="currentBrands" maxLength={250} placeholder={tr("Brands or product categories")} />
          </label>
        </div>
      )}

      <label className="grid gap-2 text-sm font-bold">
        <T text="Your requirement" /> <span className="text-red-500">*</span>

        <textarea
          className="field min-h-36 resize-y"
          name="message"
          defaultValue={initialMessage}
          required
          minLength={10}
          maxLength={2000}
          placeholder={tr(distributor ? "Tell us about your business and distribution requirements." : "Tell us the product, quantity, packaging and destination you require.")}
        />
      </label>

      <button
        className="button-primary min-w-44 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? (
          <>
            <LoaderCircle size={17} className="animate-spin" />
            <T text="Sending..." />
          </>
        ) : (
          <>
            <Send size={17} />
            <T text="Submit Enquiry" />
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300"
          >
            <CheckCircle2 size={20} className="mt-0.5 shrink-0" />

            <p>
              <T text="Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly." />
            </p>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
          >
            <AlertCircle size={20} className="mt-0.5 shrink-0" />

            <p>{language === "hi" ? (hindi[errorMessage] ?? hindi["We could not submit your enquiry. Please try again."]) : errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}