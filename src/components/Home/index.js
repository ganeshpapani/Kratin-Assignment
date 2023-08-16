import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="title-container">
        <div>
          <h1 className="title-heading">Healthy Aging</h1>
          <p className="description">
            Do you feel as good now as you did at age 40? How about at age 50?
            You might be able to feel as good as you used to with new, healthy
            habits. You might even feel better. While it may seem like a lot of
            effort to develop new habits, it’s worth it. Even small changes can
            improve your health.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dyu5n5spk/image/upload/v1692094029/healthy-habits-705x470_ad8xyq.jpg"
          className="healthy-image"
          alt="health"
        />
      </div>
      <div className="title-container">
        <div>
          <h1 className="title-heading">Exercise and Seniors</h1>
          <p className="description">
            It is safe for most adults over 65 years old to exercise. Even most
            patients who have chronic illnesses can exercise safely. These
            include heart disease, high blood pressure, diabetes, and arthritis.
            Many of these conditions are improved with exercise. If you are not
            sure if exercise is safe for you or if you are currently inactive,
            ask your doctor.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dyu5n5spk/image/upload/v1692094938/42109825_l-705x470_rrwixx.jpg"
          className="healthy-image"
          alt="health"
        />
      </div>
      <div className="title-container">
        <div>
          <h1 className="title-heading"> Brain Training for Seniors</h1>
          <p className="description">
            Use it or lose it” commonly refers to the importance of exercising
            your body and staying fit. Exercising your brain is just as
            important. Your brain needs a regular workout, especially as you
            age. After the age of 65, your risk of developing dementia doubles
            approximately every five years. Dementia is not a disease. It’s a
            collection of symptoms resulting from damaged brain cells caused by
            other diseases. These cells affect your memory, personality, and
            decision-making abilities. Brain damage can occur from a head
            injury, stroke, or disease, such as Alzheimer’s dementia (the no. 1
            form of dementia).
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dyu5n5spk/image/upload/v1692095794/shutterstock_215390980-705x471_s5mxxa.jpg"
          className="healthy-image"
          alt="health"
        />
      </div>
      <div className="title-container">
        <div>
          <h1 className="title-heading"> Depression and Alzheimer’s Disease</h1>
          <p className="description">
            When doctors talk about depression, they mean the medical illness
            called major depression. Someone who has major depression has
            symptoms nearly every day, all day, for 2 weeks or longer.Feeling
            sad,numb Crying easily , for no reason Feeling slowed down Feeling
            restless and irritable Feeling worthless or guilty Trouble
            remembering, focusing, making decisions Headaches, backaches,
            digestive problems Unplanned weight loss , gain Sleeping too much ,
            having problems sleeping
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dyu5n5spk/image/upload/v1692096363/49529823_l-705x470_inyjk6.jpg"
          className="healthy-image"
          alt="health"
        />
      </div>
    </div>
    <Footer />
  </>
)

export default Home
