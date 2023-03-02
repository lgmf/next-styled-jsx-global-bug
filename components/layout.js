import globalStyles from "../styles/global.scss";
import styles from "./layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">{children}</div>

      <style jsx>{styles}</style>

      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
