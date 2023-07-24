import React from 'react'
import imgMoney from '../assets/images/image-currency.jpg'
import imgRestaurant from '../assets/images/image-restaurant.jpg'
import imgPlane from '../assets/images/image-plane.jpg'
import imgConfetti from '../assets/images/image-confetti.jpg'

const Articles = () => {

    const articleCards = [
        {
            "img" : imgMoney,
            "author" : "By Clare Robinson",
            "title" : "Receive money in any currency with no fees",
            "desc": "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
            "id": "1"
        },
        {
            "img" : imgRestaurant,
            "author" : "By Wilson Hutton",
            "title" : "Treat yourself without worrying about money",
            "desc" : "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
            "id": "2"
        },
        {
            "img" : imgPlane,
            "author" : "By Wilson Hutton",
            "title" : "Take your Easybank card wherever you go",
            "desc" : "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
            "id": "3"
        },
        {
            "img" : imgConfetti,
            "author" : "By Clare Robinson",
            "title" : "Our invite-only Beta accounts are now live!",
            "desc" : " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
            "id": "4"
        }
    ]

  return (
    <section className='article-section'>
      <div className="inner-article">
        <h3>Latest Articles</h3>
        <div className="cards">
            {articleCards.map((card) => (
                <div className="card-main" key={card.id}>
                    <span className='card-img'><img src={card.img} alt={card.title} /></span>
                    <div className="card-content">
                        <p className='author'>{card.author}</p>
                        <h4>{card.title}</h4>
                        <p>{card.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
