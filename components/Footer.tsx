import React from 'react';
import { User, Card, CardBody, Divider, Spacer } from '@nextui-org/react';
import Link from 'next/link';

const Footer: React.FC = () => {
  // Datos de los integrantes del equipo
  const teamMembers = [
    {
      name: 'Lizeth Solis',
      description: 'Product Designer',
      avatar: '/images/liz.JPG',
      instagram: 'https://instagram.com/lizsolism',
      user: '@lizsolism',
    },
    {
        name: 'Madai Hinojosa',
        avatar: '/images/madai.png',
        instagram: 'https://instagram.com/lizsolism',
        user: '@madaHino',
      },
      {
        name: 'Janeth Arias',
        description: 'Product Designer',
        avatar: '/images/janet.jpeg',
        instagram: 'https://instagram.com/lizsolism',
        user: '@lizsolism',
      },
    // ... otros 4 integrantes
  ];

  return (
    <footer className="flex justify-between p-4 bg-white backdrop-blur">
      {/* Logo UNAM y texto */}
      <div className="flex items-center">
        <img src="/images/unam-logo.png" alt="UNAM Logo" className="max-w-[60px] h-auto mr-2" />
        <div>
            <p className="text-black-50 font-bold">FES Aragón</p>
            <p className="text-gray-700">Pedagogía</p>
        </div>
      </div>
  
      {/* Integrantes del equipo */}
      <div className="flex space-x-4">
        {teamMembers.map((member, index) => (
          <>
              <User key={index}
                name={member.name}
                description={(
                    <Link href={member.instagram}>
                    {member.user}
                    </Link>
                )}
                avatarProps={{
                  src: member.avatar,
                }}
              />
              <Divider orientation="vertical"/>
              <Spacer x={2}/>
            </>
        ))}
      </div>
    </footer>
  );
  
};

export default Footer;
