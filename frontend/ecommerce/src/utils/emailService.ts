import type { Order } from '../types';

export const sendReceiptEmail = async (order: Order): Promise<void> => {
  // Simulate email sending
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real application, this would integrate with an email service
  // For demo purposes, we'll just log the email content
  console.log('Email sent to user with order details:', {
    orderId: order._id,
    total: order.amount,
    items: order.products.length,
    recipient: 'user@example.com'
  });
  
  // Store email in localStorage for demo
  const emailLog = {
    to: 'user@example.com',
    subject: `Order Receipt - ${order._id}`,
    body: `
      Thank you for your order!
      
      Order ID: ${order._id}
      Date: ${new Date(order.createdAt).toLocaleDateString()}
      Total: $${order.amount.toFixed(2)}

      Items:
      ${order.products.map(item => 
        `- ${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`
      ).join('\n')}
      
      Shipping Address: ${order.address}
      
      Thank you for shopping with ShopHub!
    `,
    timestamp: new Date().toISOString()
  };
  
  const emailLogs = JSON.parse(localStorage.getItem('emailLogs') || '[]');
  emailLogs.push(emailLog);
  localStorage.setItem('emailLogs', JSON.stringify(emailLogs));
};