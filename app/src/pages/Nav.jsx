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

export default function Nav() {
	const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onOpenChange: onSignUpChange } = useDisclosure();
	const { isOpen: isSignInOpen, onOpen: onSignInOpen, onOpenChange: onSignInChange } = useDisclosure();

	return (
		<Navbar>
			<NavbarBrand>
				<p className="font-bold text-inherit">BillBuddies</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Features
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
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