import React from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import Router from "routes";

function App() {
  return (
    <div className="bg-[#f1f4f9] min-h-screen flex-1 ">
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={() => toast.dismiss(t.id)}
                  ></div>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      <Router />
    </div>
  );
}

export default App;
