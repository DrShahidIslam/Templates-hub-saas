"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendOTPAction, verifyOTPAction } from "@/app/actions";
import { Mail, KeyRound, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RestoreAccessPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      const result = await sendOTPAction(email);
      if (result.success) {
        setStep(2);
        setSuccessMsg("If this email exists in our records, an access code has been sent.");
      } else {
        setError(result.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode || otpCode.length !== 6) {
      setError("Please enter a valid 6-digit code.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await verifyOTPAction(email, otpCode);
      if (result.success) {
        router.push("/templates");
      } else {
        setError(result.error || "Invalid or expired code.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Navigation */}
        <Link href="/templates" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Templates
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
          {/* Header */}
          <div className="mb-8">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
              {step === 1 ? (
                <Mail className="w-6 h-6 text-indigo-600" />
              ) : (
                <KeyRound className="w-6 h-6 text-indigo-600" />
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2">
              Restore Access
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {step === 1 
                ? "Enter the email address you used during purchase. We'll send you a secure one-time code to restore your lifetime access on this device."
                : "Enter the 6-digit code we just sent to your email to securely log in."}
            </p>
          </div>

          {/* Form Step 1: Email */}
          {step === 1 && (
            <form onSubmit={handleSendOTP} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Purchase Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full flex items-center justify-center py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending Code...
                  </>
                ) : (
                  <>
                    Send Access Code
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Form Step 2: OTP */}
          {step === 2 && (
            <form onSubmit={handleVerifyOTP} className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
              {successMsg && (
                <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-medium border border-emerald-100">
                  {successMsg}
                </div>
              )}
              
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                  6-Digit Verification Code
                </label>
                <input
                  id="code"
                  type="text"
                  required
                  maxLength={6}
                  placeholder="000000"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-center text-2xl tracking-[0.5em] outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))} // only allow numbers
                  disabled={isLoading}
                />
              </div>

              {error && <p className="text-sm text-red-500 font-medium text-center">{error}</p>}

              <button
                type="submit"
                disabled={isLoading || otpCode.length !== 6}
                className="w-full flex items-center justify-center py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify & Access Registry
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => { setStep(1); setError(""); setSuccessMsg(""); setOtpCode(""); }}
                className="w-full text-sm text-gray-500 font-medium hover:text-gray-900 transition-colors text-center mt-4"
              >
                Use a different email
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
