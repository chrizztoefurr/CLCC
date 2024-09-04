import React from 'react';
import aboutImg from '../images/aboutimg.jpeg';

function About() {

  React.useEffect(() => {
    const aboutText = document.querySelector('.about-text-container');
    const aboutImg = document.querySelector('.about-img-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          aboutText.classList.add('animate');
          aboutImg.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    if (aboutText) observer.observe(aboutText);
    if (aboutImg) observer.observe(aboutImg);

    // Cleanup observer on component unmount
    return () => {
      if (aboutText) observer.unobserve(aboutText);
      if (aboutImg) observer.unobserve(aboutImg);
    };
  }, []);


  return (
    <section>
      <div className='about-keyword-container'>
        <ul className='about-keyword'>
          <li>hand-spun</li>
          <li>amazing taste</li>
          <li>woman-owned</li>
        </ul>
      </div>
      <div className='about-container'>
        <div className='about-text-container'>
          <h2 className='about-text-heading'>ABOUT US</h2>
          <p className='about-text-paragraph-one'>At Colorado Luxe Cotton Candy, we believe in creating unforgettable moments with our premium, hand-spun cotton candy. Founded with a passion for crafting the finest sweet treats, our small, woman-owned business takes pride in delivering cotton candy that is as delightful as it is pure.</p>
          <p className='about-text-paragraph-two'>Our commitment to quality is evident in every batch we produce. We use only 100% ultra-fine pure granulated sugar, processed without preservatives or chemicals, ensuring our cotton candy is GMO-free, dairy-free, gluten-free, and allergy-free. This dedication to purity results in a cotton candy experience like no other, with an incredible taste and texture that keeps our customers coming back for more.</p>
        </div>
        <div className='about-img-container'>
          <img src={aboutImg} alt='group enjoying cotton candy together' className='about-img' />
        </div>
      </div>
    </section>
  )
};

export default About;