import React,{useEffect} from 'react'
import './offer.css'
import functions from '../functions'
import { Link } from 'react-router-dom';
const Offer = ({setContact}) => {

  useEffect(() => {
    window.scrollTo(0, 10)
  }, [])
  

  return (
    <section className="offers-section">
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="about-title">
              <h1>Təkliflərimiz</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pricing-box">
              <div>
                <div>
                  <p>Wakemeup</p> 
                  <p>Technical support</p>
                </div>
                <div>
                  <p>129$ /device</p> 
                  <p>2%$ /device</p>
                </div>
              </div>
              <div>
                <ul>
                  <li> <span>&#10003;</span> Sürücünün sükan arxasında siqaret çəkməsini detekt etmək</li>
                  <li> <span>&#10003;</span> Sürücünün yolda sürət həddini aşmasınıi detekt etmək</li>
                  <li> <span>&#10003;</span> Sürücünün düzgün istiqamətdə olmasını detekt etmək</li>
                  <li> <span>&#10003;</span> Sürücünün sükan arxasında yatmasını detekt etmək</li>
                  <li> <span>&#10003;</span> Sürücünün maska taxıb-taxmamasını detekt etmək</li>
                  <li> <span>&#10003;</span> Sürücünün sükanda sərxoş olmasını detekt etmək</li>
                  <li> <span>&#10003;</span> Sürücünün telefonu ilə danışmasını detekt etmək</li>
                  <li> <span>&#10003;</span> Sürücünün yolda diqqətli olmasını detekt etmək</li>
                </ul>
                <Link to='/'>
                  <button className="contact contact-Us" onClick={() =>setContact(true)} >Əlaqə</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pricing-box">
              <div>
                <div>
                  <p>Metatesk</p> 
                  <p>Resources + Teachers</p>
                </div>
                <div>
                  <p>10$ /class</p> 
                  <p>Included</p>
                </div>
              </div>
              <div>
                <ul>
                  <li> <span>&#10003;</span> Asudə vaxtlarınızda dostlarınızla fərqli dünyaları gəzərək əylənin</li>
                  <li> <span>&#10003;</span> Fərqli mövzular və fərqli dizaynlarda meta dünyaları kəşf edin</li>
                  <li> <span>&#10003;</span> Virtual dünyada digər istifadəçilərlə əlaqə saxlayın</li>
                  <li> <span>&#10003;</span> Şəxsiləşdirilmiş meta dünyada meta NFT-lər yaradın</li>
                  <li> <span>&#10003;</span> İstənilən vaxt, istənilən yerdə dərslərə qoşulun</li>
                  <li> <span>&#10003;</span> Darıxdırıcı və maraqsız dərslərdən uzaq olun</li>
                  <li> <span>&#10003;</span> Oyunlaşdırılmış cəlbedici dərslərlə əylənin</li>
                  <li> <span>&#10003;</span> Öz istəyinizə uyğun avatarınızı yaradın</li>
                </ul>
                <Link to='/'>
                  <button className="contact contact-Us" onClick={() =>setContact(true)} >Əlaqə</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pricing-box">
              <div>
                <div>
                  <p>Enthouse</p> 
                  <p>Advanced IoT</p>
                </div>
                <div>
                  <p>59$ /  m<sup>2</sup></p> 
                  <p>+100$ / m<sup>2</sup> </p>
                </div>
              </div>
              <div>
                <ul>
                  <li> <span>&#10003;</span> Gübrələrdən asılılığı aradan qaldıran qapalı ağıllı əkinçilik sahəsi</li>
                  <li> <span>&#10003;</span> Bitkilərin 2 dəfəyə qədər daha sürətli inkişafı</li>
                  <li> <span>&#10003;</span> Texniki təlimatların tam təhvil verilməsi</li>
                  <li> <span>&#10003;</span> Suya 90% qənaət edən torpaqsız mühit</li>
                  <li> <span>&#10003;</span> Eyni zamanda məhsul və ət istehsalı</li>
                  <li> <span>&#10003;</span> Avtomatlaşdırılmış sistem</li>
                  <li> <span>&#10003;</span> Adaptiv Dizayn</li>
                  <li> <span>&#10003;</span> Mobil proqram</li>
                </ul>
                <Link to='/'>
                  <button className="contact contact-Us" onClick={() =>setContact(true)} >Əlaqə</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pricing-box">
              <div>
                <div>
                  <p>Pika Mini Series</p> 
                  <p>Free for non-commercial use</p>
                </div>
                <div>
                  <p>Free</p> 
                  <p className="contact" > <a href="../index.html">Contact Us</a> </p>
                </div>
              </div>
              <div>
                <ul>
                  <li> <span>&#10003;</span> İxtiralar, kəşflər və tarixin önəmli məqamları</li>
                  <li> <span>&#10003;</span> Uşaqlar üçün əyləncəli görüntülər və səslər</li>
                  <li> <span>&#10003;</span> Daha çox maraqlı və əyləncəli animasiyalar</li>
                  <li> <span>&#10003;</span> Qalaktikalar, Planetlər və kosmik cisimlər</li>
                  <li> <span>&#10003;</span> Texnologiyalar, robotlar və yeni cihazlar</li>
                  <li> <span>&#10003;</span> Azərbaycan dilində elmi mövzular</li>
                  <li> <span>&#10003;</span> Fizika, Kimya və tətbiqi elmlər</li>
                  <li> <span>&#10003;</span> STEAM yönümlü yanaşma</li>
                </ul>
                <Link to='/'>
                  <button className="contact contact-Us" onClick={() =>setContact(true)} >Əlaqə</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Offer