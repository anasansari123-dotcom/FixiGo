export const WHATSAPP_NUMBER = "916395503819";

export type RepairRequestData = {
  fullName: string;
  mobile: string;
  city: string;
  deviceType: string;
  issue: string;
};

export function buildRepairRequestMessage(
  data: RepairRequestData,
  imageUrl?: string | null,
): string {
  let message = `*Fixigo - New Repair Request*

*Name:* ${data.fullName}
*Mobile:* ${data.mobile}
*City:* ${data.city}
*Device:* ${data.deviceType}

*Issue:*
${data.issue}`;

  if (imageUrl) {
    message += `\n\n*Device Photo:*\n${imageUrl}`;
  }

  message += `\n\n---\nSent from Fixigo website`;
  return message;
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export async function uploadImageForWhatsApp(file: File): Promise<string | null> {
  const body = new FormData();
  body.append("file", file);

  const response = await fetch("/api/book-repair/upload", {
    method: "POST",
    body,
  });

  if (!response.ok) return null;

  const data = (await response.json()) as { imageUrl?: string };
  return data.imageUrl ?? null;
}

export type ContactRequestData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function buildContactMessage(
  data: ContactRequestData,
  imageUrl?: string | null,
): string {
  let message = `*Fixigo - Contact Message*

*Name:* ${data.name}
*Email:* ${data.email}
*Subject:* ${data.subject}

*Message:*
${data.message}`;

  if (imageUrl) {
    message += `\n\n*Attachment:*\n${imageUrl}`;
  }

  message += `\n\n---\nSent from Fixigo website`;
  return message;
}

export async function sendContactMessageToWhatsApp(
  data: ContactRequestData,
  file?: File | null,
): Promise<{ method: "share" | "redirect"; hasImage: boolean }> {
  const message = buildContactMessage(data);

  if (file && typeof navigator !== "undefined" && "share" in navigator) {
    const shareData: ShareData = { text: message, files: [file] };

    try {
      if (navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        return { method: "share", hasImage: true };
      }
    } catch (error) {
      if ((error as Error).name === "AbortError") throw error;
    }
  }

  let imageUrl: string | null = null;
  if (file) {
    try {
      imageUrl = await uploadImageForWhatsApp(file);
    } catch {
      imageUrl = null;
    }
  }

  const finalMessage = buildContactMessage(data, imageUrl);
  const whatsappUrl = getWhatsAppUrl(finalMessage);

  window.location.href = whatsappUrl;
  return { method: "redirect", hasImage: !!file };
}

export async function sendRepairRequestToWhatsApp(
  data: RepairRequestData,
  file?: File | null,
): Promise<{ method: "share" | "redirect"; hasImage: boolean }> {
  const message = buildRepairRequestMessage(data);

  if (file && typeof navigator !== "undefined" && "share" in navigator) {
    const shareData: ShareData = { text: message, files: [file] };

    try {
      if (navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        return { method: "share", hasImage: true };
      }
    } catch (error) {
      if ((error as Error).name === "AbortError") throw error;
    }
  }

  let imageUrl: string | null = null;
  if (file) {
    try {
      imageUrl = await uploadImageForWhatsApp(file);
    } catch {
      imageUrl = null;
    }
  }

  const finalMessage = buildRepairRequestMessage(data, imageUrl);
  const whatsappUrl = getWhatsAppUrl(finalMessage);

  window.location.href = whatsappUrl;
  return { method: "redirect", hasImage: !!file };
}
