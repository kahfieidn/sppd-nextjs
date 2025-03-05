import { prisma } from "@/lib/prisma";

export const getSppds = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const sppds = await prisma.sppd.findMany();
    return sppds;
  } catch {
    throw new Error("Failed to fetch SPPDs");
  }
};
