import jsPDF from 'jspdf';
import type { Order } from '../types';

export const generatePDFReceipt = async (order: Order): Promise<void> => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.text('ShopHub', 20, 20);
  doc.setFontSize(16);
  doc.text('Order Receipt', 20, 35);
  
  // Order details
  doc.setFontSize(12);
  doc.text(`Order ID: ${order.id}`, 20, 55);
  doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`, 20, 65);
  doc.text(`Payment ID: ${order.paymentId}`, 20, 75);
  doc.text(`Status: ${order.status}`, 20, 85);
  
  // Shipping address
  doc.text('Shipping Address:', 20, 105);
  doc.text(order.shippingAddress, 20, 115);
  
  // Items table
  doc.text('Items:', 20, 135);
  
  let yPosition = 145;
  order.items.forEach((item) => {
    doc.text(`${item.product.name}`, 20, yPosition);
    doc.text(`$${item.product.price.toFixed(2)} × ${item.quantity}`, 120, yPosition);
    doc.text(`$${(item.product.price * item.quantity).toFixed(2)}`, 160, yPosition);
    yPosition += 10;
  });
  
  // Total
  yPosition += 10;
  doc.setFontSize(14);
  doc.text(`Total: $${order.total.toFixed(2)}`, 20, yPosition);
  
  // Footer
  doc.setFontSize(10);
  doc.text('Thank you for your purchase!', 20, yPosition + 30);
  doc.text('For support, contact us at support@shophub.com', 20, yPosition + 40);
  
  // Save the PDF
  doc.save(`receipt-${order.id}.pdf`);
};