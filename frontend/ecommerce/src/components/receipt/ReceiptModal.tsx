import React from 'react';
import { X, Download, Mail, Check } from 'lucide-react';
import type { Order } from '../../types';
import { generatePDFReceipt } from '../../utils/pdfGenerator';
import { sendReceiptEmail } from '../../utils/emailService';
import toast from 'react-hot-toast';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  const handleDownloadPDF = async () => {
    try {
      await generatePDFReceipt(order);
      toast.success('Receipt downloaded successfully!');
    } catch (error) {
      toast.error('Failed to generate PDF receipt');
    }
  };

  const handleEmailReceipt = async () => {
    try {
      await sendReceiptEmail(order);
      toast.success('Receipt sent to your email!');
    } catch (error) {
      toast.error('Failed to send receipt');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Order Receipt</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Check className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Order Confirmed!
            </h3>
            <p className="text-gray-600">
              Your order has been successfully placed and is being processed.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Order ID</h4>
                <p className="text-gray-600">{order._id}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Order Date</h4>
                <p className="text-gray-600">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Payment ID</h4>
                <p className="text-gray-600">{order.paymentId}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Status</h4>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                  {order.status}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-900 mb-1">Shipping Address</h4>
              <p className="text-gray-600">{order.address}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Order Items</h4>
            <div className="space-y-3">
              {order.products.map((item, idx) => (
                <div key={item.productId || idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900">{item.name}</h5>
                    <p className="text-gray-600 text-sm">
                      ₹{item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <span className="font-medium">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-blue-600">
                ${typeof order.amount === 'number' ? order.amount.toFixed(2) : '0.00'}
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleDownloadPDF}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Download className="mr-2" size={20} />
              Download PDF
            </button>
            <button
              onClick={handleEmailReceipt}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <Mail className="mr-2" size={20} />
              Email Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};