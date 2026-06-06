"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Package,
  Search,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const mockStatuses = [
  {
    id: "FXG-2026-7842",
    device: "iPhone 14 Pro",
    issue: "Cracked screen replacement",
    status: "In Progress",
    technician: "Rajesh Kumar",
    eta: "Today, 4:30 PM",
    steps: [
      { label: "Request Received", completed: true, icon: CheckCircle2 },
      { label: "Technician Assigned", completed: true, icon: MapPin },
      { label: "En Route to Your Location", completed: true, icon: Clock },
      { label: "Repair In Progress", completed: true, icon: Wrench },
      { label: "Quality Check", completed: false, icon: Package },
      { label: "Completed", completed: false, icon: CheckCircle2 },
    ],
  },
];

export function TrackRepairForm() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<(typeof mockStatuses)[0] | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const found = mockStatuses.find(
      (item) => item.id.toLowerCase() === trackingId.trim().toLowerCase(),
    );
    setResult(found ?? null);
    setNotFound(!found);
  };

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleTrack}
        className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-lg md:flex-row md:items-end md:p-8"
      >
        <div className="flex-1">
          <label htmlFor="trackingId" className="mb-2 block text-sm font-medium">
            Tracking ID
          </label>
          <input
            id="trackingId"
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="e.g. FXG-2026-7842"
            required
            className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <Button type="submit" size="lg" className="md:mb-0">
          <Search className="h-5 w-5" />
          Track Repair
        </Button>
      </form>

      <p className="text-sm text-muted-foreground">
        Demo tracking ID:{" "}
        <button
          type="button"
          className="font-semibold text-primary hover:underline"
          onClick={() => setTrackingId("FXG-2026-7842")}
        >
          FXG-2026-7842
        </button>
      </p>

      {notFound && !result && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
          No repair found with that tracking ID. Please check and try again.
        </div>
      )}

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl"
        >
          <div className="border-b border-border bg-muted/50 px-6 py-5 md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tracking ID</p>
                <p className="text-xl font-bold text-primary">{result.id}</p>
              </div>
              <span className="inline-flex w-fit rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary">
                {result.status}
              </span>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
            <div>
              <h3 className="font-semibold text-foreground">Device Details</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Device</dt>
                  <dd className="font-medium">{result.device}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Issue</dt>
                  <dd className="text-right font-medium">{result.issue}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Technician</dt>
                  <dd className="font-medium">{result.technician}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Estimated Completion</dt>
                  <dd className="font-medium">{result.eta}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">Repair Timeline</h3>
              <ol className="mt-4 space-y-4">
                {result.steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.label} className="flex items-start gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          step.completed
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-medium ${
                            step.completed
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {step.label}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
