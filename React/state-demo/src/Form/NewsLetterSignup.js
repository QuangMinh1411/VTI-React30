import { useState } from "react";
export default function NewsletterSignup() {
  const [user, setUser] = useState({
    userEmail: "",
    agreed: false,
  });

  function updateEmailHandler(event) {
    // could add email validation here

    setUser((prev) => {
      return {
        ...prev,
        userEmail: event.target.value,
      };
    });
  }

  function updateAgreementHandler() {
    setUser((p) => {
      return {
        ...p,
        agreed: !p.agreed,
      };
    });
  }

  function signupHandler(event) {
    event.preventDefault(); // prevent browser default of sending a Http request

    // const userData = { userEmail: email, userAgrees: agreed };
    // console.log(userData);
    console.log(user);

    // doWhateverYouWant(userData);
  }

  return (
    <form onSubmit={signupHandler}>
      <div>
        <label htmlFor="email">Your email</label>

        <input type="email" id="email" onChange={updateEmailHandler} />
      </div>

      <div>
        <input type="checkbox" id="agree" onChange={updateAgreementHandler} />

        <label htmlFor="agree">Agree to terms and conditions</label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}
