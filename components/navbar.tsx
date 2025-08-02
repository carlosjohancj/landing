import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import SwitchTheme from "./ui/switch-theme";
import { FaRocket } from "react-icons/fa";

export default function NavbarComponent() {
  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Precios", href: "/pricing" },
    { name: "Contacto", href: "/contact" },
    { name: "Sobre el Sistema", href: "/about" },
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-gray-900/50 backdrop-blur-sm">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <div className="flex items-center space-x-2">
            <FaRocket className="text-purple-500 text-xl" />
            <p className="font-bold text-inherit">VIP IA COMMUNITY</p>
          </div>
        </NavbarBrand>
      </NavbarContent>
      
      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <div className="flex items-center space-x-2">
            <FaRocket className="text-purple-500 text-xl" />
            <p className="font-bold text-inherit">VIP IA COMMUNITY</p>
          </div>
        </NavbarBrand>
      </NavbarContent>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link 
              color="foreground" 
              href={item.href}
              className="hover:text-purple-400 transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button 
            as={Link} 
            href="/contact"
            color="primary" 
            variant="flat"
            className="bg-gradient-to-r from-purple-600 to-blue-600"
          >
            Solicitar Demo
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden">
          <SwitchTheme />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button 
            as={Link} 
            href="/contact"
            color="primary" 
            variant="flat"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
          >
            Solicitar Demo
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
