"use client";

import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

const WaitList = () => {
  const [email, setEmail] = useState("");
  const [waitlistResponse, setWaitlistResponse] = useState();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const onEmailUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onSubmitWaitlist = async () => {
    if (!email) {
      setError("please enter your email");
      return;
    }

    if (validateEmail(email) === false) {
      setError("please enter a valid email");
      return;
    }

    setLoading(true);
    const payload = {
      email: email,
      waitlist_id: 11406,
      referral_link: document.URL
    };

    fetch("https://api.getwaitlist.com/api/v1/waiter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then((response) => response.json())
      .then((data) => {
        setWaitlistResponse(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("oops. something went wrong. sorry about that.");
        setLoading(false);
      });
  };

  return (
    <div className="flex text-center w-full m-auto">
      {!waitlistResponse && (
        <form className="w-full">
          <div className="flex space-x-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your email"
              autoComplete="email"
              onChange={onEmailUpdate}
              required
              className="w-full border-2 border-pink-700/50 text-xl p-2 text-gray-700 px-6 py-4 placeholder-slate-400 rounded-lg"
            />
            <button
              type="button"
              disabled={loading}
              onClick={onSubmitWaitlist}
              className="max-w-48 text-xl font-medium border-pink-700/50 border-2 text-gray-900 hover:bg-pink-600 hover:text-white px-8 py-3 transition duration-300 w-full rounded-lg"
            >
              {loading ? <ClipLoader size={25} color={"#ffffff"} loading={true} /> : "Get Early Access"}
            </button>
          </div>
          <div className="">
            {error && <div className="text-center mt-4 text-xl text-red-700 px-6 w-full">{error}</div>}
          </div>
        </form>
      )}

      {waitlistResponse && (
        <div className="flex-1 text-gray-800 text-lg">
          <p>keep an eye on your inbox, something is launching soon. 🚀</p>
        </div>
      )}
    </div>
  );
};

export default WaitList;
