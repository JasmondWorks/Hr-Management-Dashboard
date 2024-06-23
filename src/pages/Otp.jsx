import { Link, useNavigate } from "react-router-dom";
import AuthPagesWrapper from "../components/AuthPagesWrapper";
import Button from "../components/Button";
import InputBoxAnimLabel from "../components/InputBoxAnimLabel";

function Otp() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  return (
    <AuthPagesWrapper>
      <div
        style={{
          display: "flex",
          gap: ".5rem",
          marginBottom: "3rem",
          cursor: "pointer",
        }}
        onClick={goBack}
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4685 17.5856C14.7919 17.3269 14.8444 16.8549 14.5856 16.5315L10.9604 12L14.5856 7.46849C14.8444 7.14505 14.7919 6.67308 14.4685 6.41432C14.145 6.15556 13.6731 6.208 13.4143 6.53145L9.41432 11.5315C9.19519 11.8054 9.19519 12.1946 9.41432 12.4685L13.4143 17.4685C13.6731 17.7919 14.145 17.8444 14.4685 17.5856Z"
            fill="white"
          />
        </svg>
        <span>Back</span>
      </div>
      <h3>Enter OTP</h3>
      <p style={{ marginBottom: "2rem" }}>
        <small>
          Enter the code that has been sent to your email address:
          abc******jkl@gmail.com
        </small>
      </p>
      <form style={{ display: "grid", gap: "1.5rem" }}>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {Array.from({ length: 5 }).map((el, index) => (
            <input
              type="text"
              key={index}
              style={{
                height: "50px",
                aspectRatio: "1/1",
                padding: "1.5rem",
                minWidth: 0,
                width: "auto",
                textAlign: "center",
                fontSize: "2.2rem",
                borderRadius: "8px",
                fontWeight: 500,
              }}
              maxLength={1}
            />
          ))}
        </div>
        <Link to="/otp">
          <Button
            variant="accent"
            style={{ width: "100%", marginTop: "1.5rem" }}
          >
            Verify
          </Button>
        </Link>
      </form>
    </AuthPagesWrapper>
  );
}

export default Otp;
