import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/config";
import  isAuthenticated from '../../App';
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [hasReferral, setHasReferral] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "profiles", user.uid), {
        firstName,
        lastName,
        artistName,
        email,
        referralCode: hasReferral ? referralCode : null,
      });
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <form className="signup__form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="flex-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="artistName">Artist Name</label>
            <input type="text" id="artistName" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="hasReferral" onChange={(e) => setHasReferral(e.target.checked)} />
            <label htmlFor="hasReferral">I have a referral code</label>
          </div>
          {hasReferral && (
            <div className="form-group">
              <label htmlFor="referralCode">Referral code</label>
              <input type="text" id="referralCode" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} />
            </div>
          )}
          <p className="agreement-text">
            By continuing you agree to Metamorphosis's <NavLink to="/terms-and-conditions" className="termsLink">Terms and Conditions</NavLink> and <NavLink to="/privacypolicy" className="termsLink">Privacy Policy</NavLink>.
          </p>
          <button type="submit" className="signup__button">Sign Up</button>
          <p className="auth-p">Already have an account? <NavLink to='/signin'>Log In</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
