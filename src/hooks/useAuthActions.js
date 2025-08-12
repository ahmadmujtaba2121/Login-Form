// hooks/useAuthActions.js
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useAuthActions = ({ redirectUrl = "/dashboard" } = {}) => {
  const navigate = useNavigate();

  const signInWithProvider = async (provider, opts = {}) => {
    try {
      const redirectTo =
        opts.redirectTo ?? `${window.location.origin}${redirectUrl}`;

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
          ...(opts.options || {}),
        },
      });
      if (error) {
        toast.error(error.message || "Authentication error");
      }
    } catch (err) {
      toast.error(err?.message || "Auth failed");
    }
  };

  const signUpWithEmail = async (email, password, firstName, lastName) => {
    if (!email || !password || !firstName || !lastName) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // ✅ Sign up
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName },
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Sign up successful! Please check your email.");
      navigate(redirectUrl);
    }
  };

  return { signInWithProvider, signUpWithEmail };
};
