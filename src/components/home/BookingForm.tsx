"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { deviceTypes } from "@/lib/data/services";
import { sendRepairRequestToWhatsApp } from "@/lib/whatsapp";

type BookingFormProps = {
  showHeading?: boolean;
  className?: string;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function BookingForm({
  showHeading = true,
  className = "",
}: BookingFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitNote, setSubmitNote] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setFileError("Please upload a PNG or JPG image only.");
      setSelectedFile(null);
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError("Image must be 5MB or smaller.");
      setSelectedFile(null);
      e.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFileError("");

    const formData = new FormData(e.currentTarget);
    const requestData = {
      fullName: String(formData.get("fullName") ?? ""),
      mobile: String(formData.get("mobile") ?? ""),
      city: String(formData.get("city") ?? ""),
      deviceType: String(formData.get("deviceType") ?? ""),
      issue: String(formData.get("issue") ?? ""),
    };

    try {
      const result = await sendRepairRequestToWhatsApp(requestData, selectedFile);

      if (result.method === "share") {
        setSubmitNote(
          "Aapka repair request WhatsApp par ready hai. WhatsApp mein sirf Send button dabayein.",
        );
        setSubmitted(true);
      }
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        setFileError("WhatsApp share cancel ho gaya. Dobara try karein.");
      } else {
        setFileError(
          "WhatsApp open nahi ho paya. Please check internet aur dobara try karein.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12 ${className}`}
      >
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
        <h3 className="mt-4 text-2xl font-bold text-foreground">
          WhatsApp Par Ready Hai!
        </h3>
        <p className="mt-2 text-muted-foreground">{submitNote}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="https://wa.me/916395503819">
            <MessageCircle className="h-5 w-5" />
            Open WhatsApp
          </Button>
          <Button href="/track-repair" variant="outline">
            Track Repair
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="book-repair" className={className}>
      {showHeading && (
        <SectionHeading
          eyebrow="Book a Repair"
          title="Schedule your doorstep service"
          description="Form bhariye aur Send on WhatsApp dabaiye — details aur photo seedha Fixigo ke WhatsApp par chali jayegi."
        />
      )}

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="rounded-3xl border border-border bg-white p-6 shadow-xl shadow-slate-200/50 md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="mb-2 block text-sm font-medium">
              Mobile Number *
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="10-digit mobile number"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-medium">
              City *
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              placeholder="e.g. Muzaffarnagar"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label
              htmlFor="deviceType"
              className="mb-2 block text-sm font-medium"
            >
              Device Type *
            </label>
            <select
              id="deviceType"
              name="deviceType"
              required
              defaultValue=""
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="" disabled>
                Select device type
              </option>
              {deviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="issue" className="mb-2 block text-sm font-medium">
              Issue Description *
            </label>
            <textarea
              id="issue"
              name="issue"
              required
              rows={4}
              placeholder="Describe the problem with your device..."
              className="w-full resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="deviceImage"
              className="mb-2 block text-sm font-medium"
            >
              Upload Image (Optional)
            </label>
            <label
              htmlFor="deviceImage"
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 px-6 py-10 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <Upload className="h-10 w-10 text-muted-foreground" />
              <p className="mt-3 text-sm font-medium text-foreground">
                {selectedFile
                  ? selectedFile.name
                  : "Click to upload or drag and drop"}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                PNG, JPG up to 5MB — photo bhi WhatsApp par jayegi
              </p>
              <input
                ref={fileInputRef}
                id="deviceImage"
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/webp"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
            {fileError && (
              <p className="mt-2 text-sm text-red-600">{fileError}</p>
            )}
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Button dabate hi WhatsApp open hoga. Message ready hoga — bas WhatsApp
          mein ek baar Send dabana hoga.
        </p>

        <Button
          type="submit"
          size="lg"
          className="mt-4 w-full md:w-auto"
          disabled={isSubmitting}
        >
          <MessageCircle className="h-5 w-5" />
          {isSubmitting ? "WhatsApp khol rahe hain..." : "Send on WhatsApp"}
        </Button>
      </motion.form>
    </section>
  );
}
