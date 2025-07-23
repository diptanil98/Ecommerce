import jsPDF from 'jspdf';
import type { Order } from '../types';
import type { OrderProduct } from '../types';

export const generatePDFReceipt = async (order: Order): Promise<void> => {
  const doc = new jsPDF();
  
  
  doc.setFontSize(20);
  doc.text('ShopHub', 20, 20);
  doc.setFontSize(16);
  doc.text('Order Receipt', 20, 35);
  
  
  doc.setFontSize(12);
  doc.text(`Order ID: ${order._id}`, 20, 55);
  doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`, 20, 65);
  doc.text(`Payment ID: ${order.paymentId}`, 20, 75);
  doc.text(`Status: ${order.status}`, 20, 85);
  
  
  doc.text('Shipping Address:', 20, 105);
  doc.text(order.address, 20, 115);
  
  
  doc.text('Items:', 20, 135);
  
  let yPosition = 145;
  order.products.forEach((item) => {
    doc.text(`${item.name}`, 20, yPosition);
    doc.text(`₹${item.price.toFixed(2)} × ${item.quantity}`, 120, yPosition);
    doc.text(`₹${(item.price * item.quantity).toFixed(2)}`, 160, yPosition);
    yPosition += 10;
  });
  
  
  yPosition += 10;
  doc.setFontSize(14);
  doc.text(`Total: ₹${order.amount.toFixed(2)}`, 20, yPosition);

  
  doc.setFontSize(10);
  doc.text('Thank you for your purchase!', 20, yPosition + 30);
  doc.text('For support, contact us at support@shophub.com', 20, yPosition + 40);
  
  
  doc.save(`receipt-${order._id}.pdf`);
};