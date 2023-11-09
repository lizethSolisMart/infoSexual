import React from 'react';
import { User, Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';

const Footer: React.FC = () => {
  // Datos de los integrantes del equipo
  const teamMembers = [
    {
      name: 'Lizeth Solis',
      description: 'Product Designer',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
      instagram: 'https://instagram.com/lizsolism',
      user: '@lizsolism',
    },
    {
        name: 'Madai hinojosa',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
        instagram: 'https://instagram.com/lizsolism',
        user: '@madaHino',
      },
      {
        name: 'Lizeth Solis',
        description: 'Product Designer',
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
        instagram: 'https://instagram.com/lizsolism',
        user: '@lizsolism',
      },
    // ... otros 4 integrantes
  ];

  return (
    <footer className="flex justify-between p-4 bg-black/60 backdrop-blur">
      {/* Logo UNAM y texto */}
      <div className="flex items-center">
        <img src="/images/unam-logo.png" alt="UNAM Logo" className="max-w-[60px] h-auto mr-2" />
        <div>
            <p className="text-white font-bold">FES Aragón</p>
            <p className="text-gray-300">Pedagogía</p>
        </div>
      </div>
  
      {/* Integrantes del equipo */}
      <div className="flex space-x-4">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardBody>
              <User
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
            </CardBody>
          </Card>
        ))}
      </div>
    </footer>
  );
  
};

export default Footer;
