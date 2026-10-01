import React, { useState } from 'react';
import { X, LogOut, Package, MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const AuthModal: React.FC = () => {
  const {
    user,
    isAuthenticated,
    isAuthModalOpen,
    authModalMode,
    openAuthModal,
    closeAuthModal,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    logout
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [infoMsg, setInfoMsg] = useState('');

  if (!isAuthModalOpen) return null;

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setErrorMsg('');
    setInfoMsg('');
    try {
      await loginWithGoogle();
    } catch {
      setErrorMsg('Google sign in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }
    setIsLoading(true);
    setErrorMsg('');
    setInfoMsg('');
    try {
      if (authModalMode === 'register') {
        await registerWithEmail(name, email, password);
      } else {
        await loginWithEmail(email, password);
      }
    } catch {
      setErrorMsg('Authentication failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={closeAuthModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl border border-[#E8DED0] shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-full text-[#522D1B]/60 hover:text-[#183E2D] hover:bg-[#E8DED0]/50 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isAuthenticated && user ? (
          /* =========================================================================
             LOGGED IN PROFILE VIEW
             ========================================================================= */
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#183E2D] text-[#FAF7F2] flex items-center justify-center text-xl font-serif font-bold shadow-md border-2 border-[#CFA049]/40 shrink-0">
                {user.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 id="auth-modal-title" className="font-serif text-xl font-bold text-[#183E2D] truncate">
                    {user.name}
                  </h3>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" title="Active" />
                </div>
                <p className="text-xs text-[#522D1B]/80 truncate">{user.email}</p>
                <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-semibold text-[#8C321D] bg-[#8C321D]/10 px-2 py-0.5 rounded-sm">
                  <Sparkles className="w-3 h-3" />
                  <span>Vendhan Heritage Member</span>
                </div>
              </div>
            </div>

            {/* Quick Member Stats */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#F4EEE3] p-3 rounded-2xl border border-[#E8DED0]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#183E2D]">
                  <Package className="w-4 h-4 text-[#CFA049]" />
                  <span>Past Orders</span>
                </div>
                <p className="text-xl font-bold text-[#183E2D] mt-1 tabular-nums">2 Orders</p>
                <p className="text-[11px] text-[#733E26]/80 mt-0.5">Dispatched via Speed Post</p>
              </div>

              <div className="bg-[#F4EEE3] p-3 rounded-2xl border border-[#E8DED0]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#183E2D]">
                  <MapPin className="w-4 h-4 text-[#CFA049]" />
                  <span>Delivery Address</span>
                </div>
                <p className="text-xs font-medium text-[#183E2D] mt-1 truncate">Tamil Nadu, India</p>
                <p className="text-[11px] text-[#733E26]/80 mt-0.5">Primary default address</p>
              </div>
            </div>

            {/* Recent Orders Overview */}
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#733E26]">Recent Dispatch</h4>
              <div className="bg-white p-3 rounded-xl border border-[#E8DED0] text-xs flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#183E2D]">Order #VN-88419</p>
                  <p className="text-[11px] text-[#522D1B]/70">Kai Murukku, Millets Health Mix</p>
                </div>
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Delivered
                </span>
              </div>
            </div>

            {/* Sign Out Action */}
            <div className="pt-2 border-t border-[#E8DED0] flex items-center justify-between">
              <span className="text-[11px] text-[#733E26]/70">{user.joinedDate}</span>
              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C321D] hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        ) : (
          /* =========================================================================
             AUTHENTICATION: LOGIN / REGISTER
             - 1. Email ID & Password Form first
             - 2. "Sign In" button
             - 3. Divider
             - 4. "Continue with Google" button below
             ========================================================================= */
          <div className="space-y-5">
            {/* Header Titles */}
            <div className="text-center space-y-1">
              <span className="text-[10px] font-bold tracking-widest text-[#8C321D] uppercase">
                Vendhan Member Account
              </span>
              <h3 id="auth-modal-title" className="font-serif text-2xl font-bold text-[#183E2D]">
                {authModalMode === 'register' ? 'Create Account' : 'Sign In'}
              </h3>
              <p className="text-xs text-[#522D1B]/80">
                Track your freshly ground masalas, native millet snacks & orders.
              </p>
            </div>

            {/* Switch Tabs */}
            <div className="flex bg-[#E8DED0]/60 p-1 rounded-xl text-xs font-medium text-[#522D1B]">
              <button
                type="button"
                onClick={() => {
                  setErrorMsg('');
                  setInfoMsg('');
                  openAuthModal('login');
                }}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer text-center font-semibold ${
                  authModalMode === 'login' ? 'bg-white text-[#183E2D] shadow-xs' : 'hover:text-[#183E2D]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setErrorMsg('');
                  setInfoMsg('');
                  openAuthModal('register');
                }}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer text-center font-semibold ${
                  authModalMode === 'register' ? 'bg-white text-[#183E2D] shadow-xs' : 'hover:text-[#183E2D]'
                }`}
              >
                Register
              </button>
            </div>

            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                {errorMsg}
              </div>
            )}

            {infoMsg && (
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                {infoMsg}
              </div>
            )}

            {/* 1. Email ID & Password Section First */}
            <form onSubmit={handleEmailSubmit} className="space-y-3.5">
              {authModalMode === 'register' && (
                <div>
                  <label className="block text-[11px] font-semibold text-[#522D1B] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Senthil Kumar"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED0] text-xs text-[#29221C] placeholder:text-[#522D1B]/40 focus:outline-none focus:border-[#183E2D]"
                  />
                </div>
              )}

              <div>
                <label className="block text-[11px] font-semibold text-[#522D1B] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED0] text-xs text-[#29221C] placeholder:text-[#522D1B]/40 focus:outline-none focus:border-[#183E2D]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-semibold text-[#522D1B]">
                    Password
                  </label>
                  {authModalMode === 'login' && (
                    <button
                      type="button"
                      onClick={() => {
                        setErrorMsg('');
                        setInfoMsg('Password reset link sent to your registered email.');
                      }}
                      className="text-[10px] text-[#8C321D] hover:underline cursor-pointer"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8DED0] text-xs text-[#29221C] placeholder:text-[#522D1B]/40 focus:outline-none focus:border-[#183E2D]"
                />
              </div>

              {/* Primary Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-[#183E2D] hover:bg-[#20503A] text-white rounded-xl text-xs font-semibold shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                <span>{authModalMode === 'register' ? 'Register with Email' : 'Sign In'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Subtle Divider (without 'or continue with' text) */}
            <div className="border-t border-[#E8DED0] my-2" />

            {/* 3. Below that sign section: Continue with Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-neutral-50 active:scale-[0.99] text-[#29221C] border border-[#E8DED0] hover:border-[#183E2D]/40 py-2.5 px-4 rounded-xl text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              {/* Colorful Google G Logo */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Note on Firebase integration readiness */}
            <div className="pt-1 text-center text-[10px] text-[#522D1B]/60 flex items-center justify-center gap-1">
              <Check className="w-3 h-3 text-[#183E2D]" />
              <span>Ready for Firebase Authentication sync</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
