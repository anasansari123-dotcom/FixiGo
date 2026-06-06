"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Upload,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/metadata";
import { sendContactMessageToWhatsApp } from "@/lib/whatsapp";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function ContactForm() {
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

    try {
      const result = await sendContactMessageToWhatsApp(
        {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          subject: String(formData.get("subject") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
        selectedFile,
      );

      if (result.method === "share") {
        setSubmitNote(
          "Aapka message WhatsApp par ready hai. WhatsApp mein sirf Send button dabayein.",
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

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-bold text-foreground">Phone</h3>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="mt-1 block text-muted-foreground hover:text-primary"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-bold text-foreground">Email</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-1 block text-muted-foreground hover:text-primary"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-bold text-foreground">Office</h3>
              <p className="mt-1 text-muted-foreground">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12"
              >
                <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">WhatsApp Par Ready Hai!</h3>
                <p className="mt-2 text-muted-foreground">{submitNote}</p>
                <Button href="https://wa.me/916395503819" className="mt-6">
                  <MessageCircle className="h-5 w-5" />
                  Open WhatsApp
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border bg-white p-6 shadow-xl md:p-10"
              >
                <h2 className="text-2xl font-bold text-foreground">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Form bhariye aur Send on WhatsApp dabaiye — message seedha
                  Fixigo ke WhatsApp par jayega.
                </p>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What is your inquiry about?"
                      className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="contactImage"
                      className="mb-2 block text-sm font-medium"
                    >
                      Upload Image (Optional)
                    </label>
                    <label
                      htmlFor="contactImage"
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
                        id="contactImage"
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
                <Button
                  type="submit"
                  size="lg"
                  className="mt-8"
                  disabled={isSubmitting}
                >
                  <MessageCircle className="h-5 w-5" />
                  {isSubmitting ? "WhatsApp khol rahe hain..." : "Send on WhatsApp"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
