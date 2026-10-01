import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 499;
  const isFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);
  const shippingFee = cartTotal > 0 ? (isFreeShipping ? 0 : 49) : 0;
  const grandTotal = cartTotal + shippingFee;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (checkoutStep === 'success') {
      clearCart();
      setCheckoutStep('cart');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#E8DED0]">
          {/* Header */}
          <div className="p-5 border-b border-[#E8DED0] flex items-center justify-between bg-[#F4EEE3]/80">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#183E2D]" />
              <h2 className="font-serif text-xl font-bold text-[#183E2D]">
                Your Food Bag
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 text-[#522D1B] hover:text-[#183E2D] hover:bg-[#E8DED0] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main content body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {checkoutStep === 'cart' && (
              <>
                {/* Free Delivery Meter */}
                {cartTotal > 0 && (
                  <div className="p-3 bg-[#183E2D]/5 rounded-xl border border-[#183E2D]/15 space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-[#183E2D]">
                      <span>{isFreeShipping ? '🎉 You unlocked Free Delivery!' : `Add ₹${amountToFreeShipping} more for Free Delivery`}</span>
                      <span className="tabular-nums">{Math.min(100, Math.round((cartTotal / FREE_SHIPPING_THRESHOLD) * 100))}%</span>
                    </div>
                    <div className="w-full bg-[#E8DED0] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#20503A] h-full rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Items List */}
                {cartItems.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#E8DED0]/60 flex items-center justify-center text-[#733E26]">
                      <ShoppingBag className="w-8 h-8 opacity-60" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-bold text-[#183E2D]">
                        Your bag is empty
                      </h3>
                      <p className="text-xs text-[#522D1B]/70 max-w-xs mx-auto">
                        Explore our handcrafted sprouted ragi cookies, Kai Murukku, or stone-ground idli podi.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map(item => (
                      <div
                        key={item.product.id}
                        className="p-3 bg-white rounded-xl border border-[#E8DED0] shadow-2xs flex gap-3 items-center justify-between"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 object-cover rounded-lg shrink-0 bg-[#F4EEE3]"
                        />

                        <div className="flex-1 min-w-0 pr-2">
                          <h4 className="font-serif text-sm font-bold text-[#183E2D] truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-[11px] text-[#733E26] block">
                            {item.product.weight} · ₹{item.product.price}
                          </span>

                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 rounded bg-[#F4EEE3] hover:bg-[#E8DED0] text-[#522D1B] flex items-center justify-center cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold tabular-nums px-1">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 rounded bg-[#F4EEE3] hover:bg-[#E8DED0] text-[#522D1B] flex items-center justify-center cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right flex flex-col justify-between items-end h-16 py-0.5">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-[#733E26]/50 hover:text-[#A73C23] p-1 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold text-xs text-[#183E2D] tabular-nums">
                            ₹{item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Step 2: Customer Address Info */}
            {checkoutStep === 'details' && (
              <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="p-3 bg-[#183E2D]/8 rounded-xl border border-[#183E2D]/20 text-xs text-[#183E2D]">
                  <span className="font-semibold block mb-0.5">Delivery Order Preview</span>
                  <span>Dispatched fresh from our Nanjai Uthukuli kitchen in Erode.</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#522D1B] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Ramanathan"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8DED0] bg-white focus:outline-none focus:border-[#183E2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#522D1B] mb-1">
                      Phone Number (for SMS & dispatch) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8DED0] bg-white focus:outline-none focus:border-[#183E2D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#522D1B] mb-1">
                      Delivery Address & City *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Flat/House No., Street, Area (e.g. Anna Nagar / Adyar, Chennai - 600040)"
                      value={customerAddress}
                      onChange={e => setCustomerAddress(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-[#E8DED0] bg-white focus:outline-none focus:border-[#183E2D]"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DED0] text-xs space-y-1">
                  <div className="flex justify-between text-[#522D1B]/80">
                    <span>Payment Mode:</span>
                    <span className="font-semibold text-[#183E2D]">Cash on Delivery (COD) / UPI on Delivery</span>
                  </div>
                  <div className="flex justify-between text-[#522D1B]/80">
                    <span>Estimated Transit:</span>
                    <span className="font-semibold text-[#183E2D]">24-48 Hours</span>
                  </div>
                </div>
              </form>
            )}

            {/* Step 3: Success Confirmation */}
            {checkoutStep === 'success' && (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#183E2D]/10 text-[#183E2D] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold tracking-wider text-[#CFA049] uppercase">
                    Order Received
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#183E2D]">
                    Thank You, {customerName || 'Friend'}!
                  </h3>
                  <p className="text-xs text-[#522D1B]/80 max-w-xs mx-auto leading-relaxed">
                    Your order #{Math.floor(100000 + Math.random() * 900000)} has been sent to our kitchen team in Nanjai Uthukuli, Erode.
                    We will prepare your foods fresh and dispatch via priority express.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E8DED0] text-left text-xs space-y-2 max-w-xs mx-auto">
                  <div className="flex justify-between border-b border-[#E8DED0] pb-2">
                    <span className="text-[#733E26]">Delivery To:</span>
                    <span className="font-medium text-[#183E2D] truncate max-w-[150px]">{customerAddress || 'Chennai'}</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#183E2D]">
                    <span>Total Amount (COD/UPI):</span>
                    <span className="tabular-nums">₹{grandTotal}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleClose}
                    className="w-full bg-[#183E2D] hover:bg-[#20503A] text-white py-3 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Continue Exploring Vendhan
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Totals & Checkout Button */}
          {checkoutStep !== 'success' && cartItems.length > 0 && (
            <div className="p-5 border-t border-[#E8DED0] bg-[#F4EEE3]/90 space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[#522D1B]/80">
                  <span>Subtotal</span>
                  <span className="font-semibold tabular-nums text-[#183E2D]">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-[#522D1B]/80">
                  <span>Shipping</span>
                  <span className="font-semibold tabular-nums text-[#183E2D]">
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#183E2D] pt-2 border-t border-[#E8DED0]">
                  <span>Total</span>
                  <span className="tabular-nums text-base">₹{grandTotal}</span>
                </div>
              </div>

              {checkoutStep === 'cart' ? (
                <button
                  onClick={() => setCheckoutStep('details')}
                  className="w-full bg-[#183E2D] hover:bg-[#20503A] text-[#FAF7F2] py-3.5 px-4 rounded-xl font-semibold text-xs tracking-wide shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Proceed to Delivery Details</span>
                  <ArrowRight className="w-4 h-4 text-[#CFA049]" />
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-1/3 border border-[#522D1B]/30 hover:border-[#183E2D] text-[#522D1B] py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    className="w-2/3 bg-[#183E2D] hover:bg-[#20503A] text-white py-3 rounded-xl text-xs font-semibold tracking-wide shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#CFA049]" />
                    <span>Confirm Order (COD)</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
