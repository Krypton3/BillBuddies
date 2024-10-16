import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
  useDisclosure
} from "@nextui-org/react";
import SignupModal from "../modals/SignUpModal";
import SigninModal from "../modals/SignInModal";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdAnalytics, MdGroups2 } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";


export default function Nav() {
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onOpenChange: onSignUpChange } = useDisclosure();
  const { isOpen: isSignInOpen, onOpen: onSignInOpen, onOpenChange: onSignInChange } = useDisclosure();

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">BillBuddies</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button disableRipple radius="sm">Features</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="BillBuddies features" className="w-[340px]">
              <DropdownItem
                key="split-bill"
                description="This service is compatible to split the bills between friends and/or in a group."
              >
                <FaMoneyBillTransfer size={30} /> Split the Bill
              </DropdownItem>
              <DropdownItem
                key="usage-analytics"
                description="Service is able to analyse your activity and plot usage trends as a statistical analysis."
              >
                <MdAnalytics size={30} />Usage Analytics
              </DropdownItem>
              <DropdownItem
                key="friends"
                description="Feature to add friends using email invitation."
              >
                <FaUserFriends size={30} />Add Friends
              </DropdownItem>
              <DropdownItem
                key="groups"
                description="Feature to add groups with friends."
              >
                <MdGroups2 size={30} />Add Groups
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Usage Analytics
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" variant="flat" onPress={onSignUpOpen}>
            Sign Up
          </Button>
          <SignupModal isOpen={isSignUpOpen} onOpenChange={onSignUpChange}></SignupModal>
        </NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Avatar name="Joe" />
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">Profile</DropdownItem>
            <DropdownItem key="signin" onPress={onSignInOpen}>Sign In</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <SigninModal isOpen={isSignInOpen} onOpenChange={onSignInChange}></SigninModal>
      </NavbarContent>
    </Navbar>
  );
}
