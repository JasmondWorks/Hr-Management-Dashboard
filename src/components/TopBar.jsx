import styles from "./TopBar.module.css";

import Button from "./Button";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function TopBar({ pryTitle = "", secTitle = "" }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.greeting}>
        <h1>{pryTitle}</h1>
        <div>
          <small>{secTitle}</small>
        </div>
      </div>
      <div className={styles.menuWrapper}>
        <SearchInput styles={{ flex: "1" }} />
        <div className={styles.btnWrapper}>
          <Button size="square">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.67964 8.79403C6.05382 5.49085 8.77095 3 12 3C15.2291 3 17.9462 5.49085 18.3204 8.79403L18.6652 11.8385C18.7509 12.595 19.0575 13.3069 19.5445 13.88C20.5779 15.0964 19.7392 17 18.1699 17H5.83014C4.26081 17 3.42209 15.0964 4.45549 13.88C4.94246 13.3069 5.24906 12.595 5.33476 11.8385L5.67964 8.79403Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M15 19C14.5633 20.1652 13.385 21 12 21C10.615 21 9.43668 20.1652 9 19"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              style={{
                padding: ".5rem",
                display: "flex",
                alignItems: "center",
                gap: "1.5em",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: ".3em" }}
              >
                <div>X</div>
                <div style={{ textAlign: "left" }}>
                  <h5>Jasmond</h5>
                  <small>HR Manager</small>
                </div>
              </div>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83325 8.3335L9.99992 11.6668L14.1666 8.3335"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
