-- CreateTable
CREATE TABLE "Sppd" (
    "id" TEXT NOT NULL,
    "nomor" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kota" TEXT NOT NULL,
    "tanggal_awal_dinas" TIMESTAMP(3) NOT NULL,
    "tanggal_akhir_dinas" TIMESTAMP(3) NOT NULL,
    "perihal" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sppd_pkey" PRIMARY KEY ("id")
);
