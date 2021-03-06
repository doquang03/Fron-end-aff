import React from "react";

function Footer(): JSX.Element {
  return (
    <>
      <div className="footer">
        <div className="container pb-5">
          <div className="row justify-content-between">
            <div className="col-6">
              <div className="mb-5">
                <div className="mb-3">
                  <div className="buymed-logo d-inline-block">
                    <a href="/" title="thuocsi.vn">
                      <img
                        alt="thuocsi.vn"
                        className="img-fluid lozad"
                        data-src="https://thuocsi.vn/assets/buymed/logos/logo-49156a6a8b6688f3eb1098b08d406267e8770cffd64b6f07bb31e2e52536346d.svg"
                        title="thuocsi.vn"
                        src="https://thuocsi.vn/assets/buymed/logos/logo-49156a6a8b6688f3eb1098b08d406267e8770cffd64b6f07bb31e2e52536346d.svg"
                        data-loaded="true"
                      />
                    </a>
                  </div>
                </div>
                <div className="mb-3">
                  <b>
                    <b className="text-primary">thuocsi.vn</b> là website thuộc
                    sở hữu của công ty TNHH Buymed.
                  </b>
                </div>
                <p className="text-capitalize">
                  <b>Công Ty TNHH Buymed</b>
                  <br />
                  Địa chỉ:{" "}
                  <b>
                    248A Nơ Trang Long, Phuờng 12, Quận Bình Thạnh, Hồ Chí Minh
                  </b>
                  <br />
                  Số chứng nhận đăng ký kinh doanh:{" "}
                  <b>0314758651, cấp ngày 29/11/2017,</b>
                  <br />
                  tại Sở Kế Hoạch Và Đầu Tư Thành Phố Hồ Chí Minh
                  <br />
                  Số Giấy phép Sàn thương mại điện tử:{" "}
                  <b>
                    <a
                      className="footer__link"
                      href="https://buymed-storage.s3-ap-southeast-1.amazonaws.com/trading_license/1.+Trading+License+-+Buymed+(GC+20+June+2019)+(VN).pdf"
                      target="_blank"
                    >
                      0314758651/KD-0368
                    </a>
                  </b>
                </p>
                <div className="footer__bct">
                  <a
                    href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=52200"
                    rel="nofollow"
                    target="_blank"
                  >
                    <img
                      alt="Dấu đỏ của Bộ Công Thương"
                      className="img-fluid lozad"
                      data-src="https://thuocsi.vn/assets/bct-150ac1809a7ae41e0a4b21f1e1e21a26a2f93ee0c79e5c99cc197dd2fdc988c8.png"
                      src="https://thuocsi.vn/assets/bct-150ac1809a7ae41e0a4b21f1e1e21a26a2f93ee0c79e5c99cc197dd2fdc988c8.png"
                      title="Dấu đỏ của Bộ Công Thương"
                      data-loaded="true"
                    />
                  </a>
                </div>
              </div>
              <div className="mb-5">
                <div className="footer__header mb-3">Thông tin chung</div>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <a className="footer__link" href="/about-us">
                      Giới thiệu về thuocsi.vn
                    </a>
                    <a className="footer__link" href="/how-to-order">
                      Hướng dẫn đặt hàng
                    </a>
                    <a
                      className="footer__link"
                      data-modal="true"
                      href="/privacy-policy"
                    >
                      Chính sách bảo mật
                    </a>
                    <a
                      className="footer__link"
                      href="https://thuocsi.zendesk.com/hc/vi/categories/360001885792-C%C3%A2u-h%E1%BB%8Fi-th%C6%B0%E1%BB%9Dng-g%E1%BA%B7p-Q-A-"
                    >
                      Câu hỏi thường gặp (Q&amp;A)
                    </a>
                    <a
                      className="footer__link"
                      data-modal="true"
                      href="/general-policy"
                    >
                      Chính sách quy định chung
                    </a>
                    <a
                      className="footer__link"
                      href="https://career.thuocsi.vn"
                      target="_blank"
                    >
                      Tuyển dụng | Recruitment
                    </a>
                  </div>
                  <div className="col-12 col-sm-6">
                    <a
                      className="footer__link"
                      data-modal="true"
                      href="/conditions-of-use"
                    >
                      Điều khoản sử dụng
                    </a>
                    <a
                      className="footer__link"
                      data-modal="true"
                      href="/dispute-resolution"
                    >
                      Cơ chế giải quyết tranh chấp
                    </a>
                    <a
                      className="footer__link"
                      data-modal="true"
                      href="/terms-and-condition"
                    >
                      Thỏa thuận về dịch vụ TMDT
                    </a>
                    <a
                      className="footer__link"
                      data-modal="true"
                      href="/regulations"
                    >
                      Quy chế hoạt động
                    </a>
                    <a
                      className="footer__link"
                      href="https://banhang.thuocsi.vn"
                      target="_blank"
                      title="Đăng ký bán hàng cùng thuocsi"
                    >
                      Đăng ký bán hàng cùng thuocsi
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-5 mb-sm-0">
                <div className="footer__header mb-3">Dịch vụ giao hàng</div>
                <div>
                  <img
                    className="img-fluid footer__delivery lozad"
                    data-src="https://thuocsi.vn/assets/delivery/ghtk-22fbe4903100177078c795a37f7ce7260582b95c1bad6cf37a0dba76127e7f5d.png"
                    src="https://thuocsi.vn/assets/delivery/ghtk-22fbe4903100177078c795a37f7ce7260582b95c1bad6cf37a0dba76127e7f5d.png"
                    data-loaded="true"
                  />
                  <img
                    className="img-fluid footer__delivery lozad"
                    data-src="https://thuocsi.vn/assets/delivery/ahamove-da817db210e5d075aed3853aeed370863737426a27abc6e91c16ccc8a89e6e2f.png"
                    src="https://thuocsi.vn/assets/delivery/ahamove-da817db210e5d075aed3853aeed370863737426a27abc6e91c16ccc8a89e6e2f.png"
                    data-loaded="true"
                  />
                  <img
                    className="img-fluid footer__delivery lozad"
                    data-src="https://thuocsi.vn/assets/delivery/grab-0d623c296e4838dd4d67984a580fa1b244962d8e5e8de76f3acb548cddbf0c6c.png"
                    src="https://thuocsi.vn/assets/delivery/grab-0d623c296e4838dd4d67984a580fa1b244962d8e5e8de76f3acb548cddbf0c6c.png"
                    data-loaded="true"
                  />
                  <img
                    className="img-fluid footer__delivery lozad"
                    data-src="https://thuocsi.vn/assets/delivery/ghn-7c7a86d8247685ce42bf1dd7eea07970b502b4a21be9ab6a15787dc0899a3b79.png"
                    src="https://thuocsi.vn/assets/delivery/ghn-7c7a86d8247685ce42bf1dd7eea07970b502b4a21be9ab6a15787dc0899a3b79.png"
                    data-loaded="true"
                  />
                  <img
                    className="img-fluid footer__delivery lozad"
                    data-src="https://thuocsi.vn/assets/delivery/viettelpost-7e17e215b6fb2451347c386209259806b03dd68db90c636c9d800439cf195b0c.png"
                    src="https://thuocsi.vn/assets/delivery/viettelpost-7e17e215b6fb2451347c386209259806b03dd68db90c636c9d800439cf195b0c.png"
                    data-loaded="true"
                  />
                  <img
                    className="img-fluid footer__delivery lozad"
                    data-src="https://thuocsi.vn/assets/delivery/ninjavan-df8ca83378c8c4f339ac240d845807ef5cfdef493b0e0a1762b8cb4ccce8feea.png"
                    src="https://thuocsi.vn/assets/delivery/ninjavan-df8ca83378c8c4f339ac240d845807ef5cfdef493b0e0a1762b8cb4ccce8feea.png"
                    data-loaded="true"
                  />
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="footer__header mb-3">Liên hệ</div>
              <div className="mb-3">
                <p className="d-flex align-items-center">
                  <i className="far fa-envelope footer__icon footer__icon--email" />
                  <a
                    className="footer__link footer__link--email px-2 mr-2"
                    href="mailto:hotro@thuocsi.vn"
                  >
                    hotro@thuocsi.vn
                  </a>
                  <a
                    className="footer__icon footer__icon--fb"
                    href="https://www.facebook.com/thuocsivn/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </p>
                <p />
                <div className="d-flex align-items-center">
                  <i className="fa fa-phone footer__icon footer__icon--email" />
                  <a className="text-white px-2 mr-2" href="tel:02873008840">
                    02 873 008 840
                  </a>
                </div>
                <small>Từ T2 đến T6: 8:00 - 18:00</small>
                <p />
              </div>
              <div className="text-center mb-3">
                <img
                  className="img-fluid lozad"
                  data-src="https://thuocsi.vn/assets/apps/web_bot-b11faca2896e59299f9bd8668c23895b45e57ca168a814d57d0199a79f9c1171.png"
                  src="https://thuocsi.vn/assets/apps/web_bot-b11faca2896e59299f9bd8668c23895b45e57ca168a814d57d0199a79f9c1171.png"
                  data-loaded="true"
                />
              </div>
              <div className="d-flex justify-content-around flex-wrap">
                <a
                  href="https://apps.apple.com/vn/app/thuocsi/id1518730923"
                  target="_blank"
                >
                  <img
                    className="img-fluid lozad"
                    data-src="https://thuocsi.vn/assets/apps/app_store-df16e1f9024ceb5d5e123c0921d28b347703ca506f48eadf987013eac135ae0f.png"
                    src="https://thuocsi.vn/assets/apps/app_store-df16e1f9024ceb5d5e123c0921d28b347703ca506f48eadf987013eac135ae0f.png"
                    data-loaded="true"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.buymed.app&hl=en_US"
                  target="_blank"
                >
                  <img
                    className="img-fluid lozad"
                    data-src="https://thuocsi.vn/assets/apps/google_store-a423ff0891a18d965fd4037cad14a26b0e4f4e05b344d20ae6eb59e999e19e4d.png"
                    src="https://thuocsi.vn/assets/apps/google_store-a423ff0891a18d965fd4037cad14a26b0e4f4e05b344d20ae6eb59e999e19e4d.png"
                    data-loaded="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center text-secondary w-100 py-3">
          <small>© Bản quyền thuộc Công Ty TNHH Buymed - 2021</small>
        </div>
      </div>
    </>
  );
}

export default Footer;
