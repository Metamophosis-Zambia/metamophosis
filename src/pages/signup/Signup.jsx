import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { signUp, getCurrentUser } from "../../apicalls/authCalls";
import { useNavigate } from "react-router-dom";
// import { toast, Toaster } from 'react-hot-toast';
// import { setReferredBenefits } from '../../apicalls/referral'
// import mixpanel from 'mixpanel-browser';

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

    const handleSubmit = async(e) => {
        e.preventDefault();
        

    }

  return (
    <div className="auth-container">
        <div className="card2 padding-20">
        <form className="sign-form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign Up</h1>
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
                <label htmlFor="confirmPassword">Artist Name</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
            <div class="checkbox-container">
                <input type="checkbox" id="hasReferral" onChange={(e) => setHasReferral(e.target.checked)} />
                <label for="myCheckbox1">I have a referral code</label>
            </div>

            {
                hasReferral && (
                    <div className="form-group">
                        <label htmlFor="referralCode">Referal code</label>
                        <input type="text" id="referralCode" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} />
                    </div>
                )
            }
            <p className="agreement-text">By continuing you agree to Uzuri Space's <NavLink to="/terms-and-conditions" className="termsLink">Terms and Conditions</NavLink> and <NavLink to="/privacypolicy" className="termsLink">Privacy Policy</NavLink>.</p>
            <div className="form-group">
                <button type="submit">Sign Up</button>
            </div>
            <p className="auth-p">Already have an account? <NavLink to='/signin'>Log In</NavLink></p>
            {/* <Toaster toastOptions={{
          style: {
            background: 'red',
            color: '#fff',
          },
        }}/> */}

        </form>
        </div>
    </div>
        
  );
};

export default SignUp;
