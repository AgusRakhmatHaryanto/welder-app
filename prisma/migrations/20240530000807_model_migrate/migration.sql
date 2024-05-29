-- CreateEnum
CREATE TYPE "Role" AS ENUM ('dev', 'admin', 'customer');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'SHIPPED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "InstallationStatus" AS ENUM ('NOT_APPLICABLE', 'PENDING', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'REFUNDED');

-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(36) NOT NULL,
    "username" VARCHAR(255),
    "name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(50),
    "address" TEXT,
    "postalCode" VARCHAR(15),
    "City" VARCHAR(100),
    "province" VARCHAR(100),
    "profile" VARCHAR(150),
    "role" "Role" NOT NULL DEFAULT 'customer',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "token" VARCHAR(255) NOT NULL,
    "userId" VARCHAR(36),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Category" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(255),
    "description" TEXT,
    "richDesription" TEXT,
    "image" VARCHAR(150),
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "price" DOUBLE PRECISION DEFAULT 0,
    "categoryId" VARCHAR(36),
    "countInStock" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" VARCHAR(36) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "instalation" "InstallationStatus" NOT NULL DEFAULT 'NOT_APPLICABLE',
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "totalPrice" DOUBLE PRECISION DEFAULT 0,
    "userId" VARCHAR(36),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" VARCHAR(36) NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "orderId" VARCHAR(36),
    "productId" VARCHAR(36)
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_userId_key" ON "RefreshToken"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_userId_key" ON "Order"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_id_key" ON "OrderItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_key" ON "OrderItem"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_productId_key" ON "OrderItem"("productId");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
