import React from 'react';
import Header from '../../components/profil/doctor/Header';
import About from '../../components/profil/doctor/About';
import AppointmentBooking from '../../components/profil/doctor/AppointmentBooking';
import Reviews from '../../components/profil/doctor/Review';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  reviewCount: number;
  avatar: string;
  about: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
}

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

// Composant principal de la page
const DoctorProfile: React.FC = () => {
  const doctor: Doctor = {
    id: '1',
    name: 'Dr Line AHOUANSSOU',
    specialty: 'Médecin Cardiologue',
    rating: 4.8,
    experience: 12,
    reviewCount: 255,
    avatar: '/api/placeholder/150/150',
    about: "Dr. Sarah Bonali exerce la médecine générale depuis quinze ans dans un cabinet au centre-ville. À 42 ans, elle incarne parfaitement l'équilibre entre expertise technique et humanité. Ses cheveux châtains légèrement grisonnants aux tempes témoignent de son expérience, tandis que ses yeux noisette reflètent une bienveillance naturelle qui met immédiatement ses patients à l'aise.\n\nDiplômée de la faculté de médecine avec mention, elle a choisi la médecine générale par vocation, préférant la diversité des cas et la relation de proximité avec ses patients aux spécialisations plus techniques. Son approche holistique considère chaque personne dans sa globalité, prenant en compte non seulement les symptômes physiques mais aussi le contexte psychologique et social.",
    phone: '+229 014578963',
    whatsapp: '+229 014578963',
    email: '+229 014578963',
    location: '+229 014578963'
  };

  const reviews: Review[] = [
    {
      id: '1',
      userName: 'Jennifer Sarah',
      rating: 5,
      comment: 'Excellente application ! J\'ai trouvé un médecin rapidement et pris rendez-vous en quelques clics. L\'interface est intuitive, et le suivi médical est bien organisé. Un vrai gain de temps !',
      date: '20 Novembre 2024'
    },
    {
      id: '2',
      userName: 'Jennifer Sarah',
      rating: 5,
      comment: 'Excellente application ! J\'ai trouvé un médecin rapidement et pris rendez-vous en quelques clics. L\'interface est intuitive, et le suivi médical est bien organisé. Un vrai gain de temps !',
      date: '20 Novembre 2024'
    },
    {
      id: '3',
      userName: 'Jennifer Sarah',
      rating: 5,
      comment: 'Excellente application ! J\'ai trouvé un médecin rapidement et pris rendez-vous en quelques clics. L\'interface est intuitive, et le suivi médical est bien organisé. Un vrai gain de temps !',
      date: '20 Novembre 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Header doctor={doctor} />
        <About about={doctor.about} />
        <AppointmentBooking doctor={doctor} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default DoctorProfile;