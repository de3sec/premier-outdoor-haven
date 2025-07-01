
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Here you would typically send the email to your backend
  };

  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Newsletter Signup
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-medium-green focus:border-none h-14 placeholder:text-text-green p-4 text-base font-normal leading-normal"
              required
            />
          </label>
        </div>
        <div className="flex px-4 py-3 justify-end">
          <button
            type="submit"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-accent-green text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-600 transition-colors"
          >
            <span className="truncate">Subscribe</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Newsletter;
