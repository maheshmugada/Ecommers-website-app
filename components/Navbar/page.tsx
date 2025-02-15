import React from "react";
import { Box, Divider, Text } from "@mantine/core";
import Image from "next/image";
import Logo from "@/public/images/meeshoLogo.svg";
import { TextInput } from "@mantine/core";
import {
  IconSearch,
  IconDeviceMobile,
  IconUser,
  IconShoppingCart,
} from "@tabler/icons-react";
import { mitr } from "@/app/font";

function Navbar() {
  const icon = <IconSearch size={25} />;
  return (
    <Box
      style={{
        height: "80px",
        borderBottom: "0.5px solid #808080",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={mitr.className}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "80%",
        }}
      >
        <Image src={Logo} alt="Picture of the author" />
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={icon}
          placeholder="Try Saree, Kurti or Search by Product Code"
          size={"lg"}
          style={{
            width: 450,
          }}
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconDeviceMobile size={25} />
            <Text>Download App</Text>
          </Box>
          <Divider orientation="vertical" size="sm" />
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Text>Become a Supplier</Text>
          </Box>
          <Divider orientation="vertical" size="sm" />
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Text>Newsroom</Text>
          </Box>
          <Divider orientation="vertical" size="sm" />

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconUser size={25} />
            <Text>Profile</Text>
          </Box>
          <Divider orientation="vertical" size="sm" />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconShoppingCart size={25} />
            <Text>Cart</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
