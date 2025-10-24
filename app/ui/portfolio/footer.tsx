import {EmailIcon, FacebookIcon, GithubIcon, LinkedinIcon, PhoneIcon} from "@/app/ui/portfolio/icons";
import Link from "next/link";

type Contact = {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const contacts: Contact[] = [
  {
    name: 'Github',
    href: 'https://github.com/minhchisxyz',
    icon: <GithubIcon />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/diepminhchi/',
    icon: <LinkedinIcon />
  },
  {
    name: 'Email',
    href: 'mailto:diepminhchi170903@gmail.com',
    icon: <EmailIcon />
  },
  {
    name: 'Phone',
    href: 'tel:+4917680676239',
    icon: <PhoneIcon />
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/minhchisxyz',
    icon: <FacebookIcon />
  }
]

export default function Footer({ name }: {
  name: string;
}) {
  return (
      <footer className="text-gray-300 py-10 border-t border-white/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} { name }. All rights reserved.
          </p>
          <div className="flex gap-6">
            {
              contacts.map((contact) => (
                  <Link key={contact.name} href={contact.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    { contact.icon }
                  </Link>
              ))
            }
          </div>
        </div>
      </footer>
  );
};