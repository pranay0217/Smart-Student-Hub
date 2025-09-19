import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/Navbar';
import { Footer } from '../components/footer';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export const Home = () => {
  const navigate = useNavigate();
  const [faqIndex, setFaqIndex] = useState(0);

  const handleSignUp = () => navigate('/signup');
  const handleLearn = () => navigate('/learn');

  const features = [
    {
      title: 'Dynamic Student Dashboard',
      description:
        'Track academics, workshops, certifications, and extracurriculars in real-time.',
      image:
        'https://assets.everspringpartners.com/dims4/default/18bf560/2147483647/strip/true/crop/1204x632+78+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fca%2F3b%2Fd9e41e954f32a1a103cfbdd7efee%2Fbusiness-analytics.jpg',
    },
    {
      title: 'Activity Tracker',
      description:
        'Log seminars, MOOCs, internships, clubs, and volunteering activities seamlessly.',
      image:
        'https://edutinker.com/wp-content/uploads/2023/01/Why-Student-Tracking-For-Schools-Is-Beneficial.png',
    },
    {
      title: 'Faculty & Admin Approval Panel',
      description:
        'Validate student records easily and ensure accuracy for reporting and verification.',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Digital Portfolio',
      description:
        'Generate verified, shareable PDF portfolios of all achievements for placements or higher studies.',
      image:
        'https://jodidurgin.com/wp-content/uploads/2014/05/1C52BHOW2BTO2BORGANIZE2BSTUDENT2BPORTFOLIOS2BSQUARE.png',
    },
    {
      title: 'Analytics & Reporting',
      description:
        'Get institutional insights for NAAC, AICTE, NIRF compliance and strategic planning.',
      image:
        'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const faqs = [
    {
      question: 'Who can use Smart Student Hub?',
      answer:
        'Students, faculty, and administrators can use it to manage academic and extracurricular data seamlessly.',
    },
    {
      question: 'Can I generate a verified portfolio?',
      answer:
        'Yes! The platform creates digital portfolios that are verified and shareable with employers or institutions.',
    },
    {
      question: 'Is it integrated with university systems?',
      answer:
        'Smart Student Hub can integrate with LMS, ERP, and other institutional platforms for automated data syncing.',
    },
    {
      question: 'How does reporting work for accreditation?',
      answer:
        'The platform generates reports for NAAC, AICTE, NIRF, or custom institutional requirements with real-time analytics.',
    },
  ];

  return (
    <>
      <div className="container-fluid px-3" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <NavBar />

        {/* Hero Section */}
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            width: '100%',
            minHeight: '90vh',
            color: 'white',
            backgroundImage:
              'url("https://i0.wp.com/csep.org/wp-content/uploads/2020/03/web-banner-copy-3.jpg?resize=1000,540&ssl=1")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '0 20px',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              padding: '50px 20px',
              borderRadius: '12px',
            }}
          >
            <h1 className="fw-bold mb-4" style={{ fontSize: '3rem', lineHeight: '1.3' }}>
              Beyond the Textbook:<br />
              <span style={{ color: '#663399' }}>
                Your Complete Academic & Co-Curricular Story
              </span>
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Smart Student Hub centralizes all student achievements and activities, helping students
              showcase their verified portfolio and enabling institutions to simplify reporting and accreditation.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
              <button className="btn btn-light px-4 py-2" onClick={handleLearn}>
                Learn More
              </button>
              <button className="btn btn-primary px-4 py-2" onClick={handleSignUp}>
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container py-5">
          <h2 className="text-center mb-4" style={{ color: '#00d8ff', fontSize: '50px' }}>
            Features
          </h2>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`row align-items-center my-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
                />
              </div>
              <div className="col-md-6 text-white px-4">
                <h2 style={{ color: '#00d8ff' }}>{feature.title}</h2>
                <p style={{ fontSize: '1.1rem' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center text-white py-5" style={{ background: '#111' }}>
          <h2 className="mb-3" style={{ color: '#FFD700' }}>
            Build Your Verified Student Profile Today
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Showcase your complete academic and co-curricular journey for placements, scholarships, and higher studies.
          </p>
          <button className="btn btn-warning mt-4 px-4 py-2" onClick={handleSignUp}>
            Get Started
          </button>
        </div>

        {/* FAQ */}
        <div className="container text-white py-5">
          <h2 className="text-center mb-4" style={{ color: '#00d8ff' }}>
            FAQs
          </h2>
          <Carousel
            activeIndex={faqIndex}
            onSelect={(selectedIndex) => setFaqIndex(selectedIndex)}
            indicators={false}
            interval={null}
          >
            {faqs.map((faq, idx) => (
              <Carousel.Item key={idx}>
                <div className="bg-dark p-5 rounded shadow" style={{ minHeight: '200px' }}>
                  <h4 className="text-center" style={{ color: '#00d8ff' }}>
                    {faq.question}
                  </h4>
                  <p className="mt-3 text-center" style={{ fontSize: '1.1rem' }}>
                    {faq.answer}
                  </p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <Footer />
    </>
  );
};
