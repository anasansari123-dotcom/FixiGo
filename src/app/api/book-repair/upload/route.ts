import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

async function uploadToTmpFiles(file: File): Promise<string | null> {
  const body = new FormData();
  body.append("file", file);

  const response = await fetch("https://tmpfiles.org/api/v1/upload", {
    method: "POST",
    body,
  });

  if (!response.ok) return null;

  const json = (await response.json()) as {
    status?: string;
    data?: { url?: string };
  };

  const url = json.data?.url;
  if (!url) return null;

  return url.replace("tmpfiles.org/", "tmpfiles.org/dl/");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files are allowed" },
        { status: 400 },
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Image must be 5MB or smaller" },
        { status: 400 },
      );
    }

    const imageUrl = await uploadToTmpFiles(file);

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Image upload failed" },
        { status: 500 },
      );
    }

    return NextResponse.json({ imageUrl });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
