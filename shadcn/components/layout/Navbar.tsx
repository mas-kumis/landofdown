import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Codesandbox } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-200 rounded-lg w-screen">
      <Codesandbox className="text-2xl " />
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-slate-200">
                Item One
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>WIldan</NavigationMenuLink>
                <NavigationMenuLink>WIldan</NavigationMenuLink>
                <NavigationMenuLink>WIldan</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-slate-200">
                Item One
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>WIldan</NavigationMenuLink>
                <NavigationMenuLink>WIldan</NavigationMenuLink>
                <NavigationMenuLink>WIldan</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
