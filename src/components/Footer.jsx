import React from 'react'
import { logoData, companyData, customerCenterData, footerMenus } from '../util/footer';
import Nav from './Nav'
import '../styles/components/footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner foot-inner">
        <div className="left">
          <h3>
            <a href={logoData.href}>
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>

          <ul className="foot-lst-1">
            {companyData.map((info, idx) => (
              <li key={idx}>
                {info}
              </li>
            ))}
          </ul>
          <p className='copy'>
            COPYRIGHT ⓒ 주식회사 픽톤 2021 TOCOBO. ALL RIGHT RESERVED.
          </p>
        </div>

        <div className="center">
          <div className="foot-menus">
            {footerMenus.map((menu, idx) => (
              <div key={idx} className='foot-menu'>
                <h4>
                  {menu.title}
                </h4>
                <ul>
                  {menu.items.map((item,i) => (
                    <li key={i}>
                      <a href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

          {/* 오른쪽 영역 - 고객센터 */}
        <div className="right">
          <div>
            <h4>{customerCenterData.title}</h4>
            <p className="cs-box">
              <a href={customerCenterData.tel.href}>
                {customerCenterData.tel.value}
              </a>
            </p>
            <p>{customerCenterData.hours}</p>
            <p>{customerCenterData.notice}</p>
            <a className="talk-btn" href={customerCenterData.talk.href}>
              {customerCenterData.talk.label}
            </a>
          </div>

          {/* SNS 아이콘 예시 */}
          <div className="sns">
            <a href="#"><i className="xi-kakaotalk"></i></a>
            <a href="#"><i className="xi-instagram"></i></a>
            <a href="#"><i className="xi-youtube-play"></i></a>
          </div>
        </div>
      </div>

      {/* 하단 약관 링크 */}
      <div className="foot-bottom">
        <ul>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">개인정보처리방침</a></li>
          <li><a href="#">이용안내</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer